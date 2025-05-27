'use client'

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/themeToggle";
import Image from "next/image";
import { Sora } from "next/font/google";

const tech = [
  { name: "HTML", icon: "tech/html-5-svgrepo-com.svg" },
  { name: "CSS", icon: "tech/css-3-svgrepo-com.svg" },
  { name: "JavaScript", icon: "tech/js-official-svgrepo-com.svg" },
  { name: "TypeScript", icon: "tech/typescript-icon-svgrepo-com.svg" },
  { name: "ReactJS", icon: "tech/react-javascript-js-framework-facebook-svgrepo-com.svg" },
  { name: "NextJS", icon: "tech/nextjs-fill-svgrepo-com.svg" },
  { name: "ShadCn", icon: "tech/shadcn-ui-seeklogo.svg" },
  { name: "Tailwind CSS", icon: "tech/tailwindcss-icon.svg" },
  { name: "NodeJS", icon: "tech/nodejs-icon-svgrepo-com.svg" },
  { name: "ExpressJS", icon: "tech/express-svgrepo-com.svg" },
  { name: "MongoDB", icon: "tech/mongo-svgrepo-com.svg" },
  { name: "Git", icon: "tech/git-icon.svg" },
  { name: "Github", icon: "tech/github-142-svgrepo-com.svg" },
  { name: "Postman", icon: "tech/postman-icon.svg" },
  { name: "Zod", icon: "tech/zod.svg" },
  { name: "Vercel", icon: "tech/vercel-icon.svg" },
  { name: "Netlify", icon: "tech/netlify-icon.svg" },
];

const projects = [
  {
    name: "MystryMessages",
    icon: "/projects/MystryMessages.png",
    descrption: "A full-stack anonymous messaging platform where users can send and receive mystery messages securely. Built with Next.js, Resend, MongoDB, and Gemini AI, this app offers a seamless and interactive user experience.",
    isLinkAvailable: true,
    liveLink:"https://mystry-messages-delta.vercel.app/",
    github : "https://github.com/vaghmarelazy/Mystry-messages"

  },
  {
    name: "FocusFlow",
    icon: "/projects/FocusFlow.png",
    descrption: "FocusFlow is a clean, full-screen Android timer app designed to help you stay productive using the Pomodoro technique (work + break cycles). Built using Kotlin, this app is lightweight, intuitive, and completely open-source.",
    isLinkAvailable: false,
    github : "https://github.com/vaghmarelazy/FocusFlow"
  },
  {
    name: "APOD",
    icon: "/projects/APOD.png",
    descrption: "A React application that fetches and displays data from NASA's Astronomy Picture of the Day (APOD) API, including the title, description, and image of the day.",
    isLinkAvailable : true,
    liveLink:"https://apod-nasa-react-psi.vercel.app/",
    github : "https://github.com/vaghmarelazy/APOD-NASA"
  },
  {
    name: "PassOP",
    icon: "/projects/PassOP.png",
    descrption: "A react application with Clean UI to store password both in localstorage and Cloud (MongoDB)",
    isLinkAvailable : true,
    liveLink:"https://lazymanager.netlify.app/",
    github : "https://github.com/vaghmarelazy/Password-Manger"
  }
]

const sora = Sora({ subsets: ['latin'], weight: ['100', '400', '700'] })

