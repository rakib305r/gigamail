import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'
import './AnalyzePage.css'

export default function AnalyzePage() {
  const navigate = useNavigate()
  const fileRef = useRef()
  const [file, setFile] = useState(null)
  const [resumeText, setResumeText] = useState('')
  const [jdText, setJdText] = useState('')
  const [showJD, setShowJD] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleFile = f => {
    const allowed = ['pdf', 'docx', 'doc', 'txt']
    const ext = f.name.split('.').pop().toLowerCase()
    if (!allowed.includes(ext)) { setError('Only PDF, DOCX, DOC, or TXT files allowed.'); return }
    setFile(f); setError('')
    if (ext === 'txt') {
      const reader = new FileReader()
      reader.onload = e => setResumeText(e.target.result)
      reader.readAsText(f)
    }
  }

  const onDrop = e => {
    e.preventDefault(); setDragging(false)
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0])
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    if (!file && !resumeText.trim()) { setError('Upload a file or paste your resume text.'); return }
    if (resumeText.trim().length < 80 && !file) { setError('Resume text is too short.'); return }

    setLoading(true)
    try {
      const fd = new FormData()
      if (file) fd.append('resume', file)
      else fd.append('resumeText', resumeText)
      if (showJD && jdText.trim()) fd.append('jobDescription', jdText.trim())

      const res = await api.post('/resume/analyze', fd, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      navigate(`/result/${res.data.id}`)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div className="analyze-page">
      <div className="analyze-inner">
        <div className="analyze-header">
          <h1>Analyze your resume</h1>
          <p>Upload your resume or paste the text. Optionally add a job description for targeted analysis.</p>
        </div>

        <form onSubmit={handleSubmit} className="analyze-form">
          {/* Upload zone */}
          <div
            className={`upload-zone${dragging ? ' drag-over' : ''}${file ? ' has-file' : ''}`}
            onDragOver={e => { e.preventDefault(); setDragging(true) }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
            onClick={() => fileRef.current.click()}
          >
            <input ref={fileRef} type="file" accept=".pdf,.docx,.doc,.txt" style={{ display: 'none' }}
              onChange={e => e.target.files[0] && handleFile(e.target.files[0])} />
            {file ? (
              <div className="file-chosen">
                <span className="file-icon">📄</span>
                <div>
                  <div className="file-name">{file.name}</div>
                  <div className="file-size">{(file.size / 1024).toFixed(0)} KB</div>
                </div>
                <button type="button" className="file-remove" onClick={e => { e.stopPropagation(); setFile(null); setResumeText('') }}>✕</button>
              </div>
            ) : (
              <>
                <div className="upload-icon">☁️</div>
                <div className="upload-label">Drop your resume here or <span className="upload-link">browse files</span></div>
                <div className="upload-hint">PDF, DOCX, DOC, or TXT — up to 10 MB</div>
              </>
            )}
          </div>

          <div className="divider-text">or paste resume text</div>

          <textarea
            className="form-input resume-textarea"
            value={resumeText}
            onChange={e => setResumeText(e.target.value)}
            placeholder="Paste your full resume text here..."
            rows={10}
          />

          {/* JD toggle */}
          <label className="jd-toggle">
            <input type="checkbox" checked={showJD} onChange={e => setShowJD(e.target.checked)} />
            <span className="toggle-track"><span className="toggle-thumb" /></span>
            <span>Include a job description for targeted analysis</span>
          </label>

          {showJD && (
            <textarea
              className="form-input"
              value={jdText}
              onChange={e => setJdText(e.target.value)}
              placeholder="Paste the job description here..."
              rows={6}
              style={{ marginTop: '0.75rem' }}
            />
          )}

          {error && <div className="analyze-error">{error}</div>}

          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '1.25rem' }} disabled={loading}>
            {loading ? (
              <><span className="spinner" /> Analyzing your resume...</>
            ) : (
              '✨ Analyze my resume'
            )}
          </button>

          {loading && (
            <p className="loading-note">This usually takes 10–20 seconds. Please don't close the page.</p>
          )}
        </form>
      </div>
    </div>
  )
}
