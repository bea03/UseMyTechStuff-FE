import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Links from '../links/Links.js';
import LinksTwo from '../links/LinksTwo.js';
import { homeData, footerHome, middleHome } from '../../data.js';
import '../../styles/home.css';



function Home () {
    const [homeLinks, setHomeLinks] = useState(homeData);
    const [footerLinks, setFooterLinks] =useState(footerHome);
    const [middleLinks, setMiddleLinks] =useState(middleHome);
    return (
        <div className='home-container'>
            <div className='nav-container'>


<img className="logo-image"
src='../../../img/logo-icon.png'
alt="logo"
/>


                {/*<h3> use my tech stuff</h3>*/}


<div className="button-box">
<NavLink to='/login'><button>Sign In</button></NavLink>
<NavLink to='/registration'><button>Join</button></NavLink>
</div>

            </div>


            <div className='top-content'>
              <h3>use my tech stuff</h3>
                <div className='top'>

                    <input type='text' placeholder='SEARCH' />

                </div>
            </div>
            <div className="nav-box">
            <h3>What can we help you find?</h3>
                {homeLinks.map(links => <Links key={links.id} text={links.text} href={links.href} src={links.src} alt={links.alt} flex={links.flex} />)}
            </div>
            <div className="nav-box">
              <h3>Most rented products</h3>

              {middleLinks.map(links => <LinksTwo key={links.id} price={links.price} title={links.title} href={links.href} src={links.src} alt={links.alt} flex={links.flex} />)}

            </div>

            <div className="nav-box">
            <h3>Would you like to list a tech product for rent?</h3>
            {footerLinks.map(links => <Links key={links.id} text={links.text} href={links.href} src={links.src} alt={links.alt} flex={links.flex}/>)}
            </div>
        </div>
    )
}

export default Home
