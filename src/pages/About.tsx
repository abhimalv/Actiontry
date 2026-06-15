import './Pages.css'

function About() {
  return (
    <div className="page">
      <section className="content-section">
        <h1>About Us</h1>
        <p>
          This is a modern React website template built with the latest web technologies.
          It showcases best practices for building scalable and maintainable React applications.
        </p>

        <h2>Our Stack</h2>
        <ul>
          <li><strong>React 18</strong> - A JavaScript library for building user interfaces</li>
          <li><strong>TypeScript</strong> - JavaScript with static type checking</li>
          <li><strong>Vite</strong> - Next generation frontend tooling</li>
          <li><strong>React Router</strong> - Client-side routing for single-page applications</li>
        </ul>

        <h2>Features</h2>
        <ul>
          <li>Server-side rendering ready architecture</li>
          <li>Responsive and mobile-friendly design</li>
          <li>Fast development and production builds</li>
          <li>ESLint configuration for code quality</li>
        </ul>
      </section>
    </div>
  )
}

export default About
