import { SiOpenmediavault } from "react-icons/si";
import { MdOutlinePermMedia } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";

const UlData = [
    {
        icon:() => <SiOpenmediavault />,
        title: "Group Details",
        tabData: null,
    },
    {
        icon:() => <HiUsers />,
        title: "Group Members",
        tabData: [
            {   
                userId: "0",
                userImage: "#",
                userName: "Siam",
                userRole: "Member"
            },
            {   
                userId: "1",
                userImage: "#",
                userName: "Siam 1",
                userRole: "Admin"
            },
            {   
                userId: "2",
                userImage: "#",
                userName: "Siam 2",
                userRole: "Member"
            },
            {   
                userId: "3",
                userImage: "#",
                userName: "Siam 3",
                userRole: "Viewer"
            },
            {   
                userId: "4",
                userImage: "#",
                userName: "Siam 4",
                userRole: "Member"
            },
            {   
                userId: "5",
                userImage: "#",
                userName: "Siam 5",
                userRole: "Admin"
            },
        ]
    },
    {
        icon:() => <MdOutlinePermMedia />,
        title: "Media",
        tabData: null,
    },
]

export default UlData