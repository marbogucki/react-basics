export type UserItemProps = {
  user: User;
};

export type UserApi = {
  id: number;
  username: string;
  phone: string;
} & User;

export type User = {
  name: string;
  email: string;
  address: UserAddress;
};

type UserAddress = {
  zipcode: string;
  city: string;
  street: string;
};
