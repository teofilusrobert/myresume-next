'use client'

import ThemeSwitch from "./ThemeSwitch"

function SideMenuBar() {
    return (
        <div className="fixed right-0 top-0 bg-white dark:bg-slate-900 w-[60px] h-full flex flex-col -mr-[60px]">
            <div>
            </div>
            <div className="flex-end">
                <ThemeSwitch />
            </div>
        </div>
    )
}

export default SideMenuBar