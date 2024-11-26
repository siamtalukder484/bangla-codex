import { ReactNode  } from "react";
export interface GroupMember {
    userId: number;
    userImage: string;
    userName: string;
    userRole: "Admin" | "Member" | "Viewer";
  }
  
  export interface UlDataItem {
    icon: ReactNode;
    title: string;
    tabData: GroupMember[] | null;
  }
  export interface ModalProps {
    modalOpen: boolean;
    onClose: () => void;
  }