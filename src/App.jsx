import { Routes, Route } from "react-router-dom";
import Qrcode from "./qrcode"
import Form from "./form";
import Terms from "./terms"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Qrcode />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
