import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg';
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {

  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }} >
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick = {handleAddGoal}>Add goal</button>
      <CourseGoal title="Learn React + TS">
        Learn and practise it every day.
      </CourseGoal>
    </main>
  )
}
