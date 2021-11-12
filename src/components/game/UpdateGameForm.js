import React, { useState, useEffect} from "react"
import { useParams } from "react-router"
import { useHistory } from 'react-router-dom'
import { updateGame, getSingleGame, getGameTypes } from "./GameManager.js"



export const UpdateGameForm = (evt) => {
    const [game, getGame] = useState({})
    const [gameTypes, setGameTypes] = useState([])
    
    const {gameId} = useParams()
    const history = useHistory()

    useEffect(() => {
        if (gameId) {
            getSingleGame(gameId)
             .then(data => getGame(
                 data
             ))
        } else {
            setCurrentGame({
                skill_level: 1,
                number_of_players: 0,
                title: "",
                maker: "",
                gameTypeId: 0
            })
        }
    }, [gameId])
    useEffect(()=> {
        getGameTypes().then((data) => setGameTypes(data))
    }, [])

    const changeGameState = (event) => {
        const editGame = {...game}
        editGame[event.target.name] = event.target.value
        getGame(editGame)
    }
    


    return(
        <>
        {console.log(game)}
    <form className="gameForm">
                
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" required autoFocus className="form-control"
                            
                            value={game.title}
                            onChange={changeGameState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="maker">Maker: </label>
                        <input type="text" name="maker" required autoFocus className="form-control"
                            
                            value={game.maker}
                            onChange={changeGameState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="number_of_players">Number of Players: </label>
                        <input type="text" name="number_of_players" required autoFocus className="form-control"
                            
                            value={game.number_of_players}
                            onChange={changeGameState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="skill_level">Skill Level: </label>
                        <input type="text" name="skill_level" required autoFocus className="form-control"
                            
                            value={game.skill_level}
                            onChange={changeGameState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="gameType">Game Type: </label>
                        <select type="text" name="game_type" 
                            
                            onChange={changeGameState}
                        >{gameTypes.map((type) => <option value ={type.id}>{type.label}</option>)}</select>
                    </div>
                </fieldset>
        </form>
        <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const object = {
                        id: gameId,
                        maker: game.maker,
                        title: game.title,
                        number_of_players: parseInt(game.number_of_players),
                        skill_level: parseInt(game.skill_level),
                        gameTypeId: parseInt(game.game_type.id)
                    }

                    // Send POST request to your API
                   updateGame(object)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Update</button>

        </>
    )
}