import { XIcon } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"


interface IDesktopIconFrame {
    font?: "font-havelock" | "",
    title: string,
    image: string,
    url: string
}

export default function DesktopIconFrame({ font = "", title, image, url }: IDesktopIconFrame) {
    const [open, setOpen] = useState(false)
    const [pos, setPos] = useState({ x: 200, y: 100 })

    const dragging = useRef(false)
    const offset = useRef({ x: 0, y: 0 })

    const onMouseDown = (e: React.MouseEvent) => {
        dragging.current = true
        offset.current = {
            x: e.clientX - pos.x,
            y: e.clientY - pos.y
        }
    }

    const onMouseMove = (e: React.MouseEvent) => {
        if (!dragging.current) return

        if (window.innerWidth < 768) {
            // mobile → do not move horizontally
            setPos({
                x: 0,
                y: e.clientY - offset.current.y
            })
            return
        }

        // desktop full drag
        setPos({
            x: e.clientX - offset.current.x,
            y: e.clientY - offset.current.y
        })
    }


    const onMouseUp = () => {
        dragging.current = false
    }

    // lock x=0 when opened on mobile
    useEffect(() => {
        if (open && window.innerWidth < 768) {
            setPos((prev) => ({ ...prev, x: 0 }))
        }
    }, [open])

    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                className={`p-2 rounded hover:bg-background-light text-sm text-center flex flex-col items-center gap-2 w-[100px] cursor-pointer select-none ${font}`}
            >
                <Image alt="" src={image} width={50} height={50} loading="lazy" />
                {title}
            </div>

            {open && (
                <div
                    style={{ top: pos.y, left: pos.x }}
                    className="absolute w-full max-w-7xl aspect-[4/3] bg-background-dark"
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                >
                    <div
                        className="flex items-center justify-between w-full p-2 select-none cursor-move"
                        onMouseDown={onMouseDown}
                    >
                        <div className={font}>{title}</div>
                        <XIcon className="cursor-pointer" onClick={() => setOpen(false)} />
                    </div>

                    <iframe src={url} className="w-full h-full" />
                </div>
            )}
        </>
    )
}
