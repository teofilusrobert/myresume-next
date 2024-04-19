import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function ProjectCard({title, href, imgUrl}:{
  title: string,
  href: string,
  imgUrl?: string,
}) {
   return (
    <div className="flex justify-center p-4">
      <div className="w-[400px] bg-white dark:bg-slate-900 shadow">
        <h3 className="text-xl font-bold p-4 dark:text-white">{title}</h3>
        <div className="w-full h-[150px] bg-gray-200 dark:bg-gray-700">
          {imgUrl && <img src={imgUrl} alt="preview" width="0" height="0" className="w-full h-full object-contain object-center" />}
        </div>
        <Link href={href} className="block text-blue-500 p-4">See More</Link>
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
          <ProjectCard title="Card Maker" href="/cardmaker" imgUrl="/images/cardmaker.png"/>
          <ProjectCard title="DnD Thing" href="/dndthing" />
          <ProjectCard title="RPG Stuff" href="/rpgstuff" />
        </Slider>
      </div>
    </section>
  )
}

export default HomeProject