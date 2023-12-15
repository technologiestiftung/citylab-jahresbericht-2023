import LanguageSwitch from "../../components/LanguageSwitch";

import cn from "./Header.module.scss";

function Header() {
  return (
    <div className={cn.header}>
      <span>Jahresrückblick 2023</span>
      <LanguageSwitch />
    </div>
  );
}

export default Header;
