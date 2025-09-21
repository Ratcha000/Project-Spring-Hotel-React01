import React, { useEffect } from "react"
import React, {useState} from "react"
import { useNavigate } from 'react-router-dom'

const BookingSummary = ({booking, payment, isFormValid, onConfirm}) => {
    const checkInDate = moment(booking.checkInDate)
    const checkOutDate = moment(booking.checkInDate)
    const numOfDays = checkOutDate.diff(checkInDate, "days")
    const[isBookingConfirmed, setIsBookingConfirmed] = useState(false)
    const[isProcessingPayment, setIsProcessingPayment] = useState(false)

    const navigate = useNavigate()

    const handleConfirmBooking =() =>{
        setISProcessingPayment(true)
        setTimeout(() => {
            setISProcessingPayment(false)
            setIsBookingConfirmed(true)
            onConfirm()
        }, 3000)
    }

    useEffect(() => {
        if(isBookingConfirmed){
            navigate("/booking-success")
        }
    }, [isBookingConfirmed, navigate])

    
    return (
        <div>

        </div>
    )
}

export default BookingSummary