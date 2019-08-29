import React, { useState } from "react";
import styled from 'styled-components';
import Links from '../links/Links.js';
import { navData } from '../../data.js';
import '../../styles/navPage.css';

export default function NavPage() {
  const [naviLinks, setNaviLinks] = useState(navData);
  return (
    <section className="nav-page">
      <div className="nav-top">
      <img
        className="logo-image"
        src='../../../img/logo-icon.png'
        alt="logo"
      />
<h3>What would you like to do?</h3>
      </div>
      <div className="nav-box">


      {naviLinks.map(links => <Links key={links.id} href={links.href} text={links.text} src={links.src} alt={links.alt} flex={links.flex} />)}

      </div>

    </section>
  );
}
