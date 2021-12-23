import clsx from 'clsx';
import { cloneElement, DetailedHTMLProps, InputHTMLAttributes } from 'react';

export const TextField: React.FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    variant?: 'outlined' | 'contained';
    hasError?: boolean;
    Icon?: JSX.Element | ((props: { className: string }) => JSX.Element);
    EndIcon?: JSX.Element | ((props: { className: string }) => JSX.Element);
  }
> = ({ className, hasError, Icon, variant = 'outlined', EndIcon, ...props }) => {
  const variation = variant === 'outlined' ? 'border-gray-300 border' : 'bg-gray-100';
  const errorStyle = hasError ? 'ring-red-500 ring-inset border-transparent outline-none ring-2' : '';
  return (
    <div className="relative">
      {Icon && (
        <div className="absolute flex items-center left-3 top-0 bottom-0 m-auto text-blueGray-400">
          {typeof Icon === 'function'
            ? Icon({ className: 'text-gray-600' })
            : cloneElement(Icon, { className: 'text-gray-600' })}
        </div>
      )}

      <input
        {...props}
        className={clsx(
          Icon ? 'pl-11' : '',
          errorStyle,
          variation,
          'h-11 w-full rounded-full px-3 outline-none',
          'focus:ring-blue-600 focus:ring-inset focus:border-transparent focus:outline-none focus:ring-2',
          'transition-all duration-150 ease-in',
          className
        )}
      />

      {EndIcon && (
        <div className="absolute flex items-center top-0 bottom-0 right-3 m-auto text-blueGray-400">
          {typeof EndIcon === 'function'
            ? EndIcon({ className: 'text-gray-600' })
            : cloneElement(EndIcon, { className: 'text-gray-600' })}
        </div>
      )}
    </div>
  );
};
