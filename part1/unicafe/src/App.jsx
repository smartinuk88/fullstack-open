import { useState } from "react";

const handleIncrement = (setter) => () => setter((prev) => prev + 1);

const Button = ({ onClick, text }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

const Statistics = ({ good, neutral, bad }) => {
  const allFeedbackCount = good + neutral + bad;
  const average = allFeedbackCount
    ? ((good - bad) / allFeedbackCount).toFixed(2)
    : 0;
  const positivePercentage = allFeedbackCount
    ? `${((good / allFeedbackCount) * 100).toFixed(2)} %`
    : "0 %";

  return (
    <>
      <Statistic name="good" value={good} />
      <Statistic name="neutral" value={neutral} />
      <Statistic name="bad" value={bad} />
      <Statistic name="all" value={allFeedbackCount} />
      <Statistic name="average" value={average} />
      <Statistic name="positive" value={positivePercentage} />
    </>
  );
};

const Statistic = ({ name, value }) => <p>{`${name} ${value}`}</p>;

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
