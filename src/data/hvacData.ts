export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  ctaText: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GuideItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export const BUSINESS_INFO = {
  name: 'JAY MAA LAXMI REFRIGERATION',
  category: 'Air Conditioning Repair Service',
  primaryServices: 'AC Repair / AC Service / On-Site Service',
  address: 'Nayak Complex, near Bharat Petrol Pump, Uttarasasan, Bhubaneswar, Odisha 751002',
  phone: '072051 17681',
  phoneRaw: '07205117681',
  phoneTel: 'tel:07205117681',
  rating: 5.0,
  reviewsCount: 12,
  hours: 'Open · Closes 9 PM',
  options: [
    'Repair services',
    'On-site services',
    'Online estimates'
  ],
  location: {
    area: 'Uttarasasan',
    city: 'Bhubaneswar',
    state: 'Odisha',
    pin: '751002',
    landmark: 'Near Bharat Petrol Pump'
  },
  mapEmbedUrl: 'https://www.google.com/maps?q=Nayak%20Complex%2C%20near%20Bharat%20Petrol%20Pump%2C%20Uttarasasan%2C%20Bhubaneswar%2C%20Odisha%20751002&output=embed'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ac-repair',
    number: '01',
    title: 'AC REPAIR',
    tagline: 'Cooling Restoration & Technical Troubleshooting',
    description: 'Diagnosis and troubleshooting for air conditioning units facing cooling drops, unusual vibration, electrical issues, or component breakdown.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=700&q=80',
    ctaText: 'REQUEST SERVICE →'
  },
  {
    id: 'ac-service',
    number: '02',
    title: 'AC SERVICE',
    tagline: 'Deep Coil & Blower Maintenance',
    description: 'Thorough cleaning of indoor cooling coils, blower fans, outdoor heat exchanger fins, and condensate trays to restore clean, efficient air circulation.',
    image: 'https://images.unsplash.com/photo-1590756254933-2873d72a83b6?auto=format&fit=crop&w=700&q=80',
    ctaText: 'REQUEST SERVICE →'
  },
  {
    id: 'on-site-service',
    number: '03',
    title: 'ON-SITE SERVICE',
    tagline: 'Direct Doorstep Technician Attendance',
    description: 'Direct on-site inspection and servicing at your home, office, or commercial location in Uttarasasan and across Bhubaneswar.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80',
    ctaText: 'REQUEST SERVICE →'
  },
  {
    id: 'online-estimate',
    number: '04',
    title: 'ONLINE ESTIMATE',
    tagline: 'Direct Consultation & Transparent Pricing',
    description: 'Submit your AC requirement online or call directly to get an initial estimate before scheduling technician attendance.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=700&q=80',
    ctaText: 'GET ESTIMATE →'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'CONTACT',
    description: 'Tell us what you need by phone or through our service request form.'
  },
  {
    number: '02',
    title: 'UNDERSTAND',
    description: 'Review the service requirement and system symptoms before dispatch.'
  },
  {
    number: '03',
    title: 'ON-SITE SERVICE',
    description: 'Arrange applicable service at your home or facility in Bhubaneswar.'
  },
  {
    number: '04',
    title: 'CHECK',
    description: 'Review the completed cooling performance and operational check.'
  }
];

