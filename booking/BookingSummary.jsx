import React from "react"
import React, {useState} from "react"

const BookingSummary = ({booking, payment, isFormValid, onConfirm}) => {
    const checkInDate = moment(booking.checkInDate)
    const checkOutDate = moment(booking.checkInDate)
    const numOfDays = checkOutDate.diff(checkInDate, "days")
    const[isBookingConfirmed, setIsBookingConfirmed] = useState(false)
    const[isProcessingPayment, setIsBookingPayment] = useState(false)

    

    return (
        <div>

        </div>
    )
}

export default BookingSummary