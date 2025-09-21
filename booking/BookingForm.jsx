import React, { useState } from 'react'
import { getRoomById } from '../utils/Apifunctions'
import { useParams } from 'react-router-dom'
import moment from "moment"

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
     const[roomInfo, setRoomInfo]= useState({
        photo: "",
        roomType :"",
        roomPrice : ""
    })

    const{roomId} = useParams()

    const handleInputChange = (e) =>{
        const{name, value} = e.target
        setBooking({...booking, [name]: value})
        setErrorMessage("")
    }

    const getRoomPriceById = async(roomId) =>{
        try{
            const response = await getRoomPriceById(roomId)
            setRoomPrice(response.roomPrice)
        }catch(error){
            throw new Error(error)
        }
    }

    useEffect(() => {
        getRoomPriceById(roomId)
    }, [roomId])

    const calculatePayment = ()=>{
        const checkInDate = moment(booking.checkInDate)
        const checkOutDate = momen(booking.checkOutDate)
        const diffInDays = checkOutDate.diff(checkInDate)
        const price = roomPrice ? roomPrice : 0
        return diffInDays * price
    }

    const isGuestValid = () =>{
        const adultCount = parseInt(booking.numberOfAdults)
        const childrenCount = parseInt(booking.numberOfChildren)
        const totalCount = adultCount + childrenCount
        return totalCount >=1 && adultCount >= 1
    }
}
