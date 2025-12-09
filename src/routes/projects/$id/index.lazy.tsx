import { createLazyFileRoute } from '@tanstack/react-router'
import ProjectItem from '../../../projects/ProjectItem'

export const Route = createLazyFileRoute('/projects/$id/')({
  component: ProjectItem,
})