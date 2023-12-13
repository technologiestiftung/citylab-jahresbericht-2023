import cn from "./Icon.module.scss";

import { ReactComponent as BildungIcon } from "../../icons/Nav-Icon-Bildung.svg";
import { ReactComponent as KiezlaborIcon } from "../../icons/Nav-Icon-Kiezlabor.svg";
import { ReactComponent as PrototypingIcon } from "../../icons/Nav-Icon-Prototyping.svg";
import { ReactComponent as VerwaltungIcon } from "../../icons/Nav-Icon-Verwaltung.svg";
import { ReactComponent as UnterwegsIcon } from "../../icons/Nav-Icon-Unterwegs.svg";
import { ReactComponent as ActivitiesIcon } from "../../icons/Nav-Icon-Activities.svg";
import { ReactComponent as TeamIcon } from "../../icons/Nav-Icon-Team.svg";
import { ReactComponent as EntwicklungIcon } from "../../icons/Nav-Icon-Entwicklung.svg";
import { ReactComponent as ChronologieIcon } from "../../icons/Nav-Icon-Chronologie.svg";

function Icon({ type }) {
  return (
    <div className={cn.iconWrapper}>
      {type === "bildung" && <BildungIcon />}
      {type === "kiezlabor" && <KiezlaborIcon />}
      {type === "prototyping" && <PrototypingIcon />}
      {type === "verwaltung" && <VerwaltungIcon />}
      {type === "unterwegs" && <UnterwegsIcon />}
      {type === "activities" && <ActivitiesIcon />}
      {type === "team" && <TeamIcon />}
      {type === "entwicklung" && <EntwicklungIcon />}
      {type === "chronologie" && <ChronologieIcon />}
    </div>
  );
}

export default Icon;
