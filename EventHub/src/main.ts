class EventHub {
  private cache: { [key: string]: Array<(data?: unknown) => void> } = {}

  on(eventName: string, fn: (data?: unknown) => void) {
    this.cache[eventName] = this.cache[eventName] ?? []
    this.cache[eventName].push(fn)
  }

  emit(eventName: string, data?: unknown) {
    ;(this.cache[eventName] ?? []).forEach((fn: (data: unknown) => void) => fn(data))
  }

  off(eventName: string, fn: (data?: unknown) => void) {
    if (!this.cache[eventName]) return
    this.cache[eventName].splice(this.cache[eventName].indexOf(fn), 1)
  }
}

export default EventHub
