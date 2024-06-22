import { useState, useEffect } from "react";
import { fetchStudents, loginUser, fetchUserProfile } from "../api";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (error) {
        setError(error);
      }
    };

    loadStudents();
  }, []);

  return (
    <div>
      <h1>Students</h1>
      {error && <p>{error.message}</p>}
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchUserProfile();
        setProfile(data);
      } catch (error) {
        setError(error);
      }
    };

    loadProfile();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {error && <p>{error.message}</p>}
      {profile && <p>Welcome, {profile.message}</p>}
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser(username);
      setMessage(response.message);
    } catch (error) {
      setMessage("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export { StudentList, UserProfile, Login };
