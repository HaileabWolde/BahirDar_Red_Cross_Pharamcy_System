import { Image } from "../atoms/Image";
type CardProps = {
  isCover?: Boolean;
  cardClass: string;
  cardSrc: string;
  textWrapperClass?: string;
  children?: React.ReactNode;
};

export const CardOne = ({ isCover, cardClass, cardSrc, textWrapperClass, children }: CardProps) => {
  const cardStyle = {
    backgroundImage: `url(${cardSrc})`,
    backgroundSize: "cover",
    backgroundPosition: `${isCover ? `null` : `center` }`,
    
  };

  return (
    <div style={cardStyle} className={`${cardClass}`}>
       
      <div className={textWrapperClass}>{children}</div>
    </div>
  );
};