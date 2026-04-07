'use client';

import { useState } from 'react';
import styles from './page.module.css';

const platforms = ['Instagram', 'TikTok'];

const templates = {
  Instagram: {
    hooks: [
      'Visste du att...',
      'STOPPA scrollandet.',
      'De flesta gör detta fel.',
      '3 saker du MÅSTE veta om [ämne]',
      '[Peptid] — det här berättar ingen för dig.',
      'Varför köper svenskar peptider från utlandet?',
      'Den mest [superlativ] peptiden just nu.',
    ],
    hashtags: [
      '#peptider', '#forskning', '#scandipep', '#sverige', '#biohacking',
      '#bpc157', '#selank', '#ghkcu', '#nootropics', '#antiaging',
      '#forskningspeptider', '#hälsa', '#träning', '#återhämtning', '#fokus',
    ],
    ctas: [
      'Spara det här inlägget 📌',
      'Dela med någon som behöver se detta 👇',
      'Länk i bio ↓',
      'Följ @scandipep för mer',
      'Kommentera om du vill veta mer',
      'Tagga en vän som borde se detta',
    ],
  },
  TikTok: {
    hooks: [
      'POV: du upptäcker peptider för första gången',
      'Ingen pratar om det här...',
      'Saker jag önskar att jag visste innan',
      '3 peptider alla borde känna till',
      'Slutar köpa peptider från utlandet — här är varför',
      'Reagerar på vanliga peptidmyter',
    ],
    hashtags: [
      '#peptider', '#scandipep', '#biohacking', '#forskning', '#sverige',
      '#bpc157', '#fyp', '#foryou', '#hälsa', '#träning',
    ],
    ctas: [
      'Följ för del 2',
      'Länk i bio',
      'Spara videon',
      'Kommentera vilken peptid du vill veta mer om',
    ],
  },
};

function generateVariants(topic, platform, count = 5) {
  const t = templates[platform];
  const variants = [];

  for (let i = 0; i < count; i++) {
    const hook = t.hooks[Math.floor(Math.random() * t.hooks.length)].replace('[ämne]', topic).replace('[Peptid]', topic);
    const cta = t.ctas[Math.floor(Math.random() * t.ctas.length)];
    const shuffled = [...t.hashtags].sort(() => Math.random() - 0.5);
    const tags = shuffled.slice(0, 8).join(' ');

    variants.push({
      hook: hook,
      caption: `${hook}\n\n[Skriv 2-3 meningar om ${topic} här — håll det enkelt och informativt. Inga medicinska påståenden.]\n\n${cta}\n\n${tags}`,
    });
  }

  return variants;
}

export default function ContentGenerator() {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [variants, setVariants] = useState([]);
  const [copied, setCopied] = useState(null);

  const generate = () => {
    if (!topic) return;
    setVariants(generateVariants(topic, platform));
  };

  const copy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Intern</span>
          <h1 className={styles.title}>Content Generator</h1>
          <p className={styles.subtitle}>Generera bildtexter och hooks för sociala medier.</p>
        </div>

        <div className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Ämne</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="T.ex. BPC-157, peptider för nybörjare, rekonstituering..."
              />
            </div>
            <div className={styles.field}>
              <label>Plattform</label>
              <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
                {platforms.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="btn btn-primary" onClick={generate}>
            Generera 5 varianter
          </button>
        </div>

        {variants.length > 0 && (
          <div className={styles.results}>
            <h2 className={styles.resultsTitle}>Varianter — välj den bästa</h2>
            {variants.map((v, i) => (
              <div key={i} className={styles.variant}>
                <div className={styles.variantHeader}>
                  <span className={styles.variantNumber}>#{i + 1}</span>
                  <strong className={styles.hook}>{v.hook}</strong>
                </div>
                <pre className={styles.caption}>{v.caption}</pre>
                <button
                  className={styles.copyBtn}
                  onClick={() => copy(v.caption, i)}
                >
                  {copied === i ? '✓ Kopierad!' : 'Kopiera text'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
