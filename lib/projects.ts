import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface Project {
	slug: string;
	title: string;
	description: string;
	date?: string;
	published: boolean;
	url?: string;
	repository?: string;
	body: {
		code: string;
	};
	content: string;
}

export async function getAllProjects(): Promise<Project[]> {
	const fileNames = fs.readdirSync(projectsDirectory);
	const projects = fileNames
		.filter((fileName) => fileName.endsWith(".mdx"))
		.map((fileName) => {
			const slug = fileName.replace(/\.mdx$/, "");
			const fullPath = path.join(projectsDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const { data, content } = matter(fileContents);

			return {
				slug,
				title: data.title || "",
				description: data.description || "",
				date: data.date,
				published: data.published !== false,
				url: data.url,
				repository: data.repository,
				body: {
					code: content,
				},
				content,
			};
		});

	return projects.sort((a, b) => {
		if (!a.date) return 1;
		if (!b.date) return -1;
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
	try {
		const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		return {
			slug,
			title: data.title || "",
			description: data.description || "",
			date: data.date,
			published: data.published !== false,
			url: data.url,
			repository: data.repository,
			body: {
				code: content,
			},
			content,
		};
	} catch {
		return null;
	}
}

export async function compileMDXContent(content: string) {
	const result = await compileMDX({
		source: content,
		options: {
			parseFrontmatter: false,
			blockJS: false,
			mdxOptions: {
				remarkPlugins: [remarkGfm],
				rehypePlugins: [
					rehypeSlug,
					[
						rehypePrettyCode,
						{
							theme: "github-dark",
							onVisitLine(node: any) {
								if (node.children.length === 0) {
									node.children = [{ type: "text", value: " " }];
								}
							},
							onVisitHighlightedLine(node: any) {
								node.properties.className.push("line--highlighted");
							},
							onVisitHighlightedWord(node: any) {
								node.properties.className = ["word--highlighted"];
							},
						},
					],
					[
						rehypeAutolinkHeadings,
						{
							properties: {
								className: ["subheading-anchor"],
								ariaLabel: "Link to section",
							},
						},
					],
				],
			},
		},
	});

	return result.content;
}
