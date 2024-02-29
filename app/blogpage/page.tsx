import Link from "next/link"
import { Navigation } from "../components/nav"

export default function Component() {
  return (
    <>
    <Navigation />
      <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:tracking-tighter md:w-3/4 lg:w-1/2 xl:text-6xl">
            Welcome to my Blog
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Thoughts, musings, and insights from the desk of a developer.
          </p>
        </div>
      </div>
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link className="space-y-2 block" href="#">
              <h2 className="text-2xl font-bold leading-tight">The Art of Debugging</h2>
              <p className="text-gray-500 dark:text-gray-400">Demystifying the process of squashing bugs</p>
              <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
            </Link>
          </div>
          <div>
            <Link className="space-y-2 block" href="#">
              <h2 className="text-2xl font-bold leading-tight">The Joy of Refactoring</h2>
              <p className="text-gray-500 dark:text-gray-400">Making code beautiful, one line at a time</p>
              <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
            </Link>
          </div>
          <div>
            <Link className="space-y-2 block" href="#">
              <h2 className="text-2xl font-bold leading-tight">Embracing the Command Line</h2>
              <p className="text-gray-500 dark:text-gray-400">Mastering the power of the terminal</p>
              <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
            </Link>
          </div>
          <div>
            <Link className="space-y-2 block" href="#">
              <h2 className="text-2xl font-bold leading-tight">The Zen of Version Control</h2>
              <p className="text-gray-500 dark:text-gray-400">Finding inner peace with Git</p>
              <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
            </Link>
          </div>
          <div>
            <Link className="space-y-2 block" href="#">
              <h2 className="text-2xl font-bold leading-tight">Building Beautiful UIs</h2>
              <p className="text-gray-500 dark:text-gray-400">The art and science of frontend design</p>
              <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
            </Link>
          </div>
          <div>
            <Link className="space-y-2 block" href="#">
              <h2 className="text-2xl font-bold leading-tight">The Magic of Components</h2>
              <p className="text-gray-500 dark:text-gray-400">Harnessing the power of reusable code</p>
              <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

