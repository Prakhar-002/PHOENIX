/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
? Node modules
*/

import { motion } from "framer-motion";



const Skeleton = () => {
      const skeletonLines = [1, 2, 3];

      // Defines Framer Motion variants for a skeleton loading animation.
      const skeletonVariant = {
            start: {},
            end: {
                  transition: {
                        staggerChildren: 0.15,
                  }
            }
      }

      const skeletonChildrenVariant = {
            start: { opacity: 0.5 },
            end: { opacity: 1 }
      }

      return (
            <motion.div
                  variants={skeletonVariant}
                  initial='start'
                  animate='end'
            >
                  {skeletonLines.map((item) => (
                        <motion.div
                              key={item}
                              className='skeleton'
                              variants={skeletonChildrenVariant}
                              transition={{
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    duration: 0.5,

                              }}
                        />
                  ))}
            </motion.div>
      )
}

export default Skeleton