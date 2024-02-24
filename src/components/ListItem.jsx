export default function ListItem(props) {
  return (
    <li>
      <a target="_blank" href={props.urlLink}>
        <img src={props.urlImage} alt={props.description} />
      </a>
    </li>
  );
}
