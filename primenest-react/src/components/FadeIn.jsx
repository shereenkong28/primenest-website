import { motion } from 'framer-motion'

const fadeVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}

const hoverSpring = { type: 'spring', stiffness: 280, damping: 22 }

export function FadeIn({ children, delay = 0, className, style, as = 'div', ...props }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      style={style}
      variants={fadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function StaggerContainer({ children, className, style, as = 'div', ...props }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      style={style}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({ children, className, style, as = 'div', ...props }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      style={style}
      variants={fadeVariants}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function ScaleIn({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export { hoverSpring }
