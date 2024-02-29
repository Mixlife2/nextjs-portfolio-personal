import React from 'react';
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const CoursesList = () => {
  const courses = [
    { 
      id: 1,
      name: "Web development", 
      platform: "CoderHouse", 
      duration: "38 hours",
      description: "Introduction to web development covering HTML, CSS, and JavaScript basics.",
      certification: "Certificate of Completion",
      certificateInfo: {
        imageUrl: "/certificates/web-development-certificate.jpg",
        date: "January 2023",
        instructor: "John Doe"
      }
    },
    { 
      id: 2,
      name: "Javascript Fundamentals", 
      platform: "CoderHouse", 
      duration: "12 weeks",
      description: "Dive into JavaScript essentials in our 3-month course, covering variables, functions, DOM manipulation, and more for building dynamic web applications.",
      certification: "Verified Certificate",
      certificateInfo: {
        imageUrl: "/certificates/react-essentials-certificate.jpg",
        date: "March 2023",
        instructor: "Jane Smith"
      }
    },
    { 
      id: 3,
      name: "React", 
      platform: "CoderHouse", 
      duration: "12 weeks",
      description: "Explore React in our intensive 2-month course, diving into component-based architecture, state management, and API integration for dynamic user interfaces.",
      certification: "Verified Certificate",
      certificateInfo: {
        imageUrl: "/certificates/react-essentials-certificate.jpg",
        date: "March 2023",
        instructor: "Jane Smith"
      }
    },
    // Agrega más cursos según necesites
  ];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Courses and Certifications
          </h2>
          <p className="mt-4 text-zinc-400">
            Explore the courses and certifications completed.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {courses.map((course, index) => (
            <Card key={course.id}>
              <Link href={`/courses/${course.id}`} passHref>
                <div>
                  <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
                    <h3 className="text-lg font-semibold">{course.name}</h3>
                    <p className="text-gray-600 mb-2">{course.platform} | {course.duration}</p>
                    <p className="mb-2">{course.description}</p>
                    <p className="font-medium">Certification: {course.certification}</p>
                    <p className="font-medium">Date: {course.certificateInfo.date}</p>
                    <p className="font-medium">Instructor: {course.certificateInfo.instructor}</p>
                    <p className="text-blue-500 hover:text-blue-700">Ver detalles</p>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;