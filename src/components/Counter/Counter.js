import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // const adjustCount = (amount) => setCount(count + amount);

    // use function version of useState when need to update state more than once in one rendering
    const adjustCount = (amount) =>
        setCount((currentCount) => currentCount + amount);

    return (
        <>
            <button onClick={() => adjustCount(-1)}>-</button>

            <span>{count}</span>

            <button onClick={() => adjustCount(1)}>+</button>
        </>
    );
};

export default Counter;
