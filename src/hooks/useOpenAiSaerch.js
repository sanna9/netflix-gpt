// import openAi from "../utils/openAi";

// export const useOpenAiSaerch = async (searchText) => {
//   const gptQuery = `Act as a movie Recommendation system and suggest some movies for the query: ${searchText}. Only give me up to 5 movie names.`;

//   try {
//     const aiResults = await openAi.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: gptQuery }],
//     });

//     return aiResults.choices[0]?.message?.content.split(",") || [];
//   } catch (error) {
//     console.error("OpenAI API Error:", error);
//     throw error;
//   }
// };
