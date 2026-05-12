{
   const welcomeMessage = () => {
     console.log("Witam serdecznie wszystkich programistów! Ten kod jest już w repozytorium Git.");
   }
   welcomeMessage();
const changeColorButton = document.querySelector(".button__changeColorBackground");

changeColorButton = addEventListener("click", () => {
    const body = document.querySelector(".body");
    body.classList.toogle("lightBackgroundColor");
});

changeColorButton();

}