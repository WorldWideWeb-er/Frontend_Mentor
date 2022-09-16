import React from 'react';
import "./Header.css";

import { moblieIMG, desktopIMG } from './imports';

const Header = () => {
    return(
        <section className='container-fluid' id='stats-header'> 
            <picture>
                <source media="(max-width:375px)" srcSet={moblieIMG} />
                <img src={desktopIMG} alt="Stats Image"></img>
            </picture>
        </section>
        
    )
}

export default Header