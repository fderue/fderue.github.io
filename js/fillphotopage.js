const landscapeRefs = [
  {
    url: "https://c1.staticflickr.com/9/8556/29503175075_c171e41180_b.jpg",
    photoName: "Tree on Grand Canyon",
  },
  {
    url: "https://c1.staticflickr.com/9/8069/29394628082_0a7d9b0169_k.jpg",
    photoName: "GrandCanyon",
  },
  {
    url: "https://c1.staticflickr.com/9/8028/29423044441_7a11e28cf3_k.jpg",
    photoName: "gaspeLakeReflect",
  },
  {
    url: "https://live.staticflickr.com/65535/53942155225_999bf7eb68_k.jpg",
    photoName: "Touquet Beach",
  },
  {
    url: "https://live.staticflickr.com/65535/53941952013_8507dac28a_k.jpg",
    photoName: "Muraille Chine",
  },
  {
    url: "https://live.staticflickr.com/65535/53941701266_3b562dc962_k.jpg",
    photoName: "Dolomites Cirque",
  },
  {
    url: "https://c1.staticflickr.com/9/8478/29423043211_a7d7d89360_k.jpg",
    photoName: "gaspeBeach",
  },
  {
    url: "https://live.staticflickr.com/65535/53941952023_5f266373ea_k.jpg",
    photoName: "Lac Sepaq Reflection",
  },
  {
    url: "https://live.staticflickr.com/65535/53940796302_210f0ff1bb_k.jpg",
    photoName: "Sepaq Automne Color",
  },
  {
    url: "https://live.staticflickr.com/65535/53941952018_3902f59a5f_k.jpg",
    photoName: "Tadoussac Boat Pied De Vent",
  },
  {
    url: "https://c1.staticflickr.com/1/382/31532073614_dd6441e648_k.jpg",
    photoName: "montrealNight",
  },
  {
    url: "https://c1.staticflickr.com/9/8028/28878254764_e952b0388a_k.jpg",
    photoName: "fromRockefeller",
  },
  {
    url: "https://c1.staticflickr.com/9/8850/29423091091_449e869647_k.jpg",
    photoName: "newyorkBuilding",
  },

  {
    url: "https://live.staticflickr.com/4352/37247622126_a2370019e6_k.jpg",
    photoName: "churchGray",
  },
  {
    url: "https://live.staticflickr.com/4381/36584391564_deda6d83d3_k.jpg",
    photoName: "preportGray",
  },
];

const portraitRefs = [
  {
    url: "https://c1.staticflickr.com/1/456/31957884643_bf85d37f2f_k.jpg",
    photonName: "dog",
  },
];

const streetRefs = [
  {
    url: "https://c1.staticflickr.com/9/8234/29396263822_9b7cf1e320_k.jpg",
    photoName: "bikeFast",
  },
  {
    url: "https://c1.staticflickr.com/9/8438/29504799075_b1de974790_k.jpg",
    photoName: "skiJumpFast",
  },
  {
    url: "https://c1.staticflickr.com/9/8531/29396293212_c9fed57b0e_k.jpg",
    photoName: "snowboard",
  },
  {
    url: "https://c1.staticflickr.com/1/316/32754181056_b8f1ca3d0e_k.jpg",
    photoName: "glassReflection",
  },
];

const astroRefs = [
  {
    url: "https://live.staticflickr.com/65535/53942073219_d2ed3307d0_k.jpg",
    photoName: "Milky way on island",
  },
  {
    url: "https://live.staticflickr.com/65535/53941990098_0a802fd74c_k.jpg",
    photoName: "Milky Way on Zec Matika FX",
  },
  {
    url: "https://live.staticflickr.com/65535/53941990128_e818dfc67e_k.jpg",
    photoName: "Milky Way only",
  },
];

const categoryToRefMap = {
  landscape: landscapeRefs,
  portrait: portraitRefs,
  street: streetRefs,
  astro: astroRefs,
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function loadDynamicContent() {
  let photoContainer = document.getElementById("photos");

  const category = getQueryParam("category");
  photoRefs = categoryToRefMap[category];
  photoRefs.forEach((item) => {
    let linkElem = document.createElement("a");
    linkElem.className = "fancybox-buttons";
    linkElem.setAttribute("data-fancybox-group", "button");
    linkElem.href = item.url;
    linkElem.style.display = "block";

    let imgElem = document.createElement("img");
    imgElem.alt = item.photoName;
    imgElem.src = item.url;
    linkElem.appendChild(imgElem);

    photoContainer.appendChild(linkElem);
  });
}

document.addEventListener("DOMContentLoaded", loadDynamicContent);
