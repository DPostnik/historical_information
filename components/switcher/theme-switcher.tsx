import Image from 'next/image';
import { useCallback } from 'react';

import { useApp } from 'common/store/app.context';
import { getTheme } from 'common/store/selectors';
import { Theme } from 'enums/Theme';
import Switcher from './switcher';

export default function ThemeSwitcher() {
  const { dispatch } = useApp();
  const theme = useApp(getTheme);

  const isLight = theme === Theme.LIGHT;

  const handleSwitchTheme = useCallback(() => {
    dispatch({
      type: 'setTheme',
      payload: isLight ? Theme.DARK : Theme.LIGHT,
    });
  }, [dispatch, isLight]);

  return (
    <Switcher handleSwitch={handleSwitchTheme} value={isLight}>
      <Image
        src={isLight ? '/icons/sun.svg' : '/icons/moon.svg'}
        width={30}
        height={30}
        alt="sun"
      />
    </Switcher>
  );
}
