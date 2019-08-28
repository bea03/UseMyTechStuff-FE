import React, { useState } from "react";
import ItemCardTwo from "./itemCardTwo.js";
import { audioList } from '../../DeviceLists.js';

export default function AudioList () {
  const [audioLister, setAudioLister ]= useState(audioList);

  return (
    <section className="computer-list">
        <h3>Audio</h3>
       {audioLister.map(data => <ItemCardTwo
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
