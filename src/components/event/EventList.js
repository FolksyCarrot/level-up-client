import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { getEvents } from "./EventManager.js"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])
    const history = useHistory()
    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <>
        <article className="events">
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="game">
                        <div className="event__description">{event.description}</div>
                        <div className="event__description">{event.organizer.user.first_name}</div>
                        
                    </section>
                })
            }
        </article>
         <button className="btn btn-2 btn-sep icon-create"
         onClick={() => {
             history.push({ pathname: "/events/new" })
         }}
     >Register New Event</button>
     </>
    )
}
