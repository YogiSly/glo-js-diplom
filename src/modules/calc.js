const calc = () => {
  const calcBlock = document.getElementById("calc");
  const typeGlass = document.getElementById("calc-type");
  const materialGlass = document.getElementById("calc-type-material");
  const squareGlass = document.getElementById("calc-input");
  const totalGlass = document.getElementById("calc-total");

  const countCalc = () => {
    let matVal = 1;
    let totalValue;

    squareGlass.value = squareGlass.value.replace(/[^\d\.]+/gi, "");
    if (materialGlass.value != "--") {
      matVal = +materialGlass.value;
    }
    totalValue =
      Math.floor(+typeGlass.value * +squareGlass.value * matVal * 10) / 10;
    totalGlass.value = totalValue;
  };
  if (calcBlock) {
    calcBlock.addEventListener("input", (e) => {
      if (
        e.target === typeGlass ||
        e.target === squareGlass ||
        e.target === materialGlass
      ) {
        countCalc();
      }
    });
  }
};
export default calc;
