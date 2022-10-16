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
    }
  }
  return str;
};
export default transformInput;
