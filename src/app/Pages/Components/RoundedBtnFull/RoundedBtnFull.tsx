import { FC } from 'react';

interface IProps{
    label: string;
    route: string;
    className?: string;
}

const RoundedBtnFull:FC<IProps> = ({ label, route, className }) => {
    return (
      <a
        href={route}
        className={`${className}  py-4 px-8 block font-medium text-gray-900 bg-white rounded-full`}
      >
        {label}
      </a>
    );
  };
  
  export default RoundedBtnFull;