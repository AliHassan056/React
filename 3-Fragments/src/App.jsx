import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let favPlayers = [
    "Babar Azam",
    
    "Joe Root",
    "ABD",
    "Miller the Killer",
    'Saqib Khan'
  ];
  return (
    <>
      <h1>Favourite Players</h1>
      <ul className="list-group">
        {favPlayers.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
