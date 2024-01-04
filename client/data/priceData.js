import fakeData from "./fakeStore";

const totalSum = fakeData.reduce((accumulator, product) => {
  return accumulator + parseFloat(product.price) || 0;
}, 0);
const discountTotal = (totalSum * 10) / 100;
const shipping = 8;

const formattedSum = totalSum.toFixed(2);
const formattedDiscount = discountTotal.toFixed(2);
const formattedShipping = shipping.toFixed(2);

export { formattedSum, formattedDiscount, formattedShipping, shipping };
