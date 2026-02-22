import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const empty = { artist: "", venue: "", city: "", date: "", bill: "", url: "" };

export default function Admin() {
  const [shows, setShows] = useState([]);
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("Loading…");
  const [saving, setSaving] = useState(false);

  async function load() {
    setStatus("Loading shows…");
    const { data, error } = await supabase
      .from("shows")
      .select("*")
      .order("date", { ascending: true });

    if (error) {
      console.error(error);
      setStatus(`Error: ${error.message}`);
      setShows([]);
      return;
    }

    setShows(data ?? []);
    setStatus(`Loaded ${data?.length ?? 0} show(s).`);
  }

  useEffect(() => {
    load();
  }, []);

  async function addShow(e) {
    e.preventDefault();
    setSaving(true);
    setStatus("Adding show…");

    const payload = {
      artist: form.artist.trim(),
      venue: form.venue.trim(),
      city: form.city.trim(),
      date: form.date,
      bill: form.bill.trim() || null,
      url: form.url.trim(),
    };

    const { error } = await supabase.from("shows").insert(payload);
    setSaving(false);

    if (error) {
      console.error(error);
      setStatus(`Error adding show: ${error.message}`);
      return;
    }

    setForm(empty);
    load();
  }

  async function del(id) {
    if (!window.confirm("Delete this show?")) return;

    setStatus("Deleting show…");
    const { error } = await supabase.from("shows").delete().eq("id", id);

    if (error) {
      console.error(error);
      setStatus(`Error deleting show: ${error.message}`);
      return;
    }

    load();
  }

  async function signOut() {
    await supabase.auth.signOut();
    window.location.href = "/front242";
  }

  return (
    <div style={wrap}>
      <header style={header}>
        <div>
          <h1 style={{ margin: 0, fontSize: 48, letterSpacing: "-1px" }}>
            Admin: Shows
          </h1>
          <p style={{ margin: "10px 0 0", opacity: 0.75 }}>{status}</p>
        </div>

        <button type="button" onClick={signOut} style={btnSecondary}>
          Log out
        </button>
      </header>

      <section style={card}>
        <h2 style={h2}>Add a show</h2>

        <form onSubmit={addShow}>
          <div style={grid}>
            <input
              placeholder="Artist"
              value={form.artist}
              onChange={(e) => setForm({ ...form, artist: e.target.value })}
              required
              style={input}
            />
            <input
              placeholder="Venue"
              value={form.venue}
              onChange={(e) => setForm({ ...form, venue: e.target.value })}
              required
              style={input}
            />

            <input
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              required
              style={input}
            />
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
              style={input}
            />

            <input
              placeholder="Bill (optional)"
              value={form.bill}
              onChange={(e) => setForm({ ...form, bill: e.target.value })}
              style={input}
            />
            <input
              placeholder="URL"
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              required
              style={input}
            />
          </div>

          <div style={{ marginTop: 14, display: "flex", gap: 12 }}>
            <button type="submit" disabled={saving} style={btnPrimary}>
              {saving ? "Saving…" : "Add Show"}
            </button>

            <button
              type="button"
              onClick={() => setForm(empty)}
              style={btnGhost}
            >
              Clear
            </button>
          </div>
        </form>
      </section>

      <section style={card}>
        <h2 style={h2}>Current shows</h2>

        {shows.length === 0 ? (
          <p style={{ margin: 0, opacity: 0.8 }}>No shows yet. Add one above.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {shows.map((s) => (
              <div key={s.id} style={row}>
                <div>
                  <div style={{ fontWeight: 700 }}>
                    {s.artist}{" "}
                    <span style={{ fontWeight: 400, opacity: 0.8 }}>
                      — {s.venue} ({s.city}) — {s.date}
                    </span>
                  </div>

                  {s.bill ? <div style={{ marginTop: 4 }}>{s.bill}</div> : null}

                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    style={link}
                  >
                    {s.url}
                  </a>
                </div>

                <button type="button" onClick={() => del(s.id)} style={btnDanger}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

/* styles */
const wrap = {
  padding: 24,
  maxWidth: 980,
  margin: "0 auto",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 16,
  marginBottom: 18,
  marginTop: 100,
};

const card = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 10,
  padding: 18,
  marginBottom: 18,
};

const h2 = {
  margin: "0 0 14px",
  fontSize: 18,
  letterSpacing: "0.3px",
  opacity: 0.9,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
};

const input = {
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid rgba(0,0,0,0.2)",
  background: "white",
  color: "#111",
  fontSize: 14,
  outline: "none",
};

const btnBase = {
  padding: "12px 14px",
  borderRadius: 6,
  border: "1px solid transparent",
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: "0.6px",
  cursor: "pointer",
  height: 42,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const btnPrimary = {
  ...btnBase,
  background: "black",
  color: "white",
};

const btnSecondary = {
  ...btnBase,
  background: "black",
  color: "white",
  height: 42,
  minWidth: 110,
  alignSelf: "flex-start",
};

const btnGhost = {
  ...btnBase,
  background: "transparent",
  color: "white",
  border: "1px solid rgba(255,255,255,0.25)",
};

const btnDanger = {
  ...btnBase,
  background: "black",
  color: "white",
  border: "1px solid rgba(255,255,255,0.25)",
  minWidth: 90,
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  padding: 14,
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(0,0,0,0.15)",
};

const link = {
  display: "inline-block",
  marginTop: 6,
  fontSize: 12,
  opacity: 0.85,
  color: "white",
  textDecoration: "underline",
};