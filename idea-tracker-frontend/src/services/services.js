export const listIdeas = async() => {

    return fetch("http://localhost:8080/api/v1/idea", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

}