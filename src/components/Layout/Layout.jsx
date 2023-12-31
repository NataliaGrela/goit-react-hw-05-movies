import { useEndPoints } from 'api/endPoints';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const { baseUrl } = useEndPoints();
  const location = useLocation();
  const isActive = page => {
    return location.pathname.includes(page);
  };

  return (
    <div>
      <header>
        <nav>
          <ul className="nav">
            <li>
              <Link
                className={!isActive('/movies') ? 'nav-el active' : 'nav-el'}
                to={`${baseUrl}/`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={isActive('/movies') ? 'nav-el active' : 'nav-el'}
                to={`${baseUrl}/movies`}
              >
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
