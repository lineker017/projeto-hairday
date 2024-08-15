import { scheduleFetchByDay } from "../../service/schedule-fetch-by-day";
import { hoursload } from "../form/hours-load";
import { scheduleShow } from "./show";

//seleciona o input de data
const selectedDate = document.querySelector("#date")

export async function schedulesDay() {
  //obtem a data do input
  const date = selectedDate.value

  //buscar na API os agendamentos do dia
  const dailySchedules = await scheduleFetchByDay({ date })

  //renderiza os agendamentos da pag selecionada
  scheduleShow({ dailySchedules })  

  //renderiza as horas disponiveis
  hoursload({ date,dailySchedules })
}