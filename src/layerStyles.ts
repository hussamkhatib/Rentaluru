/**
 * @LINK: https://docs.mapbox.com/mapbox-gl-js/example/timeline-animation/
 */

// const layerStyle = {
//   id: "area",
//   type: "fill",
//   paint: {
//     "fill-color": [
//       "interpolate",
//       ["linear"],
//       ["get", "value"],
//       0,
//       "#F2F12D",
//       20,
//       "#EED322",
//       40,
//       "#DA9C20",
//       64,
//       "#B86B25",
//       76,
//       "#8B4225",
//       88,
//       "#723122",
//       100,
//       "#fc3401",
//     ],
//   },
// };

const layerStyle = {
  id: "area",
  type: "fill",
  paint: {
    "fill-outline-color": "rgb(52,51,50)",
    "fill-color": {
      property: "value",
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
