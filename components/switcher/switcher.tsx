import classNames from 'classnames';
import { ReactNode } from 'react';

type SwitcherProps = {
  value: boolean;
  handleSwitch: () => void;
  children?: ReactNode;
};

export default function Switcher({
  value,
  handleSwitch,
  children,
}: SwitcherProps) {
  return (
    <>
      <div className="switcher__wrapper">
        <button
          className={classNames({
            switcher__button: true,
            'switcher__button-active': value,
          })}
          onClick={handleSwitch}
        >
          <div
            className={classNames({
              switcher__control: true,
              'switcher__control-active': value,
            })}
          >
            {children}
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
