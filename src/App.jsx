import { useState } from 'react'
import './App.css'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from './firebase-config'

function App() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  const handleSignIn = async () => {
    
    try {
      const docRef = doc(db, 'user', name)
      const docSnap = await getDoc(docRef)
        console.log(docSnap.data())

      if (docSnap.exists()) {
        setUser(docSnap.data())
        setError('')
      } else {
        setError('User not found. Please sign up first.')
      }
    } catch (err) {
      console.error(err)
      setError('Error during sign-in.')
    }
  }

  const handleSignUp = async () => {
    try {
      const docRef = doc(db, 'user', name)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setError('User already exists. Please sign in.')
        return
      }

      await setDoc(docRef, {
        name,
        phone,
        createdAt: new Date().toISOString(),
      })

      setUser({ name, phone })
      setError('')
      setIsSignUp(false)
    } catch (err) {
      console.error(err)
      setError('Error during sign-up.')
    }
  }

  return (
    <div className="card">
      <h1>Welcome to Fee Alert</h1>

      {user ? (
        <div>
          <h2>Hello, {user.name}!</h2>
          <p>You're signed in successfully.</p>
        </div>
      ) : (
        <div>
          <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {isSignUp && (
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          )}

          <button onClick={isSignUp ? handleSignUp : handleSignIn}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>

          <p style={{ color: 'red' }}>{error}</p>

          <p>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      )}
    </div>
  )
}

export default App
