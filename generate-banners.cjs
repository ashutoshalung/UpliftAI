const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const BANNER_DIR = path.join(__dirname, 'public', 'banners');
const INFOGRAPHIC_DIR = path.join(__dirname, 'public', 'infographics');
if (!fs.existsSync(BANNER_DIR)) fs.mkdirSync(BANNER_DIR, { recursive: true });
if (!fs.existsSync(INFOGRAPHIC_DIR)) fs.mkdirSync(INFOGRAPHIC_DIR, { recursive: true });

const W = 1600;
const H = 600;

// Brand colors
const C = {
  orange: '#F97316', coral: '#F43F5E', magenta: '#D946EF', purple: '#7C3AED',
  navy: '#1E1B4B', deepNavy: '#0F0D2E', pink: '#EC4899', green: '#22C55E',
  teal: '#14B8A6', yellow: '#EAB308', indigo: '#4F46E5', slate: '#1E293B',
  darkSlate: '#0F172A', blue: '#3B82F6',
};

// Dot grid pattern
function dotGrid(opacity = 0.06, spacing = 40, radius = 1.5) {
  let dots = '';
  for (let x = spacing; x < W; x += spacing) {
    for (let y = spacing; y < H; y += spacing) {
      dots += `<circle cx="${x}" cy="${y}" r="${radius}" fill="rgba(255,255,255,${opacity})"/>`;
    }
  }
  return dots;
}

// Angular geometric accents
function geoAccents(accentColor, opacity = 0.08) {
  return `
    <polygon points="0,0 300,0 0,200" fill="${accentColor}" opacity="${opacity}"/>
    <polygon points="${W},${H} ${W-350},${H} ${W},${H-250}" fill="${accentColor}" opacity="${opacity * 0.7}"/>
    <line x1="80" y1="${H-30}" x2="400" y2="${H-30}" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
    <line x1="${W-400}" y1="30" x2="${W-80}" y2="30" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <circle cx="${W-120}" cy="120" r="60" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
    <circle cx="${W-120}" cy="120" r="30" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    <rect x="60" y="${H-100}" width="3" height="60" rx="1.5" fill="rgba(255,255,255,0.12)"/>
    <rect x="74" y="${H-80}" width="3" height="40" rx="1.5" fill="rgba(255,255,255,0.08)"/>
  `;
}

// Glassmorphism panel
function glassPanel(x, y, w, h, rx = 16) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>`;
}

function createBanner({ titleLine1, titleLine2, subtitle, tagline, bottomText,
  gradientStart, gradientEnd, gradientMid, accentColor, chipText, chipColor }) {

  const safe = (t) => (t || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;');

  const hasLine2 = titleLine2 && titleLine2.trim().length > 0;

  // Dynamic font sizing
  const maxLen = Math.max((titleLine1||'').length, (titleLine2||'').length);
  let fontSize = 96;
  if (maxLen > 20) fontSize = 84;
  if (maxLen > 28) fontSize = 72;
  if (maxLen > 36) fontSize = 62;

  // Vertical layout
  const chipY = 135;
  const line1Y = hasLine2 ? 280 : 290;
  const line2Y = line1Y + fontSize + 12;
  const subtitleY = hasLine2 ? line2Y + 65 : line1Y + 80;
  const taglineY = hasLine2 ? line2Y + 110 : line1Y + 125;
  const bottomY = H - 40;

  const gMid = gradientMid || gradientEnd;

  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${gradientStart}"/>
      <stop offset="50%" style="stop-color:${gMid}"/>
      <stop offset="100%" style="stop-color:${gradientEnd}"/>
    </linearGradient>
    <radialGradient id="glow1" cx="20%" cy="30%" r="60%">
      <stop offset="0%" style="stop-color:rgba(255,255,255,0.08)"/>
      <stop offset="100%" style="stop-color:rgba(255,255,255,0)"/>
    </radialGradient>
    <radialGradient id="glow2" cx="80%" cy="70%" r="50%">
      <stop offset="0%" style="stop-color:${accentColor || gradientEnd};stop-opacity:0.12"/>
      <stop offset="100%" style="stop-color:${accentColor || gradientEnd};stop-opacity:0"/>
    </radialGradient>
    <filter id="textShadow"><feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="rgba(0,0,0,0.3)"/></filter>
    <filter id="chipShadow"><feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="rgba(0,0,0,0.2)"/></filter>
  </defs>

  <!-- Deep gradient background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow1)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>

  <!-- Dot grid texture -->
  ${dotGrid(0.05, 36, 1.2)}

  <!-- Geometric accents -->
  ${geoAccents(accentColor || '#ffffff', 0.07)}

  <!-- Glass panels -->
  ${glassPanel(W - 280, 80, 220, 140)}
  ${glassPanel(40, H - 160, 180, 100)}

  ${chipText ? `
  <!-- Chip / badge -->
  <rect x="${W/2 - (chipText.length * 5.5 + 24)}" y="${chipY - 22}" width="${chipText.length * 11 + 48}" height="34" rx="17"
    fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" stroke-width="1" filter="url(#chipShadow)"/>
  <text x="${W/2}" y="${chipY}" text-anchor="middle"
    font-family="'Segoe UI', system-ui, sans-serif"
    font-size="15" font-weight="700" letter-spacing="4" fill="rgba(255,255,255,0.9)">
    ${safe(chipText)}
  </text>` : ''}

  <!-- Title Line 1 -->
  <text x="${W/2}" y="${line1Y}" text-anchor="middle" filter="url(#textShadow)"
    font-family="'Segoe UI', system-ui, sans-serif"
    font-size="${fontSize}" font-weight="900" fill="white" letter-spacing="-1">
    ${safe(titleLine1)}
  </text>

  ${hasLine2 ? `
  <!-- Title Line 2 -->
  <text x="${W/2}" y="${line2Y}" text-anchor="middle" filter="url(#textShadow)"
    font-family="'Segoe UI', system-ui, sans-serif"
    font-size="${fontSize}" font-weight="900" fill="${accentColor || 'rgba(255,255,255,0.85)'}" letter-spacing="-1">
    ${safe(titleLine2)}
  </text>` : ''}

  ${subtitle ? `
  <!-- Subtitle -->
  <text x="${W/2}" y="${subtitleY}" text-anchor="middle"
    font-family="'Segoe UI', system-ui, sans-serif"
    font-size="22" font-weight="500" fill="rgba(255,255,255,0.7)" letter-spacing="1">
    ${safe(subtitle)}
  </text>` : ''}

  ${tagline ? `
  <!-- Tagline bar -->
  <rect x="${W/2 - (tagline.length * 4.5 + 30)}" y="${taglineY - 18}" width="${tagline.length * 9 + 60}" height="30" rx="15"
    fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
  <text x="${W/2}" y="${taglineY + 2}" text-anchor="middle"
    font-family="'Segoe UI', system-ui, sans-serif"
    font-size="16" font-weight="600" letter-spacing="3" fill="rgba(255,255,255,0.6)">
    ${safe(tagline)}
  </text>` : ''}

  ${bottomText ? `
  <!-- Bottom accent text -->
  <text x="${W/2}" y="${bottomY}" text-anchor="middle"
    font-family="'Segoe UI', system-ui, sans-serif"
    font-size="14" font-weight="700" letter-spacing="5" fill="${accentColor || 'rgba(255,255,255,0.5)'}">
    ${safe(bottomText)}
  </text>` : ''}

  <!-- Top accent line -->
  <rect x="0" y="0" width="${W}" height="3" fill="${accentColor || 'rgba(255,255,255,0.3)'}"/>
  <!-- Bottom accent line -->
  <rect x="0" y="${H-3}" width="${W}" height="3" fill="${accentColor || 'rgba(255,255,255,0.2)'}"/>
</svg>`;
}

