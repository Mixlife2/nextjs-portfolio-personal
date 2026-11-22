import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Courses", href: "/courses" },
  { name: "About Me", href: "/aboutme" },
  { name: "Blog", href: "/blogpage" },
  
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in px-4">
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs sm:text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl bg-clip-text text-center">
          Mixlife
        </h1>
        
        <div className="my-4 text-center animate-fade-in">
          <p className="text-lg text-zinc-400 font-light">
            Edgar Villalba
          </p>
        </div>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in px-4 max-w-3xl">
        <h2 className="text-sm sm:text-base text-zinc-500">
          Software Engineer at{" "}
          <Link
            target="_blank"
            href="https://www.canid.com"
            className="underline duration-500 hover:text-zinc-300"
          >
            Canid
          </Link>{" "}
          — building healthcare SaaS with React, TypeScript, and modern cloud infrastructure.
        </h2>
      </div>
    </div>
  );

}
