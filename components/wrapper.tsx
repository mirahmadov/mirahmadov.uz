"use client"

import { delayFn } from "@/lib/secondary-funcs"
import useSystemStore from "@/stores/system-store"
import { LucideLoader2, LucidePower } from "lucide-react";
import MessagesBlock from "./messages-block";

export default function Wrapper({ children }: any) {
    const { status, setStatus } = useSystemStore()


    if (status === "turned_off") {
        return (
            <div className="w-screen h-screen flex flex-col gap-5 items-center justify-center bg-background-dark">
                <LucidePower className="cursor-pointer !w-16 !h-16  hover:scale-110 duration-150 ease-in-out" onClick={() => {
                    setStatus("turning_on")
                    delayFn(() => {
                        setStatus("turned_on")
                    }, 5000)
                }} />
                <div className="text-xl font-havelock select-none">MIRAHMADOV</div>

            </div>
        )
    }

    if (status === "turning_on") {
        return (
            <div className="w-screen h-screen flex flex-col gap-5 items-center justify-center bg-background-dark">
                <div className="w-64 h-2 rounded bg-white overflow-hidden relative">
                    <div className="absolute h-full w-1/5 bg-background-light animate-pipe" />
                </div>
                <div className="text-xl font-havelock select-none">Turning on...</div>
            </div>
        )
    }

    if (status === "turning_off") {
        return (
            <div className="w-screen h-screen flex flex-col gap-5 items-center justify-center bg-background-dark">
                <LucideLoader2 className="!w-16 !h-16 animate-spin" />
                <div className="text-xl font-havelock select-none">Turning off...</div>
            </div>
        )
    }

    return (
        <div className="">
            <div className="fixed bg-background-dark z-10 flex items-center justify-between w-full px-2 py-1">
                <div className="font-havelock select-none">Mirahmadov</div>
                <div className="flex items-center gap-3">
                    <MessagesBlock />

                    <LucidePower className="cursor-pointer" onClick={() => {
                        setStatus("turning_off")
                        delayFn(() => {
                            setStatus("turned_off")
                        }, 3000)
                    }} />
                </div>
            </div>

            <div className={"w-screen h-screen relative overflow-hidden pt-[35px] !bg-no-repeat !bg-cover"} style={{ background: `url('/background.jpg')` }}>
                {children}
            </div>
        </div>
    );
}