import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function ProtectedRoute({ children, redirectTo = "/front242" }) {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const { data, error } = await supabase.auth.getSession();
      if (!mounted) return;

      if (error) {
        console.error("getSession error:", error);
        setAuthed(false);
      } else {
        setAuthed(!!data?.session);
      }

      setLoading(false);
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div style={{ padding: 24 }}>Checking login…</div>;

  return authed ? children : <Navigate to={redirectTo} replace />;
}