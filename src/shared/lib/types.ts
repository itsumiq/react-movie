export type UserListOptions = UserOptions[];

export interface UserOptions {
  username: string;
  password: string;
}

export interface MediaOptions {
  id: number;
  name: string;
  rating: {
    kp: number;
  };
  poster: {
    url: string;
    previewUrl: string;
  };
  year: number;
}

export interface ResponseOptions {
  docs: MediaOptions[];
}
