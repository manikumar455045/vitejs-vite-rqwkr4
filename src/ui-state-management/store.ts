import {create} from 'zustand';

type address = {
  street: string,
  suite: string,
  city: string,
  zipCode: string
}

type user = {
  id: string,
  name: string,
  userName: string,
  email: string,
  address: address,
}

type UserStore = {
  users: user[],
  setUsers: (data: user[]) => void,
}

export const useStore = create<UserStore>((set) => ({
  users: [],
  setUsers: (data: user[]) => set(() => ({users: data}))
}))