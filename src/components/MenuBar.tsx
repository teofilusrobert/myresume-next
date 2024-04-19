'use client'

import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch"

type MenuBarProps = {
  scrollTo: (refId: string) => void;
}

function MenuBar({ scrollTo }:MenuBarProps) {
  const [circleLeftPos, setCircleLeftPos] = useState(20);
  const totalPages = 3
  const menuWidth = 80
  const totalMenuWidth = menuWidth * totalPages
  const totalMenuWidthRelative = menuWidth * (totalPages - 1)
  let scrollY = 0
  let clientHeight = document.documentElement.clientHeight || 0
  let scrollHeight = document.documentElement.scrollHeight || 0

  window.addEventListener("scroll", (event) => {
    scrollY = window.scrollY
    scrollHeight = document.documentElement.scrollHeight
    clientHeight = document.documentElement.clientHeight
    console.log(scrollY, totalMenuWidthRelative, clientHeight)
    setCircleLeftPos(20 + Math.round(scrollY * totalMenuWidthRelative / (clientHeight * (totalPages - 1))))
  });

  return (
    <div className="fixed left-0 top-0 bg-white dark:bg-slate-900 shadow dark:shadow-slate-700 w-full h-[48px] flex justify-between items-center px-10 transition-colors duration-500 ease-in-out">
      <div className="relative">
        <button 
          onClick={() => scrollTo('hero')}
          className="font-serif font-extrabold text-xl dark:text-white"
          style={{ width: `${menuWidth}px` }}
        >TR</button>
        <button
          onClick={() => scrollTo('tech')}
          className="dark:text-white"
          style={{ width: `${menuWidth}px` }}
        >Tech</button>
        <button
          onClick={() => scrollTo('proj')}
          className="dark:text-white"
          style={{ width: `${menuWidth}px` }}
        >Project</button>
        <div
          className={`absolute -top-[5px] w-[40px] h-[40px] rounded-full bg-indigo-500 text-orange-500 flex items-center overflow-hidden`}
          style={{ left: `${circleLeftPos}px` }}
        >
          <div style={{ minWidth: `${totalMenuWidth}px`, marginLeft: `-${circleLeftPos}px` }}>
            <button
              className="font-serif font-extrabold text-xl" 
              style={{ width: `${menuWidth}px` }}
            >TR</button>
            <button className="font-bold" style={{ width: `${menuWidth}px` }}>Tech</button>
            <button className="font-bold" style={{ width: `${menuWidth}px` }}>Project</button>
          </div>
        </div>
      </div>
      <div className="flex-end">
        <ThemeSwitch />
      </div>
    </div>
  )
}

export default MenuBar