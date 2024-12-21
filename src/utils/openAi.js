import { OPENAI_KEY } from "../constants/constants";
import OpenAI from "openai";

const openAi = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openAi;
