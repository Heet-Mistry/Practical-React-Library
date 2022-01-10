import React from 'react'
import {FaReact} from 'react-icons/fa'
import {MdAnalytics} from 'react-icons/md'
import {IconContext} from 'react-icons'

const Icondemo = () => {
    return (
        <div>
            <IconContext.Provider value={{color:'red' , size:'10rem'}}>
                <FaReact />
                <MdAnalytics />
            </IconContext.Provider>
        </div>
    )
}

export default Icondemo
