import footerData from "@/data/footerData"
function Footer(){


    return (
      <div>
        <footer>
          <ul>
            {footerData.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
          </ul>
        </footer>
      </div>
    );
}

export default Footer;
