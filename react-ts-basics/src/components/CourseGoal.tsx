import { type PropsWithChildren } from "react";

const CourseGoal = ({ title, children }: PropsWithChildren<{title: string}>) => {
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
