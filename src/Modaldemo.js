import React,{useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function Modaldemo() {

    const[modalIsOpen,setModalIsOpen] = useState(false);

    return (
        <div>
            <button onClick={()=>{setModalIsOpen(!modalIsOpen)}}>Click to open</button>

            <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={()=>{setModalIsOpen(false)}} 
            style={
                {
                    overlay:{
                        background:'grey'
                    },
                    content:{
                        color:'orange'
                    }
                }
            }>
                <h2>Modal Heading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit voluptatibus tempora obcaecati! Quos pariatur blanditiis </p>
                <button onClick={()=>{setModalIsOpen(!modalIsOpen)}}>Click to Close</button>
            </Modal>
        </div>
    )
}

export default Modaldemo
