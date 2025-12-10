"use client";

import Header from "@/components/headers"
import { ViewAllProjects, RecentProjects } from "@/components/projects-components/ViewProjects";
import ScrollToTopButton from "@/components/GoBackButton";
import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/footers"

/* eslint-disable react/no-unescaped-entities */
export default function Projects() {

  // Type for one quote
  type Quote = {
    text: string;
    author: string;
  };

  const quotes: Quote[] = [
    {
      text: "Every brushstroke is a step toward mastery.",
      author: "Nikola Tesla",
    },
    { text: "Creativity takes courage.", author: "Henri Matisse" },
    {
      text: "Art enables us to find ourselves and lose ourselves at the same time.",
      author: "Thomas Merton",
    },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  ];

  const [showAll, setShowAll] = useState(false);

  // Typed quote state to avoid "never" errors
  const [quote, setQuote] = useState<Quote | null>(null);

  // Pick random quote only on client to avoid hydration mismatch
  useEffect(() => {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(q);
  }, []);

  return (
    <div>
      <ScrollToTopButton />
      <Header page="projects" />

      <div id="projectsDiv" className="">
        {showAll ? (
          <ViewAllProjects setShowAll={setShowAll} />
        ) : (
          <RecentProjects setShowAll={setShowAll} />
        )}
      </div>

      {quote && (
        <div
          id="quoteBlock"
          className="relative bottom-5 mt-7 flex justify-center items-center mb-20"
        >
          {/* Background image */}
          <div className="w-[80vw] h-[35vh] relative shadow overflow-hidden">
            <Image
              src="/quotes.jpg"
              alt="Quote Block"
              fill
              className="object-fill"
              priority
            />
          </div>

          {/* Quote overlay */}
          <div className="absolute text-center text-white px-6">
            <p className="text-[4vh] italic mb-2 drop-shadow-lg">
              "{quote.text}"
            </p>
            <p className="text-[3vh] font-light drop-shadow-md">
              by {quote.author}
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
