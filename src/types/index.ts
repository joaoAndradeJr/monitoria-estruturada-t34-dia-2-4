type companyTypes = '@betrybe ' | 'Trybe' | '@betrybe';

export type CardProps = {
  personInfo: {
    name: string,
    login: string,
    avatar_url: string,
    homepage: string,
    followers: number,
    following: number,
    company: companyTypes | null,
  };
};

export type PersonType = {
  name: string,
  login: string,
  avatar_url: string,
  homepage: string,
  followers: number,
  following: number,
  company: companyTypes | null,
};
