import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import DailyOrders from '../../features/dailyOrders/componets/daily-orders';

export const Route = createFileRoute('/mock/daily-orders')({
  component: RootComponent,
  staticData: { layoutType: 'layout2' },
})

function RootComponent() {
  return (
    <React.Fragment>
      <DailyOrders />
    </React.Fragment>
  )
}