const banners = [
  {
    file: 'welcome.png',
    chipText: 'UPLIFT AI COMMUNITY',
    titleLine1: 'Welcome to Uplift AI',
    titleLine2: 'Career Accelerator',
    subtitle: 'Become the AI professional companies actually hire.',
    tagline: 'GAP-MAPPED  ·  MENTOR-LED  ·  EXPERT-REFERRED',
    bottomText: 'SINGAPORE-BASED  ·  GLOBALLY CONNECTED',
    gradientStart: C.deepNavy, gradientMid: '#1a1145', gradientEnd: '#2d1a4e',
    accentColor: C.orange,
  },
  {
    file: 'journey.png',
    chipText: 'YOUR PATHWAY',
    titleLine1: 'How This',
    titleLine2: 'Community Works',
    subtitle: 'Five steps. From where you are to where you want to be.',
    tagline: 'ASSESS  →  CHOOSE  →  ENROLL  →  BUILD  →  GET PLACED',
    gradientStart: '#1a0a2e', gradientEnd: '#2d1540',
    accentColor: C.coral,
  },
  {
    file: 'program-1-learn.png',
    chipText: 'PROGRAM 1  ·  $120  ·  $85K–$145K',
    titleLine1: 'LEARN',
    titleLine2: 'AI & ML Foundations',
    subtitle: 'Master the science behind AI',
    tagline: 'PYTORCH  ·  TENSORFLOW/KERAS  ·  SCIKIT-LEARN',
    bottomText: 'TARGET ROLE: ML ENGINEER (ENTRY-LEVEL)',
    gradientStart: C.deepNavy, gradientEnd: '#2a1a00',
    accentColor: C.orange,
  },
  {
    file: 'program-2-build.png',
    chipText: 'PROGRAM 2  ·  $120  ·  $130K–$250K',
    titleLine1: 'BUILD',
    titleLine2: 'LLM Applications & RAG',
    subtitle: 'Build production LLM apps',
    tagline: 'LANGCHAIN  ·  HUGGING FACE  ·  PINECONE/CHROMADB',
    bottomText: 'TARGET ROLE: LLM ENGINEER',
    gradientStart: C.deepNavy, gradientEnd: '#2d0a1a',
    accentColor: C.coral,
  },
  {
    file: 'program-3-automate.png',
    chipText: 'PROGRAM 3  ·  $120  ·  $110K–$280K',
    titleLine1: 'AUTOMATE',
    titleLine2: 'AI Agents & Automation',
    subtitle: 'Make AI systems autonomous',
    tagline: 'N8N  ·  OPENCLAW  ·  CREWAI',
    bottomText: 'TARGET ROLE: AI AGENT DEVELOPER',
    gradientStart: C.deepNavy, gradientEnd: '#2a0a3d',
    accentColor: C.magenta,
  },
  {
    file: 'program-4-code.png',
    chipText: 'PROGRAM 4  ·  $150  ·  $130K–$250K',
    titleLine1: 'CODE',
    titleLine2: 'AI-Powered Development',
    subtitle: 'Code 10x faster with AI',
    tagline: 'CLAUDE CODE  ·  CURSOR  ·  GITHUB COPILOT',
    bottomText: 'TARGET ROLE: AI SOFTWARE ENGINEER',
    gradientStart: C.deepNavy, gradientEnd: '#0a2d1a',
    accentColor: C.green,
  },
  {
    file: 'program-5-deploy.png',
    chipText: 'PROGRAM 5  ·  $150  ·  $145K–$320K',
    titleLine1: 'DEPLOY',
    titleLine2: 'MLOps & Deployment',
    subtitle: 'Ship AI to production at scale',
    tagline: 'DOCKER  ·  SAGEMAKER/VERTEX  ·  MLFLOW',
    bottomText: 'TARGET ROLE: MLOPS ENGINEER',
    gradientStart: C.deepNavy, gradientEnd: '#0a2d2d',
    accentColor: C.teal,
  },
  {
    file: 'program-6-ship.png',
    chipText: 'PROGRAM 6  ·  $150  ·  $150K–$350K+',
    titleLine1: 'SHIP',
    titleLine2: 'AI Product Builder',
    subtitle: 'Build, launch, and monetize AI products',
    tagline: 'LOVABLE  ·  BOLT.NEW  ·  REPLIT',
    bottomText: 'TARGET ROLES: AI PRODUCT MANAGER  ·  AI STARTUP FOUNDER',
    gradientStart: C.deepNavy, gradientEnd: '#2d2a00',
    accentColor: C.yellow,
  },
  {
    file: 'assessment.png',
    chipText: 'FREE  ·  30 MINUTES  ·  NO COMMITMENT',
    titleLine1: 'AI Job Readiness',
    titleLine2: 'Assessment',
    subtitle: 'Know where you stand. Get your personalised gap analysis.',
    tagline: 'REGISTER BELOW  ·  GET YOUR GAP ANALYSIS',
    bottomText: 'POWERED BY EQUIP.CO',
    gradientStart: '#1a0a2e', gradientEnd: '#2d0a2e',
    accentColor: C.purple,
  },
  {
    file: 'pricing.png',
    chipText: 'UPLIFT AI  ·  CAREER ACCELERATOR',
    titleLine1: 'Packages & Pricing',
    titleLine2: '',
    subtitle: 'Every package includes mentorship, proof-of-work & placement.',
    tagline: 'PACKAGE 1: $300  ·  PREMIUM: $500  ·  PACKAGE 2: $300',
    bottomText: 'INDIVIDUAL PROGRAMS FROM $120',
    gradientStart: C.deepNavy, gradientEnd: '#2d1a00',
    accentColor: C.orange,
  },
  {
    file: 'mentor-circles.png',
    chipText: 'UPLIFT AI  ·  MENTORSHIP',
    titleLine1: 'Mentor Circles',
    titleLine2: '',
    subtitle: 'Group mentoring with real practitioners who level you up.',
    tagline: 'DEEPMIND  ·  GOOGLE  ·  META  ·  NUS  ·  MIT  ·  INSEAD  ·  IIT',
    gradientStart: '#1a0a2e', gradientEnd: '#2d0a1a',
    accentColor: C.coral,
  },
  {
    file: 'specialist-clinics.png',
    chipText: 'UPLIFT AI  ·  DEEP DIVES',
    titleLine1: 'Specialist Clinics',
    titleLine2: '',
    subtitle: 'Focused sessions on the topics that matter most.',
    tagline: 'RAG  ·  AGENTS  ·  EVALS  ·  PRODUCT  ·  PLATFORM  ·  AUTOMATION',
    gradientStart: C.deepNavy, gradientEnd: '#1a0a3d',
    accentColor: C.purple,
  },
  {
    file: 'interview-prep.png',
    chipText: 'UPLIFT AI  ·  CAREER COACHING',
    titleLine1: 'Interview Prep',
    titleLine2: '& Career Coaching',
    subtitle: 'We don\'t just train you — we place you.',
    tagline: 'MOCK INTERVIEWS  ·  WHITEBOARDING  ·  SALARY NEGOTIATION',
    gradientStart: C.darkSlate, gradientEnd: '#1a1a3d',
    accentColor: C.orange,
  },
  {
    file: 'portfolios.png',
    chipText: 'UPLIFT AI  ·  PROOF-OF-WORK',
    titleLine1: 'Student Portfolios',
    titleLine2: '& Proof-of-Work',
    subtitle: 'AI readiness is not claimed — it is demonstrated.',
    tagline: 'GITHUB REPOS  ·  LIVE WEBSITES  ·  DEPLOYED PROJECTS',
    gradientStart: C.deepNavy, gradientEnd: '#2d1a00',
    accentColor: C.orange,
  },
  {
    file: 'project-gallery.png',
    chipText: 'UPLIFT AI  ·  COMMUNITY',
    titleLine1: 'Project Gallery',
    titleLine2: '& Code Reviews',
    subtitle: 'Share your work. Get feedback from mentors and peers.',
    tagline: 'BUILD IN PUBLIC  ·  ITERATE  ·  SHIP',
    gradientStart: C.deepNavy, gradientEnd: '#0a2d2d',
    accentColor: C.teal,
  },
  {
    file: 'general-discussion.png',
    chipText: 'UPLIFT AI  ·  COMMUNITY',
    titleLine1: 'General Discussion',
    titleLine2: '& Networking',
    subtitle: 'Connect, share, and grow with fellow AI professionals.',
    tagline: 'ASIA  ·  GCC  ·  AUSTRALIA  ·  US/CANADA',
    bottomText: 'GLOBALLY CONNECTED',
    gradientStart: '#1a0a2e', gradientEnd: '#2d1540',
    accentColor: C.pink,
  },
  {
    file: 'introductions.png',
    chipText: 'UPLIFT AI  ·  WELCOME',
    titleLine1: 'Introductions',
    titleLine2: '',
    subtitle: 'Tell us about you. Your background, goals, and AI journey.',
    tagline: 'WELCOME TO THE COMMUNITY',
    gradientStart: C.deepNavy, gradientEnd: '#2d1a00',
    accentColor: C.orange,
  },
  {
    file: 'masterclass.png',
    chipText: 'FREE  ·  NO PAYMENT  ·  NO COMMITMENT',
    titleLine1: 'Free AI Tools',
    titleLine2: 'Masterclass',
    subtitle: 'Not ready to commit? Start here. Just real skills.',
    tagline: 'LEARN THE EXACT TOOLS COMPANIES USE TO HIRE',
    gradientStart: C.deepNavy, gradientEnd: '#2d1a00',
    accentColor: C.orange,
  },
  {
    file: 'announcements.png',
    chipText: 'UPLIFT AI  ·  OFFICIAL',
    titleLine1: 'Announcements',
    titleLine2: '',
    subtitle: 'Cohort dates, events, launches, and community updates.',
    tagline: 'TURN ON NOTIFICATIONS',
    gradientStart: C.darkSlate, gradientEnd: C.deepNavy,
    accentColor: C.indigo,
  },
  {
    file: 'mentors.png',
    chipText: 'UPLIFT AI  ·  MENTORSHIP NETWORK',
    titleLine1: 'Meet the Mentors',
    titleLine2: '& Specialists',
    subtitle: 'Direct coaching from people who\'ve built at the highest level.',
    tagline: 'DEEPMIND  ·  GOOGLE  ·  META  ·  ANTHROPIC  ·  OPENAI  ·  NUS  ·  MIT',
    bottomText: 'BECOME A UPLIFT MENTOR  ·  BUILD CREDIBILITY INTO THE PIPELINE',
    gradientStart: '#1a0a2e', gradientEnd: '#2d0a1a',
    accentColor: C.magenta,
  },
  {
    file: 'where-to-start.png',
    chipText: 'UPLIFT AI  ·  FIND YOUR PATH',
    titleLine1: 'Where to Start',
    titleLine2: '',
    subtitle: 'Tell us where you are. We\'ll tell you where to begin.',
    tagline: 'NEW TO AI  ·  BUILDER  ·  DEVELOPER  ·  FOUNDER',
    gradientStart: C.deepNavy, gradientEnd: '#0a2d1a',
    accentColor: C.green,
  },
  {
    file: 'job-board.png',
    chipText: 'UPLIFT AI  ·  PLACEMENTS',
    titleLine1: 'Job Board & Referral',
    titleLine2: 'Opportunities',
    subtitle: 'Internships and roles at top AI companies.',
    tagline: 'PERSONALISED REFERRAL MAPPING  ·  GLOBAL AI OPPORTUNITIES',
    gradientStart: C.darkSlate, gradientEnd: '#0a1a3d',
    accentColor: C.blue,
  },
  {
    file: 'companies.png',
    chipText: 'UPLIFT AI  ·  FOR COMPANIES',
    titleLine1: 'Hire AI Talent',
    titleLine2: 'From Our Pipeline',
    subtitle: 'Validated AI professionals with proof-of-work portfolios.',
    tagline: 'ML  ·  LLM  ·  AGENTS  ·  MLOPS  ·  PRODUCT',
    bottomText: 'HELLO@UPLIFTAI.PRO',
    gradientStart: C.deepNavy, gradientEnd: '#0a2d1a',
    accentColor: C.green,
  },
];

