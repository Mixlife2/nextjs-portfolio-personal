import Link from "next/link"
import { Navigation } from "../components/nav"
import Particles from "../components/particles";

export default function Component() {
  return (
    <>
    <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/>
    <Navigation />
      <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:tracking-tighter md:w-3/4 lg:w-1/2 xl:text-6xl">
            Welcome to my Blog
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400">
          This will be the last thing we finish, but the idea is to show an updated blog with relevant news that happens daily in the world of technology.
          </p>
        </div>
      </div>
    </>
  )
}

