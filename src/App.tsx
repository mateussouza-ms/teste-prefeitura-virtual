import { useEffect, useState } from "react";
import "./App.css";

import digitalOceanLogo from "./assets/images/logo.svg";
import { Card } from "./components/Card";
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
    </div>
  );
}

export default App;
