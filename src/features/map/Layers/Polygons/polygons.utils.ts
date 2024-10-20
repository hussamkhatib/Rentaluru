import type { FillLayerSpecification } from "mapbox-gl";

export const linearHeatMapColors = [
  "#C1DBF2",
  "#4C91CD",
  "#21659E",
  "#123266",
  "#112B4B",
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
  activeAreaId: number | null,
  property: string,
  min: number,
  max: number
) => {
  const lightStops = getStops(min, max)(linearHeatMapColors);
  const darkStops = getStops(min, max)(linearHeatMapColors);

  const layer: FillLayerSpecification = {
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

  const highlightedLayer: FillLayerSpecification = {
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
  "bg-[#C1DBF2]",
  "bg-[#4C91CD]",
  "bg-[#21659E]",
  "bg-[#123266]",
  "bg-[#112B4B]",
];
