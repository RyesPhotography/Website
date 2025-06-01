import { SlideImage, Image, Category } from '../types';

export const heroSlides: SlideImage[] = [
  {
    id: "slide1",
    src: "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Wedding couple kissing under a forest canopy",
    title: "Capturing Life's Beautiful Moments"
  },
  {
    id: "slide2",
    src: "https://images.pexels.com/photos/4066041/pexels-photo-4066041.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Portrait of a woman with dramatic lighting",
    title: "Portraits That Tell Your Story"
  },
  {
    id: "slide3",
    src: "https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=1800",
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

export const galleryImages: Image[] = [
  {
    id: "img1",
    src: "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Couple in wedding attire walking through a forest",
    category: "weddings",
    width: 800,
    height: 1200
  },
  {
    id: "img2",
    src: "https://images.pexels.com/photos/936554/pexels-photo-936554.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Portrait of a woman with flowers in her hair",
    category: "portraits",
    width: 800,
    height: 1067
  },
  {
    id: "img3",
    src: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Mountain landscape at sunset",
    category: "nature",
    width: 800,
    height: 1200
  },
  {
    id: "img4",
    src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "People dancing at a concert event",
    category: "events",
    width: 800,
    height: 1067
  },
  {
    id: "img5",
    src: "https://images.pexels.com/photos/1244066/pexels-photo-1244066.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Bride and groom embracing",
    category: "weddings",
    width: 800,
    height: 1067
  },
  {
    id: "img6",
    src: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Dramatic portrait of a man",
    category: "portraits",
    width: 800,
    height: 1200
  },
  {
    id: "img7",
    src: "https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Waterfall in a lush forest",
    category: "nature",
    width: 800,
    height: 1067
  },
  {
    id: "img8",
    src: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "People at a formal gala event",
    category: "events",
    width: 800,
    height: 1200
  },
  {
    id: "img9",
    src: "https://images.pexels.com/photos/1855991/pexels-photo-1855991.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Wedding rings close-up",
    category: "weddings",
    width: 800,
    height: 1200
  },
  {
    id: "img10",
    src: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Studio portrait with artistic lighting",
    category: "portraits",
    width: 800,
    height: 1067
  },
  {
    id: "img11",
    src: "https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Alpine lake with mountain reflections",
    category: "nature",
    width: 800,
    height: 1200
  },
  {
    id: "img12",
    src: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Corporate event with speakers",
    category: "events",
    width: 800,
    height: 1067
  }
];

export const aboutInfo = {
  name: "Riley Morris",
  title: "Professional Photographer",
  image: "https://www.dropbox.com/scl/fi/2bnusg3sywiri8x5f4b4i/Riley.webp?rlkey=3tshfsxjhxy3qijy45904gc93&dl=1",
  bio: "Can add information you want here.",
  achievements: [
    "Can put information here or change. Maybe remove?",
  ]
};