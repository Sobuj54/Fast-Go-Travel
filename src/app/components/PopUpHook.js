'use client'
import React from 'react'
import PopUp from './PopUp';

const PopUpHook = () => {
    const [showPopUp, setShowPopUp] = React.useState(false);


    return (
        <>
            {showPopUp && <PopUp onClose={() => setShowPopUp(false)} />}
        </>
    )
}

export default PopUpHook