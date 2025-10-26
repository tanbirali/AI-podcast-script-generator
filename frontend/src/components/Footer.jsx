import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="bg-linear-90 from-amber-200  to-amber-400 text-white text-sm  bg-black/65 w-full flex h-26 ">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto text-2xl"
      >
        Made with ❤️ by <a href="https://github.com/tanbirali/">Tanbir Ali</a>
      </motion.span>
    </footer>
  );
};

export default Footer;
