import styles from "./style.module.css";

export const CharCard = ({ character }) => {
  return (
    <li className={character.status == "Alive" ? styles.alive : ""}>
      <h4 className="title size-2">
        {character.name.length > 15
          ? `${character.name.substring(15, 0)}...`
          : character.name}
      </h4>
      <p>espécie: {character.species}</p>
      <img src={character.image} alt="" />
    </li>
  );
};
