import { scheduleCancel } from "../../service/schedule-cancel"
import { schedulesDay } from "./load"

// Captura todas as listas que contém os agendamentos
const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    // Verifica se o click foi no icone de cancelar
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado
      const item = event.target.closest("li")
      // Pega o id do atributo data-id o elemento
      const { id } = item.dataset
      // Verifica se o id existe
      if (id) {
        // Abre uma janela de confirmação no browser. Retorna true se clicar em OK, e false se clicar em cancel
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
        if (isConfirm) {
          // Chama a função da API para remover o agendamento
          await scheduleCancel({ id })       

          //Recarregar os horários e agendamentos
          await schedulesDay()
        }
      }
    }
  })
})