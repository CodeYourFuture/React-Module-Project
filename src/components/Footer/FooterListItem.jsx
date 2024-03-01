export default function FooterListItem({ listItem }) {
  return (
    <li data-testid="address" className="addressInfo">
      {listItem}
    </li>
  );
}
