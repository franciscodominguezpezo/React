import React, { useState } from "react";
import { PositionSelect } from "./PositionSelect";
import { PositionInfo } from "./PositionInfo";

export type Position = "colocador" | "central" | "opuesto" | "ala" | "libero";

export default function PlayerForm() {
  const [position, setPosition] = useState<Position | "">("");

  return (
    <div>
      <PositionSelect value={position} onChange={setPosition} />
      {position && <PositionInfo position={position} />}
    </div>
  );
}
