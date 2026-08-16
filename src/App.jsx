import { LoginGoogle } from './Auth/AuthContex';
import './App.css'
import { Footer } from './Shared/Footer';

function App() {

  return (
    <main style={{ padding: "1rem 0" }}>
      <LoginGoogle />

      <Footer/>
    </main>
  )
}

export default App
