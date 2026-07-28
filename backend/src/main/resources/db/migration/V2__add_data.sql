INSERT INTO projects (
    id,
    name,
    description,
    progress,
    techstack,
    todo,
    color,
    url,
    preview
) VALUES (
    1,
    'Brock Campus Navigation',
    'A custom spatial data pipeline and mobile application that extracts geometric coordinate matrices from raw university CAD blueprints to deliver precise, low-latency indoor routing and turn-by-turn navigation.',
    'In Progress',
    ARRAY[
        'https://img.shields.io/badge/React%20Native-20232A?style=flat-square&logo=react',
        'https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white',
        'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white',
        'https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white',
        'https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white'
    ],
    '[
        {
            "label":"Prepare the application for App Store release.",
            "done":false
        },
        {
            "label":"Improve indoor navigation accuracy and campus coverage.",
            "done":false
        },
        {
            "label":"Continue refining routing and user experience.",
            "done":false
        }
    ]'::jsonb,
    '#a78bfa',
    NULL,
    NULL
);


INSERT INTO projects (
    id,
    name,
    description,
    progress,
    techstack,
    todo,
    color,
    url,
    preview
) VALUES (
    2,
    'One Less Lonely Paws Booking Platform & CRM',
    'A production-grade, full-stack CRM and reservation platform engineered for a live pet services enterprise, featuring secure Stripe API financial workflows and concurrent transactional state machines to prevent double-booking anomalies.',
    'In Progress',
    ARRAY[
        'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black',
        'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white',
        'https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white',
        'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white',
        'https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white',
        'https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white'
    ],
    '[
        {
            "label":"Real-time messaging between clients and pet care providers.",
            "done":false
        },
        {
            "label":"Online booking and scheduling.",
            "done":false
        },
        {
            "label":"Client approval workflow for new customers.",
            "done":false
        },
        {
            "label":"Business management dashboard for availability, bookings, and services.",
            "done":false
        },
        {
            "label":"Appointment reminders and booking notifications.",
            "done":false
        },
        {
            "label":"Create mobile app to match web client.",
            "done":false
        }
    ]'::jsonb,
    '#f472b6',
    NULL,
    NULL
);


INSERT INTO projects (
    id,
    name,
    description,
    progress,
    techstack,
    todo,
    color,
    url,
    preview
) VALUES (
    3,
    'Virtual ECU Prototypes',
    'A low-level hardware-in-the-loop (HIL) simulation environment and virtual test harness designed to validate C++ vehicle firmware, simulating real-time CAN bus telemetry communication across critical automotive Electronic Control Units (ECUs).',
    'In Progress',
    ARRAY[
        'https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white',
        'https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white'
    ],
    '[
        {
            "label":"Research Design of Low-Level Systems",
            "done":false
        },
        {
            "label":"Design High-level System Architecture",
            "done":false
        },
        {
            "label":"Design & Build Test Harness in Unreal Engine",
            "done":false
        }
    ]'::jsonb,
    '#fb923c',
    NULL,
    NULL
);


INSERT INTO projects (
    id,
    name,
    description,
    progress,
    techstack,
    todo,
    color,
    url,
    preview
) VALUES (
    4,
    'Brock University Formula Racing Website',
    'A production-grade website and internal management platform for Brock University Formula Racing. Built to streamline recruitment, centralize team communication, manage applications, and showcase progress toward Formula SAE Michigan.',
    'In Progress',
    ARRAY[
        'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white',
        'https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white',
        'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white',
        'https://img.shields.io/badge/Supabase-34b27b?style=flat-square&logo=supabase&logoColor=white'
    ],
    '[
        {
            "label":"Recruitment portal with role-specific applications",
            "done":true
        },
        {
            "label":"Admin dashboard for managing applicants",
            "done":true
        },
        {
            "label":"Automated email notification system",
            "done":false
        },
        {
            "label":"Merchandise storefront with Stripe integration",
            "done":false
        },
        {
            "label":"Sponsor management portal",
            "done":false
        },
        {
            "label":"Live race season updates and telemetry showcase",
            "done":false
        }
    ]'::jsonb,
    '#8b1538',
    NULL,
    NULL
);

