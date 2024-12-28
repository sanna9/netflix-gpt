import openAi from "../utils/openAi";

export const openAiSearch = async (searchText) => {
  const gptQuery = `Act as a movie Recommendation system and suggest some movies for the query: ${searchText}. Only give me up to 5 movie names.`;

  try {
    const aiResults = await openAi.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    const rawResponse = aiResults.choices[0]?.message?.content || [];

    return rawResponse
      .split("\n") // Split by lines
      .map((line) => line.replace(/^\d+[\.\)]?\s*/, "").trim()) // Remove numbering
      .filter((movie) => movie); // Filter out empty strings
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw error;
  }
};
