import React, { useState } from "react";
import ItemCardTwo from "./itemCardTwo.js";
import { cameraList } from '../../DeviceLists.js';

export default function CameraList () {
  const [cameraLister, setCameraLister ]= useState(cameraList);

  return (
    <section className="computer-list">
        <h3>Cameras & Videocameras</h3>
       {cameraLister.map(data => <ItemCardTwo
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
