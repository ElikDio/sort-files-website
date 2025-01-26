import clsx from 'clsx';
import { ReactNode } from 'react';
import './Container.scss';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

/**
 * Контейнер-обертка для центровки всех компонент на страницах
 * @param className css класс внутренних компонент
 * @param children внутренние компоненты
 * @returns Передаваемую компоненту
 */
export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  return <div className={clsx('container', className)}>{children}</div>;
};