// =====================================================
// INFOGRAPHICS
// =====================================================

const IW = 1200;

// XML-safe text escaping for infographics
function esc(t) {
  return (t || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
const IH_TALL = 1400;
const IH_MED = 1000;
const IH_SHORT = 800;

function infoDotGrid(w, h, opacity = 0.04, spacing = 32, radius = 1) {
  let dots = '';
  for (let x = spacing; x < w; x += spacing) {
    for (let y = spacing; y < h; y += spacing) {
      dots += `<circle cx="${x}" cy="${y}" r="${radius}" fill="rgba(255,255,255,${opacity})"/>`;
    }
  }
  return dots;
}

function createProgramComparisonInfographic() {
  const programs = [
    { num: 1, label: 'LEARN', title: 'AI & ML Foundations', price: '$120', salary: '$85K–$145K', color: C.orange, tools: 'PyTorch · TensorFlow · Scikit-learn', role: 'ML Engineer', repos: '2-3' },
    { num: 2, label: 'BUILD', title: 'LLM Applications & RAG', price: '$120', salary: '$130K–$250K', color: C.coral, tools: 'LangChain · Hugging Face · Pinecone', role: 'LLM Engineer', repos: '5-6' },
    { num: 3, label: 'AUTOMATE', title: 'AI Agents & Automation', price: '$120', salary: '$110K–$280K', color: C.magenta, tools: 'n8n · OpenClaw · CrewAI', role: 'AI Agent Developer', repos: '8-12' },
    { num: 4, label: 'CODE', title: 'AI-Powered Development', price: '$150', salary: '$130K–$250K', color: C.green, tools: 'Claude Code · Cursor · Copilot', role: 'AI Software Engineer', repos: '12-15' },
    { num: 5, label: 'DEPLOY', title: 'MLOps & Deployment', price: '$150', salary: '$145K–$320K', color: C.teal, tools: 'Docker · SageMaker · MLflow', role: 'MLOps Engineer', repos: '15-18' },
    { num: 6, label: 'SHIP', title: 'AI Product Builder', price: '$150', salary: '$150K–$350K+', color: C.yellow, tools: 'Lovable · Bolt.new · Replit', role: 'AI PM / Founder', repos: '20+' },
  ];

  const rowH = 165;
  const startY = 220;
  const totalH = startY + programs.length * rowH + 100;

  let rows = '';
  programs.forEach((p, i) => {
    const y = startY + i * rowH;
    rows += `
      <!-- Program ${p.num} row -->
      <rect x="40" y="${y}" width="${IW-80}" height="${rowH-15}" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

      <!-- Number badge -->
      <rect x="65" y="${y+20}" width="60" height="60" rx="14" fill="${p.color}"/>
      <text x="95" y="${y+58}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="28" font-weight="900" fill="white">${p.num}</text>

      <!-- Label & Title -->
      <text x="150" y="${y+42}" font-family="'Segoe UI',sans-serif" font-size="14" font-weight="800" letter-spacing="3" fill="${p.color}">${esc(p.label)}</text>
      <text x="150" y="${y+70}" font-family="'Segoe UI',sans-serif" font-size="22" font-weight="700" fill="white">${esc(p.title)}</text>

      <!-- Tools -->
      <text x="150" y="${y+100}" font-family="'Segoe UI',sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.5)">${esc(p.tools)}</text>

      <!-- Right side stats -->
      <text x="${IW-350}" y="${y+38}" font-family="'Segoe UI',sans-serif" font-size="13" font-weight="600" letter-spacing="2" fill="rgba(255,255,255,0.4)">SALARY</text>
      <text x="${IW-350}" y="${y+62}" font-family="'Segoe UI',sans-serif" font-size="22" font-weight="800" fill="white">${esc(p.salary)}</text>
      <text x="${IW-350}" y="${y+90}" font-family="'Segoe UI',sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.5)">${esc(p.role)}</text>

      <!-- Price badge -->
      <rect x="${IW-170}" y="${y+25}" width="90" height="40" rx="20" fill="${p.color}" opacity="0.9"/>
      <text x="${IW-125}" y="${y+52}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="20" font-weight="800" fill="white">${esc(p.price)}</text>

      <!-- Repos -->
      <text x="${IW-125}" y="${y+90}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.4)">${esc(p.repos)} repos</text>

      <!-- Connector line to next -->
      ${i < programs.length - 1 ? `<line x1="95" y1="${y+rowH-15}" x2="95" y2="${y+rowH}" stroke="${p.color}" stroke-width="2" opacity="0.4"/>` : ''}
    `;
  });

  return `<svg width="${IW}" height="${totalH}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ibg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${C.deepNavy}"/>
        <stop offset="100%" style="stop-color:#1a1145"/>
      </linearGradient>
    </defs>
    <rect width="${IW}" height="${totalH}" fill="url(#ibg)"/>
    ${infoDotGrid(IW, totalH)}

    <!-- Title -->
    <text x="${IW/2}" y="60" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="14" font-weight="700" letter-spacing="5" fill="${C.orange}">UPLIFT AI  ·  CAREER ACCELERATOR</text>
    <text x="${IW/2}" y="110" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="48" font-weight="900" fill="white">The 6-Program Ascent</text>
    <text x="${IW/2}" y="150" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="18" font-weight="500" fill="rgba(255,255,255,0.5)">From AI Curious to AI Employed</text>
    <text x="${IW/2}" y="185" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="14" font-weight="700" letter-spacing="3" fill="rgba(255,255,255,0.3)">${esc('LEARN → BUILD → AUTOMATE → CODE → DEPLOY → SHIP')}</text>

    ${rows}

    <!-- Bottom CTA -->
    <rect x="${IW/2 - 200}" y="${totalH - 70}" width="400" height="44" rx="22" fill="${C.orange}"/>
    <text x="${IW/2}" y="${totalH - 42}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="16" font-weight="800" fill="white" letter-spacing="1">TAKE THE AI READINESS ASSESSMENT →</text>
  </svg>`;
}

function createPricingInfographic() {
  const h = 900;
  const packages = [
    { name: 'Package 1', price: '$300', programs: 'Programs 1–3', labels: 'LEARN + BUILD + AUTOMATE', bestFor: 'Beginners, career changers', salary: '$85K–$280K', color: C.coral, x: 40 },
    { name: 'Premium', price: '$500', programs: 'Programs 1–4', labels: 'LEARN + BUILD + AUTOMATE + CODE', bestFor: 'Full stack learners', salary: '$85K–$250K', color: C.orange, x: 420, best: true },
    { name: 'Package 2', price: '$300', programs: 'Programs 4–6', labels: 'CODE + DEPLOY + SHIP', bestFor: 'Developers with ML knowledge', salary: '$130K–$350K+', color: C.green, x: 800 },
  ];

  let cards = '';
  packages.forEach(p => {
    const cardW = 340;
    const cardH = 480;
    const cardY = 220;

    cards += `
      <!-- ${p.name} -->
      <rect x="${p.x}" y="${cardY}" width="${cardW}" height="${cardH}" rx="20" fill="rgba(255,255,255,0.05)" stroke="${p.best ? p.color : 'rgba(255,255,255,0.1)'}" stroke-width="${p.best ? 2 : 1}"/>

      ${p.best ? `
      <rect x="${p.x + cardW/2 - 60}" y="${cardY - 15}" width="120" height="30" rx="15" fill="${p.color}"/>
      <text x="${p.x + cardW/2}" y="${cardY + 5}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="12" font-weight="800" fill="white" letter-spacing="2">BEST VALUE</text>
      ` : ''}

      <text x="${p.x + cardW/2}" y="${cardY + 50}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="24" font-weight="800" fill="white">${esc(p.name)}</text>
      <text x="${p.x + cardW/2}" y="${cardY + 105}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="56" font-weight="900" fill="${p.color}">${esc(p.price)}</text>

      <line x1="${p.x + 30}" y1="${cardY + 130}" x2="${p.x + cardW - 30}" y2="${cardY + 130}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

      <text x="${p.x + cardW/2}" y="${cardY + 165}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="15" font-weight="700" fill="${p.color}">${esc(p.programs)}</text>
      <text x="${p.x + cardW/2}" y="${cardY + 195}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.5)">${esc(p.labels)}</text>

      <text x="${p.x + 30}" y="${cardY + 245}" font-family="'Segoe UI',sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="rgba(255,255,255,0.4)">BEST FOR</text>
      <text x="${p.x + 30}" y="${cardY + 270}" font-family="'Segoe UI',sans-serif" font-size="15" font-weight="500" fill="rgba(255,255,255,0.7)">${esc(p.bestFor)}</text>

      <text x="${p.x + 30}" y="${cardY + 310}" font-family="'Segoe UI',sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="rgba(255,255,255,0.4)">SALARY RANGE</text>
      <text x="${p.x + 30}" y="${cardY + 340}" font-family="'Segoe UI',sans-serif" font-size="24" font-weight="900" fill="white">${esc(p.salary)}</text>

      <rect x="${p.x + 25}" y="${cardY + cardH - 65}" width="${cardW - 50}" height="44" rx="22" fill="${p.best ? p.color : 'rgba(255,255,255,0.1)'}" stroke="${p.best ? 'none' : 'rgba(255,255,255,0.15)'}" stroke-width="1"/>
      <text x="${p.x + cardW/2}" y="${cardY + cardH - 37}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="15" font-weight="700" fill="white" letter-spacing="1">ENROLL NOW →</text>
    `;
  });

  return `<svg width="${IW}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ibg2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${C.deepNavy}"/>
        <stop offset="100%" style="stop-color:#1a1145"/>
      </linearGradient>
    </defs>
    <rect width="${IW}" height="${h}" fill="url(#ibg2)"/>
    ${infoDotGrid(IW, h)}

    <text x="${IW/2}" y="55" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="14" font-weight="700" letter-spacing="5" fill="${C.orange}">PACKAGES &amp; PRICING</text>
    <text x="${IW/2}" y="105" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="44" font-weight="900" fill="white">Choose Your Package</text>
    <text x="${IW/2}" y="145" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="18" font-weight="500" fill="rgba(255,255,255,0.5)">${esc('Every package includes assessment, mentorship, proof-of-work, interview prep, and placement.')}</text>

    ${cards}

    <text x="${IW/2}" y="${h - 65}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="16" font-weight="600" fill="rgba(255,255,255,0.5)">${esc('Individual programs also available: $120–$150 each')}</text>
    <text x="${IW/2}" y="${h - 35}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="15" font-weight="700" fill="${C.orange}">${esc('Not sure? Take the AI Readiness Assessment first →')}</text>
  </svg>`;
}

function createJourneyInfographic() {
  const steps = [
    { num: '01', title: 'Find Your Program', time: '30 min', desc: 'Take the AI Job Readiness Assessment. Get your personalised readiness report.', color: C.magenta },
    { num: '02', title: 'Choose Your Package', time: 'Same day', desc: 'Pick from 3 packages starting at $300. We recommend based on your assessment.', color: C.coral },
    { num: '03', title: 'Enroll & Join', time: '24 hrs', desc: 'Complete payment. Get full Circle community access within 24 hours.', color: C.orange },
    { num: '04', title: 'Build Real Projects', time: '2+ weeks', desc: 'Micro-classes, mentors, proof-of-work. Your portfolio grows with each program.', color: C.green },
    { num: '05', title: 'Get Placed', time: 'Ongoing', desc: 'Interview training, mock interviews, referral mapping into roles.', color: C.yellow },
  ];

  const stepH = 130;
  const startY = 200;
  const h = startY + steps.length * stepH + 120;

  let stepsSvg = '';
  steps.forEach((s, i) => {
    const y = startY + i * stepH;
    stepsSvg += `
      <rect x="60" y="${y}" width="${IW-120}" height="${stepH-15}" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

      <!-- Number circle -->
      <circle cx="120" cy="${y + (stepH-15)/2}" r="30" fill="${s.color}" opacity="0.9"/>
      <text x="120" y="${y + (stepH-15)/2 + 7}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="18" font-weight="900" fill="white">${s.num}</text>

      <!-- Content -->
      <text x="175" y="${y + 35}" font-family="'Segoe UI',sans-serif" font-size="22" font-weight="800" fill="white">${esc(s.title)}</text>
      <text x="175" y="${y + 62}" font-family="'Segoe UI',sans-serif" font-size="15" font-weight="400" fill="rgba(255,255,255,0.55)">${esc(s.desc)}</text>

      <!-- Time badge -->
      <rect x="${IW-240}" y="${y + 20}" width="100" height="30" rx="15" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="${IW-190}" y="${y + 40}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.6)">${esc(s.time)}</text>

      ${i < steps.length - 1 ? `<line x1="120" y1="${y+stepH-15}" x2="120" y2="${y+stepH}" stroke="${s.color}" stroke-width="2" opacity="0.4" stroke-dasharray="4,4"/>` : ''}
    `;
  });

  return `<svg width="${IW}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ibg3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${C.deepNavy}"/>
        <stop offset="100%" style="stop-color:#1a0a2e"/>
      </linearGradient>
    </defs>
    <rect width="${IW}" height="${h}" fill="url(#ibg3)"/>
    ${infoDotGrid(IW, h)}

    <text x="${IW/2}" y="55" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="14" font-weight="700" letter-spacing="5" fill="${C.coral}">HOW IT WORKS</text>
    <text x="${IW/2}" y="105" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="44" font-weight="900" fill="white">Your Journey With Uplift AI</text>
    <text x="${IW/2}" y="145" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="18" font-weight="500" fill="rgba(255,255,255,0.5)">Five steps. From where you are to where you want to be.</text>

    ${stepsSvg}

    <text x="${IW/2}" y="${h-60}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="20" font-weight="700" fill="white">${esc('It starts with Step 1 — and Step 1 is free.')}</text>
    <rect x="${IW/2-180}" y="${h-45}" width="360" height="6" rx="3" fill="${C.orange}" opacity="0.6"/>
  </svg>`;
}

function createWhereToStartInfographic() {
  const personas = [
    { title: "I'm new to AI", desc: 'Student, career switcher, or non-tech professional', start: 'Program 1 (LEARN)', pkg: 'Package 1 — $300', outcome: '8-12 GitHub repos + live portfolio', color: C.magenta },
    { title: 'I can build models but want apps', desc: 'Know Python/ML, want production LLM apps', start: 'Program 2 (BUILD)', pkg: 'Premium — $500', outcome: 'Shipping LLM apps + agents + AI coding', color: C.coral },
    { title: "I'm a developer — give me AI", desc: 'Can code, want AI superpowers', start: 'Program 4 (CODE)', pkg: 'Package 2 — $300', outcome: 'Full AI products, deployed with users', color: C.orange },
    { title: 'I want to ship & start a company', desc: 'Has foundations, wants to build + monetize', start: 'Program 5/6 (DEPLOY/SHIP)', pkg: 'Package 2 — $300', outcome: 'AI SaaS with paying users, investor-ready', color: C.green },
  ];

  const cardW = (IW - 120) / 2;
  const cardH = 260;
  const startY = 200;
  const h = startY + 2 * (cardH + 20) + 100;

  let cards = '';
  personas.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 40 + col * (cardW + 20);
    const y = startY + row * (cardH + 20);

    cards += `
      <rect x="${x}" y="${y}" width="${cardW}" height="${cardH}" rx="18" fill="rgba(255,255,255,0.04)" stroke="${p.color}" stroke-width="1.5" stroke-opacity="0.4"/>

      <text x="${x+25}" y="${y+40}" font-family="'Segoe UI',sans-serif" font-size="22" font-weight="800" fill="white">${esc('"' + p.title + '"')}</text>
      <text x="${x+25}" y="${y+65}" font-family="'Segoe UI',sans-serif" font-size="14" font-weight="400" fill="rgba(255,255,255,0.5)">${esc(p.desc)}</text>

      <text x="${x+25}" y="${y+105}" font-family="'Segoe UI',sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="rgba(255,255,255,0.35)">START AT</text>
      <text x="${x+25}" y="${y+125}" font-family="'Segoe UI',sans-serif" font-size="16" font-weight="700" fill="white">${esc(p.start)}</text>

      <text x="${x+25}" y="${y+160}" font-family="'Segoe UI',sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="rgba(255,255,255,0.35)">PACKAGE</text>
      <text x="${x+25}" y="${y+180}" font-family="'Segoe UI',sans-serif" font-size="16" font-weight="700" fill="${p.color}">${esc(p.pkg)}</text>

      <text x="${x+25}" y="${y+215}" font-family="'Segoe UI',sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="rgba(255,255,255,0.35)">AFTER</text>
      <text x="${x+25}" y="${y+235}" font-family="'Segoe UI',sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.6)">${esc(p.outcome)}</text>
    `;
  });

  return `<svg width="${IW}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ibg4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${C.deepNavy}"/>
        <stop offset="100%" style="stop-color:#0a2d1a"/>
      </linearGradient>
    </defs>
    <rect width="${IW}" height="${h}" fill="url(#ibg4)"/>
    ${infoDotGrid(IW, h)}

    <text x="${IW/2}" y="55" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="14" font-weight="700" letter-spacing="5" fill="${C.green}">FIND YOUR STARTING POINT</text>
    <text x="${IW/2}" y="105" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="44" font-weight="900" fill="white">Where to Start</text>
    <text x="${IW/2}" y="145" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="18" font-weight="500" fill="rgba(255,255,255,0.5)">${esc("You don't start at Program 1 unless you need to.")}</text>

    ${cards}
  </svg>`;
}

