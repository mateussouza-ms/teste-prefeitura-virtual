import "./App.css";

import digitalOceanLogo from "./assets/images/logo.svg";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="menu-top">
        <div>
          <div className="badge">13 DAYS</div>
          <span>
            Upcoming Tech Talk: Build Your First Command Line Tool in Go
          </span>
        </div>

        <ul className="menu">
          <li>Products</li>
          <li>Pricing</li>
          <li>Docs</li>
          <li>Sign in</li>
        </ul>
      </div>
      <header>
        <div>
          <a href="https://www.digitalocean.com/">
            <img
              className="logo"
              src={digitalOceanLogo}
              alt="digitalOcean logo"
            />
          </a>
          <span>Comunity</span>

          <ul className="navbar">
            <li>Tutorials</li>
            <li>Questions</li>
            <li>Tech Talks</li>
            <li>Get Involved</li>
          </ul>
        </div>

        <div>
          <button className="search">
            {/* <img src="" alt="Ícone de pesquisa" className="search-icon" /> */}
            <span>Search Comunity</span>
          </button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>

      <div className="popular-topics">
        <span className="title">Popular topics:</span>
        <ul>
          <li>
            <a href="">Docker</a>
          </li>
          <li>
            <a href="">Python</a>
          </li>
          <li>
            <a href="">React</a>
          </li>
          <li>
            <a href="">Databases</a>
          </li>
          <li>
            <a href="">Annsible</a>
          </li>
          <li>
            <a href="">JavaScript</a>
          </li>
          <li>
            <a href="">Kubernetes</a>
          </li>
          <li>
            <a href="">WordPress</a>
          </li>
          <li>
            <a href="">Linux Basics</a>
          </li>
          <li>
            <a href="">Security</a>
          </li>
        </ul>
      </div>

      <main>
        <div className="banner">
          <div className="background">
            <div className="content">
              <span>THE DIGITALOCEAN COMMUNITY</span>
              <h2>Developers supporting developers</h2>
              <p>
                Have questions, a big idea, or something to share? Our community
                is designed to help you and the open source community thrive.
              </p>
            </div>
          </div>

          <div className="box-have-question">
            <div>
              <h3>Have a question you need answered?</h3>
              <p>
                Submit a question to our Q&A platform and get help from the
                community.
              </p>
            </div>

            <button type="button" className="btn-ask-question">
              Ask a Question
            </button>
          </div>
        </div>

        <section className="featured-content">
          <h2 className="featured-content__title">Featured Content</h2>
          <div className="cards">
            <Card
              imageUrl="https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/NyYexh4squPpeFsUDBRQkzkX/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882"
              title="How To Install the Anaconda Python Distribution on Ubuntu 20.04"
              description="Anaconda is an open-source package manager, environment manager, and distribution of the Python and R programming languages."
              subtitle="TUTORIAL"
              url="https://www.digitalocean.com/community/tutorials/how-to-install-the-anaconda-python-distribution-on-ubuntu-20-04"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
