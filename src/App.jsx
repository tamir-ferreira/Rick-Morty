import { useEffect, useState } from "react";
import { Characters } from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(
      (resp) =>
        resp
          .json()
          .then((resp) => setCharacterList(resp.results))
          .catch((err) => console.log(err))
    );
  }, [page]);
  // console.log(characterList.results);
  return (
    <div className="container">
      <Characters characterList={characterList} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
