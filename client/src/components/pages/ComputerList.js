import React, { useState } from "react";
import ItemCardTwo from "./itemCardTwo.js";
import { computerList } from '../../DeviceLists.js';
import '../../styles/List.css';
import { NavLink } from 'react-router-dom';

export default function ComputerList () {
  const [computerLister, setComputerLister ]= useState(computerList);

  return (
    <section className="computer-list list-container">
    <div className="list-top">


              <NavLink to='/'><button>Home</button></NavLink>
          
    </div>

    <div className="list-content">
    <h3>Desktops & Laptops</h3>
       {computerLister.map(data => <ItemCardTwo
                key={data.id}
                description={data.description}
                src={data.src}
                model={data.model}
                sku={data.sku}
                alt={data.alt}
                />
            )}
    </div>
    </section>
  )
}
