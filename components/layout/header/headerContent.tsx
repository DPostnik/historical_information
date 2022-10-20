import { ILink } from 'interfaces';
import { useState } from 'react';
import Image from 'next/image';
import Navigation from './navigation';
import LinkComponent from 'components/link';
import useLinkTranslation from 'hooks/useLinkTranslation';

type HeaderContentProps = {
  pathname: string;
  links: ILink[];
};

export default function HeaderContent({ pathname, links }: HeaderContentProps) {
  const [stateToggleMenu, setStateToggleMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setStateToggleMenu((prev) => !prev);
  };

  const mappedLinks = useLinkTranslation(links);

  return (
    <>
      <div className="header-content__wrapper">
        <ul className="header-content__items">
          {mappedLinks.map((link, index) => (
            <li
              key={index}
              className={`content-item ${
                pathname === link.href ? 'content-item-active' : ''
              }`}
            >
              <LinkComponent link={link}>{link?.label}</LinkComponent>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-content__mobile-wrapper">
        {!stateToggleMenu && (
          <div className="header-content__mobile-menu">
            <Image
              src="/icons/menu.svg"
              onClick={toggleMenu}
              width={22}
              height={22}
              alt={'menu'}
            />
          </div>
        )}
        <Navigation
          active={stateToggleMenu}
          onClose={toggleMenu}
          links={mappedLinks}
          pathname={pathname}
        />
      </div>
      <style jsx>{`
        @import 'styles/utils/_all.scss';

        .header-content {
          &__mobile {
            &-wrapper {
              display: flex;

              @include md {
                display: none;
              }
            }

            &-menu:hover {
              cursor: pointer !important;
            }
          }

          &__wrapper {
            display: none;

            @include md {
              align-items: center;
              display: flex;
            }
          }

          &__items {
            display: flex;
            flex-direction: row;
          }
        }

        .content-item {
          padding: 0 3rem;

          &:hover {
            -webkit-text-stroke: 1px black;
          }

          &-active {
            color: $secondary-color;
            font-weight: bold;
          }
        }
      `}</style>
    </>
  );
}
