import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Documentation Exhaustive',
    emoji: '📚',
    description: (
      <>
        Explorez chaque endpoint de l'API EcoleDirecte avec des détails précis sur les paramètres et les réponses.
      </>
    ),
  },
  {
    title: 'Mises à jour Communautaires',
    emoji: '🚀',
    description: (
      <>
        Une documentation maintenue par la communauté pour garantir des informations toujours fraîches et exactes.
      </>
    ),
  },
  {
    title: 'Intégration Facile',
    emoji: '🛠️',
    description: (
      <>
        Des exemples clairs et des guides étape par étape pour intégrer EcoleDirecte dans vos propres projets.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card padding--lg margin-bottom--lg text--center" style={{ height: '100%' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{emoji}</div>
        <div className="padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
