/* eslint-disable no-unused-vars */
import { useTheme } from './ThemeContext'

const ThemeSwitcher = (props) => {
  const { darkMode } = useTheme();

  return (
    <div>
      <div>
        <div className="w-full">{props.children}</div>
      </div>
    </div>
  );
};
export default ThemeSwitcher