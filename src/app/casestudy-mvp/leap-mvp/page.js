"use client";
import { useState } from "react";
import Link from "next/link";

export default function LeapMVP() {
  const [emailOutput, setEmailOutput] = useState("");

  const generateEmail = () => {
    const email = `Hi [Name],\n\nI came across your profile and saw you’re working at [Company]. I’m currently a student at [University] and actively exploring roles that align with my interests. I’d love to hear about your journey and possibly get your advice.\n\nWould you be open to a quick chat this week?\n\nThanks!\n[Your Name]`;
    setEmailOutput(email);
  };

  return (
    <>
      <div
        style={{
          background: "#1976ed",
          borderRadius: "1.5rem",
          margin: "1rem",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo/Title */}
        <div
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: "1.25rem",
            marginLeft: "0.5rem",
          }}
        >
          LeapCareer MVP
        </div>
        {/* Menu Items */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <a
            href="#"
            style={{ color: "white", fontWeight: 500, textDecoration: "none" }}
          >
            Job Board
          </a>
          <a
            href="#"
            style={{ color: "white", fontWeight: 500, textDecoration: "none" }}
          >
            Alumni Connect
          </a>
          <a
            href="#"
            style={{ color: "white", fontWeight: 500, textDecoration: "none" }}
          >
            Career Coach
          </a>
          <a
            href="#"
            style={{ color: "white", fontWeight: 500, textDecoration: "none" }}
          >
            Job Fairs
          </a>
        </div>
        {/* Get Started Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginRight: "0.5rem",
          }}
        >
        <Link href="leap-mvp/free"><button
            style={{
              background: "white",
              color: "#1976ed",
              fontWeight: 600,
              padding: "0.5rem 1.5rem",
              borderRadius: "0.75rem",
              border: "none",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              cursor: "pointer",
            }}
          >
            Get Started Free
          </button></Link> 
        </div>
      </div>


{/* HERO SECTION */}
<div className="bg-gradient-to-b from-[#1976ed] to-[#3498fd] py-16 text-center">
  <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
    Your Career Launch Companion in <br className="hidden md:block" /> the U.S.
  </h1>
  <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
    Everything international students need to land their dream job —<br />
    structured, visa-aware, and completely free to start.
  </p>
  <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
    <button className="bg-white text-[#1976ed] font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">
      Start Your Career Journey
    </button>
    <button className="bg-white text-[#1976ed] font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">
   Explore Free Tools
    </button>
  </div>
</div>

{/* FEATURE CARDS SECTION */}
<div className="bg-white py-16">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow p-8 text-center">
      <div className="text-4xl mb-4 text-[#1976ed]">🔍</div>
      <h3 className="font-bold text-xl mb-2">Job Discovery</h3>
      <p className="text-[#1976ed]">
        Explore your visa-friendly jobs tailored for international students.
      </p>
    </div>
    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow p-8 text-center">
      <div className="text-4xl mb-4 text-[#1976ed]">📄</div>
      <h3 className="font-bold text-xl mb-2">Visa Support</h3>
      <p className="text-[#1976ed]">
        Get guidance and filters for roles with visa sponsorship.
      </p>
    </div>
    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow p-8 text-center">
      <div className="text-4xl mb-4 text-[#1976ed]">🧰</div>
      <h3 className="font-bold text-xl mb-2">Resume Tools</h3>
      <p className="text-[#1976ed]">
        Use optimized templates and tools to land interviews.
      </p>
    </div>
  </div>
</div>
<div className="bg-white py-16">
  {/* Title */}
  <h2 className="text-4xl font-extrabold text-center mb-2">
    Career Coach-in-a-Box
  </h2>
  {/* Subtitle */}
  <p className="text-[#1976ed] text-center text-2xl mb-12 font-medium">
    A structured launchpad that bundles everything you need to land a job — in one place
  </p>
  {/* Features Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Feature 1 */}
    <div>
      <div className="flex items-center mb-2 items-center justify-center">
        <span className="text-green-500 text-3xl mr-2">✔️</span>
        <span className="font-bold text-xl">3-Week Sprint<br />Plans</span>
      </div>
      <p className="text-[#1976ed] text-lg text-center">
        Structured plans for resume building, and interview prep
      </p>
    </div>
    {/* Feature 2 */}
    <div>
      <div className="flex items-center mb-2 items-center justify-center">
        <span className="text-green-500 text-3xl mr-2">📄</span>
        <span className="font-bold text-xl">US-Style<br />Templates</span>
      </div>
      <p className="text-[#1976ed] text-lg text-center">
        Resume templates, outreach messages, and job tracking tools
      </p>
    </div>
    {/* Feature 3 */}
    <div>
      <div className="flex items-center mb-2 items-center justify-center">
        <span className="text-green-500 text-3xl mr-2">🔍</span>
        <span className="font-bold text-xl text-center">Visa-Aware Job<br />Board</span>
      </div>
      <p className="text-[#1976ed] text-lg text-center">
        Jobs filtered by training and sponsorship requirements
      </p>
    </div>
    {/* Feature 4 */}
    <div className="flex flex-col justify-between">
      <div className="flex items-center mb-2 items-center justify-center">
        <span className="text-green-500 text-3xl mr-2">🧳</span>
        <span className="font-bold text-xl">Job Dashboard</span>
      </div>
      <p className="text-[#1976ed] text-lg text-center">
        Track applications with status updates and reminders
      </p>
    </div>
  </div>
</div>



      {/* Alumni Connect & Referral Gateway Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', textAlign: 'center' }}>
          Alumni Connect & Referral Gateway
        </h2>
        <p style={{ textAlign: 'center', color: '#888', marginBottom: '2rem' }}>
          Built-in networking flow that makes warm intros and referrals easier and more accessible.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto 2rem',
          }}
        >
          {[
            {
              initials: 'AC',
              name: 'Alex Chen',
              role: 'Software Engineer',
              company: '@ Amazon',
              tags: ['H1B Sponsored', 'Referrals Available'],
              email: 'alex@example.com',
              linkedin: 'linkedin.com/in/alex',
            },
            {
              initials: 'PS',
              name: 'Priya Sharma',
              role: 'Product Manager',
              company: '@ Meta',
              tags: ['Recent Grad', 'Mentoring'],
              email: 'priya@example.com',
              linkedin: 'linkedin.com/in/priya',
            },
            {
              initials: 'RP',
              name: 'Raj Patel',
              role: 'Data Analyst Intern',
              company: '@ Google',
              tags: ['CPT Success', 'Resume Help'],
              email: 'raj@example.com',
              linkedin: 'linkedin.com/in/raj',
            },
          ].map((alum, index) => (
            <div
              key={index}
              style={{
                borderRadius: '12px',
                background: '#fff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#f3e8ff',
                  color: '#d49af7',
                  fontWeight: '700',
                  fontSize: '1.25rem',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {alum.initials}
              </div>
              <h3 style={{ fontWeight: '700', marginBottom: '0.25rem' }}>{alum.name}</h3>
              <div style={{ color: '#1976ed', fontWeight: '500', marginBottom: '0.25rem' }}>{alum.role}</div>
              <div style={{ fontSize: '0.9rem', color: '#bbb', marginBottom: '1rem' }}>{alum.company}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                {alum.tags.map((tag, i) => (
                  <span key={i} style={{ fontSize: '0.85rem', fontWeight: '600' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#999' }}>
                <p>Email ID: <span style={{ filter: 'blur(4px)', userSelect: 'none' }}>{alum.email}</span></p>
                <p>LinkedIn: <span style={{ filter: 'blur(4px)', userSelect: 'none' }}>{alum.linkedin}</span></p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              backgroundColor: '#1976ed',
              color: 'white',
              padding: '0.75rem 1.5rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Connect with Alumni
          </button>
        </div>
      </section>
    </>
  );
}

const cardStyle = {
  background: "white",
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  borderRadius: "8px",
};

const buttonStyle = {
  backgroundColor: "#004aad",
  color: "white",
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "24px",
  cursor: "pointer",
  marginTop: "0.5rem",
};

function Card({ title, subtitle, buttonText = "Apply" }) {
  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <button style={buttonStyle}>{buttonText}</button>
    </div>
  );
}

<style jsx global>{`
  @media (max-width: 800px) {
    .feature-cards-grid {
      grid-template-columns: 1fr !important;
    }
  }
`}</style>;
