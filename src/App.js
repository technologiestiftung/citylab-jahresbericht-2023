import useStore from "./hooks/useStore";
import cn from "./App.module.scss";
import content from "./content";

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Foreword from "./sections/Foreword";
import Kiezlabor from "./sections/Kiezlabor";
import GemeinsamDigital from "./sections/GemeinsamDigital";
import StadtUndWir from "./sections/StadtUndWir";
import Verwaltung from "./sections/Verwaltung";
import Outro from "./sections/Outro";
import Footer from "./sections/Footer";

const langSelector = s => s.lang;

const getNavItems = () => {
  const keys = ["kiezlabor", "gemeinsamDigital", "verwaltung", "stadtUndWir"];
  return keys.map(d => ({
    id: d,
    scrollId: content[d].id,
    topic: content[d].topic,
    bubbles: {
      scrollId: content[d].id,
      text: content[d].items.map(d => d.text.title),
    },
  }));
};

function App() {
  const lang = useStore(langSelector);
  const navItems = getNavItems();

  return (
    <div className={cn.app}>
      <Intro content={content.header} lang={lang} />
      <Navbar items={navItems} lang={lang} />
      <Foreword lang={lang} content={content.foreword} />
      <Kiezlabor lang={lang} content={content.kiezlabor} ui={content.ui} />
      <GemeinsamDigital
        lang={lang}
        content={content.gemeinsamDigital}
        ui={content.ui}
      />
      <Verwaltung lang={lang} content={content.verwaltung} ui={content.ui} />
      <StadtUndWir lang={lang} content={content.stadtUndWir} ui={content.ui} />
      <Outro lang={lang} content={content.outro} />
      <Footer content={content.footer} lang={lang} />
    </div>
  );
}

export default App;
