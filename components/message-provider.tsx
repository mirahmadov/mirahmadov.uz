'use client'

import { useEffect, useState } from 'react'
import { message } from '@/lib/message'
import { LucideCheckCircle, LucideXCircle, LucideInfo, LucideAlertTriangle } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type Toast = {
  id: number
  type: 'success' | 'error' | 'info' | 'warning'
  content: string
}

const iconMap = {
  success: <LucideCheckCircle className="text-green-500" size={20} />,
  error: <LucideXCircle className="text-red-500" size={20} />,
  info: <LucideInfo className="text-blue-500" size={20} />,
  warning: <LucideAlertTriangle className="text-yellow-500" size={20} />,
}

export function MessageProvider() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    message._subscriber = (type, content, duration) => {
      const id = Date.now()
      setToasts((prev) => [...prev, { id, type, content }])
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, duration)
    }
  }, [])

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background-light text-white shadow-md w-full max-w-sm mx-auto"
          >
            {iconMap[toast.type]}
            <span className="text-sm">{toast.content}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
