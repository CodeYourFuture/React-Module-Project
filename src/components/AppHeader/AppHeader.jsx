import Logo from "@/assets/spa-logo.png";
import "./AppHeader.scss";
const AppHeader = () => (
    <header className="app__header">
      <h1 className="app__heading">CYF Hotel</h1>
      <img src={Logo} alt="main image" />
    </header>
);
export default AppHeader;

