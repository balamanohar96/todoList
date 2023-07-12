import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises", id: "g1" },
    { text: "Finish the course", id: "g2" },
  ]);
  const [enteredValue, setEnteredValue] = useState("");

  const addGoalHandler = (enteredText) => {
    const updatedGoals = [...courseGoals];
    if (enteredText.trim() !== "") {
      updatedGoals.push({ text: enteredText, id: Math.random().toString() });
      setCourseGoals(updatedGoals);
    }
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    addGoalHandler(enteredValue);
    setEnteredValue("");
  };

  let content;
  if (courseGoals.length === 0) {
    content = <p>No goals found.</p>;
  } else {
    content = (
      <ul className="goal-list">
        {courseGoals.map((goal) => (
          <li
            className="goal-item"
            onClick={() => deleteItemHandler(goal.id)}
            key={goal.id}
          >
            {goal.text}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <section id="goal-form">
        <form onSubmit={formSubmitHandler}>
          <div className="form-control">
            <label>Course Goal</label>
            <input
              type="text"
              onChange={goalInputChangeHandler}
              value={enteredValue}
            />
          </div>
          <button type="submit" className="button">
            Add Goal
          </button>
        </form>
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
