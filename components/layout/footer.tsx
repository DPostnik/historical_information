export default function Footer() {
  return (
    <>
      <div className="footer__wrapper">footer</div>
      <style jsx>{`
        .footer {
          &__wrapper {
            width: 100%;
            height: 5vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(90deg, #f794ab, #e5f794);
          }
        }
      `}</style>
    </>
  );
}
