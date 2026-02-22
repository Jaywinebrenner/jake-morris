import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Front242() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

if (error) {
  console.error("Supabase login error:", error);
  setMsg(error.message);
  return;
}

    window.location.href = "/admin";
  }

  return (
    <div
      className="container"
      style={{
        padding: 40,
        maxWidth: 420,
        margin: "80px auto",
      }}
    >
      <h1 style={{ marginBottom: 32 }}>Hi Jake.</h1>

      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label htmlFor="password">Password</label>
          <div style={{ position: "relative" }}>
            <input
              id="password"
              type={showPw ? "text" : "password"}
              autoComplete="current-password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              style={toggleStyle}
            >
              {showPw ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
        type="submit"
        disabled={loading}
        style={{
            marginTop: 24,
            padding: "14px 16px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "1px",
            borderRadius: 4,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1,
            transition: "all 0.2s ease",
        }}
        >
        {loading ? "Logging in..." : "LOG IN"}
        </button>
      </form>

      {msg && (
        <div
          style={{
            marginTop: 20,
            padding: 12,
            background: "rgba(255,0,0,0.1)",
            border: "1px solid rgba(255,0,0,0.3)",
            borderRadius: 6,
            fontSize: 14,
          }}
        >
          {msg}
        </div>
      )}
    </div>
  );
}

/* Simple inline polish (won't conflict with your SCSS) */
const inputStyle = {
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid rgba(255,255,255,0.25)",
  background: "rgba(0,0,0,0.3)",
  color: "white",
  fontSize: 14,
};

const toggleStyle = {
  position: "absolute",
  right: 8,
  top: 6,
  background: "transparent",
  border: "none",
  color: "#ccc",
  fontSize: 12,
  cursor: "pointer",
};