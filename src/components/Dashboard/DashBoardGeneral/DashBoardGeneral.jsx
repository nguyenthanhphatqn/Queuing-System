import '../DashBoardGeneral/dashboardgeneral.css'
import React from 'react'
import Menubar from '../MenuBar/MenuBar'
import Chart from '../Chart/Chart'
import ChartWeek from '../ChartWeek/ChartWeek'
import Dashboard from '../Dashboard/Dashboard'

export default function DashboardGeneral() {
    return(
        <div className="dashboard">
            <Dashboard/>
             <Chart/>
             <ChartWeek/>  
            <Menubar/>
        </div>
    )
}
