import { SlideImage, Image, Category } from '../types';

export const heroSlides: SlideImage[] = [
  {
    id: "slide1",
    src: "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Saratoga Springs wedding photographer capturing couple's romantic forest ceremony",
    title: "Capturing Saratoga Springs' Beautiful Moments"
  },
  {
    id: "slide2",
    src: "https://images.pexels.com/photos/4066041/pexels-photo-4066041.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Professional portrait photography with dramatic lighting in Saratoga Springs NY",
    title: "Portraits That Tell Your Saratoga Story"
  },
  {
    id: "slide3",
    src: "https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Saratoga Springs landscape photography capturing Adirondack mountain sunset",
    title: "Saratoga's Natural Beauty Captured"
  }
];

export const categories: Category[] = [
  { id: "all", name: "All" },
  { id: "weddings", name: "Saratoga Weddings" },
  { id: "portraits", name: "Portrait Sessions" },
  { id: "nature", name: "Adirondack Nature" },
  { id: "events", name: "Local Events" }
];

export const galleryImages: Image[] = [
  {
    id: "img1",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2501(1)_result.webp",
    alt: "Saratoga Springs wedding couple walking through Congress Park forest ceremony",
    category: "weddings",
    width: 800,
    height: 1200
  },
  {
    id: "img2",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2575(1)_result.webp",
    alt: "Saratoga Springs portrait photographer - woman with flowers headshot session",
    category: "portraits",
    width: 800,
    height: 1067
  },
  {
    id: "img3",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2584(1)_result.webp",
    alt: "Adirondack mountain landscape photography near Saratoga Springs NY",
    category: "nature",
    width: 800,
    height: 1200
  },
  {
    id: "img4",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2643(1)_result_result.webp",
    alt: "Saratoga Springs event photographer capturing SPAC concert crowd dancing",
    category: "events",
    width: 800,
    height: 1067
  },
  {
    id: "img5",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2655(1)_result_result.webp",
    alt: "Saratoga Race Course wedding photographer - bride and groom intimate embrace",
    category: "weddings",
    width: 800,
    height: 1067
  },
  {
    id: "img6",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2664(1)_result_result.webp",
    alt: "Professional headshot photographer Saratoga Springs - dramatic male portrait",
    category: "portraits",
    width: 800,
    height: 1200
  },
  {
    id: "img7",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2671(1)_result_result.webp",
    alt: "Saratoga Spa State Park waterfall nature photography session",
    category: "nature",
    width: 800,
    height: 1067
  },
  {
    id: "img8",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_2712(1)_result_result.webp",
    alt: "Saratoga Springs corporate event photographer at Canfield Casino gala",
    category: "events",
    width: 800,
    height: 1200
  },
  {
    id: "img9",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_3736_result.webp",
    alt: "Saratoga Springs wedding ring photography macro detail shots",
    category: "weddings",
    width: 800,
    height: 1200
  },
  {
    id: "img10",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_3785_result.webp",
    alt: "Studio portrait photographer Saratoga Springs NY - artistic lighting session",
    category: "portraits",
    width: 800,
    height: 1067
  },
  {
    id: "img11",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_3810_result_result.webp",
    alt: "Lake George alpine photography near Saratoga Springs with mountain reflections",
    category: "nature",
    width: 800,
    height: 1200
  },
  {
    id: "img12",
    src: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/refs/heads/master/IMG_3872_result_result.webp",
    alt: "Saratoga Springs business event photographer documenting corporate speakers",
    category: "events",
    width: 800,
    height: 1067
  }
];

export const aboutInfo = {
  name: "Riley Morris",
  title: "Saratoga Springs Professional Photographer",
  image: "https://raw.githubusercontent.com/RyesPhotography/RyesPhotography-Images/19c1b6ddb75920febefe6d85d27cf366fe3a3ebc/Riley.webp",
  bio: "Professional photographer serving Saratoga Springs, NY and the greater Capital Region. Specializing in weddings, portraits, and events throughout Saratoga County.",
  location: "Saratoga Springs, NY",
  serviceArea: "Saratoga Springs, Ballston Spa, Clifton Park, Albany, Troy, Schenectady, Greenfield Center, West Milton, Glens Falls, South Glens Falls, Fort Edward, Hudson Falls, Greenwich, Stillwater",
  specialties: [
    "Saratoga Springs Wedding Photography",
    "Congress Park Portrait Sessions", 
    "Saratoga Race Course Events",
    "SPAC Concert Photography",
    "Adirondack Nature Photography"
  ],
  achievements: [
    "2+ years serving Saratoga Springs couples and families",
    "Featured local photographer for Saratoga Springs events",
    "Specialized in Capitol Region wedding venues"
  ]
};

// SEO-optimized business schema data
export const businessInfo = {
  name: "Ryes Photography",
  description: "Professional photography services in Saratoga Springs, NY specializing in weddings, portraits, and events",
  address: {
    locality: "Saratoga Springs",
    region: "NY",
    postalCode: "12866",
    country: "US"
  },
  serviceArea: [
    "Saratoga Springs, NY",
    "Saratoga County, NY", 
    "Capital Region, NY",
    "Ballston Spa, NY",
    "Clifton Park, NY",
    "Greenfield Center, NY",
    "West Milton, NY", 
    "Glens Falls, NY",
    "South Glens Falls, NY",
    "Fort Edward, NY",
    "Hudson Falls, NY",
    "Greenwich, NY",
    "Stillwater, NY",
    "Albany, NY",
    "Troy, NY",
    "Schenectady, NY"
  ],
  services: [
    "Wedding Photography Saratoga Springs",
    "Portrait Photography Saratoga Springs", 
    "Event Photography Saratoga Springs",
    "Engagement Photography Saratoga Springs",
    "Family Photography Saratoga Springs"
  ]
};