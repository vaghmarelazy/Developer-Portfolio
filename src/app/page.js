'use client'

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/themeToggle";


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
      <section className="min-h-screen flex flex-col justify-center text-center space-y-4">
        <h1 className="text-4xl font-bold">Rupesh Vaghmare</h1>
        <p className="text-lg">Full-Stack Developer (MERN Stack)</p>
        <p className="lg:px-80">Hi, I&apos;m Rupesh Vaghmare — a Full-Stack Developer specializing in the MERN stack.
          I build dynamic web applications with clean UI, scalable backends, and real-time features. I've developed projects like Dive-Deeper (AI + YouTube), Pass OP (password manager), and a Pinterest clone. Currently seeking new opportunities to build impactful tech solutions.</p>
        <div className="flex justify-center gap-4">
          <Button asChild><a href="https://github.com/yourusername" target="_blank">GitHub</a></Button>
          <Button asChild><a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a></Button>
          <Button asChild><a href="/resume.pdf" target="_blank">Resume</a></Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl font-extrabold mb-6">Projects</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Project 1 */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Real-time Multiplayer Quiz</h3>
              <p>Play quizzes with friends in real-time. Socket.io + Gemini AI + MongoDB.</p>
              <div className="mt-2 flex gap-4">
                <Button asChild variant="outline"><a href="#">Live</a></Button>
                <Button asChild variant="outline"><a href="#">Code</a></Button>
              </div>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Anonymous Messaging App</h3>
              <p>Send & receive anonymous messages. Built with Next.js 15, MongoDB, Tailwind.</p>
              <div className="mt-2 flex gap-4">
                <Button asChild variant="outline"><a href="#">Live</a></Button>
                <Button asChild variant="outline"><a href="#">Code</a></Button>
              </div>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">AI Podcast Ranker</h3>
              <p>Ranks YouTube podcasts using AI. Uses YouTube API, MongoDB, and React.</p>
              <div className="mt-2 flex gap-4">
                <Button asChild variant="outline"><a href="#">Live</a></Button>
                <Button asChild variant="outline"><a href="#">Code</a></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Skills Section */}
      <section className="min-h-screen flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>Postman</li>
        </ul>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex flex-col justify-center max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I&apos;m a MERN stack developer pursuing B.Tech in Computer Science at SGSU University (2021–2025).
          Passionate about building real-time web applications and exploring AI-powered solutions.
        </p>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex flex-col justify-center text-center space-y-4">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p>Email: <a className="text-blue-600" href="mailto:rupeshvaghmare1@email.com">your@email.com</a></p>
      </section>
    </div>
  );
}
