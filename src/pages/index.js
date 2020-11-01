import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
{
  title: <></>,
  imageUrl: 'img/instagram.png',
  imageLink: 'https://www.instagram.com/greg.schullo/',
  description: (
    <>
    </>
  ),
},
  {
    title: <></>,
    imageUrl: 'img/linkedin.png',
    imageLink: 'https://www.linkedin.com/in/gregory-schullo/',
    description: (
      <>
      </>
    ),
  },

  {
    title: <></>,
    imageUrl: 'img/twitter.png',
    imageLink: 'https://twitter.com/gregschullo',
    description: (
      <>
      </>
    ),
  },
];

function Feature({imageUrl, title, description, imageLink}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <Link to={imageLink} target="_blank">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
          </Link>
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
          {/* <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <h1 style={{ color: 'white'}}>{siteConfig.title}</h1>
          <p style={{ color: 'white'}}>{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
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
      </main>
    </Layout>
  );
}

export default Home;
