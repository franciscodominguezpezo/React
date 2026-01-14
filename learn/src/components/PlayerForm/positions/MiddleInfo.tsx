import { PlayerCard } from "../../common/PlayerCard";

export function MiddleInfo() {
  return (
    <>
      <h3>Central</h3>

      <ul>
        <li>Bloqueo</li>
        <li>Velocidad de reacción</li>
        <li>Primer tiempo</li>
      </ul>

      <div className="d-flex gap-3">
        <PlayerCard name="Robertlandy Simón" />
        <PlayerCard name="Srećko Lisinac" />
        <PlayerCard name="Maxwell Holt" />
      </div>
    </>
  );
}
