// frontend/src/pages/ZeroShot.jsx
import { useState } from "react";
import axios from "axios";

export default function ZeroShot() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [preferences, setPreferences] = useState("");
  const [itinerary, setItinerary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/zero-shot-plan", {
      destination,
      budget,
      duration,
      preferences
    });
    setItinerary(res.data.itinerary);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Zero-Shot Trip Planner</h1>
      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <input placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} className="p-2 border"/>
        <input placeholder="Budget" value={budget} onChange={e => setBudget(e.target.value)} className="p-2 border"/>
        <input placeholder="Duration" value={duration} onChange={e => setDuration(e.target.value)} className="p-2 border"/>
        <input placeholder="Preferences" value={preferences} onChange={e => setPreferences(e.target.value)} className="p-2 border"/>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Generate Itinerary</button>
      </form>

      {itinerary && (
        <div className="mt-5 p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">Your Zero-Shot Itinerary</h2>
          <p>{itinerary}</p>
        </div>
      )}
    </div>
  );
}
