import { ReactNode } from 'react';
import classnames from 'classnames';

import { Size } from 'enums/size';

type ButtonProps = {
  children: ReactNode;
  size: Size;
  onClick?: () => void;
};

export default function Button({ children, size, onClick }: ButtonProps) {
  const buttonWrapperClass = classnames('button__wrapper', {
    'button__wrapper--small': size == Size.SMALL,
    'button__wrapper--medium': size == Size.MEDIUM,
    'button__wrapper--large': size == Size.LARGE,
  });

  return (
    <>
      <div className={buttonWrapperClass} onClick={onClick}>
        {children}
      </div>
      <style jsx>{`
        @import 'styles/utils/_all.scss';

        .button__wrapper {
          border-radius: 1.5rem;
          border: 1px solid $border-color;
          background-color: $secondary-color;
          color: $primary-color;

          &:hover {
            cursor: pointer;
          }

          &--small {
            padding: 0.5rem 1rem;
            font-size: 1rem;
          }

          &--medium {
            padding: 1rem 2rem;
            font-size: 1.2rem;
          }

          &--large {
            padding: 1.5rem 3rem;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
