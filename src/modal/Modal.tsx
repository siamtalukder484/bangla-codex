import { IoClose } from "react-icons/io5";
import { SiOpenmediavault } from "react-icons/si";
import { MdOutlinePermMedia } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { ModalProps, UlDataItem, GroupMember } from "../types/modaltypes";
import MemberItem from "../components/MemberItem";
import Warning from "../components/Warning";

const Modal: React.FC<ModalProps> = ({ modalOpen, onClose }) => {
  const [activeUl, setActiveUl] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [groupMembers, setGroupMembers] = useState<GroupMember[]>([
    {
      userId: 0,
      userImage: "#",
      userName: "Siam",
      userRole: "Member",
    },
    {
      userId: 1,
      userImage: "#",
      userName: "Hemel",
      userRole: "Admin",
    },
    {
      userId: 2,
      userImage: "#",
      userName: "Toron",
      userRole: "Member",
    },
    {
      userId: 3,
      userImage: "#",
      userName: "Rafi",
      userRole: "Viewer",
    },
    {
      userId: 4,
      userImage: "#",
      userName: "Sifat",
      userRole: "Member",
    },
    {
      userId: 5,
      userImage: "#",
      userName: "Rony",
      userRole: "Admin",
    },
    {
      userId: 6,
      userImage: "#",
      userName: "Sakil",
      userRole: "Member",
    },
    {
      userId: 7,
      userImage: "#",
      userName: "Tamim",
      userRole: "Viewer",
    },
  ]);
  const ulData: UlDataItem[] = [
    {
      icon: <SiOpenmediavault />,
      title: "Group Details",
      tabData: null,
    },
    {
      icon: <HiUsers />,
      title: "Group Members",
      tabData: groupMembers,
    },
    {
      icon: <MdOutlinePermMedia />,
      title: "Media",
      tabData: null,
    },
  ];

  if (!modalOpen) return null;
  
//   ======== Role Change Functionality ===========
  const handleRoleChange = (
    userId: number,
    newRole: GroupMember["userRole"]
  ) => {
    setGroupMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.userId === userId ? { ...member, userRole: newRole } : member
      )
    );
  };

//   ======== Delete Member Functionality ===========
  const handleDelete = (userId: number) => {
    setGroupMembers((prevMembers) =>
      prevMembers.filter((member) => member.userId !== userId)
    );
  };

  //   ======== Search Member Functionality ===========
  const filteredMembers = groupMembers.filter((member) =>
    member.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`bg-black bg-opacity-50 fixed left-0 top-0 h-screen w-full transition-all duration-500 z-50`}
      onClick={onClose}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div
          className="w-[750px] h-[75vh] bg-white rounded-2xl p-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-2xl capitalize font-semibold">Group Info</h3>
            <div className="[&>svg]:text-2xl cursor-pointer " onClick={onClose}>
              <IoClose />
            </div>
          </div>
          <div className={`m-[50px_70px_0_70px]`}>
            <div className="flex justify-center">
              <ul className="inline-flex justify-center pb-2 border-b-[2px] border-gray-500 mx-auto">
                {ulData.map((item: any, index: number) => (
                  <li
                    onClick={() => setActiveUl(index)}
                    key={index}
                    className={`px-3 flex items-center gap-x-1 cursor-pointer relative ${
                      activeUl == index
                        ? `[&>svg]:text-blue-600 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-blue-600 after:bottom-[-10px] after:left-0`
                        : `[&>svg]:text-black`
                    }`}
                  >
                    {item.icon}
                    <span
                      className={`text-base font-semibold ${
                        activeUl == index ? `text-blue-600` : `text-black`
                      }`}
                    >
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {activeUl == 1 ? (
              <>
                <div className="relative my-5">
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-500 w-full rounded-lg  px-10 py-2 outline-none"
                    placeholder="Add Members"
                  />
                  <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-3" />
                </div>
                <div>
                  <h5>All Members</h5>
                  {filteredMembers.length > 0 ? (
                    <div className="mt-4 flex flex-col gap-y-2 overflow-y-scroll h-[350px] w-full items-start scrollbar-hidden">
                      {filteredMembers.map((item) => (
                        <MemberItem
                          key={item.userId}
                          item={item}
                          handleRoleChange={handleRoleChange}
                          handleDelete={handleDelete}
                        />
                      ))}
                    </div>
                  ) : (
                    <Warning text="Member not available"/>
                  )}
                </div>
              </>
            ) : (
                <Warning text="No Data Found"/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
