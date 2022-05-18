import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Dashboard from "./views/Dashboard"
import Form from "./views/Form"
import Details from "./views/Details"
import Update from "./views/Update"
import Main from "./views/Main"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Product Manager</h1>
        <Link to="">Home</Link>
        {/* <Link to="/products/new">New Product</Link>
        <Link to="/products">Product Dashboard</Link> */}

        <Routes>
          <Route path="" element={<Main />} />
          <Route path="/products/new" element={<Form />} />
          <Route path="/products" element={<Dashboard />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/products/:id/edit" element={<Update />} />
          <Route path="*" element={<><h1>Error</h1></>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
