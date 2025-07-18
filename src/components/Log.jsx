export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} slected {turn.square.row} , {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
