import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const anecdotesLength = anecdotes.length
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotesLength).fill(0))

  const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const randomizeAnecdote = () => {
    setSelected(getRandomNum(0, (anecdotesLength - 1)))
  }

  const addVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    console.log(newVotes)
  }
  
  const getMaxVotesIndex = () => {
    return votes.indexOf(Math.max(...votes));
  };

  const maxVotesIndex = getMaxVotesIndex();

  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      <p>
        {anecdotes[selected]}
      </p>
      <p>
        has {votes[selected]} votes
      </p>

      <Button text={"Vote"} onClick={() => addVote()} />
      <Button text={"Next anecdote"} onClick={() => randomizeAnecdote()} />

      <h1>
        Anecdote with most votes
      </h1>
      <p>
        {anecdotes[maxVotesIndex]}
      </p>
      <p>
        has {votes[maxVotesIndex]} votes
      </p>

    </div>
  )
}

export default App