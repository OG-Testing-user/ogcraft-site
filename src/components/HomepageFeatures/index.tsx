// src/components/HomepageFeatures/index.tsx
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<{className?: string; role?: string;}>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Server Info',
    Svg: require('@site/static/img/Book.svg').default,
    description: <>Full details on IP, uptime, rules, and more.</>,
    link: '/docs/Welcome',
  },
{
  title: 'Commands',
  Svg: require('@site/static/img/slash-circle.svg').default,
  description: <>All your in-game commands in one place.</>,
  link: '/docs/wiki/commands',
},
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className="col col--6">
    {/* Wrap the whole card in Link */}
    <Link to={link} className={styles.feature}>
    <Svg className={styles.featureSvg} role="img" />
    <h3>{title}</h3>
    <p>{description}</p>
    </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

