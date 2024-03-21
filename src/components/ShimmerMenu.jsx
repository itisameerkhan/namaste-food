import "./ShimmerMenu.scss";
import { Skeleton } from "@mui/material";

const ShimmerMenu = () => {
  const index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="shimmer-menu">
      <div className="shimmer-menu-top">
        <div className="shimmer-menu-one">
          <div className="shimmer-menu-one-left">
            <Skeleton
              variant="rounded"
              width={400}
              height={35}
              animation="wave"
            />
            <Skeleton
              variant="rounded"
              width={200}
              height={20}
              animation="wave"
            />
            <Skeleton
              variant="rounded"
              width={100}
              height={20}
              animation="wave"
            />
          </div>
          <div className="shimmer-menu-one-right">
            <Skeleton
              variant="rounded"
              width={100}
              height={100}
              animation="wave"
            />
          </div>
        </div>
        <Skeleton
          variant="rounded"
          width={500}
          height={25}
          animation="wave"
          className="shimmer-1"
        />
      </div>
      <div className="shimmer-menu-two">
        <Skeleton variant="rounded" width={300} height={35} animation="wave" />
        {index.map((index) => (
          <div className="shimmer-menu-content" key={index}>
            <div className="shimmer-menu-content-left">
              <Skeleton
                variant="rounded"
                width={300}
                height={25}
                animation="wave"
              />
              <Skeleton
                variant="rounded"
                width={100}
                height={25}
                animation="wave"
              />
              <Skeleton
                variant="rounded"
                width={500}
                height={25}
                animation="wave"
              />
            </div>
            <div className="shimmer-menu-content-right">
              <Skeleton
                variant="rounded"
                width={120}
                height={100}
                animation="wave"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;
