import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Demo from "./demo";
import { AuthProvider } from "./providers/authProvider";
import Home from "./home";
import Success from "./success";
import { PrivateRoute } from "./routes/privateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            {/* <Route path="/login" element={<Demo />} /> */}
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Success />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
