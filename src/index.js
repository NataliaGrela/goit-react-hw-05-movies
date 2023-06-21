import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Home from 'components/Home/Home';
import Movies from 'components/Movies/Movies';

const baseUrl = 'goit-react-hw-05-movies';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path={`${baseUrl}/`} element={<Home />}></Route>
//     </Routes>
//   )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
);
