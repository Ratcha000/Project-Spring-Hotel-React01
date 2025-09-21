import React, { useState } from 'react'

const BookingForm = () => {
    const[isValidated, setIsValidated]= useState(false)
    const[isSubmitted, setIsSubmitted] = useState(false)
    const[errorMessage, setErrorMessage] = useState("")
    const[roomPrice, setRoomPrice] = useState(0)
    const[booking, setBooking] = useState({
        guestName: "",
        guestEmail: "",
        checkInDate : "",
        checkOutDate : "",
        numberOfAdults : "",
        numberOfChildren : "",
    })
    
}
