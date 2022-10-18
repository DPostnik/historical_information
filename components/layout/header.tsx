import Switcher from 'components/switcher/switcher';
import { useApp } from 'common/store/app.context';
import { getTheme } from 'common/store/selectors';
import { Theme } from '../../enums/Theme';
import { useCallback } from 'react';

export default function Header() {
  const { dispatch } = useApp();
  const theme = useApp(getTheme);

  const handleSwitchTheme = useCallback(
    (value: Theme) => {
      dispatch({ type: 'setTheme', payload: value });
    },
    [dispatch]
  );

  return (
    <>
      <div className="header__wrapper">
        <h1>logo</h1>
        <div>
          <Switcher theme={theme} handleSwitchTheme={handleSwitchTheme}/>
        </div>
      </div>
      <style jsx>{`
        @import 'styles/utils/_all.scss';

        .header {
          &__wrapper {
            width: 100%;
            height: 5vh;
            border: 1px solid black;
            border-bottom: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 3rem;
            background: linear-gradient(90deg, #9df794 0%, #f794e4 100%);

            @include md {
              border: 1px solid red;
            }
          }
        }
      `}</style>
    </>
  );
}
