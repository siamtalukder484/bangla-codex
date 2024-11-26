import { IoClose } from "react-icons/io5";
import { SiOpenmediavault } from "react-icons/si";
import { MdOutlinePermMedia } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";



const Modal = () => {

const [activeUl, setActiveUl] = useState(0)
const [groupMembers, setGroupMembers] = useState([
    {
      userId: "0",
      userImage: "#",
      userName: "Siam",
      userRole: "Member",
    },
    {
      userId: "1",
      userImage: "#",
      userName: "Siam 1",
      userRole: "Admin",
    },
    {
      userId: "2",
      userImage: "#",
      userName: "Siam 2",
      userRole: "Member",
    },
    {
      userId: "3",
      userImage: "#",
      userName: "Siam 3",
      userRole: "Viewer",
    },
    {
      userId: "4",
      userImage: "#",
      userName: "Siam 4",
      userRole: "Member",
    },
    {
      userId: "5",
      userImage: "#",
      userName: "Siam 5",
      userRole: "Admin",
    },
  ]);

const ulData:any = [
    {
        icon: <SiOpenmediavault />,
        title: "Group Details",
        tabData: null,
    },
    {
        icon: <HiUsers />,
        title: "Group Members",
        tabData: groupMembers
    },
    {
        icon: <MdOutlinePermMedia />,
        title: "Media",
        tabData: null,
    },
]

const handleRoleChange = (userId, newRole) => {
    setGroupMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.userId === userId ? { ...member, userRole: newRole } : member
      )
    );
  };

const handleDelete = (userId:any) => {
    setGroupMembers((prevMembers) =>
      prevMembers.filter((member) => member.userId !== userId)
    );
  };

  return (
    <div className="bg-black bg-opacity-50 absolute left-0 top-0 h-screen w-full">
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-[750px] h-[75vh] bg-white rounded-2xl p-10">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl capitalize font-semibold">Group Info</h3>
                    <div className="[&>svg]:text-2xl cursor-pointer ">
                        <IoClose />
                    </div>
                </div>
                <div className="m-[50px_70px_0_70px] ">
                    <div className="flex justify-center">
                        <ul className="inline-flex justify-center pb-2 border-b-[2px] border-gray-500 mx-auto">
                            {ulData.map((item:any,index:number)=>(
                                <li onClick={()=>setActiveUl(index)} key={index} className={`px-3 flex items-center gap-x-1 cursor-pointer relative ${activeUl == index ? `[&>svg]:text-blue-600 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-blue-600 after:bottom-[-10px] after:left-0` : `[&>svg]:text-black`}`}>
                                    {item.icon}
                                    <span className={`text-base font-semibold ${activeUl == index ? `text-blue-600` : `text-black` }`}>{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {activeUl == 1 ?
                        <>
                            <div className="relative my-5">
                                <input className="border border-gray-500 w-full rounded-lg  px-10 py-2 outline-none" placeholder="Add Members"/>
                                <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-3" />
                            </div>
                            <div>
                                <h5>All Members</h5>
                                {groupMembers.length > 0 ?(
                                    <div className="mt-4 flex flex-col gap-y-2 overflow-y-scroll h-[350px] w-full items-start">
                                        {groupMembers.map((item,index)=>(
                                            <div key={index} className="w-full border border-gray-500 rounded-lg py-2 px-3 flex items-center justify-between">
                                                <div className="flex items-center gap-x-3">
                                                    <div className="size-9 bg-red-500 rounded-full overflow-hidden [&>img]:w-full [&>img]:h-full [&>img]:object-cover">
                                                        <img src={item.userImage} alt="img" />
                                                    </div>
                                                    <h4>{item.userName}</h4>
                                                </div>
                                                <div className="flex items-center gap-x-20">
                                                    <div>
                                                        <select 
                                                            className=" outline-none" 
                                                            value={item.userRole}
                                                            onChange={(e) =>
                                                                handleRoleChange(item.userId, e.target.value)
                                                            }
                                                        >
                                                            <option>Admin</option>
                                                            <option>Member</option>
                                                            <option>Viewer</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <RiDeleteBin5Fill className="cursor-pointer" onClick={() => handleDelete(item.userId)} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ):(
                                    <h3 className="text-center mt-8 text-2xl font-semibold">Member Not Available</h3>
                                )}
                            </div>
                        </>
                        :

                        <h3 className="text-center mt-8 text-2xl font-se">No Data Found</h3>
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default Modal