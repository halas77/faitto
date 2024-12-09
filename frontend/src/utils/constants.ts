import {
  FaHeartbeat,
  FaSpa,
  FaCapsules,
  FaTemperatureLow,
  FaClinicMedical,
  FaFirstAid,
  FaBaby,
  FaDumbbell,
} from "react-icons/fa";

import abi from "./abi.json";

export const contractAddress = "0x46Cc5737539a468Ef7B867Fe8e5e1AbE3Dc3393e";

export const contractABI = abi.abi;

export const imgURL = "https://placehold.co/600x400";

export const nav_links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Product",
    href: "/products",
  },
  {
    label: "About us",
    href: "/about",
  },

  {
    label: "Contact us",
    href: "/contact",
  },
];

export const filterTagLabels = [
  {
    label: "Medical Devices",
    icon: FaHeartbeat,
  },
  {
    label: "Skin Care",
    icon: FaSpa,
  },
  {
    label: "Vitamins & Supplements",
    icon: FaCapsules,
  },
  {
    label: "Cold & Flu",
    icon: FaTemperatureLow,
  },
  {
    label: "Allergy & Asthma",
    icon: FaClinicMedical,
  },
  {
    label: "First Aid",
    icon: FaFirstAid,
  },
  {
    label: "Mother & Baby Care",
    icon: FaBaby,
  },
  {
    label: "Fitness & Nutrition",
    icon: FaDumbbell,
  },
];

export const pharmacyProducts = [
  {
    id: "1",
    name: "Advil",
    feature: "Pain relief for headaches, muscle pain, and arthritis",
    price: "$8.99",
  },
  {
    id: "2",
    name: "Tums",
    feature: "Fast-acting antacid for heartburn and indigestion",
    price: "$6.49",
  },

  {
    id: "4",
    name: "Claritin",
    feature: "24-hour allergy relief for sneezing, runny nose, and itchy eyes",
    price: "$14.99",
  },
  {
    id: "5",
    name: "Tylenol",
    feature: "Effective for fever reduction and general pain relief",
    price: "$10.99",
  },
  {
    id: "6",
    name: "Bayer Aspirin",
    feature: "Helps prevent heart attacks and provides pain relief",
    price: "$7.99",
  },
  {
    id: "7",
    name: "Neosporin",
    feature: "Triple antibiotic ointment for minor cuts and burns",
    price: "$4.99",
  },

  {
    id: "9",
    name: "Zyrtec",
    feature: "Fast-acting allergy relief, non-drowsy formula",
    price: "$15.99",
  },
  {
    id: "10",
    name: "Metamucil Fiber Supplement",
    feature: "Helps regulate digestion and improve bowel movements",
    price: "$19.99",
  },
];

export const productImages: { 2: string; 3: string; 4: string } = {
  2: "https://lkfzpfsdbbafjhqeijpk.supabase.co/storage/v1/object/public/images/images/1731344869221-para.jpg",
  3: "https://lkfzpfsdbbafjhqeijpk.supabase.co/storage/v1/object/public/images/images/1731345723536-amoxa.jpg",
  4: "https://lkfzpfsdbbafjhqeijpk.supabase.co/storage/v1/object/public/images/images/1731350751603-lora.jpg",
};

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Mobile devices
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Small mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
