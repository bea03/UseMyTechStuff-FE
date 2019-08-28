import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Links from '../links/Links.js';
import { homeData, footerHome } from '../../data.js';
import '../../styles/home.css';

const NavDiv = styled.div`
    padding-top: 1.5rem;
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const StyledHeader = styled.h3`
    color: #454654;
    margin: 0 auto;
    width: 75%;
    padding-bottom: 5%;
`;

function Home () {
    const [homeLinks, setHomeLinks] = useState(homeData);
    const [footerLinks, setFooterLinks] =useState(footerHome);
    return (
        <div className='home-container'>
            <div className='nav-container'>
            <h4>umts</h4>
            <div>
               <NavLink to='/login'><button>Sign In</button></NavLink>
               <NavLink to='/registration'><button>Join</button></NavLink>
               </div>
            </div>

            <div className='top-content'>
                
                <div className='top'>
                    <h3>USE MY TECH STUFF</h3>
                    <input type='text' placeholder='SEARCH' />
                    <h3>What can we help you find?</h3>
                </div>
            </div>
            <NavDiv className="home-nav-box">

            {homeLinks.map(links => <Links key={links.id} text={links.text} href={links.href} src={links.src} alt={links.alt} flex={links.flex} />)}

            </NavDiv>
            <NavDiv className="footer-nav-box">
            <StyledHeader>Would you like to list a tech product for rent?</StyledHeader>
            {footerLinks.map(links => <Links key={links.id} text={links.text} href={links.href} src={links.src} alt={links.alt} flex={links.flex}/>)}
            </NavDiv>
        </div>
    )
}

export default Home