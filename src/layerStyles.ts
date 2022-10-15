import type { FillLayer } from "react-map-gl";

const layerStyle: FillLayer = {
  id: "data",
  source: "my-data",
  type: "fill",
  paint: {
    "fill-outline-color": "rgb(52,51,50)",
    "fill-color": {
      property: "avgRent",
      stops: [
        [0, "#94f80b"],
        [5000, "#93ff00"],
        [15000, "#75e41c"],
        [22000, "#54c527"],
        [30000, "#40b02a"],
        [35000, "#2c9b2a"],
        [40000, "#198729"],
        [50000, "#047326"],
      ],
    },
  },
};

export default layerStyle;
