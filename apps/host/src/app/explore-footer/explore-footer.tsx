import styles from './explore-footer.module.css';

/* eslint-disable-next-line */
export interface ExploreFooterProps {}

export function ExploreFooter(props: ExploreFooterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ExploreFooter!</h1>
    </div>
  );
}

export default ExploreFooter;
