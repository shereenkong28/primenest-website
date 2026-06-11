import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'
import { T } from '../contexts/LangContext'

const checks = [
  {
    en: 'Direct involvement in swiftlet house operations and harvesting',
    zh: '深度参与马来西亚燕屋运营与燕窝采收',
  },
  {
    en: 'Over 20 years of experience in the Malaysian edible bird\'s nest industry',
    zh: '超过20年马来西亚燕窝行业经验积累',
  },
  {
    en: 'Careful raw material selection and quality inspection',
    zh: '严格原料筛选与品质检验',
  },
  {
    en: 'No bleaching and no artificial additives',
    zh: '不漂白，不添加化学物质',
  },
  {
    en: 'Consistent wholesale supply for international buyers',
    zh: '稳定批发供应能力',
  },
  {
    en: 'Export support based on destination market requirements',
    zh: '根据进口国要求提供出口支持',
  },
]

export default function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="container about">

        <FadeIn className="about__media">
          <div className="about__visual">
            <motion.img
              src="/about-primenest.jpeg"
              alt="PrimeNest Global swiftlet house, Kelantan Malaysia"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
          <div className="about__visual about__visual--second">
            <motion.img
              src="/about-primenest-2.jpeg"
              alt="PrimeNest Global swiftlet house exterior, Kelantan Malaysia"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </FadeIn>

        <FadeIn className="about__copy" delay={0.1}>
          <span className="eyebrow">
            <T en="About PrimeNest Global" zh="关于初盏国际" />
          </span>
          <h2>
            <T en="Direct Source Malaysian Bird's Nest" zh="马来西亚燕窝源头供应商" />
          </h2>
          <p>
            <T
              en="Since 2004, we have been involved in the Malaysian edible bird's nest industry through swiftlet house operations, nest harvesting, raw material sourcing, and quality control. Our direct involvement provides valuable insight into sourcing standards, cleaning methods, and export requirements."
              zh="自2004年以来，我们持续参与马来西亚燕窝产业，涵盖燕屋运营、燕窝采收、原料筛选及品质管控等环节。长期扎根源头市场，让我们对原料标准、清洁工艺及出口要求拥有更深入的了解与经验积累。"
            />
          </p>
          <p>
            <T
              en="We work closely with carefully selected raw materials from Malaysia and focus on quality at every stage, from harvesting and selection to cleaning and export preparation. This approach helps ensure consistency, traceability, and reliable supply for international buyers."
              zh="我们重视每一个环节的品质管理，从燕窝采收到原料筛选、清洁处理及出口备货，均坚持严格标准。通过稳定的供应体系与透明的货源管理，为全球进口商、经销商及品牌客户提供可靠的燕窝产品与服务。"
            />
          </p>
          <StaggerContainer as="ul" className="checks">
            {checks.map((c, i) => (
              <StaggerItem key={i} as="li">
                <T en={c.en} zh={c.zh} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>

      </div>
    </section>
  )
}
