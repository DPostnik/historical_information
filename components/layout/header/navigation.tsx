import Image from 'next/image';

import LinkComponent from 'components/link';
import { ILink } from 'interfaces';

type Props = {
  active: boolean;
  onClose: () => void;
  links: ILink[];
  pathname: string;
};

export default function Navigation({
  active,
  onClose,
  links,
  pathname,
}: Props) {
  return (
    <>
      <div className={`navigation ${active ? 'navigation--is-on' : ''}`}>
        <div className="navigation__wrapper">
          <div className="navigation__wrapper-close" onClick={onClose}>
            <Image src="/icons/close.svg" width={22} height={22} alt="close" />
          </div>
          <div className="navigation__list">
            {links.map((link, index) => (
              <li
                key={index}
                className={`navigation__list-item ${
                  pathname === link.href ? 'navigation__list-item-active' : ''
                }`}
              >
                <LinkComponent link={link}>
                  <span className="navigation__bubble-line">
                    <span className="navigation__link-text">{link?.label}</span>
                  </span>
                </LinkComponent>
              </li>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @import 'styles/utils/_all.scss';

        .navigation {
          display: inline-block;
          position: fixed;
          top: 0;
          left: 100%;
          width: 100vw;
          height: 100vh;
          background-color: $background-color;
          z-index: 1;
          transform: translateX(0%);
          transition: 0.5s;

          @include md {
            display: none;
          }

          &--is-on {
            transform: translateX(-100%);
            transition: transform 1s;
            @include md {
              transform: none;
            }
          }

          &__wrapper {
            padding: 6rem 4rem 0 4rem;
            display: flex;
            flex-direction: column;

            &-close {
              all: unset;
              position: fixed;
              right: 1rem;
              top: 2rem;
              cursor: pointer;

              @include md {
                display: none;
              }
            }
          }

          &__list {
            padding: 0;
            margin: 0;
            list-style-type: none;
            font-size: 1.25rem;
            line-height: 1;

            &-item {
              padding: 1.5rem 0.5rem;
              text-decoration: none;
              letter-spacing: 0.25rem;

              &-active {
                font-weight: bold;
                color: $secondary-color;
              }

              .navigation {
                &__bubble-line {
                  position: relative;
                  width: 100%;
                  display: block;

                  &:before {
                    content: '';
                    border-width: 0;
                    border-top-width: 0.1rem;
                    border-color: $border-color;
                    border-style: solid;
                    width: 100%;
                    position: absolute;
                    z-index: 1;
                    top: calc(50% - 0.05rem);
                  }

                  &:after {
                    content: '';
                    position: absolute;
                    width: 0.5rem;
                    height: 0.5rem;
                    background-color: $border-color;
                    border-radius: 100%;
                    top: calc(50% - 0.25rem);
                    right: 0;
                    z-index: 2;
                  }

                  @include md {
                    &:after {
                      background-color: transparent;
                    }
                    &:before {
                      border: 0;
                    }
                  }
                }

                &__link-text {
                  position: relative;
                  z-index: 2;
                  background-color: $background-color;

                  @include md {
                    background-color: transparent;
                  }

                  &:hover {
                    -webkit-text-stroke: 1px black;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
}
