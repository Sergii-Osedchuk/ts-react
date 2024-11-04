import { type FC, type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{title: string, id: number, onDelete: (id: number) => void}>

const CourseGoal: FC<CourseGoalProps> = ({ title, id, onDelete, children }) => {
  return (
    <article>
      <div>
        <h2>{ title }</h2>
        <p>{ children }</p>
      </div>
      <button onClick = {() => onDelete(id)}>Delete</button>
    </article>
  )
};

export default CourseGoal;
