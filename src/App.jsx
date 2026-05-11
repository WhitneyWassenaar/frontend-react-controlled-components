import React from 'react';
import './App.css';

function App() {

    const [name, setName] = React.useState("")
    const [age, setAge] = React.useState(0)
    const [comment, setComment] = React.useState("")
    const [signup, setSignup] = React.useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Verstuurd!")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend>Gegevens</legend>
                    <label htmlFor="name">
                        Naam:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                        />
                    </label>

                    <label htmlFor="age">
                        Leeftijd:
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            id="age"

                        />
                    </label>
                </fieldset>

            <fieldset>
                <legend>Jouw review</legend>

                    <label htmlFor="comment">
                        Opmerkingen:
                        <textarea
                            placeholder={"Wat vond je van het recept?"}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            id="comment"
                        >
                    </textarea>
                    </label>

                    <label htmlFor="signup">
                        <input
                            type="checkbox"
                            value={signup}
                            onChange={(e) => setSignup(e.target.checked)}
                            id="signup"
                        />
                        Ik schrijf me in voor de nieuwsbrief
                    </label>
                    <button
                        type="submit"
                    >
                        Versturen
                    </button>
            </fieldset>
            </form>
        </div>
    );
}

export default App;
