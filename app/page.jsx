"use client";

import { useState, useEffect } from "react";
import GrapheneWave from "./components/GrapheneWave";
import CADViewer from "./components/CADViewer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position (0 → 1)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(
        window.scrollY / (document.body.scrollHeight - window.innerHeight)
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-gray-900 text-white">
      
      {/* Header with name and buttons */}
      <header className="relative z-20 w-full flex justify-between items-center px-8 md:px-20 py-10">
        <h1 className="text-5xl font-bold">Cole Dunn</h1>
        <div className="flex gap-4">
          <a href="/projects" className="btn secondary">Projects</a>
          <a href="/research" className="btn secondary">Research</a>
          <a href="/contact" className="btn secondary">Contact</a>
        </div>
      </header>

      {/* Spacer so content starts below header */}
      <div className="h-32 md:h-40"></div>

      {/* Page Content — scrolls behind the wave */}
      <section className="relative z-10 flex flex-col w-full">
        {/* Projects Section */}
        <div className="py-20 px-8 md:px-20 bg-gray-900">
          <h2 className="text-4xl font-bold mb-6 text-left">Updates</h2>
          <h3 className="text-2xl font-bold mb-4 text-left">12/22/25</h3>
          <p className="mb-4 max-w-4xl">
            Currently working on applying for a SPARK grant to build a lowcost micro step laser lithography device. Professor Wakas Khalid's recent support and guidence has been very helpful and I am looking forward to working with his lab.
          </p>
          <div className="mt-8 max-w-4xl">
            <CADViewer model="/models/mmss.glb" />
          </div>
          
        </div>

        
      </section>

      {/* Graphene Wave — always visible, above content */}
      <div
        className="fixed bottom-0 w-full z-20"
        style={{
          backgroundColor: "#101828", // matches page background
          pointerEvents: "none",
          height: `${16 - 16 * scrollY}rem`, // h-64 = 16rem, shrinks as you scroll
          maxHeight: "20rem" // optional: keeps md:h-80 maximum height
        }}
      >
        <GrapheneWave />
      </div>
    </main>
  );
}
