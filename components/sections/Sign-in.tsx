'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    // Password validation (minimum 8 characters)
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true); // Start loading

      // Simulate async request
      setTimeout(() => {
        setLoading(false);
        router.push("/");
      }, 2000); // Mock a delay of 2 seconds
    }
  };

  return (
    <div className="flex justify-center items-center py-10 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 border rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition ${errors.email ? "border-red-500" : "focus:ring-blue-400"}`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition ${errors.password ? "border-red-500" : "focus:ring-blue-400"}`}
            required
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Submit Button with Loading */}
        <button
          type="submit"
          className="w-full p-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 active:bg-blue-700 transition flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            "Sign In"
          )}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <a href="/sign-up" className="text-primary hover:underline">Sign up</a>
        </p>
      </form>
    </div>
  );
}
