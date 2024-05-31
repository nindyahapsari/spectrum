import React from 'react';

type ThemeSwitcherProps = {
  children: React.ReactNode;
};

function ThemeSwitcher(props: ThemeSwitcherProps) {
  return (
    <div>
      <div>
        <div className="w-full">{props.children}</div>
      </div>
    </div>
  );
}
export default ThemeSwitcher;
