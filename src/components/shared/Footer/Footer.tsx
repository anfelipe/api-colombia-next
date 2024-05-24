import styles from './Footer.module.sass';

export const Footer = () => {
  return(
    <footer className={styles.Footer}>
      <p>API Colombia © {new Date().getFullYear()}</p>
    </footer>
  );
}