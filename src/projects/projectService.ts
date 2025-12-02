import { apiFetch } from '../api/apiClient.ts'
import type { Project } from './types'

const getProjects = async (): Promise<Project[]> => {
  return await apiFetch<Project[]>('/projects')
}

const getProject = async (id: Project['id']): Promise<Project> => {
  return await apiFetch<Project>(`/projects/${id}`)
}

const createProject = async (payload: Project): Promise<Project> => {
  return await apiFetch<Project>(`/projects`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

const updateProject = async (list: Project): Promise<Project> => {
  return await apiFetch<Project>(`/projects/${list.id}`, {
    method: 'PUT',
    body: JSON.stringify(list),
  })
}

const deleteProject = async (list: Project): Promise<Project> => {
  await apiFetch<boolean>(`/projects/${list.id}`, { method: 'DELETE' })
  return list
}

export default { getProjects, getProject, createProject, updateProject, deleteProject }
