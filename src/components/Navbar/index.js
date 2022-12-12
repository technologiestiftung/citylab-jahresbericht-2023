import { useEffect, useRef, useState } from "react";
import useStore from "../../hooks/useStore";
import cx from "classnames";
import LanguageSwitch from "../LanguageSwitch";

import cn from "./Navbar.module.scss";

import { ReactComponent as BildungIcon } from "../../icons/Nav-Icon-Bildung.svg";
import { ReactComponent as SmartCityIcon } from "../../icons/Nav-Icon-SmartCity.svg";
import { ReactComponent as PrototypingIcon } from "../../icons/Nav-Icon-Prototyping.svg";
import { ReactComponent as VerwaltungIcon } from "../../icons/Nav-Icon-Verwaltung.svg";
import { ReactComponent as UnterwegsIcon } from "../../icons/Nav-Icon-Unterwegs.svg";
import { ReactComponent as ActivitiesIcon } from "../../icons/Nav-Icon-Activities.svg";

const icons = {
  smartCity: {
    icon: <SmartCityIcon />,
    width: 30,
    offset: 0,
  },
  verwaltung: {
    icon: <VerwaltungIcon />,
    width: 30,
    offset: 50,
  },
  unterwegs: {
    icon: <UnterwegsIcon />,
    width: 30,
    offset: 100,
  },
  bildung: {
    icon: <BildungIcon />,
    width: 30,
    offset: 150,
  },
  prototyping: {
    icon: <PrototypingIcon />,
    width: 30,
    offset: 200,
  },
  activities: {
    icon: <ActivitiesIcon />,
    width: 30,
    offset: 250,
  },
};

const activeTopicSelector = s => s.activeTopic;

const hideNav = sections => {
  const positions = getScrollPositionsOfSections(sections);

  return positions.firstSectionPosition < 0 && positions.footerPosition > 0;
};

const getScrollPositionsOfSections = sections => {
  const firstSection = document.getElementById(
    `section-${sections[0].scrollId}`
  );
  const firstSectionAfterProjects = document.getElementById("team");

  const firstSectionPosition = firstSection.getBoundingClientRect().top;
  const footerPosition = firstSectionAfterProjects.getBoundingClientRect().top;

  return { firstSectionPosition, footerPosition };
};

function Navbar({ items, lang }) {
  const [activeLabel, setActiveLabel] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const elementRef = useRef(null);
  const activeTopic = useStore(activeTopicSelector);

  function handleMouseEnter({ label, id }) {
    setActiveId(id);
    setActiveLabel(label);
    setIsHovered(true);
  }

  useEffect(() => {
    if (activeId) {
      const label = document.getElementById("labelWrapper");
      const boundingLabel = label.getBoundingClientRect();
      const x = -(boundingLabel.width / 2) + 20 + icons[activeId].offset;
      label.style.transform = `translate(${x}px, -50px)`;
    }
  }, [activeLabel, activeId]);

  useEffect(() => {
    window.addEventListener("scroll", () => setIsVisible(hideNav(items)));
    return () =>
      window.removeEventListener("scroll", () => setIsVisible(hideNav(items)));
  });

  function handleMouseLeave() {
    setIsHovered(false);
    setActiveLabel(null);
  }

  function handleClick(id) {
    document
      .getElementById(`anchor-${id}`)
      .scrollIntoView({ behavior: "smooth", block: "center" });
    setActiveLabel(null);
    setIsHovered(false);
  }

  return (
    <>
      <div className={cx(cn.navbar, { [cn.navbarHidden]: !isVisible })}>
        <div
          id='labelWrapper'
          className={cx(cn.labelWrapper, { [cn.active]: isHovered })}
        >
          {activeLabel}
        </div>
        {items.map((d, i) => (
          <div key={`item-key-${i}`}>
            <div
              ref={elementRef}
              id={d.id}
              onMouseLeave={() => handleMouseLeave()}
              onMouseEnter={() =>
                handleMouseEnter({ id: d.id, label: d.topic[lang] })
              }
              onClick={() => handleClick(d.scrollId)}
              className={cx(cn.iconWrapper, cn[d.id], {
                [cn.active]: activeTopic === d.scrollId,
              })}
            >
              {icons[d.id].icon}
            </div>
          </div>
        ))}
        <div className={cn.divider} />
        <LanguageSwitch />
      </div>
    </>
  );
}

export default Navbar;
