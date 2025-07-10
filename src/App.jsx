import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import AdminPanelForm from './pages/AdminPanelForm';
// import UserTable from './pages/UserTable';
import DotCom from './pages/DotCom';
import DotIN from './pages/DotIN';
import Topbar from './components/Topbar';
// import PoupEnquiryTable from './pages/PoupEnquiryTable';
import PopUp_Enquiries from './pages/PopUp_Enquiries';
import TeamUser_Table from './pages/TeamUser_Table';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminPanelForm />} />
      <Route path="/dashboard" element={<Topbar />} />
    <Route path="/dotcom" element={<DotCom />} />
        <Route path="/dotin" element={<DotIN />} />
        
         <Route path="/popup_enquiry" element={<PopUp_Enquiries />} />
          <Route path="/teams" element={<TeamUser_Table />} />
    </Routes>
  );
}

export default App;
