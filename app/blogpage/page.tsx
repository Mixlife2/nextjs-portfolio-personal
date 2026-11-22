import Link from "next/link"
import { Navigation } from "../components/nav"
import Particles from "../components/particles";

export default function Component() {
  return (
    <div className="relative pb-16 min-h-screen">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/>
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-zinc-400">
            Coming soon: insights on technology, software engineering, and healthcare innovation.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800 max-w-2xl mx-auto" />
        <div className="max-w-2xl mx-auto text-center py-12">
          <p className="text-zinc-500">
            This space will feature articles about web development, cloud architecture, and lessons learned building healthcare SaaS at scale.
          </p>
        </div>
      </div>
    </div>
  )
}