INSERT INTO projects (
    id,
    name,
    description,
    progress,
    techstack,
    todo,
    color,
    url,
    preview
) VALUES (
    5,
    'Brock Computer Science Club Website',
    'A centralized, full-stack web platform and transactional merchandise storefront engineered for Brock University''s developer community, supporting automated registration webhooks and secure user workflow authentication for 200+ active members.',
    'Completed',
    ARRAY[
        'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white',
        'https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white',
        'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white',
        'https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white'
    ],
    '[]'::jsonb,
    '#F38020',
    'https://brockcsc.ca/home',
    'images/projects/brock-csc.png'
);


INSERT INTO projects (
    id,
    name,
    description,
    progress,
    techstack,
    todo,
    color,
    url,
    preview
) VALUES (
    6,
    'AI Road Hazard Detection',
    'An AI-powered routing engine that utilizes YOLOv8 object detection and ResNet-18 neural networks to classify real-time road hazards, dynamically injecting risk-based heuristics into pathfinding algorithms to compute optimal safety-first transit routes.',
    'To-Do',
    ARRAY[
        'https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white',
        'https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=FFD43B',
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black',
        'https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white',
        'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white'
    ],
    '[
        {
            "label":"Expand and rebalance the training dataset to improve hazard detection accuracy.",
            "done":false
        },
        {
            "label":"Improve model reliability across a wider range of road conditions.",
            "done":false
        },
        {
            "label":"Refine route generation to eliminate dead-end paths caused by waypoint selection.",
            "done":false
        },
        {
            "label":"Continue optimizing inference performance for real-time navigation.",
            "done":false
        }
    ]'::jsonb,
    '#22d3ee',
    NULL,
    NULL
);


INSERT INTO experience (
    id,
    title,
    company,
    location,
    date,
    description,
    color
) VALUES (
    1,
    'Software & Electrical Systems Lead',
    'Brock University Formula Racing',
    'St. Catharines, Ontario',
    'July 2026 - Current',
    ARRAY[
        'Spearheading architecture design of custom low-level vehicle firmware in C++, establishing real-time data ingestion from critical sensor arrays.',
        'Engineering CAN bus communication protocols to ensure ultra-low latency transmission between Electronic Control Units (ECUs).'
    ],
    '#a78bfa'
);


INSERT INTO experience (
    id,
    title,
    company,
    location,
    date,
    description,
    color
) VALUES (
    2,
    'Full-Stack Developer',
    'One Less Lonely Paws',
    'Calgary, Alberta',
    'Jan 2026 - Current',
    ARRAY[
        'Engineered concurrent booking state machines and integrated Stripe API payment workflows, eliminating platform transactional friction and reducing business operating costs by 20%.',
        'Wrote integration tests using Jest for RESTful endpoints, achieving 85% code coverage.',
        'Collaborating directly with the business owner to gather requirements, iterate on features, and deliver a production-ready MVP.'
    ],
    '#22d3ee'
);


INSERT INTO experience (
    id,
    title,
    company,
    location,
    date,
    description,
    color
) VALUES (
    3,
    'Lead Developer/Club Executive',
    'Brock University Computer Science Club',
    'St. Catharines, Ontario',
    'September 2025 - Current',
    ARRAY[
        'Lead full redevelopment of web platform in React, TypeScript, TailwindCSS, and Node.js including a storefront with Stripe webhooks to ensure security.'
    ],
    '#f472b6'
);


INSERT INTO experience (
    id,
    title,
    company,
    location,
    date,
    description,
    color
) VALUES (
    4,
    'Research Assistant',
    'Brock University',
    'St. Catharines, Ontario',
    'May 2025 - Current',
    ARRAY[
        'Co-authored research demonstrating the representational bias in embedded models can be meaningfully reduced under minimal supervision compared to fully supervised and heuristic baselines on CheXpert and CelebA benchmarks.',
        'Gained practical experience with bias analysis pipelines, embedding model evaluation and tradeoffs between supervised, unsupervised and heuristic based approaches.',
        'Assisted with writing paper based on research findings.'
    ],
    '#fb923c'
);