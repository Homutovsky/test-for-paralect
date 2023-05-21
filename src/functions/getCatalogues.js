import axios from "axios";
import { proxyUrl, requestConfig } from "../constants";

const getCatalogues = async (context) => {
  const { setContext } =  context
  try {
    setContext({...context, isLoading:true});
    const response = await axios.get(`${proxyUrl}/2.0/catalogues/`, requestConfig)
    setContext({...context, catalogues:response.data, isLoading:false})
    localStorage.setItem('localCatalogues', JSON.stringify(response.data))
  }
  catch (error) {
    console.error(error)
    setContext({...context, isLoading:false});
  }
}

export default getCatalogues