import { Route, Routes, useLocation } from "react-router-dom";
import Navigator from "./components/Navigator";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Form from "./components/Form";
import Error from "./components/Error";
import DetailCountry from "./components/DetailCountry";

function App() {
  let { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="App">
      {pathname === "/" ? (
        <Landing />
      ) : (
        <Routes>
          <Route path="/" element={<Navigator></Navigator>}>
            <Route path="countries" element={<Home></Home>} />
          </Route>
          <Route path="/create" element={<Form />} />
          <Route path="/country/:id" element={<DetailCountry />} />
          <Route path="*" element={<Error />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
