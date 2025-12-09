import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import type { Project } from '../../../projects/types.ts'
import api from '../../../projects/projectService.ts'
import { projectQuery } from '../../../projects/projectQuery.ts'
import LoadingIndicator from '../../../components/LoadingIndicator.tsx'

export const Route = createFileRoute('/projects/$id')({
  loader: async ({ context, params }) => {
    await context.queryClient.ensureQueryData(projectQuery(params.id))
  },
  component: ProjectLayout,
})

function ProjectLayout() {
  const { id } = Route.useParams()

  const { data: project = null, isLoading, isError } = useQuery<Project | null>(
    { queryKey: [ 'project', id ], queryFn: () => api.getProject(id) }
  )

  if (isError) {
    return (
      <p>Project not found</p>
    )
  }

  return (
    <div>
      <h1>{ project?.name }</h1>

      <nav className='py-4'>
        <Link to="/projects/$id" params={{ id }} className="[&.active]:font-bold pe-2">
          Overview
        </Link>
        <Link to="/project/$id/tasks" params={{ id }} className="[&.active]:font-bold px-2">
          Tasks
        </Link>
        <Link to="/project/$id/interactions" params={{ id }} className="[&.active]:font-bold px-2">
          Interactions
        </Link>
        <Link to="/project/$id/documentation" params={{ id }} className="[&.active]:font-bold ps-2">
          Documentation
        </Link>
      </nav>

      { isLoading
        ? <LoadingIndicator />
        : <Outlet />
      }
    </div>
  )
}
