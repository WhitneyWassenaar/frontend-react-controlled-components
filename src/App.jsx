import React from 'react';
import './App.css';

function App() {
    const [form, setform] = React.useState("")
    const [name, setName] = React.useState("")
    const [age, setAge] = React.useState(0)
    const [comment, setComment] = React.useState("")
    const [signup, setSignup] = React.useState(false)

    return (
        <div>
            <form>
                <fieldset>
                <legend>Gegevens</legend>
                    <label>
                        Naam:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label>
                        Leeftijd:
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </label>
                </fieldset>

            <fieldset>
                <legend>Jouw review</legend>

                    <label>
                        Opmerkingen:
                        <textarea
                            placeholder={"Wat vond je van het recept?"}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        >
                    </textarea>
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            value={signup}
                            onChange={(e) => setSignup(e.target.checked)}
                        />
                        Ik schrijf me in voor de nieuwsbrief
                    </label>
                    <button type="submit">
                        Versturen
                    </button>
            </fieldset>
            </form>
        </div>
    );
}

export default App;
