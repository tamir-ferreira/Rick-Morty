import { CharCard } from "../CharCard";
import styles from "./style.module.css";

export const Characters = ({ characterList, page, setPage }) => {
  const previousPage = () => {
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };
  return (
    <>
      <h2 className="title size-1">Personagens Rick and Morty</h2>
      <ul>
        {characterList.map((character) => (
          <CharCard key={character.id} character={character} />
        ))}
      </ul>
      <div className={styles.observer}>
        {page > 1 ? <button onClick={previousPage}>ANTERIOR</button> : false}
        <button onClick={nextPage}>PRÓXIMO</button>
      </div>
    </>
  );
};
