export default function Footer() {
  return (
    <>
      <div className="footer__wrapper">footer</div>
      <style jsx>{`
        @import 'styles/utils/_all.scss';

        .footer {
          &__wrapper {
            width: 100%;
            height: 5vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $text-color;
          }
        }
      `}</style>
    </>
  );
}