export const TEAM_MEMBERS = [
  {
    role: 'AC SERVICE TECHNICIAN',
    description: 'Hands-on split and window air-conditioning specialist carrying out thorough diagnostic inspections and on-site servicing.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80'
  },
  {
    role: 'FIELD SERVICE',
    description: 'Mobile on-site service professional equipped with diagnostic gauges, specialized tools, and coil cleaning equipment.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80'
  },
  {
    role: 'AC REPAIR',
    description: 'Experienced repair technician focusing on compressor troubleshooting, electrical components, and airflow restoration.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80'
  },
  {
    role: 'ON-SITE SUPPORT',
    description: 'Local technician handling on-site customer consultations, scheduling support, and post-service operational checks.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Subhra Jyoti',
    rating: 5.0,
    text: 'Excellent servicing,good behaviour, reasonable pricing Go for it.',
    featured: true
  },
  {
    id: 'rev-2',
    author: 'Priyadarshani Padhy',
    rating: 5.0,
    text: 'Good price Best service',
    featured: false
  },
  {
    id: 'rev-3',
    author: 'Biswaranjan Shreenayak',
    rating: 5.0,
    text: 'Very nice service Available any time to resolve the technical issues',
    featured: false
  },
  {
    id: 'rev-4',
    author: 'Basudev',
    rating: 5.0,
    text: 'Very good sarvice'
  },
  {
    id: 'rev-5',
    author: 'Subhanarayan Kar',
    rating: 5.0,
    text: 'Excellent Service'
  },
  {
    id: 'rev-6',
    author: 'Shubham Pradhan',
    rating: 5.0,
    text: "Best' sarvice"
  },
  {
    id: 'rev-7',
    author: 'MANOJ KUMAR SAHOO',
    rating: 5.0,
    text: 'Good work'
  }
];

export const FEATURED_REVIEW = {
  id: 'rev-1',
  author: 'Subhra Jyoti',
  rating: 5.0,
  text: 'Excellent servicing,good behaviour, reasonable pricing Go for it.',
  meta: 'Local Resident',
  time: 'Recent Review',
  ownerResponse: {
    author: 'Jay Maa Laxmi Refrigeration',
    text: 'Thank you for your kind review and recommendation. We are always happy to help with your AC needs!'
  }
};

export const ADDITIONAL_REVIEWS = [
  {
    id: 'rev-2',
    author: 'Priyadarshani Padhy',
    rating: 5.0,
    text: 'Good price Best service',
    meta: 'Verified Customer',
    time: 'Google Review',
    ownerResponse: {
      text: 'Thank you for choosing Jay Maa Laxmi Refrigeration.'
    }
  },
  {
    id: 'rev-3',
    author: 'Biswaranjan Shreenayak',
    rating: 5.0,
    text: 'Very nice service Available any time to resolve the technical issues',
    meta: 'Verified Customer',
    time: 'Google Review',
    ownerResponse: {
      text: 'Glad to assist you promptly with your cooling service!'
    }
  }
];

export const SECONDARY_REVIEWS = [
  {
    id: 'rev-4',
    author: 'Basudev',
    rating: 5.0,
    text: 'Very good sarvice',
    time: 'Google Review'
  },
  {
    id: 'rev-5',
    author: 'Subhanarayan Kar',
    rating: 5.0,
    text: 'Excellent Service',
    time: 'Google Review'
  },
  {
    id: 'rev-6',
    author: 'Shubham Pradhan',
    rating: 5.0,
    text: "Best' sarvice",
    time: 'Google Review'
  },
  {
    id: 'rev-7',
    author: 'MANOJ KUMAR SAHOO',
    rating: 5.0,
    text: 'Good work',
    time: 'Google Review'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'DO YOU PROVIDE ON-SITE SERVICE?',
    answer: 'Yes. On-site service is provided at the customer’s residence, office, or commercial premises in Uttarasasan and across Bhubaneswar.'
  },
  {
    id: 'faq-2',
    question: 'HOW CAN I REQUEST AN ESTIMATE?',
    answer: 'You can request an estimate online using our service request form or by calling us directly at 072051 17681 with your AC model and service requirement.'
  },
  {
    id: 'faq-3',
    question: 'WHERE ARE YOU LOCATED?',
    answer: 'Jay Maa Laxmi Refrigeration is located at Nayak Complex, near Bharat Petrol Pump, Uttarasasan, Bhubaneswar, Odisha 751002.'
  },
  {
    id: 'faq-4',
    question: 'HOW CAN I CONTACT YOU?',
    answer: 'You can contact the business directly by phone at 072051 17681 during our operating hours (Open · Closes 9 PM).'
  },
  {
    id: 'faq-5',
    question: 'WHAT TYPE OF AC SERVICE DO YOU PROVIDE?',
    answer: 'We provide AC repair, preventative AC servicing, on-site diagnostics, and online estimates for air-conditioning and cooling systems.'
  }
];

