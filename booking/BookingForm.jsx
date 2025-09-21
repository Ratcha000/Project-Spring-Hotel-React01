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
   
}
