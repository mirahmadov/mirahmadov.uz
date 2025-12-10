type MessageType = 'success' | 'error' | 'info' | 'warning'

type ShowFn = (content: string, duration?: number) => void

type MessageApi = {
  success: ShowFn
  error: ShowFn
  info: ShowFn
  warning: ShowFn
  _emit: (type: MessageType, content: string, duration?: number) => void
  _subscriber?: (type: MessageType, content: string, duration: number) => void
}

export const message: MessageApi = {
  success(content, duration) {
    message._emit('success', content, duration)
  },
  error(content, duration) {
    message._emit('error', content, duration)
  },
  info(content, duration) {
    message._emit('info', content, duration)
  },
  warning(content, duration) {
    message._emit('warning', content, duration)
  },
  _emit(type, content, duration = 3000) {
    message._subscriber?.(type, content, duration)
  },
}
