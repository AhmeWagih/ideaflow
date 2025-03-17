export type TSignUp = {
  fullName: string;
  email: string;
  password: string;
};
export type TSignIn = {
  email: string;
  password: string;
};

export type TAiModel = {
  name: string;
  value: number;
  iconPath: string;
};

export type TSave_Mindmap = {
  title: string;
  contentjson: string;
  isPublic: boolean;
};

export type TDiagram = {
  title: string;
  thumbnail?: string;
  updatedAt: string;
  isPublic: boolean;
  diagramID: string;
  fullName: string;
  isInFavourite?: boolean;
  description?: string;
  contnetJson: string;
};
