'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Calculator() {
  const [peptideMg, setPeptideMg] = useState(5);
  const [desiredConc, setDesiredConc] = useState(2.5);

  const waterMl = peptideMg / desiredConc;
  const isValid = peptideMg > 0 && desiredConc > 0 && isFinite(waterMl);

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Laboratorieverktyg</span>
          <h1 className={styles.title}>Rekonstitueringskalkylator</h1>
          <p className={styles.subtitle}>
            Beräkna volymen bakteriostatiskt vatten som krävs för att uppnå
            önskad molär koncentration vid rekonstituering av lyofiliserade reagenser.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.inputs}>
            <div className={styles.field}>
              <label>Peptidmängd (mg)</label>
              <input
                type="number"
                value={peptideMg}
                onChange={(e) => setPeptideMg(parseFloat(e.target.value) || 0)}
                min="0"
                step="0.5"
              />
              <span className={styles.hint}>Anges på vialens etikett, t.ex. 5mg eller 10mg</span>
            </div>

            <div className={styles.field}>
              <label>Önskad koncentration (mg/ml)</label>
              <input
                type="number"
                value={desiredConc}
                onChange={(e) => setDesiredConc(parseFloat(e.target.value) || 0)}
                min="0"
                step="0.1"
              />
              <span className={styles.hint}>Standardintervall: 1-5 mg/ml beroende på forskningsprotokoll</span>
            </div>
          </div>

          {isValid && (
            <div className={styles.result}>
              <div className={styles.resultLabel}>Tillsätt bakteriostatiskt vatten:</div>
              <div className={styles.resultValue}>{waterMl.toFixed(2)} ml</div>
              <p className={styles.resultNote}>
                {peptideMg} mg ÷ {desiredConc} mg/ml = {waterMl.toFixed(2)} ml vatten
              </p>
            </div>
          )}

          <div className={styles.guide}>
            <h3>Laboratorieprotokoll för rekonstituering</h3>
            <ol>
              <li>Ta ut vialen från frysförvaring och låt den equilibrera till rumstemperatur (5-10 min)</li>
              <li>Aspirera <strong>{isValid ? `${waterMl.toFixed(2)} ml` : '...'}</strong> bakteriostatiskt vatten med en steril laboratoriepipett</li>
              <li>Dispensera lösningsmedel längs glasväggen, inte direkt på det lyofiliserade materialet</li>
              <li>Låt substansen solubiliseras -- svänk försiktigt, undvik kraftig agitation</li>
              <li>Förvara rekonstituerad lösning vid 2-8°C enligt standard laboratorieprotokoll</li>
            </ol>
          </div>

          <div className={styles.examples}>
            <h3>Referensvärden</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Peptid</th>
                  <th>Mängd</th>
                  <th>Konc.</th>
                  <th>Vatten</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>BPC-157</td><td>5 mg</td><td>2.5 mg/ml</td><td>2.0 ml</td></tr>
                <tr><td>Selank</td><td>5 mg</td><td>1.0 mg/ml</td><td>5.0 ml</td></tr>
                <tr><td>GHK-Cu</td><td>50 mg</td><td>5.0 mg/ml</td><td>10.0 ml</td></tr>
                <tr><td>Epithalon</td><td>10 mg</td><td>2.0 mg/ml</td><td>5.0 ml</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
