import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import hf from '../public/plaatjes/hf.svg';
import { Navigatie } from '../components/navigatie';
import { Footer } from '../components/footer';
import { Projectkaart } from '../components/projectkaart';
import { Verhaalkaart } from '../components/verhaalkaart';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>Hi, ik ben Aref, Ik ben een student bij de HHS</h1>
        <section className={styles.cardContainer}>
          {/*<Projectkaart
            titel="Lely Nederland"
            beschrijving="Development"
            Plaatje={hf}
            paginaUrl="/projecten/ikea"
          />
          <Projectkaart
            titel="Minor K86"
            beschrijving="Development"
            Plaatje={hf}
            paginaUrl="/projecten/ikea"
          />*/}
          <Verhaalkaart>
            <h2>Accessibility first</h2>
            <p>Meer over de accessiblity</p>
            <img src="https://i.postimg.cc/rmSvB224/hhs-en-groen-hex.png" />
            <figcaption>Foto van mobile devices</figcaption>
          </Verhaalkaart>
        </section>
        <Footer />
      </main>
    </>
  );
};
