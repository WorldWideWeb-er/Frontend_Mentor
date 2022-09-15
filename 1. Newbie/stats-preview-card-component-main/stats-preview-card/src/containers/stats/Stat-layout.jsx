import React from 'react';
import './Stat-layout.css';

const StatLayout =({ stat, title }) => (
    <div className='container-fluid' id='stats-stats_cont'>
        <div className='container-fluid' id='stat-stats_info'>
            <p>{stat}</p>
        </div>
        <div className='container-fluid' id='stat-stats_desc'>
            <p>{title}</p>
        </div>
    </div>
);

export default StatLayout