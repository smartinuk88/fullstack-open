import { useState } from "react";

const handleIncrement = (setter) => () => setter((prev) => prev + 1);

const Button = ({ onClick, text }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

const Statistic = ({ feedbackName, feedbackCount }) => (
  <p>{`${feedbackName} ${feedbackCount}`}</p>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleIncrement(setGood)} text="good" />
      <Button onClick={handleIncrement(setNeutral)} text="neutral" />
      <Button onClick={handleIncrement(setBad)} text="bad" />
      <h2>statistics</h2>
      <Statistic feedbackName="good" feedbackCount={good} />
      <Statistic feedbackName="neutral" feedbackCount={neutral} />
      <Statistic feedbackName="bad" feedbackCount={bad} />
    </div>
  );
};

export default App;
