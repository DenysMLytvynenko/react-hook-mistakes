import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import UnnecessaryUseEffects from "./components/UnnecessaryUseEffects/UnnecessaryUseEffects";

const App = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <Form /> */}
            {/* <Counter /> */}
            <UnnecessaryUseEffects />
        </div>
    );
};

export default App;
