import { message } from "@/lib/message";
import { AnimatePresence, motion } from "framer-motion";
import { LucideAlertTriangle, LucideCheckCircle, LucideInfo, LucideXCircle, LucideMessageCircleMore } from "lucide-react";
import { useState } from "react";

export default function MessagesBlock() {
    const [open, setOpen] = useState(false)
    return (
        <div className="relative">
            <LucideMessageCircleMore className="cursor-pointer" onClick={() => setOpen(!open)} />

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute mt-2 top-full right-0 min-w-[80px] grid grid-cols-2 gap-3 p-3 bg-background-light rounded"
                    >
                        <LucideCheckCircle className="cursor-pointer" onClick={() => message.success("Message success")} />
                        <LucideXCircle className="cursor-pointer" onClick={() => message.error("Message error")} />
                        <LucideInfo className="cursor-pointer" onClick={() => message.info("Message info")} />
                        <LucideAlertTriangle className="cursor-pointer" onClick={() => message.warning("Message warning")} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}