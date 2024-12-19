import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  staticData: {layoutType : 'layout2'}
})

function RouteComponent() {
  return (<><h1>TanStack Router index</h1></>
  )
}