function createFeaturesInfographic() {
  const features = [
    { title: 'AI Readiness Assessment', desc: 'Comprehensive evaluation mapping your skills to market voids.', color: C.magenta },
    { title: 'Elite 1:1 Mentorship', desc: 'Coaching from alumni of NUS, MIT, INSEAD, Stanford, IIT.', color: C.coral },
    { title: 'High-Signalling Proof-of-Work', desc: 'Live portfolio via Lovable/Bolt.new + formidable GitHub repos.', color: C.orange },
    { title: 'Aggressive Interview Training', desc: 'Mock interviews, whiteboarding, salary negotiation for $150K+.', color: C.green },
    { title: 'Personalised Referral Mapping', desc: 'Internships for Programs 1-3, senior placements for 4-6.', color: C.yellow },
  ];

  const cardW = (IW - 100) / 3;
  const cardH = 180;
  const startY = 200;
  const h = startY + 2 * (cardH + 20) + 100;

  let cards = '';
  features.forEach((f, i) => {
    const col = i < 3 ? i : i - 3;
    const row = i < 3 ? 0 : 1;
    const totalInRow = i < 3 ? 3 : 2;
    const rowOffset = totalInRow === 2 ? (IW - 2 * cardW - 20) / 2 : 30;
    const x = rowOffset + col * (cardW + 20);
    const y = startY + row * (cardH + 20);

    cards += `
      <rect x="${x}" y="${y}" width="${cardW}" height="${cardH}" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <rect x="${x}" y="${y}" width="${cardW}" height="4" rx="2" fill="${f.color}" opacity="0.8"/>

      <text x="${x+20}" y="${y+45}" font-family="'Segoe UI',sans-serif" font-size="20" font-weight="800" fill="white">${esc(f.title)}</text>
      <text x="${x+20}" y="${y+80}" font-family="'Segoe UI',sans-serif" font-size="14" font-weight="400" fill="rgba(255,255,255,0.55)">${esc(f.desc)}</text>
    `;
  });

  return `<svg width="${IW}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ibg5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${C.deepNavy}"/>
        <stop offset="100%" style="stop-color:#1a1145"/>
      </linearGradient>
    </defs>
    <rect width="${IW}" height="${h}" fill="url(#ibg5)"/>
    ${infoDotGrid(IW, h)}

    <text x="${IW/2}" y="55" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="14" font-weight="700" letter-spacing="5" fill="${C.orange}">INCLUDED IN EVERY PROGRAM</text>
    <text x="${IW/2}" y="105" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="44" font-weight="900" fill="white">Your Gateway to the Top 1%</text>
    <text x="${IW/2}" y="145" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-size="18" font-weight="500" fill="rgba(255,255,255,0.5)">${esc("This is not a course. It's a career acceleration system.")}</text>

    ${cards}
  </svg>`;
}

