import Logo from "@/assets/spa-logo.png";
import "./AppHeader.scss";

const AppHeader = () => {
  return (
    <>
      <div className="app">
        <header className="app__header">
          <img
            style={{
              width: "120px",
              height: "120px",
            }}
            src={Logo}
            alt="hotel logo"
          />
          <h1 className="app__heading">CYF Hotel</h1>
        </header>
      </div>
    </>
  );
};

export default AppHeader;
