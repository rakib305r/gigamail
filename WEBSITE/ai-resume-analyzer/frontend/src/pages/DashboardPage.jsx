import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import api from '../utils/api'
import ScoreRing from '../components/ScoreRing'
import './DashboardPage.css'

export default function DashboardPage() {
  const { user } = useAuth()
  const [analyses, setAnalyses] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(null)

  useEffect(() => {
    api.get('/resume/history')
      .then(r => setAnalyses(r.data.analyses))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const handleDelete = async id => {
    if (!window.confirm('Delete this analysis?')) return
    setDeleting(id)
    try {
      await api.delete(`/resume/${id}`)
      setAnalyses(prev => prev.filter(a => a.id !== id))
    } catch (e) { alert(e.message) }
    finally { setDeleting(null) }
  }

  const avg = analyses.length
    ? Math.round(analyses.reduce((s, a) => s + (a.analysis?.overall_score || 0), 0) / analyses.length)
    : null

  return (
    <div className="dashboard-page">
      <div className="dashboard-inner">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, {user?.name?.split(' ')[0]}!</p>
          </div>
          <Link to="/analyze" className="btn btn-primary">+ New analysis</Link>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-card card">
            <div className="stat-num">{analyses.length}</div>
            <div className="stat-label">Total analyses</div>
          </div>
          <div className="stat-card card">
            <div className="stat-num" style={{ color: avg >= 75 ? 'var(--success)' : avg >= 50 ? 'var(--warning)' : 'var(--danger)' }}>
              {avg ?? '–'}
            </div>
            <div className="stat-label">Average score</div>
          </div>
          {analyses.length > 0 && (
            <div className="stat-card card">
              <div className="stat-num" style={{ color: 'var(--accent)' }}>
                {Math.round(analyses[0]?.analysis?.overall_score || 0)}
              </div>
              <div className="stat-label">Latest score</div>
            </div>
          )}
        </div>

        {/* History */}
        <h2 className="section-heading">Analysis history</h2>

        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
            <div className="spinner" style={{ width: 32, height: 32, borderWidth: 3, color: 'var(--accent)' }} />
          </div>
        )}

        {!loading && analyses.length === 0 && (
          <div className="empty-state card">
            <div className="empty-icon">📋</div>
            <h3>No analyses yet</h3>
            <p>Upload your first resume to get started.</p>
            <Link to="/analyze" className="btn btn-primary">Analyze a resume</Link>
          </div>
        )}

        <div className="history-list">
          {analyses.map(a => (
            <div className="history-card card" key={a.id}>
              <div className="history-score">
                <ScoreRing score={Math.round(a.analysis?.overall_score || 0)} size={60} />
              </div>
              <div className="history-info">
                <div className="history-filename">{a.fileName}</div>
                <div className="history-meta">
                  {new Date(a.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  {a.jobDescription && <span className="badge badge-accent" style={{ marginLeft: 8, fontSize: 11 }}>JD match</span>}
                  {a.analysis?.detected_role && <span style={{ color: 'var(--text-3)', marginLeft: 8, fontSize: 12 }}>{a.analysis.detected_role}</span>}
                </div>
                <div className="history-scores">
                  <span>ATS: <strong>{a.analysis?.ats_score || '–'}</strong></span>
                  {a.analysis?.job_match_score != null && <span>Job match: <strong>{Math.round(a.analysis.job_match_score)}%</strong></span>}
                </div>
              </div>
              <div className="history-actions">
                <Link to={`/result/${a.id}`} className="btn btn-outline btn-sm">View</Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(a.id)}
                  disabled={deleting === a.id}
                >
                  {deleting === a.id ? <span className="spinner" /> : 'Delete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
