import dayjs from "dayjs"

//elemtentos do form 
const selectedate = document.querySelector("#date")
const clientname = document.getElementById("client")
const form = document.querySelector("form")

//data atual
const inputToday = dayjs().format("YYYY-MM-DD")

selectedate.value = inputToday
selectedate.min = inputToday

form.addEventListener("submit", (e) => {
  e.preventDefault()

  try {
    const name = clientname.value

    if (!name) {
      return alert("coloque o nome do cliente")
    }

    //recupera p horario selecionado
    const hourSeleced = document.querySelector(".hour-selected")

    if(!hourSeleced) {
      alert("selecenione a hora")
    }

    const [hour] = hourSeleced.innerHTML.split(":")

    const when = dayjs(selectedate.value).add(hour, "hour")

    const id = new Date().getTime()

    console.log({
      id,
      name,
      when
    })

    console.log("agendamento cadastrado!");
  } catch (error) {
    alert("n foi possivel agendar,tenta novamente mais tarde.")

    console.log(error);
    
  }
})
