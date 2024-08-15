import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours"
import { hoursClick } from "./hours-click";

const hours = document.querySelector('#hours')

export function hoursload({ date,dailySchedules }) {
  //limpa a lista
  hours.innerHTML = ""

  //obtema a lista de horarios ocupados
  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

  const opening = openingHours.map((hour) => {
    //recupera somente a hora
    const [schedulesHour] = hour.split(":")

    //adiciona a hora na data e verifica se esta no passado
    const isHourPast = dayjs(date).add(schedulesHour, "hour").isBefore(dayjs())

    //verifica se o horario esta ocupado e se ja passou
    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available
    }
  })

  opening.forEach(({ hour, available}) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if (hour === "9:00") {
      hourHeaderAdd("Manhã")
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde")
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite")
    }

    hours.appendChild(li)
  })

  hoursClick()
}

//manha,tarde ou noite
function hourHeaderAdd(title) {
  const header = document.createElement("li")

  header.classList.add("hour-period")
  header.textContent = title

  hours.appendChild(header)
}