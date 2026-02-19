import type React from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    console.log(form.get("role"));

    navigate(`/${form.get("role")}/${form.get("username")}`);
  };

  // Renders the Login Page
  return (
    <form onSubmit={handleSubmit} className="login">
      <h1>Login</h1>
      <input type="text" name="username" placeholder="Enter username" required />
      <input type="password" name="password" placeholder="password" required />
      <span>
        User
        <input type="radio" name="role" value="user" required />
        <input type="radio" name="role" value="admin" required />
        Admin
      </span>
      <button type="submit">Login</button>
    </form>
  );
}
