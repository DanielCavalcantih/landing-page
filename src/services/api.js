import axios from "axios";

export const getCases = async () => {
  try {
    const cases = await axios.get('https://sp-labs.vercel.app/api/cases');
    return cases.data.cases;
  } catch (error) {
    console.log(error);
  }
}
