import { CustomersHome } from "$/routes/CustomersHome";
import { SidebarNavbarLayout } from "$/ui/layouts/sidebar-navbar-layout/sidebar-navbar-layout";
import { BrowserRouter, Route, Routes } from "react-router";
import { CustomerDetails } from "./ui/pages/customers/customers-detail";
import { TechTestNotes } from "./ui/pages/tech-test-notes/tech-test-notes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SidebarNavbarLayout />}>
          <Route path="/" element={<TechTestNotes />} />
          <Route path="customers">
            <Route index element={<CustomersHome />} />
            <Route path=":customerId" element={<CustomerDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
