import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function UpcomingShows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("shows")
        .select("*")
        .order("date", { ascending: true });

      if (error) {
        console.error("Error loading shows:", error);
        setShows([]);
      } else {
        setShows(data ?? []);
      }

      setLoading(false);
    })();
  }, []);

  return (
    <div className="upcoming-shows">
      <div className="container">
        <div className="show-wrapper">
          {loading && <p>Loading shows…</p>}

          {!loading && shows.length === 0 && (
            <p>No upcoming shows posted yet.</p>
          )}

          {!loading &&
            shows.map((s) => (
              <div className="show" key={s.id}>
                <h2>{s.artist}</h2>

                <p>
                  {s.venue} ({s.city})
                </p>

                {s.bill && <p>{s.bill}</p>}

                <p style={{ marginBottom: "30px" }}>
                  {new Date(s.date + "T12:00:00").toLocaleDateString(
                    undefined,
                    {
                      weekday: "long",
                      year: "2-digit",
                      month: "numeric",
                      day: "numeric",
                    }
                  )}
                </p>

                <a
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={s.url}
                >
                  {s.venue}
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}