const currencies = {
  result: "success",
  documentation: "https://www.exchangerate-api.com/docs",
  terms_of_use: "https://www.exchangerate-api.com/terms",
  time_last_update_unix: 1676505601,
  time_last_update_utc: "Thu, 16 Feb 2023 00:00:01 +0000",
  time_next_update_unix: 1676592001,
  time_next_update_utc: "Fri, 17 Feb 2023 00:00:01 +0000",
  base_code: "ALL",
  conversion_rates: {
    AED: 0.03395,
    AFN: 0.8278,
    AMD: 3.6583,
    ANG: 0.01655,
    AOA: 4.7216,
    ARS: 1.7775,
    AUD: 0.01336,
    AWG: 0.01655,
    AZN: 0.01573,
    BAM: 0.01688,
    BBD: 0.01849,
    BDT: 0.9869,
    BGN: 0.01688,
    BHD: 0.003476,
    BIF: 19.2286,
    BMD: 0.009245,
    BND: 0.01232,
    BOB: 0.06406,
    BRL: 0.0481,
    BSD: 0.009245,
    BTN: 0.7656,
    BWP: 0.1213,
    BYN: 0.0288,
    BZD: 0.01849,
    CAD: 0.01237,
    CDF: 19.2515,
    CHF: 0.008533,
    CLP: 7.2718,
    CNY: 0.06325,
    COP: 44.1725,
    CRC: 5.2615,
    CUP: 0.2219,
    CVE: 0.9514,
    CZK: 0.2045,
    DJF: 1.643,
    DKK: 0.06437,
    DOP: 0.5202,
    DZD: 1.2639,
    EGP: 0.2828,
    ERN: 0.1387,
    ETB: 0.497,
    EUR: 0.008629,
    FJD: 0.02024,
    FKP: 0.007635,
    FOK: 0.06437,
    GBP: 0.007636,
    GEL: 0.02454,
    GGP: 0.007635,
    GHS: 0.1144,
    GIP: 0.007635,
    GMD: 0.5849,
    GNF: 80.1443,
    GTQ: 0.07249,
    GYD: 1.9522,
    HKD: 0.07253,
    HNL: 0.2282,
    HRK: 0.06501,
    HTG: 1.3873,
    HUF: 3.2762,
    IDR: 141.1952,
    ILS: 0.03259,
    IMP: 0.007635,
    INR: 0.7656,
    IQD: 13.4962,
    IRR: 393.5563,
    ISK: 1.3215,
    JEP: 0.007635,
    JMD: 1.4297,
    JOD: 0.006554,
    JPY: 1.2322,
    KES: 1.161,
    KGS: 0.8049,
    KHR: 37.783,
    KID: 0.01336,
    KMF: 4.245,
    KRW: 11.8765,
    KWD: 0.002834,
    KYD: 0.007704,
    KZT: 4.1483,
    LAK: 156.533,
    LBP: 13.9363,
    LKR: 3.3678,
    LRD: 1.4557,
    LSL: 0.1662,
    LYD: 0.04434,
    MAD: 0.09525,
    MDL: 0.1732,
    MGA: 39.7177,
    MKD: 0.5318,
    MMK: 19.4288,
    MNT: 32.5512,
    MOP: 0.07471,
    MRU: 0.3363,
    MUR: 0.4233,
    MVR: 0.1429,
    MWK: 9.4966,
    MXN: 0.1719,
    MYR: 0.04054,
    MZN: 0.5911,
    NAD: 0.1662,
    NGN: 4.2659,
    NIO: 0.3382,
    NOK: 0.09419,
    NPR: 1.225,
    NZD: 0.01469,
    OMR: 0.003555,
    PAB: 0.009245,
    PEN: 0.03558,
    PGK: 0.0326,
    PHP: 0.5099,
    PKR: 2.4476,
    PLN: 0.04111,
    PYG: 67.3578,
    QAR: 0.03365,
    RON: 0.04228,
    RSD: 1.0121,
    RUB: 0.685,
    RWF: 10.043,
    SAR: 0.03467,
    SBD: 0.0776,
    SCR: 0.1252,
    SDG: 4.851,
    SEK: 0.09613,
    SGD: 0.01232,
    SHP: 0.007635,
    SLE: 0.184,
    SLL: 183.9678,
    SOS: 5.2604,
    SRD: 0.3001,
    SSP: 6.9054,
    STN: 0.2114,
    SYP: 23.0359,
    SZL: 0.1662,
    THB: 0.3163,
    TJS: 0.0968,
    TMT: 0.03233,
    TND: 0.02864,
    TOP: 0.02195,
    TRY: 0.1742,
    TTD: 0.06289,
    TVD: 0.01336,
    TWD: 0.2805,
    TZS: 21.6306,
    UAH: 0.34,
    UGX: 34.0664,
    USD: 0.009245,
    UYU: 0.3617,
    UZS: 104.9459,
    VES: 0.2252,
    VND: 218.7836,
    VUV: 1.1091,
    WST: 0.02565,
    XAF: 5.6599,
    XCD: 0.02496,
    XDR: 0.006904,
    XOF: 5.6599,
    XPF: 1.0297,
    YER: 2.3159,
    ZAR: 0.1662,
    ZMW: 0.1788,
    ZWL: 7.9,
  },
};

