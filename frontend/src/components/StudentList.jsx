export default function StudentList({ students, refresh }) {
  const deleteStudent = async (id) => {
    await fetch(`http://localhost:5000/students/${id}`, {
      method: "DELETE",
    });
    refresh();
  };

  return (
    <div>
      {students.map((s) => (
        <div key={s.id} className="border p-3 mb-2 flex justify-between">
          <span>{s.name} — {s.age} years</span>
          <button
            className="bg-red-500 text-white px-3"
            onClick={() => deleteStudent(s.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
