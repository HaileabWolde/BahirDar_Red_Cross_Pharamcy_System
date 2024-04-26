import { Image } from "../atoms/Image";

type CardProps = {
  clientName?: string | null;
  cardClass: string;
  imageWrapperClass: string;
  imageAlt: string;
  imageSrc: string;
  textWrapperClass?: string;
  cover?: string;
  children?: React.ReactNode;
};

export const Card = ({
  cardClass,
  imageWrapperClass,
  imageAlt,
  imageSrc,
  textWrapperClass,
  children,
  cover,
  ...rest
}: CardProps) => {
  return (  
      <div
      style={{ alignSelf: 'flex-start' }} // Add this line to set the individual card's alignment 
      className={cardClass} {...rest}>
        <Image
          className={imageWrapperClass}
          objectCover={cover}
          alt={imageAlt}
          image={imageSrc}
        />

        <div className={textWrapperClass}>{children}</div>
      </div>
  );
};
