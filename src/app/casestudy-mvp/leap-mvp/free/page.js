

'use client';

export default function FreeToolsPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '700' }}>Free Tools</h1>
      <p style={{ marginBottom: '2rem', color: '#555' }}>
        Explore our free tools to help you get started on your career journey — from job discovery to mentorship and job fairs.
      </p>

      {/* Section 1: Job Listings */}
      <Section title="Job Listings" buttonText="Explore our job board">
        {['Software Engineer', 'Marketing Intern', 'Product Designer', 'Business Analyst', 'Data Scientist'].map((role, i) => (
          <Card key={i} title={role} subtitle="CPT/OPT Friendly • Remote or US-based" />
        ))}
      </Section>

      {/* Section 2: Career Mentors */}
      <Section title="Career Mentors" buttonText="Explore our career mentors">
        {['Anjali Rao', 'David Kim', 'Sanya Mehta', 'John Lewis', 'Harsha Iyer'].map((name, i) => (
          <Card
            key={i}
            title={name}
            subtitle="Product @ Google"
            bottom={
              <>
                <p style={{ fontSize: '0.85rem', margin: 0 }}>
                  Email ID: <span style={{ filter: 'blur(4px)', userSelect: 'none' }}>linkedin.com/in/{name.toLowerCase().replace(' ', '')}</span>
                </p>
                <p style={{ fontSize: '0.85rem', margin: 0 }}>
              <>    LinkedIn: linkedin.com/in/{name.toLowerCase().replace(' ', '')}</>
                </p>
              </>
            }
          />
        ))}
      </Section>

      {/* Section 3: Job Fairs */}
      <Section title="Job Fairs" buttonText="Explore all job fairs">
        {['NYC Tech Fair', 'Virtual Hiring Summit', 'STEM Job Expo', 'Startup Career Week', 'Women in Tech Fair'].map((event, i) => (
          <Card key={i} title={event} subtitle="September 2025 • Open to international students" />
        ))}
      </Section>
    </main>
  );
}

function Section({ title, buttonText, children }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>{title}</h2>
      <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', paddingBottom: '1rem' }}>
        {children}
      </div>
      <div style={{ textAlign: 'right' }}>
        <button
          style={{
            backgroundColor: '#1976ed',
            color: 'white',
            padding: '0.6rem 1.5rem',
            fontWeight: '600',
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '0.95rem',
          }}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

function Card({ title, subtitle, bottom }) {
  return (
    <div
      style={{
        minWidth: '250px',
        background: 'white',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#555' }}>{subtitle}</p>
      </div>
      {bottom && <div style={{ marginTop: '1rem' }}>{bottom}</div>}
    </div>
  );
}