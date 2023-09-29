import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: 40,
  },
  headers: {
    'X-RapidAPI-Key': '0029eac13emsh07f79030e896788p1f2f0fjsnce3c87f2a71e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    //0029eac13emsh07f79030e896788p1f2f0fjsnce3c87f2a71e
    //e5e709483dmsh566e333abacc308p155642jsn619d55e1a628
    //98b62b57a3msh55452b37d509a58p13170fjsn595b01bc08c5
  },
}

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}