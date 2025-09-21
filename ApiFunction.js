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