import "./AppHeader.scss";
import SpaLog from "@/assets/spa-logo.png";

const AppHeader = () => (
  <header className="app__header">
    <img
      style={{
        width: "150px",
        height: "150px",
      }}
      src={SpaLog}
      alt="hotel background picture"
    />
    <h1 className="app__heading">CYF Hotel</h1>
  </header>
);

export default AppHeader;
