export interface Project extends Trackable {
  id: number
  name: string
  phases?: ProjectPhase[]
}

export interface ProjectPhase extends Trackable {
  id: number
  name?: string
  order: number
}

export interface Trackable {
  maxHours: number
  currentHours: number
}