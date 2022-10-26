// import Counter from "./components/Counter/Counter";
// import Form from "./components/Form/Form";
// import UnnecessaryUseEffects from "./components/UnnecessaryUseEffects/UnnecessaryUseEffects";

import ReferentialEqualityMistakes from "./components/ReferentialEqualityMistakes/ReferentialEqualityMistakes";

const App = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <Form /> */}
            {/* <Counter /> */}
            {/* <UnnecessaryUseEffects /> */}
            <ReferentialEqualityMistakes />
        </div>
    );
};

export default App;
