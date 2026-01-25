export interface Publication {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: string;
  award?: string;
  doi?: string;
}

export interface Experience {
  id: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  details: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  date: string;
  grade?: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  icon: 'code' | 'cpu' | 'eye' | 'activity';
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}