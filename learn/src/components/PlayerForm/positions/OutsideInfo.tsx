import { PlayerCard } from "../../common/PlayerCard";

export function OutsideInfo() {
  return (
    <>
      <h3>Ala (Receptor)</h3>

      <ul>
        <li>Recepción</li>
        <li>Ataque por banda</li>
        <li>Regularidad</li>
      </ul>

      <div className="d-flex gap-3">
        <PlayerCard name="Earvin N'Gapeth" />
        <PlayerCard name="Osmany Juantorena" />
        <PlayerCard name="Yoandy Leal" />
      </div>
    </>
  );
}
