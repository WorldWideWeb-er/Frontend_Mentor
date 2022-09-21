import React from 'react';
import "./Card.css";

import ColumnLayout from '../../containers/column-layout/columnLayout';
import { iconSedans, iconSuvs, iconLuxury } from '../Card/index';
//Card Info Array here:
const sedanCardData =[
    {
        icon:"iconSedans",
        title:"Sedans",
        info:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
}]

const suvCardData =[
    {
        icon:"icon-suvs",
        title:"SUVs",
        info:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
}]

const luxaryCardData =[
    {
        icon:"icon-luxary",
        title:"Luxury",
        info:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
}]


const Card = () => {
    return(
        <section className='container-fluid' id="card">
            {sedanCardData.map ((data) => (
                <ColumnLayout icon={iconSedans} title={data.title} info={data.info}/>
            ))}
            {suvCardData.map ((data) => (
                <ColumnLayout icon={iconSuvs} title={data.title} info={data.info}/>
            ))}
            {luxaryCardData.map ((data) => (
                <ColumnLayout icon={iconLuxury} title={data.title} info={data.info}/>
            ))}
        </section>
    )
} 
export default Card