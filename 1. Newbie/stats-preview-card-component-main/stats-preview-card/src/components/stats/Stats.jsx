import React from 'react';
import "./Stats.css";

import StatLayout from '../../containers/stats-layout/Stat-layout';
const statsData =[
    {
        stat:"10k+",
        title:"Companies"
    },
    {
        stat:"314",
        title:"Templates"
    },
    {
        stat:"12M+",
        title:"Queries"
    }
]

const Stats = () => {
    return (
        <section className='container-fluid' id="stat-stats">
            {statsData.map((item , index) => (
                <StatLayout stat={item.stat} title={item.title} />
            ))}
        </section>
    )
}

export default Stats