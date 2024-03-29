import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { getGames } from "./GameManager.js"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])
    const history = useHistory()
    
    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <>
        <article className="games">
            {
                games.map(game => {
                    console.log(game)
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by {game.maker}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__skillLevel">Skill level is {game.skill_level}</div>
                        <div className="game__gametype">gametype is {game.game_type.label}</div>
                        <button className="btn btn-2 btn-sep icon-create"
                            onClick={() => {
                                history.push({ pathname: `/games/${game.id}/updateForm` })
                            }}
                        >Update</button>
                    </section>
                })
            }
        </article>
        
        <button className="btn btn-2 btn-sep icon-create"
    onClick={() => {
        history.push({ pathname: "/games/new" })
    }}
>Register New Game</button>

        </>
    )
}
