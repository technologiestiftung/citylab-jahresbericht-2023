import { useEffect, useRef, useState } from "react";
import useStore from "../../hooks/useStore";
import cx from "classnames";
import LanguageSwitch from "../LanguageSwitch";

import cn from "./Navbar.module.scss";

import { ReactComponent as KiezlaborIcon } from "../../icons/Nav-Icon-Kiezlabor.svg";
import { ReactComponent as VerwaltungIcon } from "../../icons/Nav-Icon-Verwaltung.svg";
import { ReactComponent as GemeinsamDigitalIcon } from "../../icons/Nav-Icon-GemeinsamDigital.svg";
import { ReactComponent as StadtUndWirIcon } from "../../icons/Nav-Icon-StadtUndWir.svg";
import { ReactComponent as UnterwegsIcon } from "../../icons/Nav-Icon-Unterwegs.svg";

const icons = {
  kiezlabor: {
    icon: <KiezlaborIcon />,
    width: 30,
    offset: 0,
  },
  gemeinsamDigital: {
    icon: <GemeinsamDigitalIcon />,
    width: 30,
    offset: 50,
  },
  verwaltung: {
    icon: <VerwaltungIcon />,
    width: 30,
    offset: 200,
  },
  stadtUndWir: {
    icon: <StadtUndWirIcon />,
    width: 30,
    offset: 100,
  },
  unterwegs: {
    icon: <UnterwegsIcon />,
    width: 30,
    offset: 100,
  },
};

const activeTopicSelector = s => s.activeTopic;

const hideNav = sections => {
  const positions = getScrollPositionsOfSections(sections);
  return positions.firstSectionPosition < 0 && positions.footerPosition > 1000;
};

const getScrollPositionsOfSections = sections => {
  const firstSection = document.getElementById(
    `section-${sections[0].scrollId}`
  );
  const firstSectionAfterProjects = document.getElementById("numbers");

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
