// import React, { useState } from "react";
// import "./Tips.css";

// type Tip = {
//   id: string;
//   text: string;
//   pinned: boolean;
// };

// export default function Tips() {
//   const [tips, setTips] = useState<Tip[]>([
//     { id: "1", text: "Focus on form over weight.", pinned: true },
//     { id: "2", text: "Zone 2 cardio 3x/week.", pinned: false },
//   ]);
//   const [newTip, setNewTip] = useState("");

//   const addTip = () => {
//     if (!newTip.trim()) return;
//     setTips((prev) => [
//       { id: Date.now().toString(), text: newTip, pinned: false },
//       ...prev,
//     ]);
//     setNewTip("");
//   };

//   const deleteTip = (id: string) => {
//     setTips((prev) => prev.filter((t) => t.id !== id));
//   };

//   const togglePin = (id: string) => {
//     setTips((prev) =>
//       prev.map((t) =>
//         t.id === id ? { ...t, pinned: !t.pinned } : t
//       )
//     );
//   };

//   return (
//     <div className="tips-page">
//       <h1 className="title">Pro Tips</h1>
//       <p className="subtitle">Quick notes you can pin or delete.</p>

//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Write a tip..."
//           value={newTip}
//           onChange={(e) => setNewTip(e.target.value)}
//         />
//         <button className="add-btn" onClick={addTip}>
//           +
//         </button>
//       </div>

//       <div className="tips-grid">
//         {tips.map((tip) => (
//           <div
//             key={tip.id}
//             className={`tip-card ${tip.pinned ? "pinned" : ""}`}
//           >
//             {tip.pinned && <span className="pinned-label">PINNED</span>}
//             <p>{tip.text}</p>
//             <div className="tip-actions">
//               <button
//                 className="pin-btn"
//                 onClick={() => togglePin(tip.id)}
//                 title={tip.pinned ? "Unpin" : "Pin"}
//               >
//                 📌
//               </button>
//               <button
//                 className="delete-btn"
//                 onClick={() => deleteTip(tip.id)}
//                 title="Delete"
//               >
//                 🗑
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
















import { useState } from "react";
import "./Tips.css";

type Tip = {
  id: string;
  text: string;
  pinned: boolean;
};

export default function Tips() {
  const [tips, setTips] = useState<Tip[]>([
    { id: "1", text: "Focus on form over weight.", pinned: true },
    { id: "2", text: "Zone 2 cardio 3x/week.", pinned: false },
  ]);
  const [newTip, setNewTip] = useState("");

  const addTip = () => {
    if (!newTip.trim()) return;
    setTips((prev) => [
      { id: Date.now().toString(), text: newTip.trim(), pinned: false },
      ...prev,
    ]);
    setNewTip("");
  };

  const deleteTip = (id: string) => {
    setTips((prev) => prev.filter((t) => t.id !== id));
  };

  const togglePin = (id: string) => {
    setTips((prev) => prev.map((t) => (t.id === id ? { ...t, pinned: !t.pinned } : t)));
  };

  return (
    <div className="tips-page">
      <h1 className="title">Pro Tips</h1>
      <p className="subtitle">Quick notes you can pin or delete.</p>

      <div className="input-container">
        <input
          type="text"
          placeholder="Write a tip..."
          value={newTip}
          onChange={(e) => setNewTip(e.target.value)}
        />
        <button className="add-btn" onClick={addTip}>+</button>
      </div>

      <div className="tips-grid">
        {tips.map((tip) => (
          <div key={tip.id} className={`tip-card ${tip.pinned ? "pinned" : ""}`}>
            {tip.pinned && <span className="pinned-label">PINNED</span>}
            <p>{tip.text}</p>
            <div className="tip-actions">
              <button className="pin-btn" onClick={() => togglePin(tip.id)} title={tip.pinned ? "Unpin" : "Pin"}>
                📌
              </button>
              <button className="delete-btn" onClick={() => deleteTip(tip.id)} title="Delete">
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
