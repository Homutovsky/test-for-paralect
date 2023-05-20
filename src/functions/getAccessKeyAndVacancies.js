import axios from "axios";
import getVacancies from "./getVacancies";
import { clientId, clientSecret, login, password, proxyUrl, requestConfig } from "../constants";


const getAccessKeyAndVacancies = async (context) => {
  try {
    context.setContext({...context, isLoading:true});
    const response = await axios.get(`${proxyUrl}/2.0/oauth2/password/?login=${login}&password=${password}&client_id=${clientId}&client_secret=${clientSecret}&hr=0`, requestConfig)
    const myAccessKey = `${response.data.token_type} ${response.data.access_token}`
    context.setContext({...context, isLoading:false});
    localStorage.setItem('myAccessKey', myAccessKey)
    getVacancies({context, accessKey:myAccessKey})
  }
  catch (error) {
    console.error(error)
  }
}

export default getAccessKeyAndVacancies