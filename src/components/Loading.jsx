// import Skeleton from "@yisheng90/react-loading";
import { ShimmerPostList } from "react-shimmer-effects";
const Loading = () => {
  return (
    <div>
      <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />;
      {/* <Skeleton width={720} row={10} />

      <Skeleton width={1080} row={10} />
      <Skeleton width="720px" row={10} />
      <Skeleton width="20rem" /> */}
    </div>
  );
};

export default Loading;
