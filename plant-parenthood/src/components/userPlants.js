import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';
import PlantCard from './plantCard';
import Plant from "./plant.jpg";
import './userPlants.scss';
import Axios from "axios";

  var data =[    
  {
    name: "PLANT one",
    img: Plant,
    plantInfo: false,
    key:0
  },
  {
    name: "PLANT Two",
    img: Plant,
    plantInfo: false,
    key:1
  },
  {
    name: "PLANT Three",
    img: Plant,
    plantInfo: false,
    key:2
  },
  {
    name: "PLANT Fours",
    img: Plant,
    plantInfo: false,
    key:3
  },
  {
    name: "PLANT Five",
    img: Plant,
    plantInfo: false,
    key:4
  }
]


//var plantInfo = false;

// const changePlant =()=>{
//   data.plantInfo = !data.plantInfo
//   console.log(`state changed = ${data.plantInfo}`)
//    if(data.plantInfo === true){
//      document.body.classList.add('selected-plant')
//    } else{
//      document.body.classList.remove('selected-plant')
//    }
// }

//const [modalIsOpen, setModalIsOpen] = useState(false)

class UserPlants extends React.Component {
    constructor(props){
      super(props);
      this.state ={data}
  };

  componentDidMount() {
    Axios.get(``)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
      .catch(err => console.log('Access denied', err.response));
      
  }

  changePlant(id) {
   
    const slectPlant =data.filter(plant =>{
      //console.log(plant.key === id)
      if(plant.key === id){
        document.getElementById(`plant-${id}`).classList.add('selected-plant');
        plant.plantInfo = true
      }
        
    })

    //console.log(slectPlant)
    
    // data.plantInfo = !data.plantInfo
    // console.log(`state changed of ${data.name} = ${data.plantInfo}`);
    //    if(data.plantInfo === true){
    //      document.body.classList.add('selected-plant')
    //    } else{
    //      document.body.classList.remove('selected-plant')
    //    }

  }
  //const [modalIsOpen, setModalIsOpen] = useState(false)



  render() {
    //const [modalIsOpen, setModalIsOpen] = useState(false)
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
                <section className="planCard" key={data.key} onClick={() => this.changePlant(data.key) }>
                <img src={data.img} alt="plant" id={`plant-${data.key}`} className={"plantImg"}   />
                <p>{data.name}</p>
                <PlantCard props={data}/>
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