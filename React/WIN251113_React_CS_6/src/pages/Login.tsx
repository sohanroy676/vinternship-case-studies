import type React from "react";
import useDesignHubStore from "../store";

export default function Login() {
  const setUser = useDesignHubStore((state) => state.setUser);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Sets the user in the Store
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setUser({ id: form.get("id") as string, name: form.get("name") as string });
  };

  // Renders the login page.
  return (
    <form onSubmit={handleSubmit} id="login">
      <h1>Login</h1>
      <input type="text" name="id" placeholder="UserID" />
      <input type="text" name="name" placeholder="Name" />
      <button type="submit">Login</button>
    </form>
  );
}
