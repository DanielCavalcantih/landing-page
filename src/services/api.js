import axios from "axios";

export const getCases = async () => {
  try {
    const cases = await axios.get('https://sp-labs.vercel.app/api/cases');
    return cases.data.cases;
  } catch (error) {
    console.log(error);
  }
}

export const sendContact = async (info) => {
  try {
    const send = await axios.post('https://sp-labs.vercel.app/api/contact', info);
    return send;
  } catch (error) {
    console.log(error);
  }
}
