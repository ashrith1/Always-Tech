window.addEventListener("load", () => {
  const tabs = document.getElementsByClassName("tab");
  const tabContents = document.getElementsByClassName("tab-content");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("selected");
        tabContents[i].classList.remove("selected");
      }
      tabs[i].classList.add("selected");
      tabContents[i].classList.add("selected");
    });
  }

  const cards = document.getElementsByClassName("card");
  const views = document.getElementsByClassName("view");

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      for (let i = 0; i < tabs.length; i++) {
        cards[i].classList.add("hide");
        views[i].classList.remove("selected");
      }
      views[i].classList.add("selected");
    });
  }

  const goBack = document.getElementsByClassName("back");
  for (let i = 0; i < goBack.length; i++) {
    goBack[i].addEventListener("click", () => {
      for (let i = 0; i < tabs.length; i++) {
        cards[i].classList.remove("hide");
        views[i].classList.remove("selected");
      }
    });
  }
});
