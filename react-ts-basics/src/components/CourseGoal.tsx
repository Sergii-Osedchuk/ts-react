import { type FC, type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{title: string}>

const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2>{ title }</h2>
        <p>{ children }</p>
      </div>
      <button>Delete</button>
    </article>
  )
};

export default CourseGoal;
