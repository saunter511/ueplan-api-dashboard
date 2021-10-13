import { FC } from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading: FC = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <HashLoader color={"#000"} loading size={50} />
    </div>
  );
};

export default Loading;
