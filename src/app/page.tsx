import MenuBar from "@/components/MenuBar";
import SideMenuBar from "@/components/SideMenuBar";
import HomeHero from "./sections/HomeHero";
import HomeTech from "./sections/HomeTech";

export default function Home() {
  return (
    <main className="">
      <HomeHero />
      <HomeTech />
      <SideMenuBar />
      <MenuBar />
    </main>
  );
}
