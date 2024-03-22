'use client'

import ThemeSwitch from "./ThemeSwitch"

function MenuBar() {
    return (
        <div className="fixed left-0 top-0 bg-white dark:bg-slate-900 shadow dark:shadow-slate-700 w-full h-[48px] flex justify-between items-center px-10">
            <div className="">
                <button className="w-[40px] h-[40px] rounded-full bg-indigo-500 font-serif font-extrabold text-xl text-orange-500">TR</button>
            </div>
            <div >
                <button>My Tech</button>
            </div>
            <div className="flex-end">
                <ThemeSwitch />
            </div>
        </div>
    )
}

export default MenuBar