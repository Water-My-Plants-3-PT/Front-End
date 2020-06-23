import React, {useState} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Plant from "./plant.jpg";
import './userPlants.scss';

  var data =[    
  {
    name: "PLANT one",
    img: Plant,
    id:0
  },
  {
    name: "PLANT Two",
    img: Plant,
    id:1
  },
  {
    name: "PLANT Three",
    img: Plant,
    id:2
  },
  {
    name: "PLANT Fours",
    img: Plant,
    id:3
  },
  {
    name: "PLANT Five",
    img: Plant,
    id:4
  },
  {
    name: "PLANT Six",
    img: Plant,
    id:5
  },
  {
    name: "PLANT Seven",
    img: Plant,
    id:6
  },
  {
    name: "PLANT Eight",
    img: Plant,
    id:7
  },
  {
    name: "PLANT Nine",
    img: Plant,
    id:8
  },
  {
    name: "PLANT Ten",
    img: Plant,
    id:9
  }
]


var plantInfo = false;

const changePlant =()=>{
  plantInfo = !plantInfo
  console.log(`state changed = ${plantInfo}`)
  if(plantInfo === true){
    document.body.classList.add('selected-plant')
  } else{
    document.body.classList.remove('selected-plant')
  }
}


class UserPlants extends React.Component {
  constructor(props){
    super(props);
    this.state ={data}
};



  render() {
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
          {
            this.state.data.map(data =>{
               return(
                <section className="planCard">
                <img src={data.img} alt="plant" className="plantImg" onClick={changePlant} />
                <p>{data.name}</p>
               </section>
               );
            })}
        </div>

      </section>
    </div>
  );
  }

}

export default UserPlants;