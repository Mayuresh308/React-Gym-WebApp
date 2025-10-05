// import React, { useState } from "react";
// import type { Exercise, Workout } from "./WorkoutList";
// import "./WorkoutCard.css";

// export default function WorkoutCard({
//   workout,
//   onDelete,
//   onUpdate,
// }: {
//   workout: Workout;
//   onDelete: () => void;
//   onUpdate: (updated: Workout) => void;
// }) {
//   const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState<"exercise" | "workout" | null>(
//     null
//   );

//   const [newExercise, setNewExercise] = useState({
//     exercise: "",
//     minWeight: "",
//     maxWeight: "",
//   });

//   const [editWorkout, setEditWorkout] = useState({
//     date: workout.date,
//     day: workout.day,
//     muscleGroup: workout.muscleGroup,
//   });

//   const addExercise = () => {
//     if (!newExercise.exercise.trim()) return;

//     const updated = {
//       ...workout,
//       exercises: [
//         ...workout.exercises,
//         {
//           id: Date.now().toString(),
//           exercise: newExercise.exercise.trim(),
//           minWeight: Number(newExercise.minWeight) || 0,
//           maxWeight: Number(newExercise.maxWeight) || 0,
//         },
//       ],
//     };
//     onUpdate(updated);
//     closeModal();
//   };

//   const saveWorkout = () => {
//     const updated = {
//       ...workout,
//       date: editWorkout.date,
//       day: editWorkout.day,
//       muscleGroup: editWorkout.muscleGroup,
//     };
//     onUpdate(updated);
//     closeModal();
//   };

//   const deleteExercise = (id: string) => {
//     const updated = {
//       ...workout,
//       exercises: workout.exercises.filter((e) => e.id !== id),
//     };
//     onUpdate(updated);
//   };

//   const openExerciseModal = () => {
//     setModalType("exercise");
//     setShowModal(true);
//   };

//   const openWorkoutModal = () => {
//     setModalType("workout");
//     setEditWorkout({
//       date: workout.date,
//       day: workout.day,
//       muscleGroup: workout.muscleGroup,
//     });
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setModalType(null);
//     setNewExercise({ exercise: "", minWeight: "", maxWeight: "" });
//   };

//   return (
//     <div className="workout-card">
//       <div className="card-top">
//         <div className="date" onClick={openWorkoutModal}>
//           <strong>{workout.date}</strong>
//           <span>{workout.day}</span>
//         </div>

//         <button className="muscle-btn" onClick={openWorkoutModal}>
//           {workout.muscleGroup}
//         </button>

//         <div className="actions">
//           <button className="delete-btn" onClick={onDelete}>
//             🗑️
//           </button>
//           <button className="exercise-btn" onClick={openExerciseModal}>
//             + Exercise
//           </button>
//         </div>
//       </div>

//       <div className="exercise-list">
//         {workout.exercises.map((ex) => (
//           <div key={ex.id} className="exercise">
//             <button className="ex-delete" onClick={() => deleteExercise(ex.id)}>
//               ✕
//             </button>
//             <p className="ex-name">{ex.exercise}</p>
//             <p className="ex-weight">
//               {ex.minWeight} - {ex.maxWeight}
//             </p>
//           </div>
//         ))}
//       </div>

//       {showModal && (
//         <div className="modal-backdrop" onClick={closeModal}>
//           <div
//             className="modal"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {modalType === "exercise" ? (
//               <>
//                 <h3>Add Exercise</h3>
//                 <input
//                   placeholder="Exercise Name"
//                   value={newExercise.exercise}
//                   onChange={(e) =>
//                     setNewExercise({ ...newExercise, exercise: e.target.value })
//                   }
//                 />
//                 <div className="weight-inputs">
//                   <input
//                     type="number"
//                     placeholder="Min"
//                     value={newExercise.minWeight}
//                     onChange={(e) =>
//                       setNewExercise({
//                         ...newExercise,
//                         minWeight: e.target.value,
//                       })
//                     }
//                   />
//                   <input
//                     type="number"
//                     placeholder="Max"
//                     value={newExercise.maxWeight}
//                     onChange={(e) =>
//                       setNewExercise({
//                         ...newExercise,
//                         maxWeight: e.target.value,
//                       })
//                     }
//                   />
//                 </div>
//                 <div className="modal-actions">
//                   <button className="add" onClick={addExercise}>
//                     Add
//                   </button>
//                   <button className="cancel" onClick={closeModal}>
//                     Cancel
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <h3>Edit Workout</h3>
//                 <input
//                   placeholder="Date (MM-DD-YYYY)"
//                   value={editWorkout.date}
//                   onChange={(e) =>
//                     setEditWorkout({ ...editWorkout, date: e.target.value })
//                   }
//                 />
//                 <input
//                   placeholder="Day (e.g. Mon)"
//                   value={editWorkout.day}
//                   onChange={(e) =>
//                     setEditWorkout({ ...editWorkout, day: e.target.value })
//                   }
//                 />
//                 <input
//                   placeholder="Muscle Group"
//                   value={editWorkout.muscleGroup}
//                   onChange={(e) =>
//                     setEditWorkout({
//                       ...editWorkout,
//                       muscleGroup: e.target.value,
//                     })
//                   }
//                 />
//                 <div className="modal-actions">
//                   <button className="add" onClick={saveWorkout}>
//                     Save
//                   </button>
//                   <button className="cancel" onClick={closeModal}>
//                     Cancel
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }













