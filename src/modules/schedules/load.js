import { hoursload } from "../form/hours-load";

//seleciona o input de data
const selectedDate = document.querySelector("#date")

export async function schedulesDay() {
  //buscar na API os agendamentos para carregar na tela do lado

  //obtem a data do input
  const date = selectedDate.value

  //renderiza as horas disponiveis
  hoursload({ date })
}