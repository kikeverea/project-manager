import { http, HttpResponse } from 'msw'
import type { Project } from '../projects/types.ts'

export const projectList: Project[] = [
  {
    id: 1,
    name: 'Project 1',
    currentHours: 5,
    maxHours: 15,
    tracking: true,
  },
  {
    id: 2,
    name: 'Project 2',
    currentHours: 10,
    maxHours: 25,
  }
]

export const handlers = [
  http.get('/api/projects', async () => HttpResponse.json(projectList))
]