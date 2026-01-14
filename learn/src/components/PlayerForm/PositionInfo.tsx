import type { Position } from "./PlayerForm";

import { SetterInfo } from "./positions/SetterInfo";
import { MiddleInfo } from "./positions/MiddleInfo";
import { OppositeInfo } from "./positions/OppositeInfo";
import { OutsideInfo } from "./positions/OutsideInfo";
import { LiberoInfo } from "./positions/LiberoInfo";

type Props = {
  position: Position;
};

export function PositionInfo({ position }: Props) {
  switch (position) {
    case "colocador":
      return <SetterInfo />;
    case "central":
      return <MiddleInfo />;
    case "opuesto":
      return <OppositeInfo />;
    case "ala":
      return <OutsideInfo />;
    case "libero":
      return <LiberoInfo />;
    default:
      return null;
  }
}
