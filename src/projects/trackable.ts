import type { Trackable } from './types'

export function trackableHours(t: Trackable) {
  return `${t.currentHours}/${t.maxHours}`
}

export function trackableOverLimit(t: Trackable) {
  return t.currentHours > t.maxHours
}

export function progress(t: Trackable) {
  return t.maxHours > 0 ? t.currentHours / t.maxHours : 0
}

export function remainingHours(t: Trackable) {
  return Math.max(0, t.maxHours - t.currentHours)
}
