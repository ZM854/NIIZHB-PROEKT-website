import cls from "./BrandText.module.css";

type BrandTextProps = {
  first: string;
  second: string;
};

const BrandText = ({ first, second }: BrandTextProps) => {
  return (
    <>
      <span className={cls.red}>{first}</span>
      <span className={cls.blue}>{second}</span>
    </>
  );
};

export default BrandText;
