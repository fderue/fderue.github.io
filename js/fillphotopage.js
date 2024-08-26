const landscapeRefs = [
  {
    url: "https://c1.staticflickr.com/9/8556/29503175075_c171e41180_b.jpg",
    photoName: "Tree on Grand Canyon",
  },
  {
    url: "https://c1.staticflickr.com/9/8069/29394628082_0a7d9b0169_k.jpg",
    photoName: "GrandCanyon",
  },
];

const portraitRefs = [
  {
    url: "https://c1.staticflickr.com/1/456/31957884643_bf85d37f2f_k.jpg",
    photonName: "dog",
  },
];

const categoryToRefMap = {
  landscape: landscapeRefs,
  portrait: portraitRefs,
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
