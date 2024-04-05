import { motion } from "framer-motion";

const HomePage = () => {
  return <div className="p-4 bg-red-500">
    <motion.button  
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, rotate: "-5.5deg" }}
      transition={{
        duration: 0.125,
        ease: "easeInOut"
      }}
      className="p-2 text-white bg-blue-500"
      >
    Click Me
  </motion.button> 
  </div>;
};

export default HomePage;
