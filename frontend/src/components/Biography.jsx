import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            
A healthcare website serves as a vital platform for providing information, resources, and services to patients, caregivers, and healthcare professionals. Its features are designed to enhance accessibility, convenience, and engagement, ultimately improving the overall healthcare experience. 
          </p>
          <p>Best healthcare Services!</p>
          <p>We are working on a healthcare projectt.</p>
          <p>
          the features of a healthcare website are designed to empower patients, improve access to care, facilitate communication between patients and providers, and promote proactive health management. By leveraging technology and innovation, healthcare websites play a crucial role in enhancing the patient experience, optimizing healthcare delivery, and promoting better health outcomes.
          </p>
          <p>Healthcare webistes</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
