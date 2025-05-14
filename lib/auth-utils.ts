import { User } from "@/app/types";


export const mockUsers: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@rakyatmemilih.com",
    role: "admin",
    profilePicture: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "2",
    name: "Voter User",
    email: "voter@rakyatmemilih.com",
    role: "voter",
    voterId: "VOT123456",
    profilePicture: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Helper function to mock authentication
export const mockLogin = (email: string, password: string): User | null => {
  // In a real app, this would verify credentials against a database
  // For demo purposes, any password will work for the mock users
  const user = mockUsers.find(user => user.email === email);
  return user || null;
};


export const mockRegister = (name: string, email: string, voterId: string): User => {

  const newUser: User = {
    id: Math.random().toString(36).substring(2, 9),
    name,
    email,
    role: 'voter',
    voterId
  };
  
  return newUser;
};