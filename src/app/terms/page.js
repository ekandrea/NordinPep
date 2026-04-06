import styles from '../privacy/page.module.css';

export const metadata = {
  title: 'Köpvillkor',
  description: 'NordicPeps köpvillkor — villkor för köp av forskningspeptider.',
};

export default function Terms() {
  return (
    <section className="section">
      <div className="container">
        <article className={styles.article}>
          <h1 className={styles.title}>Köpvillkor</h1>
          <p className={styles.updated}>Senast uppdaterad: 2025-12-01</p>

          <div className={styles.content}>
            <h2>1. Allmänt</h2>
            <p>
              Dessa köpvillkor gäller för alla köp gjorda via nordicpep.se. Genom att
              genomföra ett köp godkänner du dessa villkor. NordicPep förbehåller sig
              rätten att uppdatera villkoren. Aktuell version finns alltid på denna sida.
            </p>

            <h2>2. Produkter och användning</h2>
            <p>
              Alla produkter på nordicpep.se säljs uteslutande för laboratorie- och
              forskningsändamål. Produkterna är inte avsedda för mänsklig konsumtion,
              terapeutisk användning eller diagnostik. Genom att genomföra ett köp
              bekräftar du att:
            </p>
            <ul>
              <li>Du är minst 18 år gammal</li>
              <li>Produkterna kommer att användas uteslutande i forskningssyfte</li>
              <li>Du inte kommer att vidareförsälja produkter för mänsklig konsumtion</li>
              <li>Du förstår att produkterna inte är godkända läkemedel</li>
            </ul>

            <h2>3. Priser och betalning</h2>
            <p>
              Alla priser anges i svenska kronor (SEK) inklusive moms om inte annat
              anges. Betalning sker via Stripe och vi accepterar Visa, Mastercard och
              andra vanliga betalningsmetoder. Betalningen genomförs vid bekräftelse av
              ordern.
            </p>

            <h2>4. Frakt och leverans</h2>
            <ul>
              <li>Sverige: Fri frakt vid köp över 500 kr, annars 49 kr</li>
              <li>EU/UK: 99 kr fast fraktkostnad</li>
              <li>Leveranstid Sverige: 2-4 arbetsdagar</li>
              <li>Leveranstid EU: 5-8 arbetsdagar</li>
              <li>Alla beställningar skickas med spårning</li>
            </ul>
            <p>
              Leverans sker till den adress du anger vid beställning. Vi ansvarar inte
              för förseningar orsakade av transportören eller tullmyndigheter.
            </p>

            <h2>5. Ångerrätt</h2>
            <p>
              Enligt distansavtalslagen har du 14 dagars ångerrätt från det att du
              mottar varan. Ångerrätten gäller inte för varor som av hälso- eller
              hygienskäl inte kan returneras om förseglingen brutits. Kontakta oss på
              contact@nordicpep.se för att påbörja en retur.
            </p>

            <h2>6. Reklamation</h2>
            <p>
              Om produkten är felaktig eller skadad vid leverans har du rätt till
              reklamation enligt konsumentköplagen. Kontakta oss inom skälig tid efter
              att du upptäckt felet. Vi erbjuder antingen ersättning, reparation eller
              återbetalning.
            </p>

            <h2>7. Ansvarsbegränsning</h2>
            <p>
              NordicPep ansvarar inte för skador som uppstår genom felaktig användning
              av produkter, inklusive men inte begränsat till användning i strid med
              dessa villkor eller gällande lagstiftning. Vårt ansvar är begränsat till
              ordervärdet.
            </p>

            <h2>8. Force majeure</h2>
            <p>
              NordicPep ansvarar inte för förseningar eller utebliven leverans som beror
              på omständigheter utanför vår kontroll, såsom naturkatastrofer, krig,
              pandemi, strejk eller myndighetsbeslut.
            </p>

            <h2>9. Tvister</h2>
            <p>
              Tvister ska i första hand lösas genom kontakt med vår kundtjänst. Om vi
              inte kan nå en överenskommelse kan du vända dig till Allmänna
              Reklamationsnämnden (ARN) eller svensk domstol. Svensk lag tillämpas.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
