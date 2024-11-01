"use client";
import cn from "../../utils/cn"

import React, {
    createContext,
    useState,
    useContext,
    useEffect,
    useRef,
} from "react";

const MouseEnterContext = createContext<
[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined) 

export const CardContainer = ({
    children,
    className,
    containerClassName,
}:{
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) =>{
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) =>{
        if(!containerRef.current) return;
        const{left,top,width,height} = 
        containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width/2)/25;
        const y = (e.clientY - top - height/2)/25;
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
    };

    const handleMouseEnter = (e:React.MouseEvent<HTMLDivElement>) =>{
        setIsMouseEntered(true);
        if(!containerRef.current)return;
    }
}