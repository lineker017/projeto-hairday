import dayjs from "dayjs"
import { scheduleNew } from "../../service/schedule-new"
import { schedulesDay } from "../schedules/load.js"

//elemtentos do form 
const selectedate = document.querySelector("#date")
const clientname = document.getElementById("client")
const form = document.querySelector("form")

//data atual
const inputToday = dayjs().format("YYYY-MM-DD")

selectedate.value = inputToday
selectedate.min = inputToday

form.addEventListener("submit", async (e) => {
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

    //gerar id
    const id = new Date().getTime()

    await scheduleNew({id, name, when})

    await schedulesDay()

    //limpa nome do input e da um focus
    clientname.value = ""
    
  } catch (error) {
    alert("nao foi possivel agendar,tenta novamente mais tarde.")

    console.log(error);
    
  }
})
