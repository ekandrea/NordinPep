'use client';

import { useState } from 'react';
import styles from './page.module.css';

const initialSuppliers = [
  { name: 'Peptide Sciences', country: 'USA', url: 'https://www.peptidesciences.com', notes: '' },
  { name: 'Swiss Chems', country: 'EU', url: 'https://www.swisschems.is', notes: '' },
  { name: 'Bio-Peptide.com', country: 'EU', url: 'https://www.bio-peptide.com', notes: '' },
  { name: 'PeptidePros', country: 'EU', url: 'https://www.peptidepros.net', notes: '' },
  { name: 'Direct Peptides', country: 'UK', url: 'https://www.directpeptides.com', notes: '' },
];

export default function Admin() {
  const [suppliers, setSuppliers] = useState(initialSuppliers);

  const updateNote = (index, value) => {
    setSuppliers((prev) =>
      prev.map((s, i) => (i === index ? { ...s, notes: value } : s))
    );
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Intern</span>
          <h1 className={styles.title}>Leverantörsresearch</h1>
          <p className={styles.subtitle}>Europeiska peptidleverantörer att utvärdera för inköp.</p>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Leverantör</th>
                <th>Region</th>
                <th>Webbplats</th>
                <th>Anteckningar</th>
                <th>Åtgärd</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier, i) => (
                <tr key={i}>
                  <td className={styles.name}>{supplier.name}</td>
                  <td>
                    <span className={styles.region}>{supplier.country}</span>
                  </td>
                  <td>
                    <a
                      href={supplier.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Besök &rarr;
                    </a>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={supplier.notes}
                      onChange={(e) => updateNote(i, e.target.value)}
                      placeholder="Lägg till anteckning..."
                      className={styles.input}
                    />
                  </td>
                  <td>
                    <a
                      href={`mailto:?subject=Prisförfrågan – NordicPep&body=Hej ${supplier.name},%0A%0AVi är intresserade av att diskutera peptidleveranser och prissättning.`}
                      className={styles.contactBtn}
                    >
                      Kontakta för pris
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
