// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'voter';
  profilePicture?: string;
  voterId?: string;
}


export interface AuthForm {
  email: string;
  password: string;
}

export interface RegisterForm extends AuthForm {
  name: string;
  voterId: string;
}


export interface Candidate {
  id: string;
  name: string;
  party: string;
  position: string;
  image: string;
  description: string;
  voteCount: number;
}


export interface Election {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: 'upcoming' | 'active' | 'completed';
  candidates: Candidate[];
}


export interface Vote {
  id: string;
  userId: string;
  electionId: string;
  candidateId: string;
  timestamp: Date;
  verified: boolean;
}