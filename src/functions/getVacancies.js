import axios from "axios";
import { clientSecret, proxyUrl, requestConfig } from "../constants";


const getVacancies = async ({context, accessKey = '', page = 0}) => {
  const myAccessKey = localStorage.getItem("myAccessKey");
  const url = `${proxyUrl}/2.0/vacancies/`;
  const requestConfigWithAuth = {
    ...requestConfig,
    headers: {
      ...requestConfig.headers,
      authorization : accessKey || myAccessKey,
      'X-Api-App-Id' : clientSecret
    },
    params: {
      published:1,
      keyword:context.keyword,
      catalogues:context.filterForm.catalogues,
      payment_from:+context.filterForm.paymentFrom,
      payment_to:+context.filterForm.paymentTo,
      count:100,
      page
    }
  }
  context.setContext({...context, isLoading:true});
  const response = await axios.get(url, requestConfigWithAuth )


  context.setContext({
    ...context, 
    vacancies: response.data.objects,
    totalPages: Math.ceil(response.data.total / 100),
    isLoading:false
  })
}

export default getVacancies