import { Link } from 'react-router-dom'
import styles from 'src/styles/navbar.module.scss'

export function Navbar () {
  return (
    <nav className={`${styles.navbar} flex items-center justify-between`}>
      <div className={styles.logo}>
        <Link to="/">
          <img src='/img/logo.png' alt="logo" />
        </Link>
      </div>
      <div className={`${styles.links} flex justify-evenly grow max-w-3xl`}>
        <Link className={styles.link} to="/recipes">Explore</Link>
        <Link className={styles.link} to="/recipes/create">Create</Link>
        <Link className={styles.link} to="/about">About us</Link>
        <Link className={styles.link} to="/login">Login</Link>
        <Link className={styles.link} to="/signup">Sign up</Link>
      </div>
    </nav>
  )
}
