
export function hoursClick() {
  //capturando as variaveis que ficarao selected
  const hours = document.querySelectorAll(".hour-available")
  
  hours.forEach((available) => {
    available.addEventListener('click', (selected) => {
      //remove a classe hour-selcted de todas as li,antes de marcar a clicada de selected
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })
      //adiciona a classe na li clicada
      selected.target.classList.add("hour-selected")      
    })
  })
}