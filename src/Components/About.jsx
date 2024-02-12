import React from "react";

const About = () => {
  return (
    <>
      <div className="pi">
        <img className="pic" src="/src/assets/images/front.png" alt="" />
        <h2 className="sedan">
          Don’t squeeze in a sedan when
          <p className="relax">you could relax in a van.</p>
        </h2>
        <p className="sed">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="team">
          {" "}
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="blank">
          <h3 className="your">
            Your destination is waiting.
            <p className="ready">Your van is ready.</p>
          </h3>
          <div className="explore">
            <h5 className="our">Explore our vans</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
