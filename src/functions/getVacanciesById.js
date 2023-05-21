import axios from "axios"
import { clientSecret, proxyUrl, requestConfig } from "../constants"

const getVacancyRequests = (context) => {
  const requestConfigWithAuth = {
    ...requestConfig,
    headers: {
      ...requestConfig.headers,
      'X-Api-App-Id' : clientSecret
    }
  }
  return  context.favoriteVacancyIds.map(id => 
    axios.get(`${proxyUrl}/2.0/vacancies/${id}`, requestConfigWithAuth))
}

const requestVacancies = async (context) => {
  const vacancyRequests = getVacancyRequests(context)
  return await axios.all(vacancyRequests).then(
    res => {
      return res.map(vacancy => vacancy.data)
    }
  );
}
const getVacanciesById = async ( context ) => {
  context.setContext({...context, isLoading:true});
  try {
    const vacancies = await requestVacancies(context)
    context.setContext({...context, favoriteVacancies:vacancies, isLoading:false})
  }
  catch(error) {
    context.setContext({...context, isLoading:false});
  }
  
}

export default getVacanciesById