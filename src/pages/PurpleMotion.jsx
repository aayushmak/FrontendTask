import AnimatedGrid from '../components/AnimateGrid';

const PurpleMotion = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <AnimatedGrid rows={10} cols={26} interval={2000} activeCount={12} />
    </div>
  );
};

export default PurpleMotion;
