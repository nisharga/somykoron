 
interface IProps{
    label: string;
    route: string;
    className?: string;
}

const RoundedBtn = ({ label, route, className }: IProps) => {
  return (
    <a
      href={route}
      className={`${className} py-4 px-8 font-medium text-gray-900 bg-white rounded-full`}
    >
      {label}
    </a>
  );
};

export default RoundedBtn;
