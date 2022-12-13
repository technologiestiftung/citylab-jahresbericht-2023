import cx from "classnames";
import cn from "./Footer.module.scss";

function Footer({ content, lang }) {
  return (
    <div className={cn.footer} id={content.id}>
      <div className={cn.logos}>
        {content.logos.map((d, i) => (
          <div key={`logo-key-${i}`} className={cx(cn.block, cn[d.className])}>
            <span className={cn.label}>{d.label[lang]}</span>
            <a
              className={cn.logoWrapper}
              href={d.href}
              target='_blank'
              rel='noreferrer'
            >
              <img src={d.src[lang]} alt={d.alt} />
            </a>
          </div>
        ))}
      </div>
      <div className={cn.bottom}>
        <div className={cn.left}>
          <span className={cn.copyright}>{content.copyright}</span>
        </div>
        <div className={cn.items}>
          <div className={cn.item}>
            <a
              className={cn.link}
              href={content.mainPage.href}
              rel='noreferrer'
              target='_blank'
            >
              {content.mainPage[lang]}
            </a>
          </div>
          <div className={cn.item}>
            <a
              className={cn.link}
              href={content.projects.href}
              rel='noreferrer'
              target='_blank'
            >
              {content.projects[lang]}
            </a>
          </div>
          <div className={cn.item}>
            <a
              className={cn.link}
              href={content.privacy.href}
              rel='noreferrer'
              target='_blank'
            >
              {content.privacy[lang]}
            </a>
          </div>
          <div className={cn.item}>
            <a
              className={cn.link}
              href={content.impressum.href}
              rel='noreferrer'
              target='_blank'
            >
              {content.impressum[lang]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
