import { FC, useEffect, useMemo, useState } from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import YouTube, { YouTubeEvent } from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type VideoItem = {
  title: string;
  videoId: string;
};

const albumItems = [
  {
    title: "Two Are Two",
    type: "Single",
    year: "2024",
    link: "https://www.youtube.com/watch?v=HJfmCtTCh2I"
  },
  {
    title: "Sheren",
    type: "Live Session",
    year: "2024",
    link: "https://www.youtube.com/watch?v=duF1Hr_haP0"
  },
  {
    title: "Upcoming Release",
    type: "Album in Progress",
    year: "2026",
    link: "https://bright-minder.netlify.app/"
  }
];

const gigItems = [
  {
    date: "18 APR",
    venue: "The Bee",
    city: "Kuala Lumpur",
    link: "https://bright-minder.netlify.app/contact"
  },
  {
    date: "02 MAY",
    venue: "The Komune",
    city: "Petaling Jaya",
    link: "https://bright-minder.netlify.app/contact"
  },
  {
    date: "24 MAY",
    venue: "RexKL",
    city: "Kuala Lumpur",
    link: "https://bright-minder.netlify.app/contact"
  }
];

const merchItems = [
  { name: "Bright Minder Tee", price: "RM89" },
  { name: "Signature Pick Set", price: "RM29" },
  { name: "Tour Poster 2026", price: "RM39" }
];

const memberItems = [
  {
    name: "Nabil",
    role: "Guitar",
    instrument: "Lead / Ambient Guitar",
    instagram: "https://www.instagram.com/brightminder/"
  },
  {
    name: "Daniel",
    role: "Guitar",
    instrument: "Rhythm / Lead Guitar",
    instagram: "https://www.instagram.com/brightminder/"
  },
  {
    name: "Fahmie",
    role: "Drums",
    instrument: "Drums / Percussion",
    instagram: "https://www.instagram.com/brightminder/"
  }
];

const videoItems: VideoItem[] = [
  { title: "Two Are Two", videoId: "HJfmCtTCh2I" },
  { title: "Sheren", videoId: "duF1Hr_haP0" },
  { title: "Two Are Two (Live)", videoId: "zacmwYafltU" }
];

const HomePage: FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const options = {
    playerVars: {
      controls: 1
    }
  };

  const onReady = (event: YouTubeEvent) => {
    event.target.pauseVideo();
  };

  const heroTransform = useMemo(
    () => ({ transform: `translateY(${Math.min(scrollY * 0.22, 100)}px)` }),
    [scrollY]
  );

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container className="home-root mw-100 m-0 p-0 pt-66 container-fluid">
      <section className="hero-section">
        <div className="hero-gradient" />
        <div className="hero-noise" />
        <div className="hero-content fade-rise" style={heroTransform}>
          <p className="hero-kicker">Progressive Instrumental Metal</p>
          <h1 className="title">
            <span>BRIGHT</span> <span>MINDER</span>
          </h1>
          <p className="subtitle">
            Instrumental Melodic trio with a pinch of progressive
          </p>
          <div className="hero-actions">
            <button type="button" onClick={() => scrollToSection("albums")}>
              Listen
            </button>
            <button type="button" onClick={() => scrollToSection("videos")}>
              Watch
            </button>
            <button type="button" onClick={() => scrollToSection("gigs")}>
              Book Us
            </button>
          </div>
        </div>
        <button
          className="scroll-indicator"
          type="button"
          onClick={() => scrollToSection("albums")}
          aria-label="Scroll to albums"
        >
          <span />
          <span />
          <span />
        </button>
      </section>

      <section id="albums" className="section-shell fade-rise album-section">
        <p className="section-kicker">Discography</p>
        <h2 className="section-title">Spotify-Style Releases</h2>
        <div className="album-grid">
          {albumItems.map((album) => (
            <article key={album.title} className="metal-card album-card">
              <div className="album-art">
                <button
                  type="button"
                  onClick={() => window.open(album.link, "_blank", "noopener,noreferrer")}
                  aria-label={`Play ${album.title}`}
                >
                  <FontAwesomeIcon icon={["fas", "play"]} />
                </button>
              </div>
              <div className="album-meta">
                <h3>{album.title}</h3>
                <p>{album.type}</p>
                <span>{album.year}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="gigs" className="section-shell fade-rise gigs-section">
        <p className="section-kicker">Tour / Gigs</p>
        <h2 className="section-title">Upcoming Shows</h2>
        <div className="gig-list">
          {gigItems.map((gig) => (
            <article key={`${gig.date}-${gig.venue}`} className="metal-card gig-item">
              <div className="gig-date">{gig.date}</div>
              <div className="gig-meta">
                <h3>{gig.venue}</h3>
                <p>{gig.city}</p>
              </div>
              <a href={gig.link} target="_blank" rel="noreferrer">
                Tickets
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="videos" className="section-shell fade-rise video-section">
        <p className="section-kicker">Visuals</p>
        <h2 className="section-title">Video Gallery</h2>
        <div className="video-grid">
          {videoItems.map((video) => (
            <article key={video.videoId} className="video-card metal-card">
              <YouTube
                videoId={video.videoId}
                opts={options}
                onReady={onReady}
                className="video-container"
                iframeClassName="video-iframe"
              />
              <h3>{video.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell fade-rise merch-section">
        <p className="section-kicker">Merchandise</p>
        <h2 className="section-title">Official Merch</h2>
        <div className="merch-grid">
          {merchItems.map((merch) => (
            <article key={merch.name} className="metal-card merch-card">
              <div className="merch-art" />
              <h3>{merch.name}</h3>
              <p>{merch.price}</p>
              <a href="/contact">Buy Now</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell fade-rise member-section">
        <p className="section-kicker">Band Members</p>
        <h2 className="section-title">The Lineup</h2>
        <div className="member-grid">
          {memberItems.map((member) => (
            <article key={member.name} className="metal-card member-card">
              <div className="member-photo" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <small>{member.instrument}</small>
              <a href={member.instagram} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default HomePage;
