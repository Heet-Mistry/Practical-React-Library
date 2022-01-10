import React from 'react'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const CustomToast = ({closeToast}) =>{
    return(
        <>
            <div style={{color:'red'}}>Custom Notifiactionsdjl</div>
            <button onClick={closeToast}>Clck to sclso</button>
        </>
    )
}

function Toastdemo() {

    function notify(){
        toast('A Notification', {position: toast.POSITION.TOP_LEFT})
        toast.success('A Notification', {position: toast.POSITION.TOP_CENTER,autoClose:10000})
        toast.info(<CustomToast />, {position: toast.POSITION.TOP_RIGHT,autoClose:false})
        // toast.warn('A Notification', {position: toast.POSITION.BOTTOM_LEFT})
        // toast.error('A Notification', {position: toast.POSITION.BOTTOM_RIGHT})
        // toast('A Notification', {position: toast.POSITION.BOTTOM_CENTER})
    }

    return (
        <div>
            <button onClick={notify}> Notify Me </button>
        </div>
    )
}

export default Toastdemo
