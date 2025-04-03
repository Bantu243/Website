import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
    
        <motion.div
            initial= {{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}

        >
            <h1 className="text-4xl font-bold">Kontakt</h1>
            <p>Du kannst mich hier kontaktieren:</p>
            
        <form>
            <input type="text" placeholder="Dein Name" />
            <textarea placeholder="Deine Nachricht" />
            <button type="submit">Absenden</button>
        

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Absenden</button>
        </form>
        
        </motion.div>
    

    
    );
    };

export default Contact; 