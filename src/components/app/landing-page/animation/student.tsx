import animationData from "../../../../../public/lottie-files/student.json";
import Lottie from "lottie-react";

const StudentAnimation = () => {
  return (
    <div className="flex justify-center items-center">
      <Lottie
        animationData={animationData} 
        loop={true} 
        autoplay={true}
        className="h-44 w-44 md:h-80 md:w-80"
      />
    </div>
  );
};

export default StudentAnimation;