import { useState } from "react";
import type { Workout } from "./WorkoutList";
import "./WorkoutCard.css";

export default function WorkoutCard({
  workout,
  onDelete,
  onUpdate,
}: {
  workout: Workout;
  onDelete: () => void;
  onUpdate: (updated: Workout) => void;
}) {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"exercise" | "workout" | null>(null);

  const [newExercise, setNewExercise] = useState({
    exercise: "",
    minWeight: "",
    maxWeight: "",
  });

  const [editWorkout, setEditWorkout] = useState({
    date: workout.date,
    day: workout.day,
    muscleGroup: workout.muscleGroup,
  });

  const addExercise = () => {
    if (!newExercise.exercise.trim()) return;
    const updated = {
      ...workout,
      exercises: [
        ...workout.exercises,
        {
          id: Date.now().toString(),
          exercise: newExercise.exercise.trim(),
          minWeight: Number(newExercise.minWeight) || 0,
          maxWeight: Number(newExercise.maxWeight) || 0,
        },
      ],
    };
    onUpdate(updated);
    closeModal();
  };

  const saveWorkout = () => {
    const updated = {
      ...workout,
      date: editWorkout.date,
      day: editWorkout.day,
      muscleGroup: editWorkout.muscleGroup,
    };
    onUpdate(updated);
    closeModal();
  };

  const deleteExercise = (id: string) => {
    const updated = {
      ...workout,
      exercises: workout.exercises.filter((e) => e.id !== id),
    };
    onUpdate(updated);
  };

  const openExerciseModal = () => {
    setModalType("exercise");
    setShowModal(true);
  };

  const openWorkoutModal = () => {
    setModalType("workout");
    setEditWorkout({
      date: workout.date,
      day: workout.day,
      muscleGroup: workout.muscleGroup,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
    setNewExercise({ exercise: "", minWeight: "", maxWeight: "" });
  };

  return (
    <div className="workout-card">
      <div className="card-top">
        <div className="date" onClick={openWorkoutModal}>
          <strong>{workout.date}</strong>
          <span>{workout.day}</span>
        </div>

        <button className="muscle-btn" onClick={openWorkoutModal}>
          {workout.muscleGroup}
        </button>

        <div className="actions">
          <button className="delete-btn" onClick={onDelete}>🗑️</button>
          <button className="exercise-btn" onClick={openExerciseModal}>+ Exercise</button>
        </div>
      </div>

      <div className="exercise-list">
        {workout.exercises.map((ex) => (
          <div key={ex.id} className="exercise">
            <button className="ex-delete" onClick={() => deleteExercise(ex.id)}>✕</button>
            <p className="ex-name">{ex.exercise}</p>
            <p className="ex-weight">{ex.minWeight} - {ex.maxWeight}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {modalType === "exercise" ? (
              <>
                <h3>Add Exercise</h3>
                <input
                  placeholder="Exercise Name"
                  value={newExercise.exercise}
                  onChange={(e) => setNewExercise({ ...newExercise, exercise: e.target.value })}
                />
                <div className="weight-inputs">
                  <input
                    type="number"
                    placeholder="Min"
                    value={newExercise.minWeight}
                    onChange={(e) => setNewExercise({ ...newExercise, minWeight: e.target.value })}
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={newExercise.maxWeight}
                    onChange={(e) => setNewExercise({ ...newExercise, maxWeight: e.target.value })}
                  />
                </div>
                <div className="modal-actions">
                  <button className="add" onClick={addExercise}>Add</button>
                  <button className="cancel" onClick={closeModal}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h3>Edit Workout</h3>
                <input
                  placeholder="Date (MM-DD-YYYY)"
                  value={editWorkout.date}
                  onChange={(e) => setEditWorkout({ ...editWorkout, date: e.target.value })}
                />
                <input
                  placeholder="Day (e.g. Mon)"
                  value={editWorkout.day}
                  onChange={(e) => setEditWorkout({ ...editWorkout, day: e.target.value })}
                />
                <input
                  placeholder="Muscle Group"
                  value={editWorkout.muscleGroup}
                  onChange={(e) => setEditWorkout({ ...editWorkout, muscleGroup: e.target.value })}
                />
                <div className="modal-actions">
                  <button className="add" onClick={saveWorkout}>Save</button>
                  <button className="cancel" onClick={closeModal}>Cancel</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
