import React, { useState } from "react";
import ItemCardTwo from "./itemCardTwo.js";
import { gadgetsList } from '../../DeviceLists.js';

export default function GadgetList () {
  const [gadgetsLister, setGadgetsLister ]= useState(gadgetsList);

  return (
    <section className="computer-list">
        <h3>Audio</h3>
       {gadgetsLister.map(data => <ItemCardTwo
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
