export interface Image {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface SlideImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}