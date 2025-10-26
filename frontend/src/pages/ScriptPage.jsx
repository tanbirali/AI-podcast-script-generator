import { useState } from "react";

const ScriptPage = () => {
  const [topic, setTopic] = useState("");
  const [scriptData, setScriptData] = useState("");
  const [loading, setLoading] = useState(false);
  const handleGenerateScript = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/podcast/script/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // console.log("Response from API: ", data);
      const rawScript = data.response || "";

      if (typeof rawScript !== "string") {
        throw new Error("Invalid script format");
      }

      let script = rawScript
        .replace(/\*\*.*?\*\*/g, "") // remove **bold**
        .replace(/\*.*?\*/g, "") // remove *italic*
        .replace(/\n\s*\n/g, "\n") // collapse multiple newlines
        .trim();

      setScriptData(script);
      // console.log("Generated script:\n", script);
      setLoading(false);
    } catch (error) {
      console.error("Error generating script:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="bg-black flex flex-col items-center  min-h-screen">
        <h1 className="text-white text-xl lg:text-3xl font-bold ">
          AI Podcast Generator{" "}
        </h1>
        <h2 className="text-white text-xs lg:text-sm font-semibold mt-4">
          Generate a podcast script in seconds
        </h2>
        <div className="flex flex-col items-center justify-center mt-10">
          <textarea
            placeholder="Enter a topic"
            className="border border-gray-300 rounded-lg p-2 w-60 lg:w-1/2 mx-10 placeholder-amber-50 h-32 lg:h-40 text-white"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white font-bold rounded-lg p-2 mt-4 hover:bg-blue-600 transition duration-300"
            onClick={handleGenerateScript}
            disabled={!topic || loading}
          >
            {loading ? "Loading " : "Generate Script"}
          </button>
          <h3 className="text-white text-lg font-semibold flex items-start mt-4  border-y-2 border-white">
            Generated Script:
          </h3>
          {scriptData && (
            <div className="w-full h-auto overflow-auto px-5 pb-20 ">
              <p className="text-white mt-2">{scriptData}</p>
            </div>
          )}
        </div>
        <button
          className="bg-blue-500 text-white font-bold rounded-lg p-2 mt-4"
          disabled={!scriptData}
          //    onClick={handleListen}
        >
          Listen{" "}
        </button>
      </div>
    </div>
  );
};

export default ScriptPage;
