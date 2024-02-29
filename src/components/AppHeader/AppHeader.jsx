import Logo from "@/assets/spa-logo.png";
import "./AppHeader.scss";

const AppHeader = () => {
    return(
        
    <header className="app__header">
        <img className="app__logo" src={Logo} alt="" />
      <h1 className="app__heading">CYF Hotel</h1>
    </header>
  
    )
};

export default AppHeader;
