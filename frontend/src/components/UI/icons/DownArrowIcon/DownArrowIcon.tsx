type DownArrowIconProps = {
  className?: string;
  size?: number;
};

const DownArrowIcon = ({ size = 64, className }: DownArrowIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
    >
      <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
    </svg>
  );
};

export default DownArrowIcon;
