import type { FillLayer } from "react-map-gl";

export const linearHeatMapColors = [
  "#fff33b",
  "#fdc70c",
  "#f3903f",
  "#ed683c",
  "#e93e3a",
];

// export const linearHeatMapLightColors = [
//   "#fff11f",
//   "#fff9db",
//   "#ffefdd",
//   "#ffeae1",
//   "#ffe5e4",
// ];
const seq = [0, 10, 25, 50, 100];

export const getStops = (min: number, max: number) => (colors: any) => {
  const range = max - min;
  return colors.map((color: any, i: number) => [
    (range / 100) * seq[i] + min,
    color,
  ]);
};

export const getLayerStyles = (
  activeAreaId: number,
  property: string,
  min: number,
  max: number
) => {
  const lightStops = getStops(min, max)(linearHeatMapColors);
  const darkStops = getStops(min, max)(linearHeatMapColors);

  const layer: FillLayer = {
    id: "data",
    source: "polygon",
    type: "fill",
    paint: {
      "fill-outline-color": "rgb(52,51,50)",
      "fill-color": {
        property,
        stops: lightStops,
      },
    },
    ...(activeAreaId && { filter: ["!=", "area_id", activeAreaId] }),
  };

  const highlightedLayer: FillLayer = {
    id: "data-highlighted",
    source: "polygon",
    type: "fill",
    paint: {
      "fill-opacity": 0.25,
      "fill-antialias": true,
      "fill-color": {
        property,
        stops: darkStops,
      },
    },
    ...(activeAreaId && { filter: ["==", "area_id", activeAreaId] }),
  };

  return { layer, highlightedLayer };
};

export default getLayerStyles;

// dynamic classes does not work with tailwind
export const linearHeatMapColorsTailclasses = [
  "bg-[#fff33b]",
  "bg-[#fdc70c]",
  "bg-[#f3903f]",
  "bg-[#ed683c]",
  "bg-[#e93e3a]",
];
