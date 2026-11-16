async function getDog() {
    try {
        const response = await fetch(
            "https://apis.scrimba.com/dog.ceo/api/breeds/image/random",
            {
                method: "POST",
                body: JSON.stringify({ name: "Buddy",
                    time: new Date(),
                    title: "Fetch API Example",
                    body: "This is an example of using the Fetch API to make a POST request.",
                    userId: 1
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        if (!response.ok) {
            throw new Error("There was a problem with the API");
        }

        const data = await response.json();

        console.log(data);

        document.getElementById("img-container").innerHTML = `
            <img src="${data.message}" alt="Random dog picture">
        `;
    } catch (err) {
        console.log(err);

        document.getElementById("img-container").innerHTML = `
            <img src="/images/dog.jpg" alt="Random dog picture">
        `;
    } finally {
        console.log("The operation completed.");
    }
}

getDog();