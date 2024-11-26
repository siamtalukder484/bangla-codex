import { GroupMember } from "./modaltypes";

export interface MemberItemTypes {
    item: GroupMember;
    handleRoleChange: (userId: number, newRole: GroupMember["userRole"]) => void;
    handleDelete: (userId: number) => void;
  }