const logo = document.querySelector(".logo");
const leftDropdown = document.querySelector(".left-dropdown");
const rightDropdown = document.querySelector(".right-dropdown");
const ammount = document.querySelector(".sum");
const result = document.querySelector(".result");
const convertBtn = document.querySelector(".convert-btn");
const swapBtn = document.querySelector(".swap");
const commonValues = document.querySelector(".common-values");

logo.addEventListener("click", function () {
  window.location.reload();
});

const currencyArrJSON = Object.keys(currencies.conversion_rates);
let html = "";
currencyArrJSON.forEach((currency) => {
  html += `
          <select name="currency" class="right-dropdown">
          <option>${currency}</option>
        `;
});

rightDropdown.innerHTML = html;
leftDropdown.innerHTML = html;

leftDropdown.value = "EUR";
rightDropdown.value = "RON";

rightDropdown.addEventListener("change", function () {
  result.innerHTML = "";
});

leftDropdown.addEventListener("change", function () {
  result.innerHTML = "";
});

let currency1 = 0;
let currency2 = 0;

const convert = function () {
  let value1 = 0;
  let value2 = 0;

  Object.entries(currencies.conversion_rates).forEach((currency) => {
    if (leftDropdown.value === currency[0]) {
      currency1 = currency[0];
    }
    if (rightDropdown.value === currency[0]) {
      currency2 = currency[0];
    }
  });

  Object.entries(currencies.conversion_rates).forEach((currency) => {
    if (leftDropdown.value === currency[0]) {
      value1 = currency[1];
    }
    if (rightDropdown.value === currency[0]) {
      value2 = currency[1];
    }
  });
  result.innerHTML = `
  <p>${ammount.value} ${currency1} =</p>
  <p><strong>${(ammount.value * (value2 / value1)).toFixed(
    4
  )} ${currency2} </strong></p>`;

  commonValues.innerHTML = `
  <div class = 'common common1'>
  <header class = 'common-header'>
  <p>${currency1}</p>
  <p>${currency2}</p>
  </header>
  <div class = 'values'>
    </header>
      <p>1 ${currency1}</p>
      <p>5 ${currency1}</p>
      <p>10 ${currency1}</p>
      <p>25 ${currency1}</p>
      <p>50 ${currency1}</p>
      <p>100 ${currency1}</p>
      <p>500 ${currency1}</p>
      <p>1000 ${currency1}</p>
      <p>5000 ${currency1}</p>
      <p>10000 ${currency1}</p>
      <p>50000 ${currency1}</p>
    </div>
  <div class = 'results'>
    <p>${(1 * (value2 / value1)).toFixed(2)} ${currency2}</p>
    <p>${(5 * (value2 / value1)).toFixed(2)} ${currency2}</p>
    <p>${(10 * (value2 / value1)).toFixed(2)} ${currency2}</p>
    <p>${(25 * (value2 / value1)).toFixed(2)} ${currency2}</p>
    <p>${(50 * (value2 / value1)).toFixed(2)} ${currency2}</p>
    <p>${(100 * (value2 / value1)).toFixed(2)} ${currency2}</p>
    <p>${(500 * (value2 / value1)).toFixed(2)} ${currency2}</p>
    <p>${(1000 * (value2 / value1)).toFixed(2)} ${currency2}</p>
    <p>${(5000 * (value2 / value1)).toFixed(2)} ${currency2}</p>
    <p>${(10000 * (value2 / value1)).toFixed(2)} ${currency2}</p>
    <p>${(50000 * (value2 / value1)).toFixed(2)} ${currency2}</p>
  </div>
  </div>

  <div class = 'common common2'>
  <header class = 'common-header'>
  <p>${currency2}</p>
  <p>${currency1}</p>
  </header>
  <div class = 'values'>
    <p>1 ${currency2}</p>
    <p>5 ${currency2}</p>
    <p>10 ${currency2}</p>
    <p>25 ${currency2}</p>
    <p>50 ${currency2}</p>
    <p>100 ${currency2}</p>
    <p>500 ${currency2}</p>
    <p>1000 ${currency2}</p>
    <p>5000 ${currency2}</p>
    <p>10000 ${currency2}</p>
    <p>50000 ${currency2}</p>
  </div>
<div class = 'results'>
  <p>${(1 * (value1 / value2)).toFixed(2)} ${currency1}</p>
  <p>${(5 * (value1 / value2)).toFixed(2)} ${currency1}</p>
  <p>${(10 * (value1 / value2)).toFixed(2)} ${currency1}</p>
  <p>${(25 * (value1 / value2)).toFixed(2)} ${currency1}</p>
  <p>${(50 * (value1 / value2)).toFixed(2)} ${currency1}</p>
  <p>${(100 * (value1 / value2)).toFixed(2)} ${currency1}</p>
  <p>${(500 * (value1 / value2)).toFixed(2)} ${currency1}</p>
  <p>${(1000 * (value1 / value2)).toFixed(2)} ${currency1}</p>
  <p>${(5000 * (value1 / value2)).toFixed(2)} ${currency1}</p>
  <p>${(10000 * (value1 / value2)).toFixed(2)} ${currency1}</p>
  <p>${(50000 * (value1 / value2)).toFixed(2)} ${currency1}</p>
</div>
</div>
  `;
};

