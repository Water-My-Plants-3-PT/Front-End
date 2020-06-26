import React, {useState} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

function PlantCard (props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [editMod, setEditMod] = useState(false)
    const [name, setName] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        axiosWithAuth()
        .put('https://water-my-plants-6-2020.herokuapp.com/api/plants/plants_1')
        .then(res => {
            setName([...name.filter(user => user.id !== setName.id ), res.data]);
            
        })
        .catch(err => console.log(err))

    }

    function deletePlant (event) {
        event.preventDefault();
        axiosWithAuth()
        .delete(`https://water-my-plants-6-2020.herokuapp.com/api/plants/plants${event.id}`)
        .then(res => setName(event.filter(color => color.id !== res.data)) )
        .catch(err => console.log( err));
    }

    return(
        <div>
            <button onClick={() => setModalIsOpen(true)}>open</button>
            <Modal isOpen={modalIsOpen}>
                <p onClick={() => setModalIsOpen(false)} >X</p>
                <button>MARK AS WATERED</button>
                
                <h3>Name:{props.name}</h3>
                <h4>Happiness:</h4>
                <h4>Maintinence:</h4>
                <button onClick={() => setEditMod(true)}>Edit Plant</button>
                <Modal isOpen={editMod} >
                    <p onClick={() => setEditMod(false)}>X</p>
                    <label >
                        Plant Name:<input type={Text} onChange={e => setName(e.target.value)}/>
                    </label>
                    <button onSubmit={handleSubmit} type="submit">Save Changes</button>
                    <button onClick={deletePlant}>Delet Plant</button>
                </Modal>

            </Modal>
        </div>

    );
}
export default PlantCard;