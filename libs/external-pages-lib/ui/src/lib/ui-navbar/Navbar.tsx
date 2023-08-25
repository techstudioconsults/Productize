import styles from './navbar.module.css';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className={styles['container']}>
      <h1>The Navbar!</h1>
    </div>
  );
}

export default Navbar;
