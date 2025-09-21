export async function bookRoom(roomId, booking) {
try{
    const response = await api.post('/bookings/room/${roomId}/booking', booking)
    return response.data
}catch(error){
    if(error.response && error.response.data){
        throw new Error(error.response.data)
    }else{
        throw new Error('Error booking room : ${error.message}')
    }
  }
}

export async function getAllBookings() {
    try{
        const result = await api.get("/bookings/all-bookings")
        return result.data
    }catch(error){
        throw new Error('Error fetching bookings : ${error.message}')
    }
}

export async function getBookingByConfirmationCode(confirmationCode) {
    try{
        const result = await api.get('/bookings/confirmation/${confirmationCode}')
        return result.data
    }catch(error){
        if(error.response && error.response.data){
            throw new Error(error.response.data)
        }else{
            throw new Error('Error find booking : ${error.message}')
        }
    } 
}