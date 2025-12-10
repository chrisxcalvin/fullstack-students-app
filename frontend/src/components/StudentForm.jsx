import { useState } from "react";

export default function StudentForm({ refresh }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addStudent = async () => {
    await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age }),
    });

    setName("");
    setAge("");
    refresh();
  };

  return (
    <div className="mb-6">
      <input
        className="border p-2 mr-2"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        className="border p-2 mr-2"
        placeholder="Age"
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <button onClick={addStudent} className="bg-blue-500 text-white p-2 rounded">
        Add
      </button>
    </div>
  );
}
