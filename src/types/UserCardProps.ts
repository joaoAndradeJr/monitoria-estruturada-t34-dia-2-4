// type companyTypes = '@betrybe' | 'Trybe' | '@betrybe ' | null;

export type UserCardProps = {
  name: string,
  login: string,
  avatar_url: string,
  homepage: string,
  followers: number,
  following: number,
  company: string | null,
};
