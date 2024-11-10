import { FaChalkboardTeacher, FaTags, FaCheckCircle } from 'react-icons/fa';
import './CartWhyUs.css';

const WhySection = () => {
  return (
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h1 className="h1cls">Why Choose Our Store?</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <FaChalkboardTeacher size={50} />
                </div>
                <div className="detail-box">
                  <h4 className="h1cls">Professional Instructors</h4>
                  <p className="h1cls">Lorem Ipsum is simply dummy text of the printing industry</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <FaTags size={50} />
                </div>
                <div className="detail-box">
                  <h4 className="h1cls">Fair Pricing</h4>
                  <p className="h1cls">Lorem Ipsum is simply dummy text of the printing industry</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <FaCheckCircle size={50} />
                </div>
                <div className="detail-box">
                  <h4 className="h1cls">High-Quality Products</h4>
                  <p className="h1cls">Lorem Ipsum is simply dummy text of the printing industry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default WhySection;
