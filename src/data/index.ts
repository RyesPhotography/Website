import { SlideImage, Image, Category } from '../types';

export const heroSlides: SlideImage[] = [ // Add image here under id: in src: add image url between " "

  {
    id: "slide1",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/flower.webp",
    alt: "Wedding couple kissing under a forest canopy",
    title: "Capturing Life's Beautiful Moments"
  },
  {
    id: "slide2",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/HD%20Sunflowers_result.webp",
    alt: "Portrait of a woman with dramatic lighting",
    title: "Portraits That Tell Your Story"
  },
  {
    id: "slide3",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/HD%20Bird_result.webp",
    alt: "Breathtaking landscape of mountains at sunset",
    title: "Nature's Magnificent Beauty"
  }
];

export const categories: Category[] = [
  { id: "all", name: "All" },
  { id: "weddings", name: "Weddings" },
  { id: "portraits", name: "Portraits" },
  { id: "nature", name: "Nature" },
  { id: "events", name: "Events" }
];

export const galleryImages: Image[] = [ // Add image here under id: in src: add image url between " "
  {
    id: "img1",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2501(1)_result.webp",
    alt: "Couple in wedding attire walking through a forest",
    category: "weddings",
    width: 800,
    height: 1200
  },
  {
    id: "img2",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2575(1)_result.webp",
    alt: "Portrait of a woman with flowers in her hair",
    category: "portraits",
    width: 800,
    height: 1067
  },
  {
    id: "img3",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2584(1)_result.webp",
    alt: "Mountain landscape at sunset",
    category: "nature",
    width: 800,
    height: 1200
  },
  {
    id: "img4",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2643(1)_result_result.webp",
    alt: "People dancing at a concert event",
    category: "events",
    width: 800,
    height: 1067
  },
  {
    id: "img5",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2655(1)_result_result.webp",
    alt: "Bride and groom embracing",
    category: "weddings",
    width: 800,
    height: 1067
  },
  {
    id: "img6",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2664(1)_result_result.webp",
    alt: "Dramatic portrait of a man",
    category: "portraits",
    width: 800,
    height: 1200
  },
  {
    id: "img7",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2671(1)_result_result.webp",
    alt: "Waterfall in a lush forest",
    category: "nature",
    width: 800,
    height: 1067
  },
  {
    id: "img8",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2712(1)_result_result.webp",
    alt: "People at a formal gala event",
    category: "events",
    width: 800,
    height: 1200
  },
  {
    id: "img9",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_3736_result.webp",
    alt: "Wedding rings close-up",
    category: "weddings",
    width: 800,
    height: 1200
  },
  {
    id: "img10",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_3785_result.webp",
    alt: "Studio portrait with artistic lighting",
    category: "portraits",
    width: 800,
    height: 1067
  },
  {
    id: "img11",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_3810_result_result.webp",
    alt: "Alpine lake with mountain reflections",
    category: "nature",
    width: 800,
    height: 1200
  },
  {
    id: "img12",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_3872_result_result.webp",
    alt: "Corporate event with speakers",
    category: "events",
    width: 800,
    height: 1067
  }
];

export const aboutInfo = { // Add image here under title: in image: add image url between " "
  name: "Riley Morris",
  title: "Professional Photographer",
  image: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/19c1b6ddb75920febefe6d85d27cf366fe3a3ebc/Riley.webp",
  bio: "Can add information you want here.",
  achievements: [
    "Can put information here or change. Maybe remove?",
  ]
};