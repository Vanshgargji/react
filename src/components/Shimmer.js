import { ShimmerPostList } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div className="shimmer-container px-4 py-4 min-h-screen bg-gray-100">
      <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={3} gap={20} />
    </div>
  );
};

export default Shimmer;
