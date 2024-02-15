import React from 'react'
import { DashboardCard } from './card'
import DashboardLineChart from './lineChart'

export const Dashboard = () =>{
  return (
    <>
    <DashboardCard/>
    <br/>
    <DashboardLineChart/>
    </>
  )
}
