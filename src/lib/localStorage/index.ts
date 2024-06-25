'use client'

const APP_KEY = 'NEXT_TAILWIND_STORE'

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return
  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: unknown) {
  if (typeof window === 'undefined') return
  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}

export function removeStorageItem(key: string) {
  if (typeof window === 'undefined') return
  return window.localStorage.removeItem(`${APP_KEY}_${key}`)
}
