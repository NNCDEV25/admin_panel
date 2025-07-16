import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import AdminPanelForm from './pages/AdminPanelForm';
import DotCom from './pages/DotCom';
import DotIN from './pages/DotIN';
import Topbar from './components/Topbar';
import PopUp_Enquiries from './pages/PopUp_Enquiries';
import TeamUser_Table from './pages/TeamUser_Table';

// ✅ Blog pages
import Blogs from './pages/blogs/Blogs';
import AddBlog from './pages/blogs/AddBlog';
import EditBlog from './pages/blogs/EditBlog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminPanelForm />} />
      <Route path="/dashboard" element={<Topbar />} />
      <Route path="/dotcom" element={<DotCom />} />
      <Route path="/dotin" element={<DotIN />} />
      <Route path="/popup_enquiry" element={<PopUp_Enquiries />} />
      <Route path="/teams" element={<TeamUser_Table />} />

      {/* ✅ Blog Routes */}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/add-blog" element={<AddBlog />} />
      <Route path="/blogs/edit-blog/:id" element={<EditBlog />} />
    </Routes>
  );
}

export default App;
