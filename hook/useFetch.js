import { useEffect, useState } from "react";
import axios from "axios";
import {RAPID_API_KEY} from "@env"

const rapidApiKey = RAPID_API_KEY

function useFetch(endpoint,query) {
  const [data,setData]= useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error,setError] = useState(null)

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {
    query: 'Python developer in Texas, USA',
    page: '1',
    num_pages: '1'
  },
  headers: {
    'X-RapidAPI-Key': "",
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {...query},
}


const fetchData = async (response) =>{
  setIsLoading(true)

  try {
	const response = await axios.request(options);
  setData(response.data.data)
  setIsLoading(false)
	console.log(response.data);

} catch (error) {
  setError(error)
  alert("There is an error")
	console.error(error);
}
finally{
setIsLoading(false)
}
}

useEffect(()=>{
  fetchData()
}, [])

const refetch = () =>{
setIsLoading(true)
fetchData()
}

return {data, isLoading, error, refetch}

}

export default useFetch