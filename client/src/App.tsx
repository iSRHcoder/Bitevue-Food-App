import "./App.css";
import Login from "./auth/Login";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";


const App = () => {
  return (
    <>
      <AppHeader />
      <Login/>
      <AppFooter />
    </>
  );
};

export default App;