export const SERVICE_GUIDES: GuideItem[] = [
  {
    id: 'guide-1',
    title: 'HOW TO KNOW WHEN YOUR AC NEEDS SERVICE',
    category: 'DIAGNOSTICS & SYMPTOMS',
    readTime: '3 MIN READ',
    excerpt: 'Key indicators that point toward required servicing including weak airflow, unusual sounds, and cooling drop.',
    content: 'Air conditioning systems provide clear early warnings when maintenance is due. The most frequent symptom is diminished airflow caused by dust-choked indoor filters or compacted debris in the evaporator coil. If your unit takes noticeably longer to cool your room, emits musty odors when turned on, or creates unusual humming or vibrating sounds, scheduled servicing should be booked before compressor strain develops.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'guide-2',
    title: 'WHAT TO CHECK BEFORE CALLING FOR AC SERVICE',
    category: 'MAINTENANCE ADVICE',
    readTime: '2 MIN READ',
    excerpt: 'Practical first-step checks you can safely review at home before requesting technician attendance.',
    content: 'Before calling for on-site assistance, check that the main electrical circuit breaker has not tripped and that the remote controller is set to Cool mode at an appropriate temperature setting. Verify that the indoor unit return air grille is unobstructed by curtains or furniture. If the power supply and settings are normal but the unit fails to cool, contact our service team.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'guide-3',
    title: 'HOW ON-SITE AC SERVICE WORKS',
    category: 'SERVICE EXPLAINED',
    readTime: '3 MIN READ',
    excerpt: 'What to expect during a doorstep visit from our technician in Bhubaneswar.',
    content: 'On-site service begins with a visual inspection and operational check of both indoor and outdoor units. The technician examines filter cleanliness, coil condition, drain line flow, and electrical connections. Necessary cleaning or repair steps are explained clearly before work proceeds, followed by post-service testing to confirm steady cooling.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'guide-4',
    title: 'WHEN TO REQUEST PROFESSIONAL AC REPAIR',
    category: 'REPAIR & SAFETY',
    readTime: '4 MIN READ',
    excerpt: 'Understanding symptoms that require dedicated diagnostic tools and technician handling.',
    content: 'Issues involving electrical circuits, PCB controls, motor capacitors, or refrigerant piping should always be handled by experienced technicians with proper test equipment. If your indoor unit drips water down the wall or the outdoor unit fails to engage when set to cooling, professional repair is required to avoid electrical shorts or compressor burnout.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80'
  }
];

export const GALLERY_IMAGES = [
  {
    id: 'g-1',
    title: 'Indoor AC Service & Coil Cleaning',
    caption: 'Thorough inspection and cleaning of split AC evaporator coil and filter assembly.',
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80',
    aspect: 'large'
  },
  {
    id: 'g-2',
    title: 'Outdoor Condenser Inspection',
    caption: 'Technician examining outdoor condenser unit fins and airflow clearance.',
    url: 'https://images.unsplash.com/photo-1590756254933-2873d72a83b6?auto=format&fit=crop&w=600&q=80',
    aspect: 'medium'
  },
  {
    id: 'g-3',
    title: 'Doorstep AC Diagnostic',
    caption: 'On-site diagnostic testing on cooling performance in residential room.',
    url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
    aspect: 'medium'
  },
  {
    id: 'g-4',
    title: 'Precision Technician Tools',
    caption: 'Specialized gauges, electrical meters, and refrigeration hand tools.',
    url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    aspect: 'portrait'
  },
  {
    id: 'g-5',
    title: 'Refrigerant Pressure Measurement',
    caption: 'Precision manifold gauges verifying system refrigerant operating pressure.',
    url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
    aspect: 'portrait'
  },
  {
    id: 'g-6',
    title: 'On-Site Workshop & Service Delivery',
    caption: 'Reliable air-conditioning repair support for homes and local businesses in Bhubaneswar.',
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    aspect: 'wide'
  }
];
