import axios from "axios";
import { clientSecret, proxyUrl, requestConfig } from "../constants";

const getVacancies = async ({accessKey, context, page = 0}) => {
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
      catalogues:context.filterForm.catalogues,
      payment_from:+context.filterForm.paymentFrom,
      payment_to:+context.filterForm.paymentTo,
      count:4,
      page
    }
  }
  const response = await axios.get(url, requestConfigWithAuth )

  context.setContext({
    ...context, 
    vacancies: response.data.objects,
    totalPages: response.data.total / 4
  })
}

export default getVacancies