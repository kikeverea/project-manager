import { useQuery } from '@tanstack/react-query'
import api from './projectService.ts'
import LoadingIndicator from '../assets/indicator.svg?react'

const ProjectList = () => {

  const { data: projects = [], isLoading } = useQuery({ queryKey: [ 'projects' ], queryFn: api.getProjects })

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Horas</th>
          <th>Max. Horas</th>
        </tr>
      </thead>
      <tbody>
        { isLoading &&
          <div role='status'>
            <LoadingIndicator/>
          </div>
        }
        { !isLoading && projects.length
          ? projects.map(item => (
              <tr key={item.id}>
                <td>Something</td>
              </tr>
            )
          )
          : <tr>
              <td>No hay proyectos</td>
            </tr>
        }
      </tbody>
    </table>
  )
}

export default ProjectList