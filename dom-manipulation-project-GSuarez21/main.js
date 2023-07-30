const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  Title: document.querySelector(`#title`),
  Artist: document.querySelector(`#artist`),
  Url: document.querySelector(`#url`),
  box: document.getElementById("display"),
  RemoveBtn: document.getElementById("remove btn"),
};
console.log(DOMSelectors.button);

DOMSelectors.button.addEventListener("click", function (e) {
  e.preventDefault();
  let album = {};
  album.title = DOMSelectors.Title.value;
  album.artist = DOMSelectors.Artist.value;
  album.url = DOMSelectors.Url.value;
  // .value lets you get the values.element, in this case something you typed in

  console.log(album);
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card">
            <img class="display-img" src="
            ${album.url}"/>
            <h2 class="display-artist">${album.artist}</h2>
            <h3 class="display-album">${album.title}</h3>
             <button class="remove btn">Remove Album</button>`
  );
});

DOMSelectors.box.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove")) {
    const btn = event.target;
    const card = btn.parentElement;
    card.parentElement.removeChild(card);
  }
});
