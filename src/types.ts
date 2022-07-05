type Driver = {
  number: string;
  name: string;
  designation: string;
  position: number;
  team: Team;
};

type Team = {
  uid: string;
  name: string;
};

export type { Driver, Team };
