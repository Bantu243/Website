import React from "react";
import { motion } from "framer-motion";


const About = () => {

    return (
        <motion.div
            initial= {{ x: '100vw'}}
            animate={{x: 0 }}
            exit={{ x: '-100vw' }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <h1 className="text-4xl font-bold">Über mich</h1>
            <p>Hier ist ein kurze Beschreibung über meine Arbeit und meine Fähigkeiten.</p>

        </motion.div>

    );
};

export default About;