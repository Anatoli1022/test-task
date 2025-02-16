import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Conversation from "./pages/Conversation";
import WhyUs from "./pages/WhyUs";
import PartnerWithUs from "./pages/PartnerWithUs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />{" "}
          <Route path="conversations" element={<Conversation />} />
          <Route path="whyUS" element={<WhyUs />} />
          <Route path="partnerWithUs" element={<PartnerWithUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
