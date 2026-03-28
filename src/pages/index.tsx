import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            🚀 Commencer l'Exploration
          </Link>
          <Link
            className="button button--outline button--secondary button--lg margin-left--md"
            to="/collaboration">
            🤝 Contribuer
          </Link>
        </div>
      </div>
    </header>
  );
}

function WhySection() {
  return (
    <section className="padding-vert--xl bg--light">
      <div className="container text--center">
        <Heading as="h2">Pourquoi utiliser cette documentation ?</Heading>
        <div className="row margin-top--lg">
          <div className="col col--8 col--offset-2">
            <p className="hero__subtitle">
              L'API d'EcoleDirecte est complexe et peu documentée officiellement.
              <strong> docsDirecte</strong> centralise les connaissances de la communauté pour offrir une ressource fiable,
              claire et facile à utiliser pour tous les développeurs souhaitant interagir avec les services d'EcoleDirecte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenue sur ${siteConfig.title}`}
      description="Une documentation complète, communautaire et moderne de l'API d'EcoleDirecte">
      <HomepageHeader />
      <main>
        <WhySection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
