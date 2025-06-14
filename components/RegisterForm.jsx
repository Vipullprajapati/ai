"use client";

import { useActionState } from "react";
import { register } from "@/actions/userController";
import Alert from "./Alert";

export default function RegisterForm() {
  const [formState, formAction] = useActionState(register, {});

  return (
    <form
      action={formAction}
      className="w-full flex flex-col items-start"
    >
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="input mb-2"
        autoComplete="off"
        required
      />
      {formState?.errors?.username && (
        <Alert message={formState.errors?.username} />
      )}
      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="input mb-2"
        autoComplete="off"
        required
      />
      {formState?.errors?.password && (
        <Alert message={formState.errors?.password} />
      )}

      <br />

      <button
        type="submit"
        className="btn"
      >
        Create Account
      </button>
    </form>
  );
}