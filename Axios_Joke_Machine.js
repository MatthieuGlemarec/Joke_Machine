
/* AXIOS WITH .get & .then */

// axios
//     .get("https://catfact.ninja/fact")
//     .then(res => {
//         console.log("RESPONSE", res.data)
//     })
//     .catch(err => {
//         console.log("ERROR!", err)
//     });


/* AXIOS & ASYNC() = TIDY */

// const getStarWarsName = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//         console.log("SUCCESS!", res.data.name)
//     } catch (error) {
//         console.log("ERROR!", err)
//     }
// }

// getStarWarsName(3);
// getStarWarsName(4);
// getStarWarsName(5);




/*      Working with HEADERS in Axios      */



// const getDadJoke = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json' } }
//         const res = await axios.get("https://icanhazdadjoke.com/", config)
//         console.log(res.data.joke)
//     } catch (error) {
//         console.log("ERROR!", err)
//     }
// };

// getDadJoke();



// button.addEventListener("click", function () {
//     newJoke.innerText = getDadJoke()
// })


const button = document.querySelector("#button");
const reset = document.querySelector("#reset");


const jokes = document.querySelector("#jokes");

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newJoke = document.createElement("LI");
    newJoke.append(jokeText);
    jokes.append(newJoke);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke
    } catch (error) {
        return "No Jokes. (couldn't reach the joke factory) So sorry."
    }
};


button.addEventListener("click", function () {
    addNewJoke();
})

reset.addEventListener("click", function () {
    jokes.innerText = "";
})




// const button = document.querySelector("#button");
// const jokes = document.querySelector("#jokes");
// const newJoke = document.createElement('p');
// newJoke.append(res.data.joke);
// jokes.append(newJoke);
