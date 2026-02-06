"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Microfabricated Si-Wafer",
    short: "Over the course of a semester I worked in a class 100 clean room for the course EE143 fabrictaing devices on a 6\" Si-Wafer.",
    description:
      "Design and construction of a low-cost micro-step laser lithography system for rapid prototyping of micro-scale patterns. This project combines optics, motion control, firmware, and precision CAD design.",
    tags: ["Microfabrication", "Clean Room", "EE143"],
    
    thumbnail: "/images/si-wafer-thumb.png",

    images: [],

    cadModel: null, // or "/models/wafer.glb"
  },
  {
    id: 2,
    title: "Bipedal Walking Robot",
    short: "Inspired by bird biomechnaics ",
    description:
      "A Three.js / React visualization inspired by graphene lattice motion. The wave reacts to scroll position and serves as a persistent visual anchor on the site.",
    tags: ["CAD", "Robotics", "Coding"],

    thumbnail: "/images/biped-thumb.png",
  },
  {
    id: 3,
    title: "RFC MEMS Microbot",
    short: "Lorem",
    description:
      "Lorem",
    tags: ["MEMS", "EE147"],

    thumbnail: "/images/RFC-thumb.png",
  },
  {
    id: 4,
    title: "Laser Induced Graphene",
    short: "Lorem",
    description:
      "Lorem",
    tags: ["Ipsum"],

    thumbnail: "/images/lig-thumb.png",
  },
  {
    id: 5,
    title: "Magnet Array Simulator",
    short: "Lorem",
    description:
      "Using ",
    tags: ["Simulation", "Python", "Matplotlib"],

    thumbnail: "/images/mag-sim-thumb.png",
  },
  {
    id: 6,
    title: "Mechanical Exfoliator",
    short: "Lorem",
    description:
      "Lorem",
    tags: ["2D Material"],

     thumbnail: "/images/exfo-thumb.png",
  },
  {
    id: 7,
    title: "MoS2 Transistor",
    short: "Lorem",
    description:
      "Lorem",
    tags: ["Transistor", "Simulation", "EE230C"],

    thumbnail: "/images/mos2-thumb.png",
  },
  {
    id: 8,
    title: "TCAD",
    short: "Lorem",
    description:
      "Lorem",
    tags: ["Transistor", "Simulation", "EE130"],

    thumbnail: "/images/tcad-thumb.png",
  },
  {
    id: 9,
    title: "Hydrodynamic Launcher",
    short: "Lorem",
    description:
      "Lorem",
    tags: ["CFD", "Simulation", "Underwater Robotics"],

    thumbnail: "/images/lil-lad-thumb.png",
  },

];


export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main className="min-h-screen bg-gray-900 text-white px-8 md:px-20 py-20">
      <header className="relative z-20 w-full flex justify-between items-center py-10">
        <h1 className="text-5xl font-bold mb-12">Projects</h1>
        <div className="flex gap-4">
          <a href="/" className="btn secondary">About</a>
          <a href="/research" className="btn secondary">Research</a>
          <a href="/contact" className="btn secondary">Contact</a>
        </div>
      </header>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group flex gap-4 text-left bg-gray-800 rounded-2xl p-4 shadow-lg hover:bg-gray-700 transition"
          >
            {/* Thumbnail */}
            <div className="w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-700">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  No Image
                </div>
              )}
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm mb-2">{project.short}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