// =====================================================
// GENERATE ALL
// =====================================================

async function main() {
  console.log(`\n=== GENERATING WORLD-CLASS BANNERS & INFOGRAPHICS ===\n`);

  // Banners
  console.log(`Generating ${banners.length} banners...`);
  for (const b of banners) {
    const svg = createBanner(b);
    const outPath = path.join(BANNER_DIR, b.file);
    try {
      await sharp(Buffer.from(svg)).png({ quality: 95 }).toFile(outPath);
      console.log(`  ✓ banner: ${b.file}`);
    } catch (e) {
      console.log(`  ✗ banner: ${b.file}: ${e.message}`);
    }
  }

  // Infographics
  console.log(`\nGenerating infographics...`);

  const infographics = [
    { name: 'program-comparison.png', fn: createProgramComparisonInfographic },
    { name: 'pricing-packages.png', fn: createPricingInfographic },
    { name: 'journey-steps.png', fn: createJourneyInfographic },
    { name: 'where-to-start.png', fn: createWhereToStartInfographic },
    { name: 'features-included.png', fn: createFeaturesInfographic },
  ];

  for (const info of infographics) {
    const svg = info.fn();
    const outPath = path.join(INFOGRAPHIC_DIR, info.name);
    try {
      await sharp(Buffer.from(svg)).png({ quality: 95 }).toFile(outPath);
      console.log(`  ✓ infographic: ${info.name}`);
    } catch (e) {
      console.log(`  ✗ infographic: ${info.name}: ${e.message}`);
    }
  }

  console.log(`\n=== DONE ===`);
  console.log(`Banners: public/banners/ (${banners.length} files)`);
  console.log(`Infographics: public/infographics/ (${infographics.length} files)`);
}

main().catch(console.error);
