'use client'

import { useRef } from "react";
import MenuBar from "@/components/MenuBar";
import SideMenuBar from "@/components/SideMenuBar";
import HomeHero from "./sections/HomeHero";
import HomeTech from "./sections/HomeTech";

export default function Home() {
  const heroRef = useRef<null | HTMLDivElement>(null)
  const techRef = useRef<null | HTMLDivElement>(null)
  const scrollTo = (refId: string) => {
    if (refId === 'hero' && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth', block: "start" })
    }
    if (refId === 'tech' && techRef.current) {
      techRef.current.scrollIntoView({ behavior: 'smooth', block: "start" })
    }
  }

  return (
    <main className="">
      <div ref={heroRef}>
        <HomeHero />
      </div>
      <div ref={techRef}>
        <HomeTech />
      </div>
      <SideMenuBar />
      <MenuBar scrollTo={scrollTo}/>
    </main>
  );
}
