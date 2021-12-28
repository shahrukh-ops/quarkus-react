export const listIdeas = async() => {

    return fetch("http://localhost:8080/api/v1/idea", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

}

export const deleteIdea = async(accessToken, id) => {

    return fetch("http://localhost:8080/api/v1/idea/" + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken,
        },
    });

}