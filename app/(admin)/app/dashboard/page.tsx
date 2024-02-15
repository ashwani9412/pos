import React from 'react'
import { Dashboard } from '@/components/admin/dashboard'

export const metadata = {
    title: "App Dashboard",
    discription: "app dashboard"
}
export default function DashboardPage() {
  return (
    <div><Dashboard/></div>
  )
}