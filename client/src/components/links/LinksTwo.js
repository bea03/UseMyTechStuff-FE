import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinksTwo = (props) => {
  const StyledDiv = styled.div`
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: ${props.flex};
    margin-bottom: 2%;
    
  `;

  const StyledImg = styled.img`
    display: block;
    margin: auto;
    width: 50px;
    height: 50px;
  `;

  const StyledPara = styled.p`
    color: #606276;
    text-align: center;
  `;

  const StyledHeader = styled.h5`
    color: #2E2F38;
    text-align: center;
    margin: auto;
  `;
  return (
        <StyledDiv className="top-rated">
          <NavLink to={props.href}><StyledImg
            src={props.src}
            alt={props.alt}
          /></NavLink>
          <StyledHeader >{props.title}</StyledHeader>
          <StyledPara>{props.price}</StyledPara>
        </StyledDiv>
  );
};
export default LinksTwo;
