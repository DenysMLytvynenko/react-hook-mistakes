import { useEffect, useMemo, useState } from "react";

const ReferentialEqualityMistakes = () => {
    const [age, setAge] = useState(0);
    const [name, setName] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    // this object will be redefined on every rendering that's why you need to wrap it in useMemo hook to save this object between renders and update it only when data in the dependencies array is changed
    // const person = {age, name}
    const person = useMemo(() => ({ age, name }), [age, name]);

    useEffect(() => {
        console.log(person);
    }, [person]);

    return (
        <div
            style={{
                background: darkMode ? "#333" : "#fff",
            }}
        >
            <label htmlFor="age">Age</label>
            <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <br />

            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br />

            <label htmlFor="darkMode">Dark mode: </label>
            <input
                type="checkbox"
                id="darkMode"
                value={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
            />
        </div>
    );
};

export default ReferentialEqualityMistakes;
