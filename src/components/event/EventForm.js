import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { getGames } from "../game/GameManager"
import { createEvent } from "./EventManager"

export const EventForm = () => {
    const history = useHistory()
    
    const [currentEvent, setEvent] = useState({
        gameId: 0,
        description: "",
        date: "",
        time: ""
    })
    const [games, setGames] = useState([])

    
    useEffect(() => {
        getGames().then((data) => setGames(data))
    }, [])

    const changeEventState = (domEvent) => {
       const newEventState = {...currentEvent}
       newEventState[domEvent.target.name] = domEvent.target.value
       setEvent(newEventState) 
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={ currentEvent.gameId }
                        onChange={ changeEventState }>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option value={game.id}>{game.title}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input name="description" className="form-control"
                        value={ currentEvent.description }
                        onChange={ changeEventState } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" className="form-control"
                        value={ currentEvent.date }
                        onChange={ changeEventState } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" name="time" className="form-control"
                        value={ currentEvent.time }
                        onChange={ changeEventState } />
                </div>
            </fieldset>

            {/* TODO: Create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const event = {
                        gameId: parseInt(currentEvent.gameId),
                        description: currentEvent.description,
                        date: currentEvent.date,
                        time: currentEvent.time,
                        
                    }

                    createEvent(event).then(() => history.push("/events"))
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}
