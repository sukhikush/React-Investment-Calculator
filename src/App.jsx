import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange({ name: inputIdentifier, value: newVal }) {
    if (newVal)
      setUserInput((preVal) => ({
        ...preVal,
        [inputIdentifier]: +newVal,
      }));
  }

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} inputData={userInput} />
      <Results input={userInput} />
    </>
  );
}

export default App;
