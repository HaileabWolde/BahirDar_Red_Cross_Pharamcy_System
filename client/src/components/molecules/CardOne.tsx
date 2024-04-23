import { Image } from "../atoms/Image";
type CardProps = {
  cardClass: string;
  cardSrc: string;
  textWrapperClass?: string;
  children?: React.ReactNode;
};

export const CardOne = ({ cardClass, cardSrc, textWrapperClass, children }: CardProps) => {
  const cardStyle = {
    backgroundImage: `url(${cardSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  };

  return (
    <div style={cardStyle} className={`${cardClass}`}>
       
      <div className={textWrapperClass}>{children}</div>
    </div>
  );
};