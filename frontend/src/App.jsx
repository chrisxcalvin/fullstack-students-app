import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

export default function App() {
  const [students, setStudents] = useState([]);

  // Load API URL from .env (Netlify / Vite)
  const API = import.meta.env.VITE_API_URL;

  const fetchStudents = async () => {
    const res = await fetch(`${API}/students`);
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-5">Students Manager</h1>

      <StudentForm refresh={fetchStudents} />
      <StudentList students={students} refresh={fetchStudents} />
    </div>
  );
}
