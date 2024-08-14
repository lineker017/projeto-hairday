import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours"
import { hoursClick } from "./hours-click";

const hours = document.querySelector('#hours')

export function hoursload({ date }) {
  //limpa a lista
  hours.innerHTML = ""

  const opening = openingHours.map((hour) => {
    //recupera somente a hora
    const [schedulesHour] = hour.split(":")

    //adiciona a hora na data e verifica se esta no passado
    const isHourPast = dayjs(date).add(schedulesHour, "hour").isBefore(dayjs())

    return {
      hour,
      available: !isHourPast
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