import './AboutUs.css';
import AboutUsImg from '../assets/aboutusimage.jpg';
import ArrowDownImg from '../assets/arrowDown.png';

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-background">
        <img src={AboutUsImg} alt="About Us Background" className="background-image"/>
        <div className="about-us-overlay">
          <h1>IT&apos;S TIME TO</h1>
          <h2>KNOW US</h2>
          <img src={ArrowDownImg} alt="Scroll Down" className="scroll-arrow" />
        </div>
      </div>
      <div className="about-us-content">
        <h3>IN LOVE WITH OUR MISSION</h3>
        <p>
          Welcome to our website, a platform dedicated to bringing unique products and a memorable shopping experience to you. Our journey began with a passion for excellence, innovation, and customer satisfaction...
          About Us
Welcome to our website, a platform dedicated to bringing unique products and a memorable shopping experience to you. Our journey began with a passion for excellence, innovation, and customer satisfaction. We envisioned a space where people could explore a carefully curated selection of items, tailored to meet diverse tastes and needs, all while enjoying a seamless and enjoyable shopping experience.

Our Mission
Our mission is simple: to provide high-quality products while prioritizing customer satisfaction. We believe in building a lasting connection with our users, offering not just items for sale but an opportunity to be part of a community that values quality, style, and convenience. Every product on our site has been selected with careful attention to detail, ensuring it meets our standards and reflects the tastes of our community.

Our Values
Quality: We’re committed to offering products that meet high standards of craftsmanship and durability. Every item we feature has been vetted for quality, ensuring it brings value and joy to our customers.

Innovation: We constantly evolve to keep pace with the latest trends and technologies, offering a modern shopping experience that’s easy to navigate and visually engaging. Our team is always exploring new ways to enhance the user experience.

Community: At the heart of our brand is our community. We listen to our customers’ feedback and ideas, shaping our offerings and experiences to meet your needs. Building a strong relationship with our community is our top priority.

Our Story
Starting out as a small project fueled by a big dream, we launched this website with a vision to redefine the online shopping experience. Over time, we have grown and adapted, but our core mission remains the same: to offer exceptional products that stand out in quality and design. From product selection to checkout, we work to make every aspect of your experience as smooth as possible.

We invite you to explore our collections, learn more about our values, and join us on this journey. Whether you’re here to shop, discover new trends, or simply enjoy browsing, we’re thrilled to have you with us.

Thank you for being part of our story. Together, we can build a better, more inspiring shopping experience.
        </p>
      </div>
    </div>
  );
}
