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
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React",
        description: "Learn it roundabout"
      };
      return [...prevGoals, newGoal];
    })
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }} >
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add goal</button>
      {goals.map(goal => <li key={goal.id}>
        <CourseGoal title={goal.title}>
          {goal.description}
        </CourseGoal>
      </li>)}
    </main>
  )
}
