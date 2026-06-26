const axios = require('axios');

const SYSTEM_PROMPT = `You are a world-class resume reviewer and career coach. Analyze the provided resume and return ONLY a valid JSON object. No markdown, no preamble, just raw JSON.

Return this exact structure:
{
  "overall_score": <number 0-100>,
  "verdict": "<2 sentences: overall impression and biggest strength>",
  "section_scores": {
    "contact_info": <0-100>,
    "summary": <0-100>,
    "experience": <0-100>,
    "skills": <0-100>,
    "education": <0-100>,
    "formatting": <0-100>
  },
  "ats_score": <number 0-100>,
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>", "<weakness 3>"],
  "skill_gaps": ["<missing skill 1>", "<missing skill 2>", "<missing skill 3>", "<missing skill 4>"],
  "keywords_found": ["kw1", "kw2", "kw3", "kw4", "kw5", "kw6"],
  "keywords_missing": ["miss1", "miss2", "miss3", "miss4"],
  "suggestions": [
    { "section": "<section name>", "issue": "<what's wrong>", "fix": "<specific rewrite or action>" },
    { "section": "<section name>", "issue": "<what's wrong>", "fix": "<specific rewrite or action>" },
    { "section": "<section name>", "issue": "<what's wrong>", "fix": "<specific rewrite or action>" },
    { "section": "<section name>", "issue": "<what's wrong>", "fix": "<specific rewrite or action>" }
  ],
  "experience_years": <estimated years of experience as number>,
  "detected_role": "<job title / role this resume is targeting>",
  "top_skills": ["skill1", "skill2", "skill3", "skill4", "skill5"]
}`;

async function analyzeWithAI(resumeText, jobDescription = '') {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY is not configured. Please add it to your .env file.');
  }

  const userContent = jobDescription
    ? `Resume:\n${resumeText}\n\nJob Description:\n${jobDescription}\n\nAlso include these fields in your JSON:\n"job_match_score": <0-100>,\n"job_match_notes": "<2 sentences on fit>",\n"jd_keywords_found": ["kw1","kw2"],\n"jd_keywords_missing": ["miss1","miss2"]`
    : `Resume:\n${resumeText}`;

  const response = await axios.post(
    'https://api.anthropic.com/v1/messages',
    {
      model: 'claude-sonnet-4-6',
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userContent }]
    },
    {
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json'
      }
    }
  );

  const raw = response.data.content.map(b => b.text || '').join('');
  const clean = raw.replace(/```json|```/g, '').trim();

  try {
    return JSON.parse(clean);
  } catch {
    throw new Error('AI returned an invalid response. Please try again.');
  }
}

module.exports = { analyzeWithAI };
