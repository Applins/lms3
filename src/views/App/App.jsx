import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import HomePage from '../HomePage/HomePage';
import TeamsPage from '../TeamsPage/TeamsPage';
import EditTeam from '../TeamsPage/Pieces/EditTeam';
import './App.scss';
import './custom.scss'
import robot from "../../assets/pictures/robot.svg";
import {TeamsContext} from "../../services/TeamsContext";
import { useContext } from 'react';


function App() {
  let teamsContext = useContext(TeamsContext)
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
          <Route path="teams" element={<TeamsPage viewModel={teamsContext.viewModel} api={teamsContext.api}/>} />
          <Route path="teams/add-team" element={<EditTeam isCreate={true} api={teamsContext.api}/>} />
          <Route path="teams/edit-team/:id" element={<EditTeam isCreate={false} api={teamsContext.api} />} />                  
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
