import cx from "classnames";
import Paragraph from "../../components/Paragraph";
import Link from "../../components/Link";

import cn from "./Outro.module.scss";

function Outro({ content, lang }) {
  return (
    <section>
      <div className={cx(cn.wrapper, cn.layoutWrapper, cn.header)} id='numbers'>
        <div className={cx(cn.contentBlock, cn.layoutWrapper)}>
          <h1 className={cn.title}>{content.blocks.press.title[lang]}</h1>
          <Paragraph lang={lang} content={content.blocks.press.text} />
          <ul className={cn.linkList}>
            {content.blocks.press.links.map(link => (
              <li key={link.href}>
                <a href={link.href} target='_blanc'>
                  {link[lang]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={cx(cn.contentBlock, cn.layoutWrapper)}>
          <h1 className={cn.title}>{content.blocks.intro.title[lang]}</h1>
          <Paragraph lang={lang} content={content.blocks.intro.text} />
        </div>
      </div>
      {content.paragraphs.map((paragraph, index) => (
        <div className={cx(cn.contentBlock, cn.layoutWrapper)} key={index}>
          <h1 className={cn.title}>{paragraph.title[lang]}</h1>
          <Paragraph lang={lang} content={paragraph.text} />
          <Link theme={"dark"} content={paragraph.link} lang={lang} />
          <div className={cx(cn.contentBlock, cn.layoutWrapper)}>
            <Paragraph lang={lang} content={paragraph.social} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Outro;
