const transformInput = (input: any) => {
  let str = "";
  if (input.rent) {
    const { rent } = input;
    if (rent.filter && rent.value) {
      const { filter, value } = rent;
      if (filter === "in range") {
        const [min, max] = value;

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

  if (input.deposit) {
    const { deposit } = input;
    if (deposit.filter && deposit.value) {
      const { filter, value } = deposit;
      if (filter === "in range") {
        const [min, max] = value;

        if (min && max && +min < +max) {
          const rentStr = `deposit-range=${min}-${max}`;
          str = str.concat(rentStr);
        }
      }
      if (filter === "above") {
        const rentStr = `deposit-above=${value}`;
        str = str.concat(rentStr);
      }
      if (filter === "below") {
        const rentStr = `deposit-below=${value}`;
        str = str.concat(rentStr);
      }
      if (filter === "exact") {
        const rentStr = `deposit-exact=${value}`;
        str = str.concat(rentStr);
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
