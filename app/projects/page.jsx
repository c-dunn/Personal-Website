"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Microfabricated Si-Wafer",
    short: "Over the course of a semester I worked in a class 100 clean room for the course EE143 fabrictaing devices on a 6\" Si-Wafer.",
    description:
      "Design and construction of a low-cost micro-step laser lithography system for rapid prototyping of micro-scale patterns. This project combines optics, motion control, firmware, and precision CAD design.",
    tags: ["Microfabrication", "Devices", "Clean Room"],
  },
  {
    id: 2,
    title: "Bipedal Walking Robot",
    short: "Inspired by bird biomechnaics ",
    description:
      "A Three.js / React visualization inspired by graphene lattice motion. The wave reacts to scroll position and serves as a persistent visual anchor on the site.",
    tags: ["CAD", "Robotics", "Coding"],
  },
  {
    id: 3,
    title: "RFC MEMS Microbot",
    short: "Lorem",
    description:
      "Lorem",
    tags: ["Ipsum"],
  },
  {
    id: 4,
    title: "Laser Induced Graphene",
    short: "Lorem",
    description:
      "Lorem",
    tags: ["Ipsum"],
  },
  {
    id: 5,
    title: "Magnet Array Simulator",
    short: "Lorem",
    description:
      "Lorem",
    tags: ["Ipsum"],
  },
  {
    id: 6,
    title: "Mechanical Exfoliator",
    short: "Lorem",
    description:
      "Lorem",
    tags: ["Ipsum"],
  },

];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main className="min-h-screen bg-gray-900 text-white px-8 md:px-20 py-20">
      <h1 className="text-5xl font-bold mb-12">Projects</h1>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group text-left bg-gray-800 rounded-2xl p-6 shadow-lg hover:bg-gray-700 transition"
          >
            <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4">{project.short}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-gray-700 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Popout modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-gray-900 rounded-2xl max-w-2xl w-full p-8 shadow-2xl">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-4">
              {activeProject.title}
            </h2>
            <p className="text-gray-300 mb-6">
              {activeProject.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-gray-800 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Future additions:
                - images
                - CADViewer
                - GitHub links
                - videos
            */}
          </div>
        </div>
      )}
    </main>
  );
}
