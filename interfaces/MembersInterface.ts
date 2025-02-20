export interface MemberInterface {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  image?: string;
}

export interface MembersInterface {
  members: MemberInterface[];
} 