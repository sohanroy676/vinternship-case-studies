import type React from "react";
import useUserStore from "../store/UserStore";

export default function Login() {
  const setUser = useUserStore((state) => state.setUser);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setUser(form.get("name") as string, form.get("token") as string, Number(Math.random() * 100));
  };

  // Renders the login page
  return (
    <form onSubmit={handleSubmit} className="login">
      <h1>Login</h1>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="token" placeholder="Token" />
      <button type="submit">Login</button>
    </form>
  );
}
