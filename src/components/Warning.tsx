import { PiWarningOctagon } from "react-icons/pi";
import { WarningTypes } from "../types/warningtypes";


const Warning: React.FC<WarningTypes> = ({ text }) => {
  return (
    <h3 className="bg-red-400 rounded-lg py-2 px-6 text-white capitalize text-lg mt-7 font-medium flex items-center gap-x-1">
      <PiWarningOctagon />
      <span>{text}</span>
    </h3>
  );
};

export default Warning;