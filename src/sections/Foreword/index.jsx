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
      <div className={cn.contentWrapper}>
        <img src='assets/images/Zahl_Grafik_1.jpg' alt='' />
        <img src='assets/images/Zahl_Grafik_2.jpg' alt='' />
      </div>
      <div className={cx(cn.contentWrapper, cn.mittelWrapper)}>
        <img src='assets/images/Zahl_Grafik_3.jpg' alt='' />
        <img src='assets/images/Zahl_Grafik_4.jpg' alt='' />
      </div>
    </section>
  );
}

export default Foreword;
