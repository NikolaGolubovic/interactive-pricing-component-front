const range = document.querySelector("#range");
const price = document.querySelector(".price-value");
const pageviews = document.querySelector(".pageviews");
const toggle = document.querySelector(".toggle");

const prices = [
  { "10K": 8 },
  { "50K": 12 },
  { "100K": 16 },
  { "500k": 24 },
  { "1M": 36 },
];

function discount(value) {
  return (value - value / 4).toFixed(2);
}

function toNormalPrice(value) {
  return (value + value / 3).toFixed(2);
}

let discountActive = false;

range.addEventListener("input", function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  const priceValue = Number(Object.values(prices[this.value]));
  const pageviewsValue = Object.keys(prices[this.value])[0];

  if (discountActive) {
    price.textContent = discount(priceValue);
    pageviews.textContent = pageviewsValue;
  } else {
    price.textContent = Number(priceValue).toFixed(2);
    pageviews.textContent = pageviewsValue;
  }

  this.style.background =
    "linear-gradient(to right, #a5f3eb 0%, #a5f3eb " +
    value +
    "%,  #eaeefb " +
    value +
    "%, #eaeefb 100%)";
});

toggle.addEventListener("click", function () {
  this.parentElement.classList.toggle("active");
  discountActive = !discountActive;
  if (discountActive) {
    price.textContent = discount(+price.textContent);
  } else {
    price.textContent = toNormalPrice(+price.textContent);
  }
});

window.addEventListener("load", function () {
  var value = ((range.value - range.min) / range.max - range.min) * 100;
  console.log(range.value);
  range.style.background =
    "linear-gradient(to right, #a5f3eb 0%, #a5f3eb " +
    value +
    "%, #eaeefb " +
    value +
    "%, #eaeefb 100%)";
});
