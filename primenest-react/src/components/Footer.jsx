import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'
import { T } from '../contexts/LangContext'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Logo centered on top */}
        <FadeIn className="footer__top">
          <div className="footer__brand-center">
            <img src="/primenest-logo-transparent.png" alt="PrimeNest Global" />
          </div>
          <p className="footer__tagline">
            <T
              en="Direct Source Malaysian Edible Bird Nest Supplier. Owner-operated swiftlet houses in Kelantan since 2004. Wholesale and export supply available."
              zh="马来西亚燕窝直源供应商。自2004年起在吉兰丹经营自营燕屋。提供批发及出口供应。"
            />
          </p>
          <p className="footer__reg">
            <T en="Reg. No. 202603136527 (JR0191222-M)" zh="注册编号 202603136527 (JR0191222-M)" />
          </p>
          <div className="gold-rule" style={{ margin: '1.8rem auto 0' }} />
        </FadeIn>

        {/* Three columns below */}
        <StaggerContainer className="footer__grid footer__grid--3">

          <StaggerItem className="footer__col">
            <h4><T en="Wholesale" zh="批发" /></h4>
            <ul>
              <li><a href="#wholesale-pricing"><T en="Pricing" zh="价格" /></a></li>
              <li><a href="#wholesale-terms"><T en="Trade Terms" zh="贸易条款" /></a></li>
              <li><a href="#compliance"><T en="Compliance" zh="合规认证" /></a></li>
              <li><a href="#contact"><T en="Request Quote" zh="申请报价" /></a></li>
            </ul>
          </StaggerItem>

          <StaggerItem className="footer__col">
            <h4><T en="Company" zh="公司" /></h4>
            <ul>
              <li><a href="#about"><T en="About Us" zh="关于我们" /></a></li>
              <li><a href="#transparency"><T en="Our Stock" zh="货源" /></a></li>
              <li><a href="#markets"><T en="Markets" zh="市场" /></a></li>
              <li><a href="#contact"><T en="Contact" zh="联系我们" /></a></li>
            </ul>
          </StaggerItem>

          <StaggerItem className="footer__col">
            <h4><T en="Contact" zh="联系" /></h4>
            <ul>
              <li>
                <a href="https://wa.me/601172287202" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +60 11-7228 7202
                </a>
              </li>
              <li>
                <a href="https://wa.me/60139889009" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +60 13-988 9009
                </a>
              </li>
              <li>
                <a href="mailto:info@primenestglobal.com.my">info@primenestglobal.com.my</a>
              </li>
              <li style={{ color: 'var(--grey-light)' }}>
                <T en="Kelantan, Malaysia" zh="马来西亚吉兰丹" />
              </li>
            </ul>
          </StaggerItem>

        </StaggerContainer>

        <FadeIn>
          <div className="footer__legal">
            <span>© {new Date().getFullYear()} PrimeNest Global. <T en="All rights reserved." zh="版权所有。" /></span>
            <div className="footer__legal-links">
              <a href="#top"><T en="Privacy Policy" zh="隐私政策" /></a>
              <a href="#top"><T en="Terms of Use" zh="使用条款" /></a>
            </div>
          </div>
        </FadeIn>

      </div>
    </footer>
  )
}
