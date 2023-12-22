import { useEffect } from "react";

const NavBar = ({
  heroSection,
  aboutSection,
  productSection,
  teamSection,
  scrollToRef,
}) => {
  useEffect(() => {
    //onClick={scrollToRef} to collapse navbar after scrolling
    let path = window.location.pathname;

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 5) {
        document.getElementById("navbar").classList.remove("bg-primary-800");
      } else if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").classList.add("bg-primary-800");
      } else if (currentScrollPos > 60) {
        document.getElementById("navbar").style.top = "-128px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <>
      <div id="navbar" className="fixed z-[100] w-full transition-all" data-aos="fade-right" >
        <div className="navbar py-4 max-sm:px-6 max-md:px-8 max-lg:px-9 px-14 max-w-[1200px] mx-auto">
          <div className="navbar-start">
            <a aria-label="EduHub Logo">
              <img
                src="/assets/logo/eduhub-logo-color.png"
                alt="EduHub Logo in Color"
                className="max-h-12"
              />
            </a>
          </div>
          <div className="navbar-end ">
            {/* navigation hamburger for mobile and tablet view */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <i className="fa-solid fa-bars"></i>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button
                    onClick={() => scrollToRef(heroSection)}
                    aria-label="Home"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToRef(aboutSection)}
                    aria-label="About"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToRef(productSection)}
                    aria-label="Product"
                  >
                    Product
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToRef(teamSection)}
                    aria-label="Team"
                  >
                    Team
                  </button>
                </li>
              </ul>
            </div>

            {/* navigation bar for desktop view */}
            <ul className="menu menu-horizontal px-1 text-base font-primary font-bold gap-8 text-white max-lg:hidden hover:[&>li>button]:text-accent-300 focus:[&>li>button]:text-white focus:[&>li>button]:bg-transparent focus-visible:[&>li>button]:outline-2 focus-visible:[&>li>button]:outline-white active:[&>li>button]:outline-none">
              <li>
                <button
                  aria-label="Home"
                  onClick={() => scrollToRef(heroSection)}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  aria-label="About"
                  onClick={() => scrollToRef(aboutSection)}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  aria-label="Product"
                  onClick={() => scrollToRef(productSection)}
                >
                  Product
                </button>
              </li>
              <li>
                <button
                  aria-label="Team"
                  onClick={() => scrollToRef(teamSection)}
                >
                  Team
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
