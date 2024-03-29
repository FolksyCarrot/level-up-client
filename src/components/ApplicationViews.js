import React from "react"
import { Route } from "react-router-dom"
import { EventForm } from "./event/EventForm.js"
import { EventList } from "./event/EventList.js"
import { UpdateEventForm } from "./event/UpdateEventForm.js"
import { GameForm } from "./game/GameForm.js"
import { GameList } from "./game/GameList.js"
import { UpdateGameForm } from "./game/UpdateGameForm.js"
import { Profile } from "./profile/Profile.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                
            </Route>
            <Route exact path="/events">
                <EventList />
            </Route>
            <Route exact path ="/events/new">
                <EventForm />
            </Route>
            <Route exact path ="/games">
                <GameList />
            </Route>
            <Route exact path ="/games/new">
                <GameForm />
            </Route>
            <Route exact path ="/profile">
                <Profile />
            </Route>
            <Route exact path ="/games/:gameId(\d+)/updateForm">
                <UpdateGameForm />
            </Route>
            <Route exact path ="/events/:eventId(\d+)/updateForm">
                <UpdateEventForm />
            </Route>
            
        </main>
    </>
}
