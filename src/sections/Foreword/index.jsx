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
      {lang === "de" && (
        <>
          <div className={cn.contentWrapper}>
            <img
              src='assets/images/Zahl_Grafik_1.jpg'
              alt='Schriftzug: 34 Mitarbeiter:innen'
            />
            <img
              src='assets/images/Zahl_Grafik_2.jpg'
              alt='Schriftzug: 110 Veranstaltungen'
            />
          </div>
          <div className={cx(cn.contentWrapper, cn.mittelWrapper)}>
            <img
              src='assets/images/Zahl_Grafik_3.jpg'
              alt='Schriftzug: 2778 Gaeste im Citylab 2022'
            />
            <img
              src='assets/images/Zahl_Grafik_4.jpg'
              alt='Schriftzug: 5660 Social Media Follower:innen'
            />
          </div>
        </>
      )}
    </section>
  );
}

export default Foreword;
