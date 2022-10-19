import { useRouter } from 'next/router';
import ThemeSwitcher from 'components/switcher/theme-switcher';
import HeaderContent from './header/headerContent';
import { selectors, useApp } from 'common/store/app.context';

export default function Header() {
  const links = useApp(selectors.getHeaderLinks);
  const { pathname } = useRouter();

  return (
    <>
      <div className="header__wrapper">
        <h1>logo</h1>
        <HeaderContent pathname={pathname} links={links} />
        <div>
          <ThemeSwitcher />
        </div>
      </div>
      <style jsx>{`
        @import 'styles/utils/_all.scss';

        .header {
          &__wrapper {
            width: 100%;
            height: 5vh;
            border: 1px solid $border-color;
            border-bottom: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 3rem;
            color: $text-color;
          }
        }
      `}</style>
    </>
  );
}
