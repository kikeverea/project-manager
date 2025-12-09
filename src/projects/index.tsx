import { useQuery } from '@tanstack/react-query'
import api from './projectService.ts'
import LoadingIndicator from '../components/LoadingIndicator'
import ClockifyLogo from '../assets/clockify.svg?react'
import { Link } from '@tanstack/react-router'
import { trackableHours } from './trackable.ts'

const ProjectList = () => {

  const { data: projects = [], isLoading } = useQuery({ queryKey: [ 'projects' ], queryFn: api.getProjects })

  const showProjects = !isLoading && projects.length

  return (
    <table className='w-full max-w-sm border border-gray-200'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Horas</th>
          <th></th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        { showProjects
          ? projects.map(project => (
              <tr key={project.id}>
                <td>
                  <Link to={`/projects/${project.id}`}>
                    { project.name }
                  </Link>
                </td>
                <td>{ trackableHours(project) }</td>
                <td>
                  { project.tracking &&
                    <p role='status' aria-label='tracking'>tracking...</p>
                  }
                </td>
                <td><ClockifyLogo className='w-6 h-6' /></td>
              </tr>
            ))
          : <tr>
              <td colSpan={ 3 } className='text-center py-2'>
                { isLoading
                  ? <LoadingIndicator centered={ true }/>
                  : 'No hay proyectos'
                }
              </td>
            </tr>
        }
      </tbody>
    </table>
  )
}

export default ProjectList