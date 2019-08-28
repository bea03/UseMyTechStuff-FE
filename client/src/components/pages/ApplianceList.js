import React, { useState } from "react";
import ItemCardTwo from "./itemCardTwo.js";
import { applianceList } from '../../DeviceLists.js';

export default function ApplianceList () {
  const [applianceLister, setApplianceLister ]= useState(applianceList);

  return (
    <section className="computer-list">
        <h3>Appliances</h3>
       {applianceLister.map(data => <ItemCardTwo
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
