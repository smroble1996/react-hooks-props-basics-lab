export default function Links(props) {
  return (
    <div>
      <h3>Here are my Links:</h3>
      <a href={props.links.github}>{props.links.github}</a>
      <a href={props.links.linkedin}>{props.links.linkedin}</a>
    </div>
  );
}
