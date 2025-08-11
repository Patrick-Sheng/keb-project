import React from "react";
import kebLogo from "./keb-logo.jpg";

export default function Home() {
  const s = styles;
  return (
    <div style={s.page}>
      <header style={s.hero}>
        <img src={kebLogo} alt="KEB logo" style={s.logo} />
        <span style={s.eyebrow}>Moto: Academic success is our #1 priority</span>
        <h1 style={s.h1}>KEB @ University of Auckland</h1>
        <p style={s.lead}>
          The Korean Engineering Body (KEB) at the University of Auckland is a
          student-led group supporting Korean engineering students through
          academic mentoring, cultural events, and community engagement. Their
          goal is to foster success, connection, and collaboration on campus.
        </p>
      </header>

      <section style={s.panel}>
        <h2 style={s.h2}>Follow & Links</h2>
        <ul style={s.list}>
          <li>Instagram: <strong>@Uoa.keb</strong></li>
          <li>
            Linktree:{" "}
            <a href="https://linktr.ee/KEBuoa" target="_blank" rel="noreferrer">
              @linktr.ee/KEBuoa
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/company/korean-engineering-body-keb"
              target="_blank"
              rel="noreferrer"
            >
              korean-engineering-body-keb
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  page: { maxWidth: 1100, margin: "0 auto", padding: 20, color: "#eef2f7" },
  hero: { textAlign: "center", padding: "40px 0" },
  logo: { height: 64, width: "auto", marginBottom: 12 },
  eyebrow: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(68,189,240,.35)",
    background: "rgba(68,189,240,.10)",
    color: "#44bdf0",
    fontSize: 12,
    letterSpacing: ".08em",
    textTransform: "uppercase",
  },
  h1: { margin: "12px 0 8px", fontSize: 36, lineHeight: 1.1 },
  h2: { margin: "0 0 6px", fontSize: 22 },
  lead: { maxWidth: 820, margin: "0 auto", color: "#a8b3c7" },
  panel: {
    marginTop: 24,
    padding: 20,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,.12)",
    background: "linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0))",
  },
  list: { margin: 0, paddingLeft: 20, color: "#c6d1e3", lineHeight: 1.8 },
};