export default function Portfolio() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check system theme
    const userPref = localStorage.getItem('theme');
    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = userPref || systemPref;

    setTheme(currentTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(currentTheme);
    projects.map((project) => (
      console.log(project.name)
    ))
  }, []);

  const handleThemeChange = (newThemeFromChild) => {
    // console.log("Parent component received theme:", newThemeFromChild);
    setTheme(newThemeFromChild); // Update the parent's theme state
    localStorage.setItem('theme', newThemeFromChild); // Persist to localStorage
    // Update the class on the root HTML element
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newThemeFromChild);
  };

  return (
    <div className="min-h-screen p-6 space-y-16 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText transition-colors duration-500">

      {/* Hero Section */}
      <ThemeToggle onThemeChange={handleThemeChange} />

      <section className="min-h-screen flex flex-col justify-center text-center space-y-3 sm:space-y-4 duration-500">
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${sora.className}`}>Rupesh Vaghmare</h1>
        <p className="text-base sm:text-lg opacity-75">Full-Stack Developer (MERN Stack)</p>
        <p className="max-w-3xl mx-auto px-4 text-sm sm:text-base opacity-70 font-light">Full-Stack Developer specializing in the MERN stack.
          I build dynamic web applications with clean UI, scalable backends, and real-time features. I&apos;ve developed projects like MystryMessages, Pass OP (password manager), and an Android appilication FocusFlow. Currently seeking new opportunities to build impactful tech solutions.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <Button asChild>
            <a href="https://github.com/vaghmarelazy" target="_blank">
              <Image src="/tech/github-142-svgrepo-com.svg" alt="Github" width={20} height={20}
                className={`duration-500 filter brightness-0 ${theme == 'light' ? 'invert-100' : 'invert-0'}`} />GitHub</a>
          </Button>
          <Button asChild><a href="https://linkedin.com/in/lazy-developer" target="_blank">
            <Image src="/tech/linkedin-icon.svg" alt="LinkedIn" width={20} height={20}
              className={`duration-500 filter brightness-0 ${theme == 'light' ? 'invert-100' : 'invert-0'}`} />
            LinkedIn</a></Button>
          <Button asChild><a href="/resume.pdf" target="_blank">Resume</a></Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 w-full">
          {/* Projects */}
          {projects.map((project) => (
            <Card key={project.name}>
              <CardContent className="p-4">
                <Image src={project.icon} alt="Live preview image" width={500} height={500} className=" rounded-md mb-3 w-full h-60" />
                <h3 className="text-lg md:text-xl font-bold">{project.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">{project.descrption}</p>
                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <Button asChild variant="outline"  className={`${project.isLinkAvailable?'cursor-pointer ':'cursor-not-allowed'}`}><a href={project.liveLink} target="_blank">Live</a></Button>
                  <Button asChild variant="outline"><a href={project.github} target="_blank">Code</a></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-xs sm:text-sm md:text-md font-bold uppercase mb-3 sm:mb-5 opacity-70">I CONSTANTLY TRY TO IMPROVE</h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-8 sm:mb-12 md:mb-16 lg:mb-20">My tech stack </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
          {tech.map((tech) => (
            <div key={tech.name} className="flex items-center text-sm py-1 px-2 rounded-md shadow-2xl dark:shadow-2xl shadow-gray-300 dark:shadow-gray-500 bg-[#cbcbcb] dark:bg-[#2f2f2f] border border-gray-500">
              <Image src={tech.icon} alt={tech.name} width={20} height={20} />
              <span className="ml-2">{tech.name}</span>
            </div>
          ))}
        </div>

      </section>


      {/* About Section */}
      <section className="min-h-screen flex flex-col justify-center max-w-xl md:max-w-2xl mx-auto text-center px-4 py-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">About Me</h2>
        <p className="text-sm sm:text-base opacity-80">
          I&apos;m a MERN stack developer based in Bhopal pursuing B.Tech in Computer & Engineering Science at SGSU University (2021–2025).
          Passionate about building real-time web applications and exploring AI-powered solutions. I&apos;m little bit in Everything. Looking for opportunities ;)
        </p>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex flex-col justify-center text-center space-y-3 sm:space-y-4 px-4 py-12">
        <h2 className="text-xl sm:text-2xl font-semibold">Get in Touch</h2>
        <p className="text-sm sm:text-base">Email: <a className="text-yellow-500 hover:text-yellow-600 duration-300" href="mailto:rupeshvaghmare1@email.com">rupeshvaghmare1@gmail.com</a></p>
      </section>
    </div>
  );
}
