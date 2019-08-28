import React, { useState } from "react";
import ItemCardTwo from "./itemCardTwo.js";
import { tvList } from '../../DeviceLists.js';

export default function TvList () {
  const [tvLister, setTvLister ]= useState(tvList);

  return (
    <section className="tv-list">
        <h3>TV & Home Theater</h3>
       {tvLister.map(data => <ItemCardTwo
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
