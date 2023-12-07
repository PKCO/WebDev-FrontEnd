import { useCallback } from "react";
import "./LandingPageGITAMAeroAstro.css";

const LandingPageGITAMAeroAstro = () => {
  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gITAMAEROASTRO']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTeamTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='tEAMSText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='eVENTSText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="landing-page-gitam-aero-astro">
      <div className="landing-page-gitam-aero-astro-child" />
      <div className="landing-page-gitam-aero-astro-item" />
      <div className="landing-page-gitam-aero-astro-inner" />
      <div className="landing-page-gitam-aero-astro-child1" />
      <img className="rectangle-icon" alt="" src="/rectangle-39.svg" />
      <main className="frame-main">
        <input className="frame-child" type="text" />
        <div className="frame-item" />
        <div className="frame-inner" />
        <img className="frame-child1" alt="" src="/polygon-21.svg" />
        <img className="frame-child2" alt="" src="/polygon-81.svg" />
        <img className="frame-child3" alt="" src="/polygon-131.svg" />
        <img className="frame-child4" alt="" src="/polygon-141.svg" />
        <img className="frame-child5" alt="" src="/polygon-51.svg" />
        <img className="frame-child6" alt="" src="/polygon-181.svg" />
        <img className="frame-child7" alt="" src="/polygon-261.svg" />
        <img className="frame-child8" alt="" src="/polygon-201.svg" />
        <img className="frame-child9" alt="" src="/polygon-241.svg" />
        <img className="frame-child10" alt="" src="/polygon-151.svg" />
        <img className="frame-child11" alt="" src="/polygon-161.svg" />
        <img className="frame-child12" alt="" src="/polygon-31.svg" />
        <div className="home-group">
          <div className="home1">Home</div>
          <div className="contact-us1">Contact Us</div>
          <div className="about-us2" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="events3">Events</div>
          <div className="updates1">Updates</div>
          <div className="team1" onClick={onTeamTextClick}>
            Team
          </div>
        </div>
        <img className="hamburger-icon" alt="" src="/hamburger.svg" />
        <img className="line-icon" alt="" src="/line-6.svg" />
        <h1 className="gitam-aero-astro1" data-scroll-to="gITAMAEROASTRO">
          GITAM AERO ASTRO CLUB
        </h1>
        <div className="events4" data-scroll-to="eVENTSText">
          EVENTS
        </div>
        <div className="teams1" data-scroll-to="tEAMSText">
          TEAMS
        </div>
        <div className="gallery">GALLERY</div>
        <div className="rectangle-parent2" onClick={onGroupContainer1Click}>
          <div className="group-child9" />
          <div className="group-child10" />
        </div>
        <div className="we-are-gitam">We are GITAM Aero Astro Club!</div>
        <div className="hey">Hey !</div>
        <div className="a-studnet-chapter">
          A studnet chapter of MIT Aero Astro Society, Boston.
        </div>
        <div className="gitam-aero-astro2">{`GITAM Aero Astro Club was established in Nov 2020. This student-led club is full of creative minds who are busy innovating and learning. `}</div>
        <div className="the-gitam-aero">{`The Gitam Aero Astro Club was established in Nov 2020. We aim at upholding the cognitive aspect of education by ensuring academic excellence and intellectual growth of its students. `}</div>
        <div className="this-club-lays">
          This club lays prime focus on latest technology and innovations that
          bring the versatility of its students to the fore and gives them a
          sound sense of perspective. The mentors comprises of experienced and
          dedicated advisors who with their expert inputs encourage students to
          explore new avenues. The GITAM Aero Astro Club was started with the
          aim to foster interest in the world of science and technology. It
          provides a platform for like-minded brains to communicate with each
          other and expand their horizons.
        </div>
        <div className="scroll-down1">Scroll Down</div>
        <div className="rectangle-wrapper">
          <div className="group-child11" />
        </div>
        <img
          className="png-20221224-201146-0000-1-icon"
          alt=""
          src="/png-20221224-201146-0000-1@2x.png"
        />
        <div className="the-entire-gaac">
          The entire GAAC community participated in Sangharsh, a tech fest
          organized by GITAM School of Technology's mechanical department.
        </div>
        <div className="frame-child13" />
        <div className="frame-child14" />
        <button className="rectangle-button" />
        <div className="frame-child15" />
        <div className="frame-child16" />
        <div className="frame-child17" />
        <div className="frame-child18" />
        <div className="frame-child19" />
        <div className="frame-child20" />
        <div className="frame-child21" />
        <div className="frame-child22" />
        <div className="frame-child23" />
        <div className="frame-child24" />
        <div className="frame-child25" />
        <div className="frame-child25" />
        <div className="frame-child27" />
        <div className="frame-child28" />
        <div className="frame-child29" />
        <div className="frame-child30" />
        <div className="frame-child31" />
        <div className="frame-child32" />
        <div className="frame-child33" />
        <div className="frame-child34" />
        <div className="frame-child35" />
        <div className="polygon-parent">
          <img className="group-child12" alt="" src="/polygon-27.svg" />
          <div className="group-child13" />
        </div>
        <div className="polygon-group">
          <img className="group-child12" alt="" src="/polygon-27.svg" />
          <div className="group-child13" />
        </div>
        <div className="polygon-container">
          <img className="group-child16" alt="" src="/polygon-271.svg" />
          <div className="group-child17" />
        </div>
        <div className="polygon-parent1">
          <img className="group-child16" alt="" src="/polygon-271.svg" />
          <div className="group-child17" />
        </div>
        <div className="frame-child36" />
        <div className="president">President</div>
        <b className="viswa-teja">VISWA TEJA</b>
        <img className="facebook-icon1" alt="" src="/facebook1@2x.png" />
        <img className="instagram-icon1" alt="" src="/instagram1@2x.png" />
        <img
          className="linkedin-circled-icon1"
          alt=""
          src="/linkedin-circled1@2x.png"
        />
        <div className="rectangle-parent3">
          <div className="group-child20" />
          <div className="group-child21" />
        </div>
        <b className="teams2">TEAMS</b>
        <b className="explore">EXPLORE</b>
        <img className="frame-child37" alt="" src="/arrow-3.svg" />
        <b className="explore1">EXPLORE</b>
        <img className="frame-child38" alt="" src="/arrow-4.svg" />
        <a
          className="gaeroastro"
          href="https://www.instagram.com/gitam.aeroastro/"
          target="_blank"
        >
          g.aeroastro
        </a>
        <a className="email1" href="https://mail.google.com/" target="_blank">
          Email
        </a>
        <div className="aeroastro-vzggitamin1">aeroastro_vzg@gitam.in</div>
        <a
          className="linkedin1"
          href="https://www.linkedin.com/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="gitam-aero-astro3"
          href="https://www.linkedin.com/company/gitam-aero-astro-club/"
          target="_blank"
        >
          GITAM Aero Astro Club
        </a>
        <a
          className="instagram1"
          href="https://www.instagram.com/"
          target="_blank"
        >
          Instagram
        </a>
        <div className="events5">EVENTS</div>
        <div className="rocketry-1012">Rocketry 101</div>
        <div className="teams3">Teams</div>
        <div className="executive-body1">Executive Body</div>
        <div className="advisors1">Advisors</div>
        <div className="rocketry-202">Rocketry 2.0</div>
        <div className="dianas-eve2">Diana’s Eve</div>
        <div className="frosthack-2k232">FrostHack 2k23</div>
        <div className="sangharsh1">Sangharsh</div>
        <div className="about-us3">ABOUT US</div>
        <div className="social-media1">SOCIAL MEDIA</div>
        <img className="facebook-icon2" alt="" src="/facebook@2x.png" />
        <img className="instagram-icon2" alt="" src="/instagram@2x.png" />
        <img
          className="linkedin-circled-icon2"
          alt=""
          src="/linkedin-circled@2x.png"
        />
        <div className="sangharsh2">SANGHARSH</div>
        <img className="frame-child39" alt="" src="/line-51.svg" />
        <div className="frame-child40" />
        <img className="image-3-icon1" alt="" src="/image-3@2x.png" />
        <div className="frame-child41" />
      </main>
    </div>
  );
};

export default LandingPageGITAMAeroAstro;
