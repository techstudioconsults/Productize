import styles from './explore-lib-feature.module.scss';

/* eslint-disable-next-line */
export interface ExploreLibFeatureProps {}

export function ExploreLibFeature(props: ExploreLibFeatureProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ExploreLibFeature!</h1>
    </div>
  );
}

export default ExploreLibFeature;
