export const getFinancialInsights = async (transactions) => {
  const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your own key (frontend-safe for now/testing)

  const prompt = `You are a financial assistant. Analyze the following transactions and give personalized tips to help the user manage finances better:\n\n${JSON.stringify(
    transactions,
    null,
    2
  )}`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    }),
  });

  const data = await res.json();
  return data.choices[0]?.message?.content || "No insight generated.";
};
