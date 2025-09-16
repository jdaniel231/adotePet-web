import { Routes, Route } from 'react-router-dom';
import './App.css';
import Public from './pages/Public';
import Login from './pages/Login';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Public />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;