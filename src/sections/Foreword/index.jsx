import cn from "./Foreword.module.scss";
import cx from "classnames";

import Headline from "../../components/Headline";
import Paragraph from "../../components/Paragraph";

function Foreword({ content, lang }) {
  return (
    <section>
      <div className={cx(cn.wrapper, cn.layoutWrapper)}>
        <Headline lang={lang} content={content.title} />
        <Paragraph lang={lang} content={content.text} />
      </div>
      <div className={cx(cn.wrapper, cn.layoutWrapper)}>
        <Headline lang={lang} content={content.numbers} />
      </div>
      {lang === "de" && (
        <>
          <div className={cn.contentWrapper}>
            <img
              src='assets/images/Veranstaltungen CityLAB 2023.png'
              alt='Schriftzug: 170 Veranstaltungen'
            />
            <img
              src='assets/images/Gäste im CityLAB 2023.png'
              alt='Schriftzug: 4.200 Gäste'
            />
          </div>
          <div className={cx(cn.contentWrapper, cn.mittelWrapper)}>
            <img
              src='assets/images/abgeschlossene_Projekte CityLAB 2023.png'
              alt='Schriftzug: 20 abgeschlossene Projekte'
            />
            <img
              src='assets/images/laufende Projekte CityLAB 2023.png'
              alt='Schriftzug: 18 laufende Projekte'
            />
          </div>
        </>
      )}
      {lang === "en" && (
        <>
          <div className={cn.contentWrapper}>
            <img
              src='assets/images/Events at CityLAB 2023.png'
              alt='Infotext: 170 Events'
            />
            <img
              src='assets/images/Guests at CityLAB 2023.png'
              alt='Infotext: 4,200 Guests'
            />
          </div>
          <div className={cx(cn.contentWrapper, cn.mittelWrapper)}>
            <img
              src='assets/images/completed projects at CityLAB 2023.png'
              alt='Infotext: 20 completed projects'
            />
            <img
              src='assets/images/ongoing projects at CityLAB 2023.png'
              alt='Infotext: 18 ongoing projects'
            />
          </div>
        </>
      )}
    </section>
  );
}

export default Foreword;
