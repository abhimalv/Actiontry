import { Link } from 'react-router-dom'
import './Pages.css'

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>Welcome to React Website</h1>
        <p>A modern, responsive React application built with TypeScript and Vite</p>
        <Link to="/about" className="cta-button">Learn More</Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>⚡ Fast</h3>
          <p>Built with Vite for lightning-fast development and production builds</p>
        </div>
        <div className="feature-card">
          <h3>🎯 Responsive</h3>
          <p>Fully responsive design that works on all devices and screen sizes</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Type Safe</h3>
          <p>Written in TypeScript for better developer experience and fewer bugs</p>
        </div>
      </section>
    </div>
  )
}

export default Home
