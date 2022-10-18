import classNames from 'classnames';
import { useState } from 'react';
import Image from 'next/image';

import { Theme } from 'enums/Theme';

type SwitcherProps = {
  theme?: Theme;
};

export default function Switcher({ theme = Theme.Light }: SwitcherProps) {
  const [activeTheme, setActiveTheme] = useState(theme === Theme.Light);

  const onHandleClick = () => {
    setActiveTheme((prev) => !prev);
  };

  return (
    <>
      <div className="switcher__wrapper">
        <button
          className={classNames({
            switcher__button: true,
            'switcher__button-active': activeTheme,
          })}
          onClick={onHandleClick}
        >
          <div
            className={classNames({
              switcher__control: true,
              'switcher__control-active': activeTheme,
            })}
          >
            <Image
              src={activeTheme ? '/icons/sun.svg' : '/icons/moon.svg'}
              width={30}
              height={30}
              alt="sun"
            />
          </div>
        </button>
      </div>
      <style jsx>{`
        .switcher {
          &__wrapper {
            width: 3rem;
            height: 2rem;
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
          }

          &__button {
            width: 100%;
            height: 100%;
            border-radius: 30px;
            border: none;
            position: relative;
            background-color: #bababa;
            transition: all 0.5s ease;

            &:hover {
              cursor: pointer;
            }

            &-active {
              background-color: #83b2eb;
            }
          }

          &__control {
            padding: 0.1rem;
            position: absolute;
            top: -20%;
            left: 0;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            background-color: #777877;

            &-active {
              left: 60%;
              background-color: #a9bfd9;
            }

            transition: all 0.5s ease;
          }
        }
      `}</style>
    </>
  );
}
