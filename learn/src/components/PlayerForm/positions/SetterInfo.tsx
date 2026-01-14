import { PlayerCard } from "../../common/PlayerCard";

export function SetterInfo() {
  return (
    <>
      <h3>Colocador</h3>
      <ul>
        <li>Visión de juego</li>
        <li>Precisión</li>
        <li>Liderazgo</li>
      </ul>

      <div className="d-flex gap-3">
        <PlayerCard name="Bruno Rezende" />
        <PlayerCard name="Micah Christenson" />
        <PlayerCard name="Luciano De Cecco" />
      </div>
    </>
  );
}
