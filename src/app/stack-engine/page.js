'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/products';
import { researchInterests, experienceLevels, budgetRanges, getStackRecommendation } from '@/data/stackLogic';
import styles from './page.module.css';

export default function StackEngine() {
  const [step, setStep] = useState(0);
  const [interest, setInterest] = useState(null);
  const [experience, setExperience] = useState(null);
  const [budget, setBudget] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const { addItem } = useCart();

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      const productIds = getStackRecommendation(interest, budget);
      const products = productIds.map(getProductById).filter(Boolean);
      setRecommendation(products);
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step === 3) {
      setRecommendation(null);
      setStep(2);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const canProceed =
    (step === 0 && interest) ||
    (step === 1 && experience) ||
    (step === 2 && budget);

  const addStackToCart = () => {
    recommendation.forEach((p) => addItem(p.id, 1));
  };

  const totalPrice = recommendation?.reduce((sum, p) => sum + p.price, 0) || 0;

  const reset = () => {
    setStep(0);
    setInterest(null);
    setExperience(null);
    setBudget(null);
    setRecommendation(null);
  };

  const interestDescriptions = {
    'Vävnadsreparation & Regeneration': 'In-vitro-modeller för angiogenes, vävnadsreparation och cytoprotektiva mekanismer',
    'Neurobiologi & Kognition': 'GABAerg modulering, neurotrofinuttryck och serotonerga signalvägar',
    'Cellulär Åldring & Kollagen': 'Kollagensyntes, fibroblastaktivitet och telomerasmodulering',
    'Gastrointestinal Funktion & Immunologi': 'NF-kappaB-hämning, intestinala inflammationsmodeller och immunmekanismer',
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Välj laboratoriekemikalier efter forskningsområde</span>
          <h1 className={styles.title}>Stack Engine</h1>
          <p className={styles.subtitle}>
            Välj forskningsparametrar — vi föreslår reagenser baserat på biologisk mekanism och protokollnivå.
          </p>
        </div>

        {/* Progress */}
        <div className={styles.progress}>
          {['Mekanism', 'Protokoll', 'Budget', 'Resultat'].map((label, i) => (
            <div
              key={label}
              className={`${styles.progressStep} ${i <= step ? styles.progressActive : ''} ${i < step ? styles.progressDone : ''}`}
            >
              <span className={styles.progressDot}>{i < step ? '✓' : i + 1}</span>
              <span className={styles.progressLabel}>{label}</span>
            </div>
          ))}
        </div>

        <div className={styles.card}>
          {/* Steg 1 */}
          {step === 0 && (
            <div className={styles.stepContent}>
              <h2 className={styles.question}>Vilken biologisk mekanism studeras?</h2>
              <div className={styles.options}>
                {researchInterests.map((ri) => (
                  <button
                    key={ri}
                    className={`${styles.option} ${interest === ri ? styles.optionActive : ''}`}
                    onClick={() => setInterest(ri)}
                  >
                    <strong>{ri}</strong>
                    <span className={styles.optionDesc}>{interestDescriptions[ri]}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Steg 2 */}
          {step === 1 && (
            <div className={styles.stepContent}>
              <h2 className={styles.question}>Protokollnivå</h2>
              <div className={styles.options}>
                {experienceLevels.map((el) => (
                  <button
                    key={el}
                    className={`${styles.option} ${experience === el ? styles.optionActive : ''}`}
                    onClick={() => setExperience(el)}
                  >
                    {el}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Steg 3 */}
          {step === 2 && (
            <div className={styles.stepContent}>
              <h2 className={styles.question}>Analysbudget</h2>
              <div className={styles.options}>
                {budgetRanges.map((br) => (
                  <button
                    key={br.value}
                    className={`${styles.option} ${budget === br.value ? styles.optionActive : ''}`}
                    onClick={() => setBudget(br.value)}
                  >
                    {br.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Resultat */}
          {step === 3 && recommendation && (
            <div className={styles.stepContent}>
              <h2 className={styles.question}>Föreslagen kombination för biokemisk analys</h2>
              <p className={styles.resultMeta}>
                Baserat på: {interest} · {experience} · {budgetRanges.find(b => b.value === budget)?.label}
              </p>
              <div className={styles.resultList}>
                {recommendation.map((product) => (
                  <div key={product.id} className={styles.resultItem}>
                    <div className={styles.resultImage}>
                      <Image src={product.image} alt={product.name} width={48} height={64} />
                    </div>
                    <div className={styles.resultInfo}>
                      <strong>{product.name}</strong>
                      <span className={styles.resultSub}>{product.subtitle}</span>
                    </div>
                    <span className={styles.resultPrice}>{product.price} kr</span>
                  </div>
                ))}
              </div>
              <div className={styles.resultTotal}>
                <span>Totalt</span>
                <strong>{totalPrice} kr</strong>
              </div>
              <button className="btn btn-primary" onClick={addStackToCart} style={{ width: '100%' }}>
                Lägg analyspaket i varukorgen — {totalPrice} kr
              </button>
            </div>
          )}

          {/* Navigation */}
          {step < 3 && (
            <div className={styles.nav}>
              {step > 0 && (
                <button className="btn btn-ghost" onClick={handleBack}>
                  &larr; Tillbaka
                </button>
              )}
              <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={!canProceed}
                style={{ marginLeft: 'auto' }}
              >
                {step === 2 ? 'Visa förslag' : 'Nästa →'}
              </button>
            </div>
          )}

          {step === 3 && (
            <div className={styles.nav}>
              <button className="btn btn-ghost" onClick={handleBack}>&larr; Ändra svar</button>
              <button className="btn btn-secondary" onClick={reset}>Börja om</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
