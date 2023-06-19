import {
  useDispatch,
  useSelector,
} from "react-redux";
import SettingAction from "../store/setting/actions";
import * as SettingSelector from "../store/setting/selectors";

export const useDarkMode = () => {
  const dispatch = useDispatch();
  const theme = useSelector(
    SettingSelector.theme_scheme
  );

  // Change theme toggler
  const themeToggler = () => {
    dispatch(
      SettingAction.theme_scheme(
        theme === "light" ? "dark" : "light"
      )
    );
  };

  return [theme, themeToggler];
};
