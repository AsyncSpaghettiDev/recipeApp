import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getRandomImage } from 'src/services'
import styles from 'src/styles/login.module.scss'

export function Signup () {
  const { url, alt } = useMemo(getRandomImage, [])

  return (
    <div className='bg-stone-300 min-h-screen p-2 flex justify-center items-center'>
      <div className={`${styles.container} shadow-xl rounded flex justify-center items-center`}>
        <div className={`${styles.image} object-cover bg-zinc-200 h-full`}>
          <img className='h-full w-full' src={url} alt={alt} />
        </div>
        <div className={`${styles.login} h-full max-w-lg flex flex-col items-center bg-white px-12 py-2 justify-between`}>
          <Link to='/'>
            <img src="/img/logo.png" className={styles.logo} alt="what he cooking logo" />
          </Link>
          <SignupForm />
          <p>
            ¿Ya tiene una cuenta con nosotros? <Link to='/login' className='text-blue-700'>Iniciar Sesión</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function SignupForm () {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    name: ''
  })
  const [error, setError] = useState(false)

  function handleSubmit (e) {
    e.preventDefault()
    if (credentials.email === '' || credentials.password === '' || credentials.name === '') {
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
      <h1 className='text-4xl font-thin text-center'>Empieza a compartir !</h1>
      <p>Unete a la comunidad gastronomica</p>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col w-full gap-1'>
          <label htmlFor='name' className='font-bold text-xl'>Nombre</label>
          <input className={styles.input} type='text' id='name' name='name' placeholder='John Doe' onChange={handleChange} />
        </div>
        <div className='flex flex-col w-full gap-1'>
          <label htmlFor='email' className='font-bold text-xl'>Correo</label>
          <input className={styles.input} type='email' id='email' name='email' placeholder='example@mail.com' onChange={handleChange} />
        </div>
        <div className='flex flex-col w-full gap-1'>
          <label htmlFor='password' className='font-bold text-xl'>Contraseña</label>
          <input className={styles.input} type='password' id='password' name='password' placeholder='******' onChange={handleChange} />
        </div>
        <button className={styles.button}>Registrarse</button>
        {
          error && <p className='text-red-500'>Todos los campos deben llenarse</p>
        }
      </form>
    </div>
  )
}
