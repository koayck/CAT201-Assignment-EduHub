import Section from "./layout/Section";

const Footer = ({heroSection, aboutSection, productSection, teamSection, scrollToRef}) => {
  return (
    <footer className="footer footer-center bg-primary-800">
      <Section>
        <div className="text-base font-medium text-grey-200 mb-2">Navigation</div>
        <nav className="flex flex-wrap gap-4 md:gap-12 mb-8 text-white hover:[&>a]:text-accent-300 [&>a]:duration-300 [&>a]:transition-all text-base">
          <button aria-label="Home" onClick={() => scrollToRef(heroSection)} className="link link-hover">Home</button>
          <button aria-label="About" onClick={() => scrollToRef(aboutSection)} className="link link-hover">About</button>
          <button aria-label="Product" onClick={() => scrollToRef(productSection)} className="link link-hover">Product</button>
          <button aria-label="Team" onClick={() => scrollToRef(teamSection)} className="link link-hover">Team</button>
        </nav>
        <aside>
          <img
            src="/assets/logo/eduhub-logo-white.png"
            alt="EduHub Logo in White"
            width="300px"
            height="60px"
            className="max-sm:scale-75"
          />
          <p className="font-bold text-neutral-white mt-4">
            EduHub Inc. <br />
            Providing quality tech education since 2020
          </p>
          <p className="text-neutral-white mt-6">
            Copyright © 2023 - All right reserved
          </p>
        </aside>
        <nav className="mt-8">
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/EduHub333095" target="_blank" aria-label="EduHub Twitter"><i className="fa-brands fa-square-x-twitter text-xl hover:text-neutral-white duration-300"></i></a>
            <a href="https://www.linkedin.com/in/edu-hub-a45b792a4/" target="_blank" aria-label="EduHub LinkedIn"><i className="fa-brands fa-linkedin text-xl hover:text-neutral-white duration-300"></i></a>
            <a href="https://discord.gg/USaSpBK7" target="_blank" aria-label="EduHub Discord"><i className="fa-brands fa-discord text-xl hover:text-neutral-white duration-300"></i></a>
          </div>
        </nav>
      </Section>
    </footer>
  );
};

export default Footer;