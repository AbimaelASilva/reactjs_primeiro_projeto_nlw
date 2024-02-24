import ListItems from "./ListItem";

export default function Section(props) {
  return (
    <section>
      <div>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <ul className={props.className}>
          {
            /**Os children são os filhos dos componenes, neste caso, o que será passado dentro de:
      <Section>
      passados aqui....
      <Section/>
      */
            props.children
          }
        </ul>
      </div>
    </section>
  );
}
