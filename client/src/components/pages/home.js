import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Links from '../links/Links.js';
import { homeData, footerHome } from '../../data.js';

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
               <NavLink to='/login'><button>Sign In</button></NavLink>
               <NavLink to='/registration'><button>Join</button></NavLink>
            </div>

            <div className='top-content'>
                <img src='https://via.placeholder.com/150'/>
                <div className='top'>
                    <p>USE MY TECH STUFF</p>
                    <input type='text' placeholder='SEARCH' />
                    <button>List your product for rent</button>
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