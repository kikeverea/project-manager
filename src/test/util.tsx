import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render as rtlRender } from '@testing-library/react'

import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider
} from "@tanstack/react-router";
import type { ReactNode } from "react";

const buildRouter = (children: ReactNode) => {
  const rootRoute = createRootRoute();
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => children,
  });
  const routeTree = rootRoute.addChildren([testRoute]);

  return createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: ['/'] }),
  });
}

export function render(children: ReactNode) {
  const router = buildRouter(children)

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 0,                 // everything is stale immediately
        refetchOnMount: 'always',     // force refetch even with initialData
        refetchOnWindowFocus: false,
        gcTime: Infinity
      },
      mutations: {
        retry: false,
      },
    },
  })

  return rtlRender(
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}