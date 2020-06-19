import React, {useState} from "react";
import Plant from "./plant.jpg";
import './userPlants.scss';

function UserPlants() {

  return (
    <div className="userPlants">
      <section className="userSec">
        <nav className="plantsNav">
          <select className="select">
            <option >Last Watered</option>
            <option >Happiness (Low-High)</option>
            <option >Happiness (High-Low)</option>
            <option >Recently Added</option>
            <option>Plant Name(A-Z)</option>
          </select>
          <button>ADD PLANT</button>
        </nav>

        <div className="plantSelect">

          <section className="planCard">
            <img src={Plant} alt="plant" className="plantImg" />
            <p>Plant Name</p>
          </section>
          <section className="planCard">
            <img src={Plant} alt="plant" className="plantImg" />
            <p>Plant Name</p>
          </section>
          <section className="planCard">
            <img src={Plant} alt="plant" className="plantImg" />
            <p>Plant Name</p>
          </section>
          <section className="planCard">
            <img src={Plant} alt="plant" className="plantImg" />
            <p>Plant Name</p>
          </section>
          <section className="planCard">
            <img src={Plant} alt="plant" className="plantImg" />
            <p>Plant Name</p>
          </section>
          <section className="planCard">
            <img src={Plant} alt="plant" className="plantImg" />
            <p>Plant Name</p>
          </section>
          <section className="planCard">
            <img src={Plant} alt="plant" className="plantImg" />
            <p>Plant Name</p>
          </section>
          <section className="planCard">
            <img src={Plant} alt="plant" className="plantImg" />
            <p>Plant Name</p>
          </section>
          <section className="planCard">
            <img src={Plant} alt="plant" className="plantImg" />
            <p>Plant Name</p>
          </section>
          <section className="planCard">
            <img src={Plant} alt="plant" className="plantImg" />
            <p>Plant Name</p>
          </section>
          <section className="planCard">
            <img src={Plant} alt="plant" className="plantImg" />
            <p>Plant Name</p>
          </section>
          <section className="planCard">
            <img src={Plant} alt="plant" className="plantImg" />
            <p>Plant Name</p>
          </section>

        </div>

      </section>
    </div>
  );
}

export default UserPlants;