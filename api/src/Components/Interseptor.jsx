import axios from 'axios'
import React from 'react'

const Interseptor = () => {
    axios.interceptors.request.use((request)=>{
        console.log("request: ",request)
        request.headers.agee="jsdhfiadsfijks"
        return request
      })
      axios.interceptors.response.use((response)=>{
        console.log("response :",response)
        response.headers.Age=11
        return response
      })

  return (
    <div>Interseptor</div>
  )
}

export default Interseptor