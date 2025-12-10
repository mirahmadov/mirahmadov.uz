import { XIcon } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import TelegramAppIcon from "./telegram-app-icon"

export default function AboutUsFolder() {
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
                className={`p-2 rounded hover:bg-background-light text-sm text-center flex flex-col items-center gap-2 w-[100px] cursor-pointer select-none`}
            >
                <img src={"/folder.png"} width={50} height={50} loading="lazy" />
                Men haqimda
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
                        <div>Men haqimda</div>
                        <XIcon className="cursor-pointer" onClick={() => setOpen(false)} />
                    </div>

                    <div className="w-full h-full bg-background-light p-3">
                        <div className="grid gap-3">
                            <TelegramAppIcon title={"LinkedIn"} image={"/socials/linkedin.png"} url={"https://www.linkedin.com/in/muhammadaziz-mirahmadov-40053020b/"} />
                            <TelegramAppIcon title={"Github"} image={"/socials/github.png"} url={"https://github.com/mirahmadov"} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
