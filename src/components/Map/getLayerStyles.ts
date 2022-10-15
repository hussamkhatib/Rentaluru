import type { FillLayer } from "react-map-gl";

const linearHeatMapColors = [
  "#94f80b",
  "#93ff00",
  "#75e41c",
  "#54c527",
  "#40b02a",
  "#2c9b2a",
  "#198729",
  "#047326",
];

export const getStops = (a: number, b: number): [number, string][] => {
  const diff = (b - a) / 8;
  return Array.from({ length: 8 }, (_, i) => [
    diff * i,
    linearHeatMapColors[i],
  ]);
};

// property -> values on the geojson
const getLayerStyles = (
  property: string,
  min: number,
  max: number
): FillLayer => {
  return {
    id: "data",
    source: "my-data",
    type: "fill",
    paint: {
      "fill-outline-color": "rgb(52,51,50)",
      "fill-color": {
        property,
        stops: getStops(min, max),
      },
    },
  };
};

export default getLayerStyles;

// dynamic classes does not work with tailwind
export const linearHeatMapColorsTailclasses = [
  "bg-[#94f80b]",
  "bg-[#93ff00]",
  "bg-[#75e41c]",
  "bg-[#54c527]",
  "bg-[#40b02a]",
  "bg-[#2c9b2a]",
  "bg-[#198729]",
  "bg-[#047326]",
];
