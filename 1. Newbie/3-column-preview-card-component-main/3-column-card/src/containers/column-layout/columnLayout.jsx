import React from 'react';
import "./columnLayout.css";

const ColumnLayout = ({icon, title, info}) => (    
   
    <div className='container-fluid' id={'card-column-' + title}>
        <div className='container-fluid' id='card-column-img'>
            <picture>
                <img src={icon} alt={title + " Icon"}></img>
            </picture>
        </div>
        <h1>{title}</h1>
        <p>{info}</p>
        <button type='button' className='btn btn-light' id={"btn-" + title}><p>Learn More</p></button>
    </div>
)

export default ColumnLayout;
