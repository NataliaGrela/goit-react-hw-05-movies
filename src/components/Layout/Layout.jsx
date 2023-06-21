import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    const baseUrl = 'goit-react-hw-05-movies';
    return (
      <div>
        <header>
          <nav>
            <ul className="nav">
              <li>
                <Link className="nav-el" to={`${baseUrl}/`}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-el" to={`${baseUrl}/movies`}>
                  Movies
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    );
};

export default Layout;
