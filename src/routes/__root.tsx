import * as React from 'react'
import { createRootRoute } from '@tanstack/react-router'
import AppLayout from '../components/common/layouts/AppLayout'

export const Route = createRootRoute({
  component: RootComponent,
  staticData: {layoutType : 'layout1'}
})

function RootComponent() {
  return (
    <React.Fragment>
      <AppLayout />
    </React.Fragment>
  )
}