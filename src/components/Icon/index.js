import cn from "./Icon.module.scss";

import { ReactComponent as BildungIcon } from "../../icons/Nav-Icon-Bildung.svg";
import { ReactComponent as KiezlaborIcon } from "../../icons/Nav-Icon-Kiezlabor.svg";
import { ReactComponent as VerwaltungIcon } from "../../icons/Nav-Icon-Verwaltung.svg";
import { ReactComponent as GemeinsamDigitalIcon } from "../../icons/Nav-Icon-GemeinsamDigital.svg";
import { ReactComponent as StadtUndWirIcon } from "../../icons/Nav-Icon-StadtUndWir.svg";
import { ReactComponent as ActivitiesIcon } from "../../icons/Nav-Icon-Activities.svg";
import { ReactComponent as UnterwegsIcon } from "../../icons/Nav-Icon-Unterwegs.svg";
import { ReactComponent as ChronologieIcon } from "../../icons/Nav-Icon-Chronologie.svg";

function Icon({ type }) {
  return (
    <div className={cn.iconWrapper}>
      {type === "bildung" && <BildungIcon />}
      {type === "kiezlabor" && <KiezlaborIcon />}
      {type === "verwaltung" && <VerwaltungIcon />}
      {type === "gemeinsamDigital" && <GemeinsamDigitalIcon />}
      {type === "stadtUndWir" && <StadtUndWirIcon />}
      {type === "activities" && <ActivitiesIcon />}
      {type === "unterwegs" && <UnterwegsIcon />}
      {type === "chronologie" && <ChronologieIcon />}
    </div>
  );
}

export default Icon;
