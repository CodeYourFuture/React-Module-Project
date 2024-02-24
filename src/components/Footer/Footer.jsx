import footerData from "@/data/footerData"
function Footer(){


    return (
      <div>
        <footer>
          <ul>
            {footerData.map((item) => <li>{item}</li>)}
          </ul>
        </footer>
      </div>
    );
}

export default Footer;
