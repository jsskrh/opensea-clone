import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavMenus from "./NavMenus";
import SearchInput from "./SearchInput";
import {
  MagnifyingGlassIcon,
  CreditCardIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <MoonIcon
          className="h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <SunIcon
          className="h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  const menus = [
    { name: "Explore", href: "#" },
    { name: "Stats", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Create", href: "#" },
  ];

  const style = {
    themeSwitcher: `h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300`,
    wrapper: `sticky top-0 z-50 bg-white px-4 py-2 shadow-md dark:bg-gray-900 flex items-center justify-between space-x-6`,
    logoContainer: `xl:pr-40`,
    searchContainer: `ml-8 hidden flex-1 sm:block`,
    menusContainer: `hidden pr-6 lg:block xl:pl-8,`,
    iconsContainer: `flex items-center space-x-6`,
    icons: `h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300 hover:dark:text-white`,
    desktopIcons: `hidden lg:block`,
    mobileIcons: `sm:hidden`,
    tabletIcons: `lg:hidden`,
  };

  return (
    <header className={style.wrapper}>
      <div className={style.logoContainer}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      <div className={style.searchContainer}>
        <SearchInput />
      </div>

      <div className={style.menusContainer}>
        <NavMenus menus={menus} />
      </div>

      <div className={style.iconsContainer}>
        <UserCircleIcon className={`${style.icons} ${style.desktopIcons}`} />
        <CreditCardIcon className={`${style.icons} ${style.desktopIcons}`} />
        {renderThemeChanger()}
        <MagnifyingGlassIcon
          className={`${style.icons} ${style.mobileIcons}`}
        />
        <Bars3Icon className={`${style.icons} ${style.tabletIcons}`} />
      </div>
    </header>
  );
}

export default Navbar;
