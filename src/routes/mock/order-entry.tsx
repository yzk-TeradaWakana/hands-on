import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import OrderEntry from '../../features/orderEntry/components/order-entry'

export const Route = createFileRoute('/mock/order-entry')({
  component: RootComponent,
  staticData: { layoutType: 'layout2' },
})

function RootComponent() {
  return (
    <React.Fragment>
      <OrderEntry />
    </React.Fragment>
  )
}
