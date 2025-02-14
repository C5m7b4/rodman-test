import "./App.css";
import { getActors } from "./api/interviewApi";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [selectedActor, setSelectedActor] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getActors()
      .then((resp) => {
        const j = resp.data;
        console.log(j.actors);
        setData(j.actors);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleSelect = (e) => {
    const actor = data.filter((actor) => actor.id == e.target.value)[0];
    setSelectedActor(actor);
  };

  return (
    <div>
      <h2>Actors</h2>
      <select value={selectedActor.id} onChange={handleSelect}>
        {data.map((actor, i) => (
          <option key={`actore-${i}`} value={actor.id}>
            {actor.firstName} {actor.lastName}
          </option>
        ))}
      </select>
      <div>
        {Object.keys(selectedActor).length > 0 ? (
          <div>
            {selectedActor.movies.map((movie, i) => (
              <div style={{ display: "flex" }} key={`movie-${i}`}>
                <div>Name: {movie.name}</div>
                <div>Year: {movie.year}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>no actor selected</div>
        )}
      </div>
    </div>
  );
}

export default App;
