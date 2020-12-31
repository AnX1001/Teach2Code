let lastClassname;
let className;

const faqArray = [
  "Du bør søke studieplass hos fagskoler/høyskoler eller ved universiteter. De tilbyr ulike studieprogrammer som gir allsidig trening.",
  "Kurset er egnet for de som trenger litt drahjelp i begynnelsen. De som skal starte på studier og trenger litt forbereding eller de som er interessert. Mange tar også et kurs for å kunne hjelpe sine barn med lekser",
];

// if faq link click show corresponding content

showFaq();

// show faq and find className and run answer
function showFaq() {
  for (i = 0; i < document.getElementsByTagName("li").length; i++) {
    document.getElementsByTagName("li")[i].onclick = (e) => {
      className = e.target.getAttribute("class").split(" "); // returns array
      lastClassname = className[1];
      console.log(lastClassname);
      console.log(className);

      faqResponse();
    };
  }
}

function faqResponse() {
  if (lastClassname === "hjem") {
    document.querySelector(".superBox").style.display = "block";
    document.querySelector(".superBox").style.marginTop = "100px";
    document.querySelector(".superBox").style.display = "flex";
    document.querySelector(".superBox").style.flexWrap = "wrap";
    document.querySelector(".superBox").style.height = "fit-content";

    document.querySelector(".faq").style.display = "none";
    document.querySelector(".bio").style.display = "none";
  } else if (lastClassname === "sporsmal") {
    document.querySelector(".superBox").style.display = "none";

    document.querySelector(".faq").style.display = "block";
    document.querySelector(".bio").style.display = "none";
    document.querySelector(".slink").style.display = "none";
  } else if (lastClassname === "studierom") {
    console.log("Closing faq and showing study room");
    document.querySelector(".superBox").style.display = "none";

    document.querySelector(".faq").style.display = "none";

    document.querySelector(".bio").style.display = "none";

    // open studierom page.
    window.open("studierom.html", "_self");
  } else if (lastClassname === "kursholder") {
    console.log("closing faq and showing bio");
    document.querySelector(".superBox").style.display = "none";

    document.querySelector(".faq").style.display = "none";
    document.querySelector(".bio").style.display = "block";

    setTimeout(() => {
      document.querySelector(".superBox").style.display = "block";

      document.querySelector(".bio").style.display = "none";
    }, 10000);
  }
}
