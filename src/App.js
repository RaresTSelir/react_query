import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import { HomePage } from './components/Home.page';
import { PostsPage } from './components/Posts.page';
import { RQPostsPage } from './components/RQPosts.page';
import './App.css';

function App() {

  const getActiveClass = (navData) => navData.isActive ? "active" : "";

  return (
    <div className="App">
      <Router>
        <nav className='navigation'>
          <ul>
            <li>
              <NavLink to="/" className={getActiveClass}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/posts" className={getActiveClass}>Traditional Way</NavLink>
            </li>
            <li>
              <NavLink to="/rq-posts" className={getActiveClass}>React Query Way</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/posts" exact element={<PostsPage />} />
          <Route path="/rq-posts" exact element={<RQPostsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
