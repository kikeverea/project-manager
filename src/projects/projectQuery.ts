import { queryOptions } from '@tanstack/react-query'
import api from './projectService'
import type { Project } from './types.ts'

export const projectQuery = (id: Project['id']) =>
  queryOptions({
    queryKey: ['project', id],
    queryFn: () => api.getProject(id),
  })
