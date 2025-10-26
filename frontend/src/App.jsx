import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  // const handleListen = async () => {
  //   try {
  //     const response = await client.textToSpeech.convert(
  //       "JBFqnCBsd6RMkjVDRZzb",
  //       {
  //         output_format: "mp3_44100_128",

  //         text: scriptData,

  //         model_id: "eleven_multilingual_v2",
  //       }
  //     );
  //     console.log("Generated audio:\n", response);
  //   } catch (error) {
  //     console.error("Error generating audio:", error);
  //   }
  // };

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
