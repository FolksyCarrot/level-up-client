import React, { useState, useEffect} from "react"
import { useParams } from "react-router"
import { useHistory } from 'react-router-dom'
import { updateEvent, getSingleEvent} from "./EventManager.js"

export const UpdateEventForm = (event) => {
    const[oldevent, getEvent] = useState({})
    const history = useHistory()
    const {eventId} = useParams()

    useEffect(() => {
        if(eventId) {
            getSingleEvent(eventId).then(data => getEvent(data))
        }
           
    }, [])

    const changeEventState = (event) => {
        const editEvent = {...oldevent}
        editEvent[event.target.name] = event.target.value
        getEvent(editEvent)
    }

    return(
        <>
        {console.log(oldevent)}
        <form className="gameForm">
                
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Description: </label>
                        <input type="text" name="description" required autoFocus className="form-control"
                            
                            value={oldevent.description}
                            onChange={changeEventState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="maker">Date: </label>
                        <input type="text" name="date" required autoFocus className="form-control"
                            
                            value={oldevent.date}
                            onChange={changeEventState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="number_of_players">Time: </label>
                        <input type="text" name="time" required autoFocus className="form-control"
                            
                            value={oldevent.time}
                            onChange={changeEventState}
                        />
                    </div>
                </fieldset>
        </form>
        <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const object = {
                        id: parseInt(eventId),
                        gameId: oldevent.game,
                        description: oldevent.description,
                        date: oldevent.date,
                        time: oldevent.time,
                    }

                    // Send POST request to your API
                   updateEvent(object)
                        .then(() => history.push("/events"))
                }}
                className="btn btn-primary">Update</button>
        </>
    )
    
}