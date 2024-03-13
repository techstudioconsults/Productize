import styles from './hooks.module.scss';

/* eslint-disable-next-line */
export interface HooksProps {}

export function Hooks(props: HooksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Hooks!</h1>
    </div>
  );
}

export default Hooks;
