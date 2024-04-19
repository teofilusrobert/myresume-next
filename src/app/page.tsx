'use client'

import { useRef } from "react";
import MenuBar from "@/components/MenuBar";
import SideMenuBar from "@/components/SideMenuBar";
import HomeHero from "./sections/HomeHero";
import HomeTech from "./sections/HomeTech";
import HomeProject from "./sections/HomeProject";

export default function Home() {
  const heroRef = useRef<null | HTMLDivElement>(null)
  const techRef = useRef<null | HTMLDivElement>(null)
  const projRef = useRef<null | HTMLDivElement>(null)

  function scrollTo(refId: string) {
    if (refId === 'hero' && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth', block: "start" })
    }
    if (refId === 'tech' && techRef.current) {
      techRef.current.scrollIntoView({ behavior: 'smooth', block: "start" })
    }
    if (refId === 'proj' && projRef.current) {
      projRef.current.scrollIntoView({ behavior: 'smooth', block: "start" })
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
      <div ref={projRef}>
        <HomeProject />
      </div>
      <SideMenuBar />
      <MenuBar scrollTo={scrollTo}/>
    </main>
  );
}
