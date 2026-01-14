import { PlayerCard } from "../../common/PlayerCard";

export function OppositeInfo() {
  return (
    <>
      <h3>Opuesto</h3>

      <ul>
        <li>Poder ofensivo</li>
        <li>Salto</li>
        <li>Capacidad de definición</li>
      </ul>

      <div className="d-flex gap-3">
        <PlayerCard name="Wilfredo León" />
        <PlayerCard name="Ivan Zaytsev" />
        <PlayerCard name="Matt Anderson" />
      </div>
    </>
  );
}
