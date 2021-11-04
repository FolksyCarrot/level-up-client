export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createEvent = () => {
    return fetch("http://localhost:8000/events", { method: "POST", headers: {
        "Authorization": `Token ${localStorage.getItem("lu_token")}`, "Content-Type":"application/json"
    } })
    .then(response => response.json())
}

