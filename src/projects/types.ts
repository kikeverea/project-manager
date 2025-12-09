export interface Project extends Trackable {
  id: string
  name: string,
  phases?: ProjectPhase[]
}

export interface ProjectPhase extends Trackable {
  id: string
  name?: string
  order: number
}

export interface Trackable {
  maxHours: number
  currentHours: number
  tracking?: true
}