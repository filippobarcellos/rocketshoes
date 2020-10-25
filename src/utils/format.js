export const { format: formatPrice } = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "USD",
});
