import Brand from "../images/BRAND.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <a className="navbar-brand display-1" href="#home">
            {" "}
            <img src={Brand} alt="" />{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-5">
              <li className="nav-item">
                <h2>
                  <a className="nav-link mx-3" aria-current="page" href="#home">
                    Home
                  </a>
                </h2>
              </li>
              <li className="nav-item">
                <h2>
                  <a className="nav-link mx-3" href="#services">
                    Services
                  </a>
                </h2>
              </li>

              <li className="nav-item">
                <h2>
                  <a className="nav-link mx-3" href="#about">
                    About
                  </a>
                </h2>
              </li>
              <li className="nav-item">
                <h2>
                  <a className="nav-link mx-3" href="#projects">
                    Projects
                  </a>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
