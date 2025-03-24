document.getElementById("predictBtn").addEventListener("click", async () => {
  const inputText = document.getElementById("inputText").value;

  try {
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText, next_words: 5 }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch prediction");
    }

    const data = await response.json();
    console.log(data);
    
    document.getElementById("output").innerText = data.prediction;
  } catch (error) {
    document.getElementById("output").innerText = `Error: ${error.message}`;
  }
});