import React from 'react'
import { Outlet } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';

const Root = () => {
  return (
    <div>
      <Outlet />
      <Analytics />
    </div>
  )
}

export default Root