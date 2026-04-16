import { useState } from "react";

const handleIncrement = (setter) => () => setter((prev) => prev + 1);

const Button = ({ onClick, text }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

const StatisticLine = ({ name, value }) => (
  <tr>
    <th scope="row">{name}</th>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const allFeedbackCount = good + neutral + bad;
  const average = allFeedbackCount
    ? ((good - bad) / allFeedbackCount).toFixed(2)
    : 0;
  const positivePercentage = allFeedbackCount
    ? `${((good / allFeedbackCount) * 100).toFixed(2)} %`
    : "0 %";

  if (!allFeedbackCount) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <StatisticLine name="good" value={good} />
        <StatisticLine name="neutral" value={neutral} />
        <StatisticLine name="bad" value={bad} />
        <StatisticLine name="all" value={allFeedbackCount} />
        <StatisticLine name="average" value={average} />
        <StatisticLine name="positive" value={positivePercentage} />
      </tbody>
    </table>
  );
};

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
