const transformInput = (input: any) => {
  let str = "";
  if (input.rent) {
    const { rent } = input;
    if (rent.filter && rent.value) {
      const { filter, value } = rent;
      if (filter === "in range") {
        const [min, max] = value;
        console.log(min, max);

        if (min && max && +min < +max) {
          const rentStr = `rent-range=${min}-${max}`;
          str = str.concat(rentStr);
          // rent-range=42000-50000
        }
      }
      if (filter === "above") {
        const rentStr = `rent-above=${value}`;
        str = str.concat(rentStr);
        //  rent-above=42000
      }
      if (filter === "below") {
        const rentStr = `rent-below=${value}`;
        str = str.concat(rentStr);
        // rent-below=42000
      }
      if (filter === "exact") {
        const rentStr = `rent-exact=${value}`;
        str = str.concat(rentStr);
        // rent-exact=42000
      }
    }
  }
  if (input.vehicle) {
    const { vehicle } = input;
    if (vehicle["twoW"] === true) {
      const twoWStr = `twoW=true`;
      str = !str ? str.concat(twoWStr) : str.concat(`&${twoWStr}`);
    }
    if (vehicle["fourW"] === true) {
      const fourWStr = `fourW=true`;
      str = !str ? str.concat(fourWStr) : str.concat(`&${fourWStr}`);
    }
  }
  return str;
};
export default transformInput;