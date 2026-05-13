

import Hom from "../../assets/Homchang.png";
import Lotus from "../../assets/Lotusedu.png";
import bot_logs from "../../assets/bot_logs.png";
import whatweather from "../../assets/whatweather.png";
import curalink from "../../assets/curalink.png";
import isDR from "../../assets/isDR.png";
import MLcode3 from "../../assets/ML_code3.png";
import erp from "../../assets/erp.png";
import kc from "../../assets/kc.png";

export const projectCategories = [
  "All",
  "Web Designs",
  "Tools",
  "Other Projects",
];

export const projects = [
  {
    id: "Binance API bot",
    title: "Binance API bot",
    category: "Tools",
    image: bot_logs,
    short:
      "Make trades through the Binance API with though the terminal interface",
    description:
      "A command-line trading bot that interacts with the Binance API to execute trades based on user-defined strategies.",
    technologies: [
      "Python",
      "Binance API",
      "Binance Futures Testnet",

    ],
    features: [
      "OCO orders",
      "Stop-limit orders",
      "Trade response parsing",
      "Trade execution feedback",
    ],
    status: "Completed",
    duration: "3 days",
    links: {
      live: null,
      github:
        "https://github.com/Sarrtt303/Sagar-binance-bot",
    },
  },

  {
    id: "whatweather",
    title: "WhatWeather",
    category: "Web Designs",
    image: whatweather,
    short:
      "Modern weather app with forecasts and geolocation",
    description:
      "A real-time weather application with clean UI, forecasts, and location detection.",
    technologies: [
      "React",
      "OpenWeather API",
      "Geolocation",
      "Responsive Design",
    ],
    features: [
      "Real-time weather",
      "7-day forecast",
      "Location detection",
      "Temperature conversion",
    ],
    status: "Completed",
    duration: "3 weeks",
    links: {
      live: null,
      github:
        "https://github.com/Sarrtt303/whatweather?tab=readme-ov-file",
    },
  },

  {
    id: "homchang",
    title: "Homchang",
    category: "Web Designs",
    image: Hom,
    short:
      "News platform with CMS and admin dashboard",
    description:
      "A full-featured news platform with analytics, article management, and SEO tools.",
    technologies: [
      "React",
      "PHP",
      "MySQL",
      "Firebase",
    ],
    features: [
      "CMS dashboard",
      "SEO optimization",
      "Authentication",
      "Analytics",
    ],
    status: "Live",
    duration: "1 months",
    links: {
      live: "https://homchang.in/",
      github: null,
    },
  },

  {
    id: "lotus-education",
    title: "Lotus Education",
    category: "Web Designs",
    image: Lotus,
    short:
      "LMS platform with payment integration",
    description:
      "A complete e-learning ecosystem with payments, LMS, and course management.",
    technologies: [
      "PHP",
      "Payment Gateway",
      "LMS",
      "Authentication",
    ],
    features: [
      "Course enrollment",
      "Payment integration",
      "Progress tracking",
      "Certificates",
    ],
    status: "Delivered",
    duration: "2 months",
    links: {
      live: "https://lotuseducation.tech/",
      github: null,
    },
  },

  {
    id: "kuppai",
    title: "Kuppai Recyclers",
    category: "Web Designs",
    image: erp,
    short:
      "ERP platform for inventory and invoice management",
    description:
      "A full ERP system with relational workflows for inventory, labour, invoices, and analytics.",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "jQuery",
    ],
    features: [
      "Inventory flow management",
      "Dynamic calculations",
      "Analytics dashboard",
      "Relational database structure",
    ],
    status: "under development",
    duration: "4 months",
    links: {
      live: null,
      github: null,
    },
  },

  {
    id: "cura-link",
    title: "Cura Link",
    category: "Web Designs",
    image: curalink,
    short:
      "Medical Webiste for healthcare advice through published articles",
    description:
      "A medical website providing healthcare advice through published articles. Users can browse articles, search for specific health topics, and access reliable medical information. Users can also input their symptoms and receive relevant articles and advice based on their health concerns.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Typescript",
      "Python",
      "FastAPI",
    ],
    features: [
      "Article browsing",
      "Symptom checker",
      "Search functionality",
      "Clinical Trials integration",
      "Symptom-based Trials, Experts, and publication recommendations",
    ],
    status: "In Development",
    duration: "1 month",
    links: {
      live: null,
      github:
        "https://github.com/Sarrtt303/curalink",
    },
  },

  {
    id: "isDR",
    title: "isDR",
    category: "Other Projects",
    image: isDR,
    short:
      "upload retinal images and get diabetic retinopathy predictions",
    description:
      "A page that allows users to upload retinal images and receive predictions for diabetic retinopathy classification using a custom-trained Resnet152 + VGG19 ensemble model.",
    technologies: [
      "Python",
      "TensorFlow",
      "scikit-learn",
      "datasets",
      "HTML/CSS",
      "FastAPI",
    ],
    features: [
      "Image upload and preprocessing",
      "Data augmentation",
      "Ensemble model predictions",
      "Cross-validation results",
    ],
    status: "Under Development",
    duration: "3 weeks",
    links: {
      live: null,
      github:
        "https://github.com/Sarrtt303/isDR.git",
    },
  },

  {
    id: "dr-model",
    title: "DR_MODEL - VGG19 Diabetic Retinopathy Classifier",
    category: "Other Projects",
    image: MLcode3,
    short:
      "VGG19-based medical imaging classifier",
    description:
      "A diabetic retinopathy classification model utilizing VGG19 architecture.",
    technologies: [
      "Python",
      "TensorFlow",
      "VGG19",
      "Computer Vision",
    ],
    features: [
      "Feature extraction",
      "Batch processing",
      "Cross-validation",
      "Clinical accuracy validation",
    ],
    status: "Testing",
    duration: "1 month",
    links: {
      live: null,
      github:
        "https://colab.research.google.com/drive/1JrKTgU_sYtk9hYHnnRuT5jcbCbZMqi3k?authuser=1",
    },
  },
  {
    id: "kc",
    title: "KC-Resorts",
    category: "Web Designs",
    image: kc,
    short:
      "HMS for a resort with booking and payment features",
    description:
      "A hospitality management system for a resort with booking, room management, inventory tracking, invoicing and payment features. Used by different memebers of the staff to manage room options, make reservations, allocate rooms based on availability and securely process payments online. ",
    technologies: [
      "PHP",
      "MySQL",
      "HTML/CSS",
      "JavaScript",
      "ApexCharts"
    ],
    features: [
      "Booking -> Invoice -> Tax flow",
      "Role based access control",
      "KPI dashboard",
      "Room management",
      "Tax filing",
      "Inventory management"
    ],
    status: "Delivered",
    duration: "4 months",
    links: {
      live: null,
      github: null,
    },
  }
];