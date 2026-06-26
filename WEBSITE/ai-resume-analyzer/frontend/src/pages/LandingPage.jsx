import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './LandingPage.css'

const features = [
  { icon: '📊', title: 'Resume score', desc: 'Get a detailed score out of 100 with section-by-section breakdown.' },
  { icon: '🤖', title: 'AI analysis', desc: 'Claude AI reads your resume like a recruiter and gives honest feedback.' },
  { icon: '🎯', title: 'Job matching', desc: 'Paste a job description and see your match percentage instantly.' },
  { icon: '💡', title: 'Skill gap analysis', desc: 'Find out which skills are missing for your target roles.' },
  { icon: '✍️', title: 'Rewrite suggestions', desc: 'Specific line-by-line fixes, not generic advice.' },
  { icon: '📥', title: 'Download report', desc: 'Download your full analysis as a PDF to save or share.' },
]

export default function LandingPage() {
  const { user } = useAuth()

  return (
    <div className="landing">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">Powered by Claude AI</div>
          <h1 className="hero-title">
            Get your resume<br />
            <span className="hero-accent">hired-ready</span>
          </h1>
          <p className="hero-sub">
            Upload your resume and get a detailed AI analysis in seconds — score, skill gaps, keyword match, and actionable rewrites.
          </p>
          <div className="hero-cta">
            <Link to={user ? '/analyze' : '/register'} className="btn btn-primary btn-lg">
              Analyze my resume →
            </Link>
            {!user && (
              <Link to="/login" className="btn btn-outline btn-lg">
                Log in
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-inner">
          <h2 className="section-title">Everything you need to improve your resume</h2>
          <div className="features-grid">
            {features.map(f => (
              <div className="feature-card card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner card">
          <h2>Ready to land more interviews?</h2>
          <p>Join thousands of job seekers who use ResumeAI to stand out.</p>
          <Link to={user ? '/analyze' : '/register'} className="btn btn-primary btn-lg">
            Get started — it's free
          </Link>
        </div>
      </section>
    </div>
  )
}
