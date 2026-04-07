import styles from './page.module.css';

export const metadata = {
  title: 'Integritetspolicy',
  description: 'ScandiPeps integritetspolicy — hur vi hanterar dina personuppgifter i enlighet med GDPR.',
};

export default function Privacy() {
  return (
    <section className="section">
      <div className="container">
        <article className={styles.article}>
          <h1 className={styles.title}>Integritetspolicy</h1>
          <p className={styles.updated}>Senast uppdaterad: 2025-12-01</p>

          <div className={styles.content}>
            <h2>1. Personuppgiftsansvarig</h2>
            <p>
              ScandiPep, org.nr [anges vid registrering], är personuppgiftsansvarig för
              behandlingen av dina personuppgifter. Du kan kontakta oss på
              contact@scandipep.se.
            </p>

            <h2>2. Vilka uppgifter vi samlar in</h2>
            <p>Vi samlar in följande personuppgifter när du handlar hos oss:</p>
            <ul>
              <li>Namn och kontaktuppgifter (e-post, adress, telefonnummer)</li>
              <li>Leveransadress och faktureringsuppgifter</li>
              <li>Betalningsinformation (bankuppgifter för överföring — vi lagrar aldrig känsliga uppgifter)</li>
              <li>Orderhistorik och kundnummer</li>
              <li>Teknisk data vid besök (IP-adress, webbläsartyp, cookies)</li>
            </ul>

            <h2>3. Rättslig grund och ändamål</h2>
            <p>Vi behandlar dina uppgifter baserat på:</p>
            <ul>
              <li><strong>Avtal:</strong> För att fullgöra din beställning, leverera produkter och hantera returer.</li>
              <li><strong>Rättslig förpliktelse:</strong> Bokföring och skattelagstiftning kräver att vi sparar fakturadata i 7 år.</li>
              <li><strong>Berättigat intresse:</strong> Förbättra vår webbplats och kundupplevelse.</li>
              <li><strong>Samtycke:</strong> Nyhetsbrev och marknadsföring — endast om du aktivt samtyckt.</li>
            </ul>

            <h2>4. Delning med tredje part</h2>
            <p>Vi delar personuppgifter med:</p>
            <ul>
              <li><strong>Fraktleverantörer:</strong> Namn och leveransadress för paketleverans.</li>
              <li><strong>Supabase:</strong> Databaslagring (EU-baserad serverinfrastruktur).</li>
            </ul>
            <p>Vi säljer aldrig dina uppgifter till tredje part.</p>

            <h2>5. Lagringstid</h2>
            <p>
              Kunduppgifter lagras så länge du är kund hos oss plus 12 månader.
              Bokföringsdata sparas i 7 år enligt svensk lag. Du kan begära radering av
              uppgifter som inte krävs av lag genom att kontakta oss.
            </p>

            <h2>6. Dina rättigheter (GDPR)</h2>
            <p>Enligt dataskyddsförordningen (GDPR) har du rätt att:</p>
            <ul>
              <li>Få tillgång till dina personuppgifter (registerutdrag)</li>
              <li>Begära rättelse av felaktiga uppgifter</li>
              <li>Begära radering ("rätten att bli glömd")</li>
              <li>Begära begränsning av behandling</li>
              <li>Invända mot behandling baserad på berättigat intresse</li>
              <li>Dataportabilitet — få dina uppgifter i maskinläsbart format</li>
              <li>Återkalla samtycke för nyhetsbrev när som helst</li>
            </ul>
            <p>Kontakta oss på contact@scandipep.se för att utöva dina rättigheter.</p>

            <h2>7. Cookies</h2>
            <p>
              Vi använder nödvändiga cookies för att webbplatsen ska fungera (t.ex.
              varukorg). Analysverktyg och marknadsföringscookies aktiveras först efter
              ditt samtycke. Se vår cookie-banner för mer information.
            </p>

            <h2>8. Säkerhet</h2>
            <p>
              Vi vidtar tekniska och organisatoriska åtgärder för att skydda dina
              personuppgifter, inklusive HTTPS-kryptering, säker betalningshantering via
              banköverföring, samt begränsad åtkomst till kunddata.
            </p>

            <h2>9. Tillsynsmyndighet</h2>
            <p>
              Du har rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) om du
              anser att vi behandlar dina personuppgifter felaktigt. Besök imy.se för mer
              information.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
