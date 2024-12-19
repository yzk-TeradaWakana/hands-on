/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    useMutation,
    useQuery,
    useQueryClient,
  } from '@tanstack/react-query';
import { User } from '../models/OrderEntryTypes';
import { fakeData } from '../constants/OrderEntryDef';

// CREATE hook (post new user to api)
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User): Promise<void> => {
      // send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // fake api call
    },
    // client side optimistic update
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(
        ['users'],
        (prevUsers: User[] | undefined) =>
          prevUsers
            ? [
                ...prevUsers,
                {
                  ...newUserInfo,
                  id: (Math.random() + 1).toString(36).substring(7),
                },
              ]
            : []
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), // refetch users after mutation, disabled for demo
  });
}

// READ hook (get users from api)
export const useGetUsers = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async (): Promise<User[]> => {
      // send api request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // fake api call
      return Promise.resolve(fakeData);
    },
    refetchOnWindowFocus: false,
  });
}

// UPDATE hook (put user in api)
export const useUpdateUsers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (users: User[]) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUsers: User[]) => {
      queryClient.setQueryData(['users'], (prevUsers: any) =>
        prevUsers?.map((user: User) => {
          const newUser = newUsers.find((u) => u.id === user.id);
          return newUser ? newUser : user;
        }),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

// DELETE hook (delete user in api)
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId: string): Promise<void> => {
      // send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // fake api call
      return Promise.resolve();
    },
    // client side optimistic update
    onMutate: (userId: string) => {
      queryClient.setQueryData(['users'], (prevUsers: User[] | undefined) =>
        prevUsers?.filter((user) => user.id !== userId)
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), // refetch users after mutation, disabled for demo
  });
}

export const validateRequired = (value: string) => !!value.length;
export const validateEmail = (email: string) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

export const validateUser = (user: User) => {
  return {
    firstName: !validateRequired(user.firstName)
      ? 'First Name is Required'
      : '',
    lastName: !validateRequired(user.lastName) ? 'Last Name is Required' : '',
    email: !validateEmail(user.email) ? 'Incorrect Email Format' : '',
  };
}

