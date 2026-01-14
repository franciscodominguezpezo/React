import type { Position } from "./PlayerForm";

type Props = {
  value: Position | "";
  onChange: (value: Position) => void;
};

export function PositionSelect({ value, onChange }: Props) {
  return (
    <select
      className="form-select mb-3"
      value={value}
      onChange={(e) => onChange(e.target.value as Position)}
    >
      <option value="">Selecciona un puesto</option>
      <option value="colocador">Colocador</option>
      <option value="central">Central</option>
      <option value="opuesto">Opuesto</option>
      <option value="ala">Ala</option>
      <option value="libero">Líbero</option>
    </select>
  );
}
