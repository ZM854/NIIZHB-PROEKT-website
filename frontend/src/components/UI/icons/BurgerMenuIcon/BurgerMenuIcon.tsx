type BurgerIconProps = {
  className?: string;
  size?: number;
};

const BurgerIcon = ({ size = 48, className }: BurgerIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
    >
      <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
    </svg>
  );
};

export default BurgerIcon;
