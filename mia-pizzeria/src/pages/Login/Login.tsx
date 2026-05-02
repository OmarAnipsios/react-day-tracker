import { useState } from "react";
import Button from "../../components/ui/Button/Button";
import Card from "../../components/ui/Card/Card";
import { useUser } from "../../context/User/UserContext";

export default function Login() {
  const { user, setUser, isAdmin } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function validateEmail(value: string) {
    // Deve contenere una @ e finire con .qualcosa (min 2 lettere)
    const emailRegex = /^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/;
    if (!value) return "L'email è obbligatoria.";
    if (!emailRegex.test(value))
      return "Inserisci un'email valida (es: nome@dominio.it)";
    return "";
  }

  function validatePassword(value: string) {
    if (!value) return "La password è obbligatoria.";
    if (value.length < 8) return "La password deve avere almeno 8 caratteri.";
    if (!/[A-Z]/.test(value))
      return "Deve contenere almeno una lettera maiuscola.";
    if (!/[a-z]/.test(value))
      return "Deve contenere almeno una lettera minuscola.";
    if (!/[0-9]/.test(value)) return "Deve contenere almeno un numero.";
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value))
      return "Deve contenere almeno un carattere speciale.";
    return "";
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    setEmailError(emailErr);
    setPasswordError(passwordErr);
    if (emailErr || passwordErr) return;
    const name = email.substring(0, email.indexOf("@"));
    setUser({ id: "1", name, email, isAdminUser: false });
    alert("Login effettuato! (mock)");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-olive-100">
      <h1 className="text-4xl font-bold text-center my-6 text-purple-700 font-serif drop-shadow-sm">
        Login - Pizzeria Bella Torino{" "}
        <span role="img" aria-label="pizza">
          🍕
        </span>
      </h1>
      <Card>
        <form
          className="space-y-6 px-8 py-8 w-80 md:w-96"
          onSubmit={handleSubmit}
          noValidate
        >
          <div>
            <label
              className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-olive-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition ${emailError ? "border-red-500 focus:ring-red-400" : ""}`}
              type="email"
              id="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              onBlur={(e) => setEmailError(validateEmail(e.target.value))}
              aria-invalid={!!emailError}
              aria-describedby="email-error"
            />
            {emailError && (
              <p className="text-red-600 text-xs mt-1" id="email-error">
                {emailError}
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-olive-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition ${passwordError ? "border-red-500 focus:ring-red-400" : ""}`}
              type="password"
              id="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError("");
              }}
              onBlur={(e) => setPasswordError(validatePassword(e.target.value))}
              aria-invalid={!!passwordError}
              aria-describedby="password-error"
            />
            {passwordError && (
              <p className="text-red-600 text-xs mt-1" id="password-error">
                {passwordError}
              </p>
            )}
          </div>
          <Button type="submit">Login</Button>
        </form>
      </Card>
    </div>
  );
}
