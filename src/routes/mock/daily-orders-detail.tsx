import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import DailyOrdersDetail from '../../features/dailyOrdersDetail/components/daily-orders-detail'

export const Route = createFileRoute('/mock/daily-orders-detail')({
  component: RootComponent,
  staticData: { layoutType: 'layout2' },
})

function RootComponent() {
  return (
    <React.Fragment>
      <DailyOrdersDetail />
    </React.Fragment>
  )
}
