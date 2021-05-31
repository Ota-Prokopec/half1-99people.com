


const createquiz__answer____centerarray = document.getElementsByClassName("createquiz__answer____center")
for (let i = 0; i < createquiz__answer____centerarray.length; i ++) {

  createquiz__answer____centerarray[i].addEventListener("dblclick", () => {

    const element = createquiz__answer____centerarray[i]
    zrusitVybranijinychodpovedi__createquiz();
    element.style.background = "lightgreen";

  })

}
function zrusitVybranijinychodpovedi__createquiz() {

  for (let i = 0; i < createquiz__answer____centerarray.length; i ++) {

    const element = createquiz__answer____centerarray[i]

    element.style.background = "none";


  }

}
