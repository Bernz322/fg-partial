import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SettingAction from "../store/setting/actions";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  // Sets theme mode. If no theme mode, useEffect will default it to "light"
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  // Change theme toggler
  const themeToggler = () => {
    if (theme === "light") {
      dispatch(
        SettingAction.theme_scheme("dark")
      );
      setMode("dark");
      return;
    }
    dispatch(SettingAction.theme_scheme("light"));
    return setMode("light");
  };

  // Checks localstorage theme
  useEffect(() => {
    const currentTheme =
      window.localStorage.getItem("theme");

    if (currentTheme)
      return setTheme(currentTheme);
    return setTheme("light");
  }, []);

  return [theme, themeToggler];
};
