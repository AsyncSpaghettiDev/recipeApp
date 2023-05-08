import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getRandomImage } from 'src/services'
import styles from 'src/styles/login.module.scss'

export function Login () {
  const { url, alt } = useMemo(getRandomImage, [])

  return (
    <div className='bg-stone-300 min-h-screen p-2 flex justify-center items-center'>
      <div className={`${styles.container} shadow-xl rounded flex justify-center items-center`}>
        <div className={`${styles.login} h-full max-w-lg flex flex-col items-center bg-white px-12 py-2 justify-between`}>
          <Link to='/'>
            <img src="/img/logo.png" className={styles.logo} alt="what he cooking logo" />
          </Link>
          <LoginForm />
          <p>
            No tiene una cuenta con nosotros? <Link to='/signup' className='text-blue-700'>Crear cuenta</Link>
          </p>
        </div>
        <div className={`${styles.image} object-cover bg-zinc-200 h-full`}>
          <img className='h-full w-full' src={url} alt={alt} />
        </div>
      </div>
    </div>
  )
}

function LoginForm () {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)

  function handleSubmit (e) {
    e.preventDefault()
    if (credentials.email === '' || credentials.password === '') {
      setError(true)
    } else {
      setError(false)
      console.log(credentials)
    }
  }

  function handleChange (e) {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  return (
    <div className='flex flex-col gap-8 items-center'>
      <h1 className='text-7xl font-thin text-center'>Bienvenido!</h1>
      <p>Explora la comunidad gastronomica</p>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col w-full gap-1'>
          <label htmlFor='email' className='font-bold text-xl'>Correo</label>
          <input className={styles.input} type='email' id='email' name='email' placeholder='example@mail.com' onChange={handleChange} />
        </div>
        <div className='flex flex-col w-full gap-1'>
          <label htmlFor='password' className='font-bold text-xl'>Contraseña</label>
          <input className={styles.input} type='password' id='password' name='password' placeholder='******' onChange={handleChange} />
        </div>
        <button className={styles.button}>Iniciar sesion</button>
        {
          error && <p className='text-red-500'>Credenciales incorrectas</p>
        }
      </form>
    </div>
  )
}
