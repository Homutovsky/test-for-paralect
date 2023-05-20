import getAccessKeyAndVacancies from "./getAccessKeyAndVacancies";
import getVacancies from "./getVacancies";

const loadVacancies = (context) => {
const myAccessKey = localStorage.getItem("myAccessKey");

  if(myAccessKey) {
    getVacancies({context})
  } else {
    getAccessKeyAndVacancies(context);
  }
}

export default loadVacancies