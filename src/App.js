import "./styles.css";

import HamburgerMenu from "../components/HamburgerMenu";
import Clock from "../components/Clock";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <HamburgerMenu />
      <h2>Start editing to see some magic happen!</h2>
      <Clock />
    </div>
  );
}
