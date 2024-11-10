import html5Image from '../assets/HTML5.png';
import css3Image from '../assets/css3.png';
import jsImage from '../assets/js.png';
import angularImage from '../assets/angular.png';
import nodejsImage from '../assets/nodejs.png';
import pyImage from '../assets/py.png';
import reactjsImage from '../assets/reactjs.png';


const products = [
  { 
    id: 1, 
    title: "Html5", 
    price: 25.99, 
    imageUrl: html5Image, 
    addToCartStatus: false, 
    teacher: "mohammad alizadeh", 
    sessions: 10, 
    duration: "5 hours", 
    participants: 12927,
    faq: [
      { question: "What is HTML?", answer: "HTML is the standard markup language for creating web pages." },
      { question: "Why should we learn HTML?", answer: "Learning HTML is the first step in web development." },
      { question: "Is HTML enough on its own?", answer: "No, for full design and development, you also need CSS and JavaScript." }
    ],
    initialComments: [
      {
        user: 'John Doe',
        comment: 'I found this HTML course very informative and easy to follow!',
        adminReply: 'Thank you for your feedback, John! We’re happy it was helpful.',
      },
      {
        user: 'Emma Brown',
        comment: 'Great introduction to HTML. Loved the examples provided!',
        adminReply: 'Thanks, Emma! We’re glad you enjoyed the examples.',
      }
    ]
  },
  { 
    id: 2, 
    title: "Css3", 
    price: 30.99, 
    imageUrl: css3Image, 
    addToCartStatus: false, 
    teacher: "reza alipor", 
    sessions: 8, 
    duration: "4 hours", 
    participants: 10420,
    faq: [
      { question: "What is CSS?", answer: "CSS is a language for describing the styles of HTML pages." },
      { question: "Why is CSS important?", answer: "CSS helps us make web pages more beautiful and attractive." },
      { question: "Is CSS enough for design on its own?", answer: "No, it is usually paired with HTML and JavaScript." }
    ],
    initialComments: [
      {
        user: 'Alice Smith',
        comment: 'This CSS course helped me improve my design skills a lot!',
        adminReply: 'Thanks, Alice! We’re glad it was beneficial.',
      },
      {
        user: 'Michael Johnson',
        comment: 'The instructor explained everything very clearly.',
        adminReply: 'Thank you, Michael! We appreciate your feedback.',
      }
    ]
  },
  { 
    id: 3, 
    title: "JavaScript", 
    price: 15.99, 
    imageUrl: jsImage, 
    addToCartStatus: false, 
    teacher: "narges mohammadi", 
    sessions: 15, 
    duration: "8 hours", 
    participants: 15600,
    faq: [
      { question: "What is JavaScript?", answer: "JavaScript is a dynamic programming language for web and software development." },
      { question: "Is JavaScript only executed in browsers?", answer: "No, with Node.js, JavaScript can also run on servers." },
      { question: "Why should we learn JavaScript?", answer: "JavaScript is crucial for web development and dynamic applications." }
    ],
    initialComments: [
      {
        user: 'Sarah Lee',
        comment: 'Amazing JavaScript course with practical examples.',
        adminReply: 'Thank you, Sarah! We’re glad you found it practical.',
      },
      {
        user: 'David Kim',
        comment: 'Perfect for beginners and intermediate developers.',
        adminReply: 'Thanks, David! We designed it to cater to different levels.',
      }
    ]
  },
  { 
    id: 4, 
    title: "Angular", 
    price: 45.99, 
    imageUrl: angularImage, 
    addToCartStatus: false, 
    teacher: "ali ahmadi", 
    sessions: 20, 
    duration: "10 hours", 
    participants: 8700,
    faq: [
      { question: "What is Angular?", answer: "Angular is a framework for building single-page and dynamic applications." },
      { question: "Why should we learn Angular?", answer: "Angular is suitable for developing complex and enterprise-level applications." },
      { question: "Is Angular free?", answer: "Yes, Angular is developed by Google and is free." }
    ],
    initialComments: [
      {
        user: 'Olivia Young',
        comment: 'This Angular course covers everything I needed to know.',
        adminReply: 'Thanks, Olivia! We’re glad it was comprehensive for you.',
      },
      {
        user: 'Liam Turner',
        comment: 'Great course with hands-on projects.',
        adminReply: 'Thank you, Liam! We’re happy you enjoyed the projects.',
      }
    ]
  },
  { 
    id: 5, 
    title: "Node.js", 
    price: 20.99, 
    imageUrl: nodejsImage, 
    addToCartStatus: false, 
    teacher: "mohammad alizadeh", 
    sessions: 12, 
    duration: "6 hours", 
    participants: 13540,
    faq: [
      { question: "What is Node.js?", answer: "Node.js is a runtime environment for JavaScript on the server side." },
      { question: "Why use Node.js?", answer: "Node.js is used to build fast and scalable applications." },
      { question: "Is Node.js free?", answer: "Yes, Node.js is an open-source and free platform." }
    ],
    initialComments: [
      {
        user: 'Noah Walker',
        comment: 'Node.js course was very in-depth and well-structured.',
        adminReply: 'Node.js course was very in-depth and well-structured.',
      },
      {
        user: 'Sophia King',
        comment: 'Learned a lot about backend development with Node.js!',
        adminReply: 'Thanks, Sophia! We’re happy you enjoyed it.',
      }
    ]
  },
  { 
    id: 6, 
    title: "Python", 
    price: 35.99, 
    imageUrl: pyImage, 
    addToCartStatus: false, 
    teacher: "nima alamian", 
    sessions: 18, 
    duration: "9 hours", 
    participants: 10240,
    faq: [
      { question: "What is Python?", answer: "Python is a high-level, general-purpose programming language." },
      { question: "Is Python suitable for web development?", answer: "Yes, with frameworks like Django and Flask, Python can be used for web development." },
      { question: "Why is Python popular?", answer: "Python is popular due to its simplicity and its wide applications in data science, web development, and AI." }
    ],
    initialComments: [
      {
        user: 'Ethan Lee',
        comment: 'This Python course is perfect for both beginners and intermediates!',
        adminReply: 'Thank you, Ethan! We’re happy to hear that.',
      },
      {
        user: 'Ava Martinez',
        comment: 'I learned a lot about Python programming, especially with examples.',
        adminReply: 'Thanks, Ava! Glad you enjoyed the examples.',
      }
    ]
  },
  { 
    id: 7, 
    title: "React.js", 
    price: 18.99, 
    imageUrl: reactjsImage, 
    addToCartStatus: false, 
    teacher: "sara irandosti", 
    sessions: 14, 
    duration: "7 hours", 
    participants: 12800,
    faq: [
      { question: "What is React?", answer: "React is a library for building dynamic and user-friendly interfaces." },
      { question: "Why is React widely used?", answer: "React makes developing complex applications easier with its component-based structure." },
      { question: "Is React free?", answer: "Yes, React is developed by Facebook and is free." }
    ],
    initialComments: [
      {
        user: 'William Scott',
        comment: 'The React course was well-organized and easy to follow.',
        adminReply: 'The React course was well-organized and easy to follow..',
      },
      {
        user: 'Mia Allen',
        comment: 'Great content and examples on React components.',
        adminReply: 'Thanks, Mia! We’re glad you liked the content.',
      }
    ]
  }
];

export default products;







