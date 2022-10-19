import ThemeSwitcher from 'components/switcher/theme-switcher';

export default function Header() {
  return (
    <>
      <div className="header__wrapper">
        <h1>logo</h1>
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
