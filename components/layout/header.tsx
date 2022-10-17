export default function Header() {
  return (
    <>
      <div className="header__wrapper">header</div>
      <style jsx>{`
        @import 'styles/utils/_all.scss';

        .header {
          &__wrapper {
            width: 100%;
            height: 3rem;
            border: 1px solid black;
            border-bottom: none;

            @include md {
              border: 1px solid red;
            }
          }
        }
      `}</style>
    </>
  );
}
