INSERT INTO projects (ID, NAME, DESCRIPTION, TECHSTACK, URL) VALUES (1, 'Momentum','Momentum is a recipe app designed to empower users to track their macro-nutrients while enjoying a diverse range of delicious meals. Whether you''re striving for a healthier lifestyle or have specific dietary goals, this app provides a comprehensive platform to manage your nutritional intake. The site also features a unique article section into the app. Here, users can contribute their own recipes, share their culinary experiences, and engage in meaningful discussions with like-minded individuals. The tech stack I used to create this application was react for the front-end, node.js and express.js for the backend and mySql for the database.', 
ARRAY[
    'https://img.shields.io/badge/SASS-black?style=flat-square&logo=SASS&logoColor=white',
    'https://img.shields.io/badge/vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white',
    'https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js',
    'https://img.shields.io/badge/-React-black?style=flat-square&logo=react',
    'https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql'], 
    'https://momentum-iota.vercel.app/');

INSERT INTO projects (ID, NAME, DESCRIPTION, TECHSTACK, URL) VALUES (2, 'Coffee Shop', 'Coffee Shop is designed and developed a dynamic and modern coffee shop website using cutting-edge technologies to showcase my versatility and commitment to continuous learning. Leveraging Next.js for its robust React framework and server-side rendering capabilities, I incorporated TypeScript to enhance code maintainability and catch potential errors early in the development process. The user interface is styled with the highly efficient Tailwind CSS, ensuring a sleek and responsive design. Additionally, I integrated Supabase as the backend, harnessing its seamless database capabilities for efficient data management.', 
ARRAY[
    'https://img.shields.io/badge/-Nextjs-black?style=flat-square&logo=Next.js',
    'https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript',
    'https://img.shields.io/badge/-tailwindcss-black?style=flat-square&logo=tailwindcss',
    'https://img.shields.io/badge/-PostgreSQL-black?style=flat-square&logo=postgresql',
    'https://img.shields.io/badge/-Supabase-black?style=flat-square&logo=supabase'], 
    'https://coffee-shop-red-five.vercel.app/');


INSERT INTO experience (ID, TITLE, COMPANY, LOCATION, DATE, DESCRIPTION) VALUES (1, 'Full-Stack Developer', 'One Less Lonely Paws', 'Calgary, Alberta', 'Sept 2025 - Current', 
ARRAY [
    'Designed and developed a full-stack e-commerce booking platform for a dog walking company, enabling customers to schedule services and make secure online payments', 
    'Implemented authentication, booking management, and payment integration (Stripe/PayPal) to streamline client operations',
    'Built a responsive, mobile-friendly UI using React and SCSS, ensuring accessibility and ease of use', 
    'Developed backend services with Spring Boot and PostgreSQL to handle customer data, scheduling, and order history securely',
    'Collaborating directly with the business owner to gather requirements, iterate on features, and deliver a production-ready MVP']);

INSERT INTO experience (ID, TITLE, COMPANY, LOCATION, DATE, DESCRIPTION) VALUES (2, 'Research Assistant', 'Brock University', 'St. Catharines, Ontario', 'May 2025 - August 2025', 
ARRAY[
    'Preprocessed data, evaluated model performance, contributed to model tuning', 
    'Applied deep learning techniques (CNNs, RNNs) for data modeling and evaluation',
    'Supported neural networks and decision trees experimentation for ongoing AI research', 
    'Assist with writing paper based on research findings']);

INSERT INTO experience (ID, TITLE, COMPANY, LOCATION, DATE, DESCRIPTION) VALUES (3, 'Technical Consultant', 'ChairLinks', 'Toronto, Ontario', 'May 2022 - Sept 2022', 
ARRAY[
    'Engineered MVP product that enabled the startup to onboard over 50 users & validate product-market fit', 
    'Designed and implemented a relational database to store user feedback and usage metrics',
    'Advised founders on technical feasibility and product design']);


INSERT INTO experience (ID, TITLE, COMPANY, LOCATION, DATE, DESCRIPTION) VALUES (4, 'Management Trainee', 'Enterprise Rent-a-Car', 'Toronto, Ontario', 'July 2022 - Mar 2025', 
ARRAY[
    'Improved client satisfaction by 15% through personalized service and issue resolution', 
    'Collaborated with cross-functional teams to manage fleet inventory and logistics',
    'Consistently exceeded sales targets for rental protection products']);


