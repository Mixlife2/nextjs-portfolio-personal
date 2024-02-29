import React from 'react';
import Link from "next/link";
import { Navigation } from "../components/nav";

interface IconProps {
  className?: string;
}

interface CertificateInfo {
  imageUrl: string;
  date: string;
  instructor: string;
}

interface Course {
  id: number;
  name: string;
  platform: string;
  duration: string;
  description: string;
  certification: string;
  certificateInfo: CertificateInfo;
}

interface Props {
  course: Course;
}

const Component: React.FC = () => {
  return (
    
    <div className="bg-gray-50/90 border-t border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800">
        < Navigation/>
      <div className="container grid gap-6 px-4 py-12 text-center md:grid-cols-2 md:py-16 lg:gap-12">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h3>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I'm a passionate and experienced web developer with a love for clean code and elegant design. My journey in
            the world of web development has been filled with exciting challenges and rewarding experiences. I'm
            dedicated to creating beautiful and functional websites that make a difference. Let me bring your web
            projects to life with creativity and expertise.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="grid grid-cols-2 items-center gap-4 text-left">
            <UserIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">John Doe</span>
            <BriefcaseIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Web Developer</span>
            <MapPinIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">New York, NY</span>
            <MailIcon className="w-4 h-4 text-gray-500" />
            <Link
              className="text-sm font-medium text-gray-500 underline dark:text-gray-400 dark:hover:underline:gray-300"
              href="#"
            >
              Email Me
            </Link>
            <LinkIcon className="w-4 h-4 text-gray-500" />
            <Link
              className="text-sm font-medium text-gray-500 underline dark:text-gray-400 dark:hover:underline:gray-300"
              href="#"
            >
              My Portfolio
            </Link>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl border">
            <img
              alt="Profile"
              className="object-cover"
              height="225"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const BriefcaseIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

const LinkIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

const MailIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const MapPinIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

const UserIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export default Component;
