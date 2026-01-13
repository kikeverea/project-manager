import { getRouteApi } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import api from './projectService.ts'
import type { Project } from './types'
import { trackableHours, trackableOverLimit } from './trackable.ts'
import Draggable from '../components/Draggable.tsx'

const route = getRouteApi('/projects/$id')

const ProjectItem = () => {

  const { id } = route.useParams()

  const { data: project = null } = useQuery<Project | null>(
    { queryKey: [ 'project', id ], queryFn: () => api.getProject(id) }
  )

  if (project === null)
    return <div>No se ha encontrado el proyecto</div>

  return (
    <div className='py-4'>
      <div className='py-2'>
        Name: { project.name }
      </div>
      <div className={`py-2 ${trackableOverLimit(project) ? 'text-red-800' : ''}`}>
        Hours: { trackableHours(project) }
      </div>
      <Draggable />
    </div>
  )
}

export default ProjectItem