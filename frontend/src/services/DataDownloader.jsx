import axios from "axios";

const DATA_URL = "https://gitemoji.s3.amazonaws.com/gitemoji.json";
const DATA_STORAGE_KEY = "emojiData";
const EXPIRATION_IN_MINUTES = 10080; // 7 days

const currentTime = () => new Date().getTime();

const hasValidCachedData = () =>
  localStorage.getItem(DATA_STORAGE_KEY) !== null &&
  JSON.parse(localStorage.getItem(DATA_STORAGE_KEY)).expiration > currentTime();

const downloadData = () => axios.get(DATA_URL);

const storeData = data =>
  localStorage.setItem(
    DATA_STORAGE_KEY,
    JSON.stringify({
      data,
      expiration: currentTime() + 60000 * EXPIRATION_IN_MINUTES
    })
  );

const downloadAndStoreData = async () => {
  if (!hasValidCachedData()) {
    const { data } = await downloadData();
    storeData(data);
  } else {
    console.info("Using cached data");
  }
};

const getData = async () => {
  await downloadAndStoreData();
  return JSON.parse(localStorage.getItem(DATA_STORAGE_KEY)).data;
};

export default getData;
