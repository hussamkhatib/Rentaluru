import type { FillLayer } from "react-map-gl";

const layerStyle: FillLayer = {
  id: "data",
  source: "my-data",
  type: "fill",
  paint: {
    "fill-outline-color": "rgb(52,51,50)",
    "fill-color": {
      property: "averageRent",
      stops: [
        [30, "#94f80b"],
        [40, "#93ff00"],
        [50, "#75e41c"],
        [60, "#54c527"],
        [70, "#40b02a"],
        [80, "#2c9b2a"],
        [90, "#198729"],
        [100, "#047326"],
      ],
    },
  },
};

export default layerStyle;
