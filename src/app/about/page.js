import styles from './page.module.css';

export const metadata = {
  title: 'Om Oss',
  description: 'Lär dig mer om ScandiPep — skandinavisk precision möter forskningskvalitet.',
};

const values = [
  {
    title: 'COA på Varje Batch',
    desc: 'Varje produkt levereras med ett analysbevis från ett ackrediterat tredjepartslaboratorium som verifierar identitet och ≥98% renhet.',
  },
  {
    title: 'Europeiska Leverantörer',
    desc: 'Vi köper uteslutande från granskade europeiska peptidtillverkare med bevisad kompetens inom analytisk kemi och syntes.',
  },
  {
    title: 'Kylkedjeförvaring',
    desc: 'Peptider förvaras under strikta temperaturkontrollerade förhållanden från mottagning till utskick, vilket säkerställer förvaringens integritet.',
  },
  {
    title: 'Snabb Leverans',
    desc: 'Alla beställningar skickas i omärkta, temperaturanpassade förpackningar med fullständig spårning inom hela Sverige och EU.',
  },
];

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.hero}>
          <span className={styles.badge}>Om ScandiPep</span>
          <h1 className={styles.title}>Skandinavisk Precision Möter Forskningskvalitet</h1>
          <p className={styles.subtitle}>
            ScandiPep grundades med ett tydligt uppdrag: att förse den europeiska
            forskargemenskapen med pålitligt rena, korrekt dokumenterade peptider — utan
            kompromisser. Vi tror att kvalitetsforskning börjar med kvalitetsmaterial, och
            varje produkt vi erbjuder speglar den övertygelsen.
          </p>
        </div>

        <div className={styles.grid}>
          {values.map((v) => (
            <div key={v.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{v.title}</h3>
              <p className={styles.cardDesc}>{v.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.mission}>
          <h2 className={styles.missionTitle}>Vårt Löfte</h2>
          <p className={styles.missionText}>
            Vi kompromissar inte med renhet, dokumentation eller förvaring. Varje batch
            testas oberoende. Varje leverans spåras. Varje kundkontakt hanteras med den
            professionalism som seriös forskning kräver. ScandiPep finns för att tjäna
            forskare som behöver material de kan lita på — varken mer eller mindre.
          </p>
        </div>
      </div>
    </section>
  );
}
