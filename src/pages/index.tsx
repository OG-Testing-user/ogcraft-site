import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const heroBg = useBaseUrl('img/hero-bg.png');
  const logo   = useBaseUrl('img/ogcraft-logo.png');

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
    <header
    className={clsx('hero hero--primary', styles.heroBanner)}
    style={{ backgroundImage: `url(${heroBg})` }}>
    {/* Remove the built-in “.container” so our flex centering can span full width */}
    <div className={styles.heroContent}>
    <img src={logo} alt="OGCraft Logo" className={styles.mainLogo} />
    <div className={styles.buttons}>
    <Link className="button button--secondary button--lg" to="/docs/Welcome">
    Join Our Server!
    </Link>
    <Link className="button button--primary button--lg" to="/Discord">
    Join Our Discord!
    </Link>
    </div>
    </div>
    </header>

    <main>
    <HomepageFeatures />
    </main>
    </Layout>
  );
}
