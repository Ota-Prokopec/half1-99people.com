


document.getElementById("exitTofriendacount__frienddetail").addEventListener("click", () => {

  const element = document.getElementById("exitTofriendacount__frienddetail")

  if (element.getAttribute("type") === "friend") {

    zobrazeni(10)

  }
  else if (element.getAttribute("type") === "delete") {
    zobrazeni(16)
  }
  else if (element.getAttribute("type") === "myfriend") {

    zobrazeni(18)

  }


})
