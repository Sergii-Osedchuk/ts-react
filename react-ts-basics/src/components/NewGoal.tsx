import { type FC, type FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal: FC<NewGoalProps> = ({onAddGoal}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();

    onAddGoal(enteredGoal, enteredSummary);
  }

  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit = {handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal </label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary" > Summary </label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
}

export default NewGoal;