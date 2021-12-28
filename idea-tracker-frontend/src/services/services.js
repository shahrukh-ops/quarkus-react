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
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken,
        },
    });
}

export const addIdea = async(accessToken, body) => {

    return fetch("http://localhost:8080/api/v1/idea", {
        method: "POST",
        body: JSON.stringify(
            body),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken,
        },
    });
}

export const updateIdea = async(accessToken, body) => {

    return fetch("http://localhost:8080/api/v1/idea", {
        method: "PUT",
        body: JSON.stringify(
            body),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken,
        },
    });
}