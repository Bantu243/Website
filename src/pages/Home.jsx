import React from "react";
import { motion } from "framer-motion";

const Home = () => 
    {

return (

    <motion.div
        initial= {{ opacity: 0 }}
        animate= {{opacity: 1 }}
        exit= {{ opacity: 0}}
        transition={{ duration: 1 }}
    >
  <h1 className="text-4xl font-bold">Willkommen auf der Home-Seite</h1>
  <p>Hier kannst du mehr über mich erfahren.</p>
  
  </motion.div>
  
    );
   };

export default Home;