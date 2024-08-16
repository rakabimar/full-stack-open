import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  const calcAverage = (good, neutral, bad) => {
    return (
      (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)
    )
  }

  const calcPositive = (good, neutral, bad) => {
    return (
      (good / (good + neutral + bad)) * 100 + " %"
    )
  }

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>
          Statistics
        </h1>
        <p>
          No feedback given
        </p>
      </div>
    )
  }

  return (
    <div>
      <h1>
        Statistics
      </h1>
  
      <table>
        <tbody>
          <StatisticLine text={"Good"} value={good} />
          <StatisticLine text={"Neutral"} value={neutral} />
          <StatisticLine text={"Bad"} value={bad} />
          <StatisticLine text={"All"} value={good + neutral + bad} />
          <StatisticLine text={"Average"} value={calcAverage(good, neutral, bad)} />
          <StatisticLine text={"Positive"} value={calcPositive(good, neutral, bad)} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
      <div>
        <h1>
          Give feedback
        </h1>
        
        <Button onClick={() => setGood(good + 1)} text='good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button onClick={() => setBad(bad + 1)} text='bad' />

        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    )
}

export default App