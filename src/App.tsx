import { CustomersHome } from "$/routes/CustomersHome";
import { SidebarNavbarLayout } from "$/ui/layouts/sidebar-navbar-layout/sidebar-navbar-layout";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SidebarNavbarLayout />}>
          <Route path="/" element={<div>Home</div>} />
          <Route path="customers">
            <Route index element={<CustomersHome />} />
            <Route path=":customerId" element={<div>Customer Details</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
