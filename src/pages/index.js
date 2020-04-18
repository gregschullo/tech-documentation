import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
{
  title: <a href='https://github.com/gregschullo'>GitHub</a>,
  // imageUrl: 'img/github-icon.svg',
  // description: (
  //   <>
  //   </>
  // ),
},
  {
    title: <a href='https://www.linkedin.com/in/gregory-schullo/'>LinkedIn</a>,
    // imageUrl: 'img/linkedin-icon.jpg',
    // description: (
    //   <>
    //   </>
    // ),
  },
  {
    title: <a href="https://www.instagram.com/greg.schullo/">Instagram</a>,
    // imageUrl: 'img/instagram-icon.jpg',
    // description: (
    //   <>
    //   </>
    // ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={``}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          {/* <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={'https://www.instagram.com/greg.schullo/'}>
              Instagram
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={'https://www.linkedin.com/in/gregory-schullo/'}>
              LinkedIn
            </Link>
          </div> */}
        </div>
      </header>
      {/* <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main> */}
    </Layout>
  );
}

export default Home;
