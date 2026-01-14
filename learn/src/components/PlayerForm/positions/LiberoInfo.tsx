import { PlayerCard } from "../../common/PlayerCard";

export function LiberoInfo() {
  return (
    <>
      <h3>Líbero</h3>

      <ul>
        <li>Defensa</li>
        <li>Recepción</li>
        <li>Lectura del juego</li>
      </ul>

      <div className="d-flex gap-3">
        <PlayerCard name="Jenia Grebennikov" />
        <PlayerCard name="Monica De Gennaro" />
        <PlayerCard name="Erik Shoji" />
      </div>
    </>
  );
}
