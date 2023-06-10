import { Box, CssBaseline } from "@mui/material";
import Test from "./pages/test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import TestNatija from "./pages/test-natija";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
      <Router>
        <CssBaseline/>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/test-natija" element={<TestNatija/>}/>
          </Routes>
        </Provider>
      </Router>
  );
}

export default App;
