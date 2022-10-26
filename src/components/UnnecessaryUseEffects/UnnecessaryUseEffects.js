import { useEffect, useState } from "react";

const UnnecessaryUseEffects = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [fullName, setFullName] = useState("");

    // useEffect(() => {
    //     setFullName(`${firstName} ${lastName}`);
    // }, [firstName, lastName]);

    // instead of using useEffect with state change use simple constant. It is reduce number of redundant renders
    const fullName = `${firstName} ${lastName}`;

    return (
        <form>
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            {fullName}
        </form>
    );
};

export default UnnecessaryUseEffects;
