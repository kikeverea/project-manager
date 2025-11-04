import { http, HttpResponse } from 'msw'

export const handlers = [

  http.get('/api/example', async () => {
    return HttpResponse.json({})
  }),

]