import React, { useState } from "react";
import ItemCardTwo from "./itemCardTwo.js";
import { computerList } from '../../DeviceLists.js';

export default function ComputerList () {
  const [computerLister, setComputerLister ]= useState(computerList);

  return (
    <section className="computer-list">
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
    </section>
  )
}
