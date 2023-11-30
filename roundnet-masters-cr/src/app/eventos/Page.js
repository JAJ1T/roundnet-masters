'use client'
import React, { Component } from "react";
import 'typeface-poppins';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es"; // Moment.js localización en español
import "react-big-calendar/lib/css/react-big-calendar.css";

// Configuración del localizador con momentLocalizer
const localizer = momentLocalizer(moment);

// Lista de eventos de ejemplo
const myEventsList = [
  {
    title: "Hoy",
    start: new Date(), // La fecha y hora actuales
    end: new Date(),
  },
  {
    title: "Evento en el C.T.P de Alajuelita",
    start: new Date("2023-11-29T11:00:00"),
    end: new Date("2023-11-29T01:00:00"),
  },
  {
    title: "Evento en la Escuela la Lia",
    start: new Date("2023-11-30T07:00:00"),
    end: new Date("2023-11-30T11:20:00"),
  },
  {
    title: "Evento en la Escuela la Lia",
    start: new Date("2023-12-25T07:00:00"),
    end: new Date("2023-12-30T11:20:00"),
  },
];

class EventsCalendar extends Component {
  render() {
    return (
      <div style={{ height: "600px", padding: "10px" }} className="bigCalendar-container">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          messages={{
            next: "sig",
            previous: "ant",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
          }}
        />
      </div>
    );
  }
}

export default EventsCalendar;
