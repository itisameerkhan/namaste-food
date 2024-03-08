import "./Shimmer.scss";
import Skeleton from "@mui/material/Skeleton";

const Shimmer = () => {
  return (
    <div className="shimmer">
      <Skeleton variant="rounded" width={280} height={180} animation="wave" style={{borderRadius: "10px"}} />
      <Skeleton variant="rounded" width={250} height={24} animation="wave" style={{borderRadius: "5px"}} />
      <Skeleton variant="rounded" width={200} height={24} animation="wave" style={{borderRadius: "5px"}} />
      <Skeleton variant="rounded" width={150} height={24} animation="wave" style={{borderRadius: "5px"}} />
    </div>
  );
};

export default Shimmer;
