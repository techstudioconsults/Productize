import styles from './external-pages-lib-feature.module.css';

/* eslint-disable-next-line */
export interface ExternalPagesLibFeatureProps {}

export function ExternalPagesLibFeature(props: ExternalPagesLibFeatureProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ExternalPagesLibFeature!</h1>
    </div>
  );
}

export default ExternalPagesLibFeature;
