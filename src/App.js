import useStore from "./hooks/useStore";
import cn from "./App.module.scss";
import content from "./content";

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Foreword from "./sections/Foreword";
import SmartCity from "./sections/SmartCity";
import Verwaltung from "./sections/Verwaltung";
import Unterwegs from "./sections/Unterwegs";
import Prototyping from "./sections/Prototyping";
import Outro from "./sections/Outro";
import Footer from "./sections/Footer";

const langSelector = s => s.lang;

const getNavItems = () => {
  const keys = ["smartCity", "verwaltung", "prototyping", "unterwegs"];
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
      <SmartCity lang={lang} content={content.smartCity} ui={content.ui} />
      <Verwaltung lang={lang} content={content.verwaltung} ui={content.ui} />
      <Prototyping lang={lang} content={content.prototyping} ui={content.ui} />
      <Unterwegs lang={lang} content={content.unterwegs} ui={content.ui} />
      <Outro lang={lang} content={content.outro} />
      <Footer content={content.footer} lang={lang} />
    </div>
  );
}

export default App;
