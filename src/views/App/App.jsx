import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import HomePage from '../HomePage/HomePage';
import TeamsPage from '../TeamsPage/TeamsPage';
import './App.scss';
import './custom.scss'
import robot from "../../assets/pictures/robot.svg";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              title="Robotics Championship"
              logo={robot}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="teams" element={<TeamsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
