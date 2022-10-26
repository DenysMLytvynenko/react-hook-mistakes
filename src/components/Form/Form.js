import { useRef, useState } from "react";

const Form = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // It's better to use ref for handling form input data
    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();

        console.log("Form information: ", {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        });
    };

    return (
        <form
            onSubmit={onSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "max-content",
            }}
        >
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                ref={emailRef}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                ref={passwordRef}
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
