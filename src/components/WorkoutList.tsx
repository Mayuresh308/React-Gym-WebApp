import React, { useState } from "react";
import WorkoutCard from "./WorkoutCard";
import "./WorkoutList.css";

export type Exercise = {
  id: string;
  exercise: string;
  minWeight: number;
  maxWeight: number;
};

export type Workout = {
  id: string;
  date: string;
  day: string;
  muscleGroup: string;
  exercises: Exercise[];
};

export default function WorkoutList() {
  const [workouts, setWorkouts] = useState<Workout[]>([
    {
      id: "1",
      date: "09-29-2025",
      day: "Tue",
      muscleGroup: "Back",
      exercises: [
        { id: "1", exercise: "Rows", minWeight: 95, maxWeight: 155 },
        { id: "2", exercise: "Pull Ups", minWeight: 0, maxWeight: 0 },
      ],
    },
  ]);

  const addWorkout = () => {
    const today = new Date();
    const formatted = today.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    const day = today.toLocaleDateString("en-US", { weekday: "short" });

    setWorkouts((prev) => [
      {
        id: Date.now().toString(),
        date: formatted,
        day,
        muscleGroup: "Muscle",
        exercises: [],
      },
      ...prev,
    ]);
  };

  const deleteWorkout = (id: string) => {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  };

  const updateWorkout = (id: string, updatedWorkout: Workout) => {
    setWorkouts((prev) => prev.map((w) => (w.id === id ? updatedWorkout : w)));
  };

  return (
  <div className="workout-list">
    <div className="header">
      <h1>Gym Tracker</h1>
      <p>"Give up on your dreams and die"</p>
    </div>

    <div className="workout-scroll">
      {workouts.map((w) => (
        <WorkoutCard
          key={w.id}
          workout={w}
          onDelete={() => deleteWorkout(w.id)}
          onUpdate={(updated) => updateWorkout(w.id, updated)}
        />
      ))}
    </div>

    <button className="add-btn" onClick={addWorkout}>
      +
    </button>
  </div>
);

}
