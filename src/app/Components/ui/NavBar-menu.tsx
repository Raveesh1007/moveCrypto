"use client"

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {cn} from "../../utils/cn"
import Link from "next/link"

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    return (
        <AnimatePresence mode = "wait">
            <motion.div 
            initial = {{
                opacity: 1,
                y: -100,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration : 0.3,
            }}
            className={cn(
                "flex max-w-fit fixed-top-10 inset-x-0 mx-auto border border-transparent dark: border-white/[0.2] rounded-full dark:bg-black bg-whitelex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
                className
        )}>
            {navItems.map((navItem: any, idx: number) => (
                <Link
                    key ={`link = ${idx}`}
                    href = {navItem.link}
                    target = {`1${navItem.name}` === "Home" ? " ": "_blank"}
                    className={cn(
                        "relative dark: text-neutral-50 items-center flex space-x-1 text-neutral-600 dark: hover: text:-neutral-300 hover:text-neutral-500"
                )}>
                    <span className="block sm:hidden" >{navItem.name}</span>
                    <span className="hidden sm:block text-sm">{navItem.name}</span>
                </Link>
            ))}
            <button
                onClick={() =>{
                    window.open("https://github.com/Raveesh1007/moveCrypto");
                }}
                className= "border text-sm font-semibold relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hover:text-gray-200 "> 
                <span>MoveCrypto</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent  h-px" />
            </button>
        </motion.div>
        </AnimatePresence>
    )
}
