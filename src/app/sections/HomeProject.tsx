import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function ProjectCard({title, href}:{
  title: string,
  href: string,
}) {
   return (
    <div className="flex justify-center p-4">
      <div className="w-[400px] h-[250] bg-white shadow p-4">
        <h3>{title}</h3>
        <Link href={href}>See More</Link>
      </div>
    </div>
   )
}

function HomeProject() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false
  };

  return (
    <section className="w-full h-screen px-8 py-14 bg-indigo-100/25 dark:bg-indigo-900/75 transition-colors duration-500 ease-in-out">
      <h2 className="text-2xl font-mono font-semibold text-center dark:text-white">My Other Projects</h2>
      <div className="px-10 py-4">
        <Slider {...settings}>
          <ProjectCard title="Card Maker" href="/cardmaker" />
          <ProjectCard title="DnD Thing" href="/dndthing" />
          <ProjectCard title="RPG Stuff" href="/rpgstuff" />
        </Slider>
      </div>
    </section>
  )
}

export default HomeProject