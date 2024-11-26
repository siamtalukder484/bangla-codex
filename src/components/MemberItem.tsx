import { RiDeleteBin5Fill } from "react-icons/ri";
import { MemberItemTypes } from "../types/memberItemtypes";
import { GroupMember } from "../types/modaltypes";


const MemberItem: React.FC<MemberItemTypes> = ({ item, handleRoleChange, handleDelete }) => {
  return (
    <div className="w-full border border-gray-500 rounded-lg py-2 px-3 flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="size-9 rounded-full overflow-hidden [&>img]:w-full [&>img]:h-full [&>img]:object-cover">
          <img src="https://manshedauctions.com.au/wp-content/uploads/2023/12/testimonial-1.png" alt="img" />
        </div>
        <h4>{item.userName}</h4>
      </div>
      <div className="flex items-center gap-x-20">
        <div>
          <select
            className="outline-none"
            value={item.userRole}
            onChange={(e) =>
              handleRoleChange(item.userId, e.target.value as GroupMember["userRole"])
            }
          >
            <option value="Admin">Admin</option>
            <option value="Member">Member</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>
        <div>
          <RiDeleteBin5Fill className="cursor-pointer" onClick={() => handleDelete(item.userId)} />
        </div>
      </div>
    </div>
  );
};

export default MemberItem;
