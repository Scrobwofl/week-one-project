const btnOne = document.querySelector("#btn-one");
const btnTwo = document.querySelector("#btn-two");
const btnThree = document.querySelector("#btn-three");
const btnFour = document.querySelector("#btn-four");
const btnFive = document.querySelector("#btn-five");

btnOne.addEventListener("click", () => btnEventHandler("one"));
btnTwo.addEventListener("click", () => btnEventHandler("two"));
btnThree.addEventListener("click", () => btnEventHandler("three"));
btnFour.addEventListener("click", () => btnEventHandler("four"));
btnFive.addEventListener("click", () => btnEventHandler("five"));

function btnEventHandler(sectionIdentifier) {
  const currentSection = document.querySelector(
    `#section-${sectionIdentifier}`
  );
  const existingImageContainer = currentSection.querySelector(`.additions`);

  if (existingImageContainer) {
    console.log(`It exists`);
    existingImageContainer.remove();
  } else {
    console.log(`It doesn't exists`);
    const newImageContainer = document.createElement("div");

    newImageContainer.classList.add(
      `additions`,
      `addition-${sectionIdentifier}`
    );

    currentSection.appendChild(newImageContainer);
  }
}
