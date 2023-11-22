import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es.js";

const localizer = BigCalendar.momentLocalizer(moment);
const myEventsList = [
    {
      title: "today",
      start: new Date('2023-11-22T00:29:00'),
      end: new Date('2023-11-22T01:29:00')
    },
    {
      title: "Reunión de trabajo",
      start: new Date('2023-11-23T09:00:00'),
      end: new Date('2023-11-23T10:00:00')
    }  
];

class EventsCalendar extends Component {
  render() {
    return (
      <div style={{ height: `${400}px` }} className="bigCalendar-container">
        <BigCalendar
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
            day: "Día"
          }}
        />
      </div>
    );
  }
}

export default EventsCalendar;
