import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <motion.div
            className="text-2xl font-bold text-gray-800 dark:text-white"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            PK
        </motion.div>
    );
};

export default Logo;