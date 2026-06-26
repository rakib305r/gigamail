import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../utils/api'
import ScoreRing from '../components/ScoreRing'
import './ResultPage.css'

function scoreColor(n) {
  if (n >= 75) return 'var(--success)'
  if (n >= 50) return 'var(--warning)'
  return 'var(--danger)'
}

function BarRow({ label, value }) {
  return (
    <div className="bar-row">
      <span className="bar-label">{label}</span>
      <div className="progress-bar-bg" style={{ flex: 1 }}>
        <div className="progress-bar-fill" style={{ width: `${value}%`, background: scoreColor(value) }} />
      </div>
      <span className="bar-num" style={{ color: scoreColor(value) }}>{Math.round(value)}</span>
    </div>
  )
}

export default function ResultPage() {
  const { id } = useParams()
  const [record, setRecord] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    api.get(`/resume/${id}`)
      .then(r => setRecord(r.data))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  const handleDownload = async () => {
    setDownloading(true)
    try {
      const res = await api.get(`/resume/${id}/download`, { responseType: 'blob' })
      const url = URL.createObjectURL(res.data)
      const a = document.createElement('a')
      a.href = url; a.download = `resume-analysis-${id.slice(0, 8)}.html`
      document.body.appendChild(a); a.click()
      document.body.removeChild(a); URL.revokeObjectURL(url)
    } catch (e) {
      alert('Download failed: ' + e.message)
    } finally {
      setDownloading(false)
    }
  }

  if (loading) return (
    <div className="result-loading">
      <div className="spinner" style={{ width: 36, height: 36, borderWidth: 3, color: 'var(--accent)' }} />
      <p>Loading your analysis...</p>
    </div>
  )

  if (error) return (
    <div className="result-error">
      <p>{error}</p>
      <Link to="/analyze" className="btn btn-primary">Analyze another resume</Link>
    </div>
  )

  const a = record.analysis
  const sectionScores = Object.entries(a.section_scores || {}).map(([k, v]) => ({
    label: k.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    value: v
  }))

  return (
    <div className="result-page">
      <div className="result-inner">
        {/* Header */}
        <div className="result-top">
          <div>
            <h1>Analysis complete</h1>
            <p className="result-file">📄 {record.fileName} &nbsp;·&nbsp; {new Date(record.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="result-actions">
            <button className="btn btn-outline" onClick={handleDownload} disabled={downloading}>
              {downloading ? <><span className="spinner" />Downloading...</> : '📥 Download report'}
            </button>
            <Link to="/analyze" className="btn btn-primary">New analysis</Link>
          </div>
        </div>

        {/* Score overview */}
        <div className="score-overview card">
          <div className="score-main">
            <ScoreRing score={Math.round(a.overall_score)} size={100} />
            <div>
              <div className="score-label">Overall score</div>
              <div className="verdict-text">{a.verdict}</div>
              <div className="score-tags">
                {a.detected_role && <span className="badge badge-accent">🎯 {a.detected_role}</span>}
                {a.experience_years != null && <span className="badge badge-accent">⏱ {a.experience_years}+ yrs exp</span>}
                <span className="badge" style={{ background: 'var(--surface-2)', color: 'var(--text-2)' }}>ATS: {a.ats_score}/100</span>
                {a.job_match_score != null && (
                  <span className={`badge ${a.job_match_score >= 70 ? 'badge-success' : 'badge-warning'}`}>
                    Job match: {Math.round(a.job_match_score)}%
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Two column layout */}
        <div className="result-grid">
          {/* Section scores */}
          <div className="card">
            <h2 className="card-title">Section scores</h2>
            {sectionScores.map(s => <BarRow key={s.label} label={s.label} value={s.value} />)}
          </div>

          {/* Strengths & Weaknesses */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card">
              <h2 className="card-title">✅ Strengths</h2>
              <ul className="result-list">
                {(a.strengths || []).map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div className="card">
              <h2 className="card-title">⚠️ Needs work</h2>
              <ul className="result-list result-list-warn">
                {(a.weaknesses || []).map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Skill gaps */}
        <div className="card">
          <h2 className="card-title">💡 Skill gaps</h2>
          <p className="card-sub">These skills are in demand but missing from your resume.</p>
          <div className="tag-cloud">
            {(a.skill_gaps || []).map(k => <span key={k} className="badge badge-danger">{k}</span>)}
          </div>
        </div>

        {/* Top skills */}
        <div className="card">
          <h2 className="card-title">🔑 Top skills found</h2>
          <div className="tag-cloud">
            {(a.top_skills || []).map(k => <span key={k} className="badge badge-success">{k}</span>)}
          </div>
        </div>

        {/* Keywords */}
        <div className="card">
          <h2 className="card-title">🏷 Keyword analysis</h2>
          <div className="kw-section">
            <div>
              <div className="kw-heading kw-found-head">Found in resume</div>
              <div className="tag-cloud">
                {(a.keywords_found || []).map(k => <span key={k} className="badge badge-success">{k}</span>)}
              </div>
            </div>
            <div>
              <div className="kw-heading kw-missing-head">Missing — add these</div>
              <div className="tag-cloud">
                {(a.keywords_missing || []).map(k => <span key={k} className="badge badge-danger">{k}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* JD match */}
        {a.job_match_score != null && (
          <div className="card">
            <h2 className="card-title">🎯 Job description match</h2>
            <div className="jd-match-row">
              <ScoreRing score={Math.round(a.job_match_score)} size={72} />
              <p className="jd-notes">{a.jd_match_notes}</p>
            </div>
            {a.jd_keywords_found?.length > 0 && (
              <div style={{ marginTop: '1rem' }}>
                <div className="kw-heading kw-found-head">JD keywords you have</div>
                <div className="tag-cloud">
                  {a.jd_keywords_found.map(k => <span key={k} className="badge badge-success">{k}</span>)}
                </div>
              </div>
            )}
            {a.jd_keywords_missing?.length > 0 && (
              <div style={{ marginTop: '0.75rem' }}>
                <div className="kw-heading kw-missing-head">JD keywords you're missing</div>
                <div className="tag-cloud">
                  {a.jd_keywords_missing.map(k => <span key={k} className="badge badge-danger">{k}</span>)}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Suggestions */}
        <div className="card">
          <h2 className="card-title">✍️ Actionable suggestions</h2>
          <div className="suggestions">
            {(a.suggestions || []).map((s, i) => (
              <div className="suggestion-item" key={i}>
                <div className="suggestion-section">{s.section}</div>
                <div className="suggestion-issue">⚠️ {s.issue}</div>
                <div className="suggestion-fix">✅ {s.fix}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
