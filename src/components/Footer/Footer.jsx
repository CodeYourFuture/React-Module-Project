function Footer(props){

    const listItems = props.list.map((item) => <li>{item}</li>);
    return (
      <div>
        <footer>
          <ul>{listItems}</ul>
        </footer>
      </div>
    );
}

export default Footer;
