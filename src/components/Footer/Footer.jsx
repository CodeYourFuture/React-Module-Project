const Footer = (prop) => {
  return (
    <footer className="app_footer">
      <ul>
        {prop.array.map((arr, index) => {
          return <li key={index}>{arr}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
