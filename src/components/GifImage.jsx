const GifImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="min-w-[96px] h-[97px] object-contain"
    />
  );
};

export default GifImage;
