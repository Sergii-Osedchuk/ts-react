import { type FC } from 'react';
import CourseGoal from './CourseGoal';
import { type CourseGoal as CGoal } from '../App';

type CourseGoalListProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDelete }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>{goal.description}</CourseGoal>
        </li>))}
    </ul>
  )
};

export default CourseGoalList;