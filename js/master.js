//Start mune Click And Show The Links
let mune = document.querySelector(".header .content .mune");
mune.onclick = () => {
  //create overlay
  var overlay = document.createElement("div");
  overlay.className = "overlay";
  //create x
  var close = document.createElement("img");
  close.className = "close";
  close.src = "images/icon-close.svg";

  overlay.appendChild(close);
  //create img
  var imageLogo = document.createElement("img");
  imageLogo.src = "images/logo-bookmark.svg";
  imageLogo.className = "imageLogo";
  overlay.appendChild(imageLogo);

  //create links
  var lest = document.createElement("ul");
  lest.classList = "lest";
  var link1 = document.createElement("li");
  var Text1 = document.createTextNode("Features");
  link1.appendChild(Text1);
  lest.appendChild(link1);

  var link2 = document.createElement("li");
  var Text2 = document.createTextNode("Pricing");
  link2.appendChild(Text2);
  lest.appendChild(link2);

  var link3 = document.createElement("li");
  var Text3 = document.createTextNode("Contact");
  link3.appendChild(Text3);
  lest.appendChild(link3);

  var link4 = document.createElement("li");
  var Text4 = document.createTextNode("Login");
  link4.appendChild(Text4);
  lest.appendChild(link4);

  overlay.appendChild(lest);
  //create icons
  var Icons = document.createElement("div");
  Icons.className = "Icons";

  var twitter = document.createElement("img");
  twitter.className = "twitter";
  twitter.src = "images/icon-twitter.svg";
  Icons.appendChild(twitter);

  var facebook = document.createElement("img");
  facebook.className = "facebook";
  facebook.src = "images/icon-facebook.svg";
  Icons.appendChild(facebook);

  overlay.appendChild(Icons);

  document.body.appendChild(overlay);
};
document.addEventListener("click", e => {
  if (e.target.className === "close") {
    document.querySelector(".overlay").remove();
  }
});

// tab in three tabs
let options = document.querySelectorAll(".features .options li");
let tables = document.querySelectorAll(".tables .box");

options.forEach(lest => {
  lest.addEventListener("click", e => {
    options.forEach(re => {
      re.classList.remove("active");
    });
    e.target.classList.add("active");
    tables.forEach(tab => {
      tab.style.display = "none";
    });
    // console.log(e.target.dataset.table);
    document.querySelectorAll(e.target.dataset.table).forEach(data => {
      data.style.display = "flex";
    });
  });
});
//Click The Card(arrow ) action in show the Text buttom

let arrows = document.querySelectorAll(".card .box .content i");
let cardsText = document.querySelectorAll(".card .cards p");

arrows.forEach(el => {
  el.addEventListener("click", e => {
    e.target.parentNode.parentNode.lastElementChild.classList.toggle("show");
    // console.log(e.target.parentNode.parentNode.lastElementChild);
  });
});
