import React from "react";
import type { TinaTemplate } from "tinacms";

export const Googlemaps = ({ data}) => {
  return (
    <>
<div className="ifream">
  <div>
    <iframe width="100%" height="976"
            src="https://maps.google.com/maps?width=100%25&amp;height=976&amp;hl=en&amp;q=Budapest,%20Derkovits%20u.%209,%201126+(Nitro%20Digital%20Solutions%20Kft.)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
      href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
  </div>
</div>
    </>
  );
};

export const googlemapsBlockSchema: TinaTemplate = {
  name: "googlemaps",
  label: "Googlemaps",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title"
    }
  ]
};
