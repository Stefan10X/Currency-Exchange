const currencies = {
  result: "success",
  documentation: "https://www.exchangerate-api.com/docs",
  terms_of_use: "https://www.exchangerate-api.com/terms",
  time_last_update_unix: 1671235201,
  time_last_update_utc: "Sat, 17 Dec 2022 00:00:01 +0000",
  time_next_update_unix: 1671321601,
  time_next_update_utc: "Sun, 18 Dec 2022 00:00:01 +0000",
  base_code: "ALL",
  conversion_rates: {
    EUR: 0.008734,
    USD: 0.009283,
    GBP: 0.007517,
    RON: 0.043,
    BGN: 0.01708,
    CHF: 0.008613,
    JPY: 1.2629,
    AED: 0.03409,
    AFN: 0.808,
    AMD: 3.665,
    ANG: 0.01662,
    AOA: 4.7513,
    ARS: 1.5978,
    AUD: 0.01364,
    AWG: 0.01662,
    AZN: 0.01579,
    BAM: 0.01708,
    BBD: 0.01857,
    BDT: 0.9638,
    BHD: 0.003491,
    BIF: 19.2218,
    BMD: 0.009283,
    BND: 0.01256,
    BOB: 0.06431,
    BRL: 0.04912,
    BSD: 0.009283,
    BTN: 0.7686,
    BWP: 0.1193,
    BYN: 0.0287,
    BZD: 0.01857,
    CAD: 0.01261,
    CDF: 19.083,
    CLP: 8.1059,
    CNY: 0.06472,
    COP: 44.3609,
    CRC: 5.5156,
    CUP: 0.2228,
    CVE: 0.9631,
    CZK: 0.212,
    DJF: 1.6498,
    DKK: 0.06516,
    DOP: 0.5116,
    DZD: 1.2775,
    EGP: 0.2294,
    ERN: 0.1392,
    ETB: 0.497,
    FJD: 0.02032,
    FKP: 0.007517,
    FOK: 0.06516,
    GEL: 0.02472,
    GGP: 0.007517,
    GHS: 0.09344,
    GIP: 0.007517,
    GMD: 0.5872,
    GNF: 80.7507,
    GTQ: 0.07312,
    GYD: 1.9425,
    HKD: 0.07228,
    HNL: 0.2291,
    HRK: 0.06581,
    HTG: 1.3509,
    HUF: 3.5354,
    IDR: 143.1106,
    ILS: 0.03183,
    IMP: 0.007517,
    INR: 0.7686,
    IQD: 13.545,
    IRR: 399.307,
    ISK: 1.3174,
    JEP: 0.007517,
    JMD: 1.4243,
    JOD: 0.006582,
    KES: 1.1409,
    KGS: 0.7894,
    KHR: 38.3165,
    KID: 0.01364,
    KMF: 4.2968,
    KRW: 12.1365,
    KWD: 0.002848,
    KYD: 0.007736,
    KZT: 4.3469,
    LAK: 159.5376,
    LBP: 13.9945,
    LKR: 3.3952,
    LRD: 1.4314,
    LSL: 0.1603,
    LYD: 0.04483,
    MAD: 0.09722,
    MDL: 0.1794,
    MGA: 41.1541,
    MKD: 0.5367,
    MMK: 19.4865,
    MNT: 31.8925,
    MOP: 0.07444,
    MRU: 0.3494,
    MUR: 0.4075,
    MVR: 0.1436,
    MWK: 9.5378,
    MXN: 0.1829,
    MYR: 0.041,
    MZN: 0.5955,
    NAD: 0.1603,
    NGN: 4.1423,
    NIO: 0.3389,
    NOK: 0.09085,
    NPR: 1.2297,
    NZD: 0.01446,
    OMR: 0.003569,
    PAB: 0.009283,
    PEN: 0.03547,
    PGK: 0.03271,
    PHP: 0.5179,
    PKR: 2.0877,
    PLN: 0.04088,
    PYG: 67.1215,
    QAR: 0.03379,
    RSD: 1.0234,
    RUB: 0.5943,
    RWF: 9.866,
    SAR: 0.03481,
    SBD: 0.0761,
    SCR: 0.1222,
    SDG: 4.6068,
    SEK: 0.09496,
    SGD: 0.01256,
    SHP: 0.007517,
    SLE: 0.1738,
    SLL: 173.7915,
    SOS: 5.2769,
    SRD: 0.296,
    SSP: 6.2106,
    STN: 0.214,
    SYP: 23.1152,
    SZL: 0.1603,
    THB: 0.3236,
    TJS: 0.09378,
    TMT: 0.0324,
    TND: 0.02897,
    TOP: 0.02196,
    TRY: 0.1732,
    TTD: 0.0629,
    TVD: 0.01364,
    TWD: 0.2839,
    TZS: 21.6907,
    UAH: 0.3415,
    UGX: 34.2971,
    UYU: 0.3599,
    UZS: 105.1424,
    VES: 0.1464,
    VND: 218.551,
    VUV: 1.1126,
    WST: 0.02494,
    XAF: 5.7291,
    XCD: 0.02506,
    XDR: 0.006984,
    XOF: 5.7291,
    XPF: 1.0422,
    YER: 2.3237,
    ZAR: 0.1603,
    ZMW: 0.163,
    ZWL: 6.188,
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

rightDropdown.value = currencyArrJSON[3];

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
  <div class = 'common1'>
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

  <div class = 'common2'>
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

  result.innerHTML = "";
});
