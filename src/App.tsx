import { Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout";
import Landingpage from "./pages/landing/landingpage";
function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Landingpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
