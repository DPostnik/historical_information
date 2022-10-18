import Switcher from 'components/switcher/switcher';

export default function Header() {
  return (
    <>
      <div className="header__wrapper">
        <h1>logo</h1>
        <div>
          <Switcher />
        </div>
      </div>
      <style jsx>{`
        @import 'styles/utils/_all.scss';

        .header {
          &__wrapper {
            width: 100%;
            height: 3rem;
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
