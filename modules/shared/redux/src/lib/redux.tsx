import styles from './redux.module.scss';

/* eslint-disable-next-line */
export interface ReduxProps {}

export function Redux(props: ReduxProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Redux!</h1>
    </div>
  );
}

export default Redux;
