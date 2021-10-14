import { useEffect, useState } from "react";
import "./App.css";

import digitalOceanLogo from "./assets/images/logo.svg";
import { Card } from "./components/Card";
import { Icons } from "./components/Icons.index";
import { api } from "./services/api";

type FeaturedContent = {
  subtitulo: string;
  titulo: string;
  imagem: string;
  descricao: string;
  url: string;
};

type PopularTopic = {
  item: string;
  url: string;
};

function App() {
  const [featuredContents, setFeaturedContents] = useState<FeaturedContent[]>();
  const [popularTopics, setPopularTopics] = useState<PopularTopic[]>();

  useEffect(() => {
    api.get("/api-digitalocean").then((response) => {
      const data: any = response.data;
      setFeaturedContents(data["Featured_Content"]);
      setPopularTopics(data["Popular_topics"]);
    });
  }, []);

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
          <span>Community</span>

          <ul className="navbar">
            <li>
              <a
                className="nav-label"
                href="https://www.digitalocean.com/community/tutorials"
              >
                Tutorials
              </a>
            </li>
            <li>
              <a
                className="nav-label"
                href="https://www.digitalocean.com/community/questions"
              >
                Questions
              </a>
            </li>

            <li>
              <a
                className="nav-label"
                href="https://www.digitalocean.com/community/tags/tech-talks"
              >
                Tech Talks
              </a>
            </li>
            <li>
              <span
                className="nav-label"
                onClick={(e) => {
                  const element = e.target as HTMLElement;
                  if (element.classList.contains("expanded")) {
                    element.classList.remove("expanded");
                  } else {
                    element.classList.add("expanded");
                  }
                }}
              >
                Get Involved
              </span>

              <div className="submenu">
                <section className="participate">
                  <h4>PARTICIPATE</h4>
                  <ul>
                    <li>
                      <a href="https://www.digitalocean.com/community/pages/hub-for-good">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <use xlinkHref="#navbar-hubforgood"></use>
                          </svg>
                        </div>
                        <div className="content">
                          <span className="title">Hollie's Hub for Good</span>
                          <p className="description">
                            Supporting each other to make an impact
                          </p>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.digitalocean.com/community/pages/write-for-digitalocean">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <use xlinkHref="#navbar-write4do"></use>
                          </svg>
                        </div>
                        <div className="content">
                          <span className="title">Write for DigitalOcean</span>
                          <p className="description">
                            You get paid, we donate to tech non-profits.
                          </p>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="https://hacktoberfest.digitalocean.com/">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <use xlinkHref="#navbar-hacktoberfest"></use>
                          </svg>
                        </div>
                        <div className="content">
                          <span className="title">Hacktoberfest</span>
                          <p className="description">
                            Contribute to Open Source
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </section>

                <section className="build">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <use xlinkHref="#navbar-build"></use>
                    </svg>
                    <h4>Build with DigitalOcean</h4>
                  </div>

                  <ul>
                    <li>
                      <a href="http://">Community Tools and Integrations</a>
                    </li>

                    <li>
                      <a href="http://">Hatch Startup Program</a>
                    </li>

                    <li>
                      <a href="http://">Marketplace Partner Program</a>
                    </li>

                    <li>
                      <a href="http://">Presentation Grants</a>
                    </li>

                    <li>
                      <a href="http://">DigitalOcean on GitHub</a>
                    </li>
                  </ul>
                </section>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <button className="search">
            {/* <img src="" alt="Ícone de pesquisa" className="search-icon" /> */}
            <span>Search Community</span>
          </button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>

      <div className="popular-topics">
        <span className="title">Popular topics:</span>
        <ul>
          {popularTopics?.map((topic) => (
            <li>
              <a href={topic.url}>{topic.item}</a>
            </li>
          ))}
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
            {featuredContents?.map((item) => (
              <Card
                key={item.url}
                imageUrl={item.imagem}
                title={item.titulo}
                description={item.descricao}
                subtitle={item.subtitulo}
                url={item.url}
              />
            ))}
          </div>
        </section>
      </main>

      <Icons />
    </div>
  );
}

export default App;
