import { ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

export const AnimateCard = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
  index?: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}
