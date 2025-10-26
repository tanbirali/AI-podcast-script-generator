import { motion } from "motion/react";
import TestimonialCards from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      {/* HERO Section  */}
      <div
        className="bg-linear-120 from-amber-200 to-amber-400 text-black flex flex-col items-center justify-center text-center min-h-screen px-4 lg:px-0
      gap-6"
      >
        <motion.div
          animate={{ opacity: [0, 1], y: [-50, 0] }}
          transition={{ duration: 0.8 }}
          className="gap-6 max-w-4xl mx-auto flex flex-col "
        >
          <motion.h1
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-6xl font-extrabold"
          >
            🎙️ Create Powerful Podcast Scripts in Minutes — Not Hours
          </motion.h1>
          <motion.p
            animate={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.8 }}
            className="text-lg lg:text-xl font-medium"
          >
            Turn your ideas into engaging, ready-to-record podcast scripts with
            the power of AI. Whether you're a solo creator or a studio team, our
            AI helps you brainstorm, structure, and script episodes
            effortlessly.
          </motion.p>
          <motion.button
            animate={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.8 }}
            className="bg-linear-90 from-red-400 to-red-600 
          flex items-center justify-center text-xl font-bold rounded-2xl p-2 
          cursor-pointer text-white max-w-xl mx-auto"
          >
            👉 Generate Your First Script — Free!
          </motion.button>
        </motion.div>
      </div>
      {/* why choose us section */}
      <div className="bg-linear-120 from-amber-200 to-amber-400 text-black flex flex-col items-center justify-center text-center min-h-screen px-4 lg:px-0 gap-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="gap-6 max-w-4xl mx-auto flex flex-col "
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-6xl font-extrabold"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-lg lg:text-xl font-medium"
          >
            Our AI-driven platform is designed to make podcast scripting
            effortless and efficient. With a focus on creativity and ease of
            use, we empower creators to produce high-quality content in no time.
          </motion.p>
          <motion.ul
            className="gap-2 flex items-start flex-col justify-center mx-auto text-xl 
          font-medium"
          >
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              ✅ AI-Powered Suggestions – Get tailored prompts and outlines to
              kickstart your creativity.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              ✅ Save Time – Focus on recording, not writing.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              ✅ Customizable Output – Adjust tone, duration, and style to match
              your brand.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              ✅ Sound Professional – Polished intros, smooth transitions, and
              natural dialogue.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              ✅ AI Trained for Podcasts – Not just generic writing — fine-tuned
              for podcast storytelling.
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
      {/* features Section  */}
      <div className="bg-linear-120 from-amber-200 to-amber-400 text-black flex flex-col items-center justify-center text-center min-h-screen px-4 lg:px-0 gap-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="gap-6 flex-col flex "
        >
          <h2 className="text-3xl lg:text-6xl font-extrabold">Features</h2>
          <p className="text-lg lg:text-xl font-medium">
            Our platform offers a range of powerful features to enhance your
            podcasting experience.
          </p>
          <div className="mx-auto gap-2">
            {[
              "AI-Powered Script Generation",
              "Customizable Templates",
              "Collaboration Tools",
              "Voice Modulation and Effects",
              "Analytics and Insights",
            ].map((feature) => (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-lg lg:text-xl font-medium flex flex-col items-start justify-center gap-2
              "
                key={feature}
              >
                ✅ {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* who is this for section */}
      <div className="bg-linear-120 from-amber-200 to-amber-400 text-black flex flex-col items-center justify-center text-center min-h-screen px-4 lg:px-0 gap-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="gap-6 max-w-4xl mx-auto flex flex-col "
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-6xl font-extrabold"
          >
            Who is this for?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-lg lg:text-xl font-medium"
          >
            Our platform is designed for podcasters of all levels, from
            beginners to seasoned professionals.
          </motion.p>
          <div className="flex flex-col items-start  mx-auto gap-2">
            {[
              "Solo Creators — Save hours on planning and writing.",
              "Studios & Teams — Maintain consistency across multiple shows.",
              "Brands & Marketers — Produce content-driven podcast campaigns faster.",
              "Educators & Coaches — Generate lesson-based podcast content on demand.",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-lg lg:text-xl font-medium 
                "
              >
                🌊 {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Testimonials Section  */}

      <TestimonialCards />
    </div>
  );
};

export default Home;
