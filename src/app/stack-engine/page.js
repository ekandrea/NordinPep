'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/products';
import { researchInterests, experienceLevels, budgetRanges, getStackRecommendation } from '@/data/stackLogic';
import styles from './page.module.css';

const interestDescriptions = {
  'Vävnadsreparation & Regeneration': 'Hur celler och vävnader reparerar sig',
  'Neurobiologi & Kognition': 'Hur hjärnan och nerverna fungerar',
  'Cellulär Åldring & Kollagen': 'Hur celler åldras och hud fungerar',
  'Gastrointestinal Funktion & Immunologi': 'Hur immunförsvaret och mage-tarm fungerar',
};

const levelDescriptions = {
  'Grundläggande protokoll': 'Litet test (små mängder)',
  'Standardprotokoll': 'Vanligt test',
  'Avancerat protokoll': 'Större test',
};

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

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Hitta rätt labbreagenser på 30 sekunder</span>
          <h1 className={styles.title}>Stack Engine</h1>
          <p className={styles.subtitle}>
            Välj vad du vill testa i ditt labb. Vi föreslår en smart kombination
            av reagenser som passar ditt test och din budget.
            Allt säljs uteslutande för forskning i labb — inget annat.
          </p>
        </div>

        <div className={styles.progress}>
          {['Område', 'Storlek', 'Budget', 'Förslag'].map((label, i) => (
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
          {step === 0 && (
            <div className={styles.stepContent}>
              <h2 className={styles.question}>Vad vill du testa i ditt labb?</h2>
              <div className={styles.options}>
                {researchInterests.map((ri) => (
                  <button
                    key={ri}
                    className={`${styles.option} ${interest === ri ? styles.optionActive : ''}`}
                    onClick={() => setInterest(ri)}
                  >
                    <strong>{interestDescriptions[ri]}</strong>
                    <span className={styles.optionDesc}>{ri}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className={styles.stepContent}>
              <h2 className={styles.question}>Hur stort ska ditt labbtest vara?</h2>
              <div className={styles.options}>
                {experienceLevels.map((el) => (
                  <button
                    key={el}
                    className={`${styles.option} ${experience === el ? styles.optionActive : ''}`}
                    onClick={() => setExperience(el)}
                  >
                    <strong>{levelDescriptions[el]}</strong>
                    <span className={styles.optionDesc}>{el}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <h2 className={styles.question}>Hur mycket vill du spendera på reagenserna?</h2>
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

          {step === 3 && recommendation && (
            <div className={styles.stepContent}>
              <h2 className={styles.question}>Här är förslag på labbreagenser för ditt test</h2>
              <p className={styles.resultMeta}>
                Baserat på dina val har vi satt ihop en smart kombination av forskningsreagenser.
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
              <div className={styles.disclaimer}>
                Alla produkter är endast avsedda för forskning i labb och får inte
                användas på människor eller djur.
              </div>
              <button className="btn btn-primary" onClick={addStackToCart} style={{ width: '100%' }}>
                Lägg hela förslaget i varukorgen — {totalPrice} kr
              </button>
            </div>
          )}

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
              <button className="btn btn-ghost" onClick={handleBack}>&larr; Ändra val</button>
              <button className="btn btn-secondary" onClick={reset}>Gör om valet</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
