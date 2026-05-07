import './App.css'

type JobStatus = 'Applied' | 'Interview' | 'Offer'

type Job = {
  id: number
  company: string
  role: string
  status: JobStatus
}

const sampleJobs: Job[] = [
  { id: 1, company: 'Canva', role: 'Frontend Developer', status: 'Applied' },
  { id: 2, company: 'Atlassian', role: 'Software Engineer', status: 'Interview' },
  { id: 3, company: 'Seek', role: 'Junior Developer', status: 'Offer' },
]

function App() {
  const totalJobs = sampleJobs.length
  const interviewCount = sampleJobs.filter(
    (job) => job.status === 'Interview',
  ).length

  return (
    <main className="app-shell">
      <section className="dashboard">
        <header className="hero">
          <div className="intro">
            <p className="eyebrow">React Job Tracker</p>
            <h1>Track your applications in one place.</h1>
            <p className="description">
              Start small: keep a simple list of roles, companies, and progress.
            </p>
          </div>
          <button type="button" className="primary-button">
            Add Job
          </button>
        </header>

        <section className="stats">
          <article className="stat-card">
            <p className="stat-label">Total Applications</p>
            <strong className="stat-value">{totalJobs}</strong>
          </article>
          <article className="stat-card">
            <p className="stat-label">Interviews</p>
            <strong className="stat-value">{interviewCount}</strong>
          </article>
        </section>

        <section className="job-list">
          <div className="section-heading">
            <h2>Recent Jobs</h2>
            <p>Your starter data lives in <code>src/App.tsx</code>.</p>
          </div>

          {sampleJobs.map((job) => (
            <article key={job.id} className="job-card">
              <div>
                <h3>{job.role}</h3>
                <p>{job.company}</p>
              </div>
              <span className="status-badge">{job.status}</span>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}

export default App