convertBtn.addEventListener("click", function () {
  convert();
});

swapBtn.addEventListener("click", function () {
  let value1 = 0;
  let value2 = 0;

  Object.entries(currencies.conversion_rates).forEach((currency) => {
    if (leftDropdown.value === currency[0]) {
      currency2 = currency[0];
    }
    if (rightDropdown.value === currency[0]) {
      currency1 = currency[0];
    }
  });

  Object.entries(currencies.conversion_rates).forEach((currency) => {
    if (leftDropdown.value === currency[0]) {
      value2 = currency[1];
    }
    if (rightDropdown.value === currency[0]) {
      value1 = currency[1];
    }
  });
  result.innerHTML = `
  <p>${ammount.value} ${currency1} =</p>
  <p><strong>${(ammount.value * (value2 / value1)).toFixed(
    4
  )} ${currency2} </strong></p>`;
});

ammount.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    convert();
  }
});

swapBtn.addEventListener("click", function () {
  Object.entries(currencies.conversion_rates).forEach((currency) => {
    if (leftDropdown.value === currency[0]) {
      currency1 = currency[0];
    }
    if (rightDropdown.value === currency[0]) {
      currency2 = currency[0];
    }
  });

  if (leftDropdown.value === currency1 && rightDropdown.value === currency2) {
    leftDropdown.value = currency2;
    rightDropdown.value = currency1;
  } else if (
    leftDropdown.value === currency2 &&
    rightDropdown.value === currency1
  ) {
    leftDropdown.value = currency1;
    rightDropdown.value = currency2;
  }
});
