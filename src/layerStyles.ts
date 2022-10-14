/**
 * @LINK: https://docs.mapbox.com/mapbox-gl-js/example/timeline-animation/
 */

const layerStyle = {
  id: "area",
  type: "fill",
  paint: {
    "fill-color": [
      "interpolate",
      ["linear"],
      ["get", "value"],
      0,
      "#F2F12D",
      20,
      "#EED322",
      40,
      "#DA9C20",
      64,
      "#B86B25",
      76,
      "#8B4225",
      88,
      "#723122",
      100,
      "#fc3401",
    ],
  },
};

export default layerStyle;
