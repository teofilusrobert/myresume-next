'use client'

import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch"

type MenuBarProps = {
  scrollTo: (refId: string) => void;
}

function MenuBar({ scrollTo }:MenuBarProps) {
  const [circleLeftPos, setCircleLeftPos] = useState(20);
  const totalPages = 2
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
    setCircleLeftPos(20 + Math.round(scrollY * totalMenuWidthRelative / clientHeight))
  });

  return (
    <div className="fixed left-0 top-0 bg-white dark:bg-slate-900 shadow dark:shadow-slate-700 w-full h-[48px] flex justify-between items-center px-10 transition-colors duration-500 ease-in-out">
      <div className="relative">
        <button 
          onClick={() => scrollTo('hero')}
          className={`w-[${menuWidth}px] font-serif font-extrabold text-xl dark:text-white`}
        >TR</button>
        <button
          onClick={() => scrollTo('tech')}
          className={`w-[${menuWidth}px] dark:text-white`}
        >My Tech</button>
        <div
          className={`absolute -top-[5px] w-[40px] h-[40px] rounded-full bg-indigo-500 text-orange-500 flex items-center overflow-hidden`}
          style={{ left: `${circleLeftPos}px` }}
        >
          <div style={{ minWidth: `${totalMenuWidth}px`, marginLeft: `-${circleLeftPos}px` }}>
            <button className={`w-[${menuWidth}px] font-serif font-extrabold text-xl`}>TR</button>
            <button className={`w-[${menuWidth}px] font-bold`}>My Tech</button>
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