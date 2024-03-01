import FooterListItem from "./FooterListItem.jsx";

export default function FooterList() {
  const listArr = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];

  return (
    <ul>
      {listArr.map((listItem) => {
        return <FooterListItem key={`li${listArr.indexOf(listItem)}`} listItem={listItem} />;
      })}
    </ul>
  );
}
