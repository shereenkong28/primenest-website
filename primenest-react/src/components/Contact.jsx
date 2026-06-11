import { useState, useEffect } from 'react'

const DIAL_CODES = {
  Afghanistan:'+93',Albania:'+355',Algeria:'+213',Andorra:'+376',Angola:'+244',
  'Antigua and Barbuda':'+1-268',Argentina:'+54',Armenia:'+374',Australia:'+61',
  Austria:'+43',Azerbaijan:'+994',Bahamas:'+1-242',Bahrain:'+973',Bangladesh:'+880',
  Barbados:'+1-246',Belarus:'+375',Belgium:'+32',Belize:'+501',Benin:'+229',
  Bhutan:'+975',Bolivia:'+591','Bosnia and Herzegovina':'+387',Botswana:'+267',
  Brazil:'+55',Brunei:'+673',Bulgaria:'+359','Burkina Faso':'+226',Burundi:'+257',
  'Cabo Verde':'+238',Cambodia:'+855',Cameroon:'+237',Canada:'+1',
  'Central African Republic':'+236',Chad:'+235',Chile:'+56',China:'+86',
  Colombia:'+57',Comoros:'+269',Congo:'+242','Costa Rica':'+506',Croatia:'+385',
  Cuba:'+53',Cyprus:'+357','Czech Republic':'+420',Denmark:'+45',Djibouti:'+253',
  Dominica:'+1-767','Dominican Republic':'+1-809',Ecuador:'+593',Egypt:'+20',
  'El Salvador':'+503','Equatorial Guinea':'+240',Eritrea:'+291',Estonia:'+372',
  Eswatini:'+268',Ethiopia:'+251',Fiji:'+679',Finland:'+358',France:'+33',
  Gabon:'+241',Gambia:'+220',Georgia:'+995',Germany:'+49',Ghana:'+233',
  Greece:'+30',Grenada:'+1-473',Guatemala:'+502',Guinea:'+224','Guinea-Bissau':'+245',
  Guyana:'+592',Haiti:'+509',Honduras:'+504','Hong Kong':'+852',Hungary:'+36',
  Iceland:'+354',India:'+91',Indonesia:'+62',Iran:'+98',Iraq:'+964',Ireland:'+353',
  Israel:'+972',Italy:'+39',Jamaica:'+1-876',Japan:'+81',Jordan:'+962',
  Kazakhstan:'+7',Kenya:'+254',Kiribati:'+686',Kuwait:'+965',Kyrgyzstan:'+996',
  Laos:'+856',Latvia:'+371',Lebanon:'+961',Lesotho:'+266',Liberia:'+231',
  Libya:'+218',Liechtenstein:'+423',Lithuania:'+370',Luxembourg:'+352',
  Madagascar:'+261',Malawi:'+265',Malaysia:'+60',Maldives:'+960',Mali:'+223',
  Malta:'+356','Marshall Islands':'+692',Mauritania:'+222',Mauritius:'+230',
  Mexico:'+52',Micronesia:'+691',Moldova:'+373',Monaco:'+377',Mongolia:'+976',
  Montenegro:'+382',Morocco:'+212',Mozambique:'+258',Myanmar:'+95',Namibia:'+264',
  Nauru:'+674',Nepal:'+977',Netherlands:'+31','New Zealand':'+64',Nicaragua:'+505',
  Niger:'+227',Nigeria:'+234','North Korea':'+850','North Macedonia':'+389',
  Norway:'+47',Oman:'+968',Pakistan:'+92',Palau:'+680',Palestine:'+970',
  Panama:'+507','Papua New Guinea':'+675',Paraguay:'+595',Peru:'+51',
  Philippines:'+63',Poland:'+48',Portugal:'+351',Qatar:'+974',Romania:'+40',
  Russia:'+7',Rwanda:'+250','Saint Kitts and Nevis':'+1-869','Saint Lucia':'+1-758',
  'Saint Vincent and the Grenadines':'+1-784',Samoa:'+685','San Marino':'+378',
  'Sao Tome and Principe':'+239','Saudi Arabia':'+966',Senegal:'+221',Serbia:'+381',
  Seychelles:'+248','Sierra Leone':'+232',Singapore:'+65',Slovakia:'+421',
  Slovenia:'+386','Solomon Islands':'+677',Somalia:'+252','South Africa':'+27',
  'South Korea':'+82','South Sudan':'+211',Spain:'+34','Sri Lanka':'+94',
  Sudan:'+249',Suriname:'+597',Sweden:'+46',Switzerland:'+41',Syria:'+963',
  Taiwan:'+886',Tajikistan:'+992',Tanzania:'+255',Thailand:'+66','Timor-Leste':'+670',
  Togo:'+228',Tonga:'+676','Trinidad and Tobago':'+1-868',Tunisia:'+216',
  Turkey:'+90',Turkmenistan:'+993',Tuvalu:'+688',Uganda:'+256',Ukraine:'+380',
  'United Arab Emirates':'+971','United Kingdom':'+44','United States':'+1',
  Uruguay:'+598',Uzbekistan:'+998',Vanuatu:'+678','Vatican City':'+379',
  Venezuela:'+58',Vietnam:'+84',Yemen:'+967',Zambia:'+260',Zimbabwe:'+263',
}

import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { T } from '../contexts/LangContext'
import { events } from '../analytics'

const WhatsAppIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: size, height: size }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
  </svg>
)

const WeChatIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: size, height: size }}>
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.539c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.898-6.355-7.596-6.355zm-2.113 3.26a.932.932 0 1 1 0 1.864.932.932 0 0 1 0-1.864zm4.274 0a.932.932 0 1 1 0 1.864.932.932 0 0 1 0-1.864zM24 14.979c0-3.5-3.446-6.337-7.7-6.337-4.255 0-7.7 2.838-7.7 6.337 0 3.5 3.445 6.336 7.7 6.336.833 0 1.63-.112 2.376-.315a.71.71 0 0 1 .59.082l1.566.916a.268.268 0 0 0 .137.044.243.243 0 0 0 .24-.242c0-.06-.023-.12-.04-.176l-.322-1.215a.485.485 0 0 1 .174-.547C23.076 18.71 24 16.94 24 14.979zm-10.189-.9a.766.766 0 1 1 0-1.532.766.766 0 0 1 0 1.532zm4.978 0a.766.766 0 1 1 0-1.532.766.766 0 0 1 0 1.532z"/>
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const WA_MSG = encodeURIComponent("Hi PrimeNest Global, I'm interested in a wholesale enquiry. Could you please share more details on pricing and MOQ?")

const contactInfo = [
  { icon: <EmailIcon />, labelEn: 'Email', labelZh: '电子邮箱', value: 'info@primenestglobal.com.my', href: 'mailto:info@primenestglobal.com.my' },
  { icon: <ClockIcon />, labelEn: 'Business Hours', labelZh: '营业时间', valueEn: 'Mon – Sat, 09:00 – 18:00 (MYT)', valueZh: '周一至周六 09:00–18:00（马来西亚时间）' },
  { icon: <LocationIcon />, labelEn: 'Location', labelZh: '所在地', valueEn: 'Malaysia', valueZh: '马来西亚' },
]

export default function Contact() {
  const [status, setStatus] = useState('')
  const [dialCode, setDialCode] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [wechatOpen, setWechatOpen] = useState(false)

  useEffect(() => {
    if (!wechatOpen) return
    const onKey = e => { if (e.key === 'Escape') setWechatOpen(false) }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [wechatOpen])

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/

  function validateEmail(val) {
    if (!val) return 'Email is required.'
    if (!emailRegex.test(val)) return 'Please enter a valid email (e.g. name@example.com).'
    return ''
  }

  function handleCountryChange(e) {
    const country = e.target.value
    const code = DIAL_CODES[country] || ''
    setDialCode(code)
    setPhone('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    const err = validateEmail(email)
    if (err) { setEmailError(err); return }
    setStatus('Thank you — we will respond within one business day.')
    setDialCode('')
    setPhone('')
    setEmail('')
    setEmailError('')
    e.target.reset()
  }

  return (
    <section className="section" id="contact">
      <div className="container">

        <FadeIn className="section-head section-head--center">
          <span className="eyebrow"><T en="Get In Touch" zh="联系我们" /></span>
          <h2><T en="Wholesale & Export Inquiry" zh="批发与出口询盘" /></h2>
          <p className="section-lede">
            <T
              en="Contact us for wholesale pricing, export enquiries, product specifications, and sourcing requirements."
              zh="欢迎联系我们获取批发报价、出口咨询、产品规格及采购需求支持。"
            />
          </p>
          <div className="gold-rule" />
        </FadeIn>

        {/* Primary contact buttons — WhatsApp + WeChat */}
        <FadeIn>
          <div className="ct-wa-primary">

            {/* WhatsApp Sales — single primary button */}
            <motion.a
              className="ct-wa-main"
              href={`https://wa.me/601172287202?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => events.whatsappClick('contact_section')}
            >
              <span className="ct-wa-main__icon"><WhatsAppIcon size={28} /></span>
              <div className="ct-wa-main__text">
                <span className="ct-wa-main__title"><T en="WhatsApp Sales" zh="WhatsApp 销售咨询" /></span>
                <span className="ct-wa-main__num">+60 11-7228 7202</span>
              </div>
              <span className="ct-wa-main__arrow">→</span>
            </motion.a>

            {/* WeChat — click to open QR modal */}
            <motion.button
              type="button"
              className="ct-wa-main ct-wa-main--wechat"
              onClick={() => { setWechatOpen(true); events.wechatClick() }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Open WeChat QR code"
            >
              <span className="ct-wa-main__icon ct-wa-main__icon--wechat"><WeChatIcon size={28} /></span>
              <div className="ct-wa-main__text">
                <span className="ct-wa-main__title"><T en="WeChat Inquiry" zh="微信咨询" /></span>
                <span className="ct-wa-main__num"><T en="Click to View QR Code" zh="点击查看二维码" /></span>
              </div>
              <span className="ct-wa-main__arrow">→</span>
            </motion.button>

          </div>
        </FadeIn>

        <div className="ct-layout">

          {/* Left — contact info */}
          <FadeIn className="ct-info">
            <p className="ct-info__heading"><T en="Other ways to reach us" zh="其他联系方式" /></p>
            <div className="ct-info__cards">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  className="ct-info__card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <span className="ct-info__icon">{item.icon}</span>
                  <div>
                    <span className="ct-info__label">
                      <T en={item.labelEn} zh={item.labelZh} />
                    </span>
                    <span className="ct-info__value">
                      {item.href
                        ? <a href={item.href} onClick={() => events.emailClick()}>{item.value}</a>
                        : <T en={item.valueEn} zh={item.valueZh} />}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Right — enquiry form */}
          <FadeIn delay={0.12}>
            <div className="ct-form-wrap">
              <p className="ct-form-wrap__heading">
                <T en="Or send us a written enquiry" zh="或填写询盘表单" />
              </p>
              <form className="ct-form" onSubmit={handleSubmit} noValidate>

                <div className="ct-form__row">
                  <div className="field">
                    <label htmlFor="cName"><T en="Full Name" zh="姓名" /></label>
                    <input id="cName" name="name" type="text" placeholder="Your name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="cEmail"><T en="Email" zh="邮箱" /></label>
                    <input
                      id="cEmail"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={e => { setEmail(e.target.value); if (emailError) setEmailError(validateEmail(e.target.value)) }}
                      onBlur={e => setEmailError(validateEmail(e.target.value))}
                      style={{ borderColor: emailError ? '#f87171' : undefined }}
                      required
                    />
                    {emailError && <span className="ct-field-error">{emailError}</span>}
                  </div>
                </div>

                <div className="ct-form__row">
                  <div className="field">
                    <label htmlFor="cCountry"><T en="Country" zh="国家" /></label>
                    <select id="cCountry" name="country" onChange={handleCountryChange}>
                      <option value="">Select…</option>
                      <optgroup label="── Priority Markets ──">
                        <option>Malaysia</option>
                        <option>China</option>
                        <option>Singapore</option>
                        <option>Taiwan</option>
                        <option>Hong Kong</option>
                        <option>Brunei</option>
                        <option>Indonesia</option>
                        <option>Australia</option>
                      </optgroup>
                      <optgroup label="── All Countries ──">
                        <option>Afghanistan</option><option>Albania</option><option>Algeria</option><option>Andorra</option><option>Angola</option><option>Antigua and Barbuda</option><option>Argentina</option><option>Armenia</option><option>Austria</option><option>Azerbaijan</option>
                        <option>Bahamas</option><option>Bahrain</option><option>Bangladesh</option><option>Barbados</option><option>Belarus</option><option>Belgium</option><option>Belize</option><option>Benin</option><option>Bhutan</option><option>Bolivia</option><option>Bosnia and Herzegovina</option><option>Botswana</option><option>Brazil</option><option>Bulgaria</option><option>Burkina Faso</option><option>Burundi</option>
                        <option>Cabo Verde</option><option>Cambodia</option><option>Cameroon</option><option>Canada</option><option>Central African Republic</option><option>Chad</option><option>Chile</option><option>Colombia</option><option>Comoros</option><option>Congo</option><option>Costa Rica</option><option>Croatia</option><option>Cuba</option><option>Cyprus</option><option>Czech Republic</option>
                        <option>Denmark</option><option>Djibouti</option><option>Dominica</option><option>Dominican Republic</option>
                        <option>Ecuador</option><option>Egypt</option><option>El Salvador</option><option>Equatorial Guinea</option><option>Eritrea</option><option>Estonia</option><option>Eswatini</option><option>Ethiopia</option>
                        <option>Fiji</option><option>Finland</option><option>France</option>
                        <option>Gabon</option><option>Gambia</option><option>Georgia</option><option>Germany</option><option>Ghana</option><option>Greece</option><option>Grenada</option><option>Guatemala</option><option>Guinea</option><option>Guinea-Bissau</option><option>Guyana</option>
                        <option>Haiti</option><option>Honduras</option><option>Hungary</option>
                        <option>Iceland</option><option>India</option><option>Iran</option><option>Iraq</option><option>Ireland</option><option>Israel</option><option>Italy</option>
                        <option>Jamaica</option><option>Japan</option><option>Jordan</option>
                        <option>Kazakhstan</option><option>Kenya</option><option>Kiribati</option><option>Kuwait</option><option>Kyrgyzstan</option>
                        <option>Laos</option><option>Latvia</option><option>Lebanon</option><option>Lesotho</option><option>Liberia</option><option>Libya</option><option>Liechtenstein</option><option>Lithuania</option><option>Luxembourg</option>
                        <option>Madagascar</option><option>Malawi</option><option>Maldives</option><option>Mali</option><option>Malta</option><option>Marshall Islands</option><option>Mauritania</option><option>Mauritius</option><option>Mexico</option><option>Micronesia</option><option>Moldova</option><option>Monaco</option><option>Mongolia</option><option>Montenegro</option><option>Morocco</option><option>Mozambique</option><option>Myanmar</option>
                        <option>Namibia</option><option>Nauru</option><option>Nepal</option><option>Netherlands</option><option>New Zealand</option><option>Nicaragua</option><option>Niger</option><option>Nigeria</option><option>North Korea</option><option>North Macedonia</option><option>Norway</option>
                        <option>Oman</option>
                        <option>Pakistan</option><option>Palau</option><option>Palestine</option><option>Panama</option><option>Papua New Guinea</option><option>Paraguay</option><option>Peru</option><option>Philippines</option><option>Poland</option><option>Portugal</option>
                        <option>Qatar</option>
                        <option>Romania</option><option>Russia</option><option>Rwanda</option>
                        <option>Saint Kitts and Nevis</option><option>Saint Lucia</option><option>Saint Vincent and the Grenadines</option><option>Samoa</option><option>San Marino</option><option>Sao Tome and Principe</option><option>Saudi Arabia</option><option>Senegal</option><option>Serbia</option><option>Seychelles</option><option>Sierra Leone</option><option>Slovakia</option><option>Slovenia</option><option>Solomon Islands</option><option>Somalia</option><option>South Africa</option><option>South Korea</option><option>South Sudan</option><option>Spain</option><option>Sri Lanka</option><option>Sudan</option><option>Suriname</option><option>Sweden</option><option>Switzerland</option><option>Syria</option>
                        <option>Tajikistan</option><option>Tanzania</option><option>Thailand</option><option>Timor-Leste</option><option>Togo</option><option>Tonga</option><option>Trinidad and Tobago</option><option>Tunisia</option><option>Turkey</option><option>Turkmenistan</option><option>Tuvalu</option>
                        <option>Uganda</option><option>Ukraine</option><option>United Arab Emirates</option><option>United Kingdom</option><option>United States</option><option>Uruguay</option><option>Uzbekistan</option>
                        <option>Vanuatu</option><option>Vatican City</option><option>Venezuela</option><option>Vietnam</option>
                        <option>Yemen</option>
                        <option>Zambia</option><option>Zimbabwe</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="cPhone"><T en="Phone / WhatsApp" zh="电话 / WhatsApp" /></label>
                    <div className="ct-phone">
                      {dialCode && <span className="ct-phone__code">{dialCode}</span>}
                      <input
                        id="cPhone"
                        name="phone"
                        type="tel"
                        placeholder={dialCode ? 'Phone number' : 'Select country first'}
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="ct-form__row">
                  <div className="field">
                    <label htmlFor="cInterest"><T en="Enquiry Type" zh="询盘类型" /></label>
                    <select id="cInterest" name="interest">
                      <option>Wholesale Enquiry / 批发询价</option>
                      <option>Export Quote / 出口报价</option>
                      <option>Product Specifications / 产品规格资料</option>
                      <option>Trial Order Enquiry / 试单咨询</option>
                      <option>General Enquiry / 一般咨询</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="cProduct"><T en="Product Interest" zh="产品类型" /></label>
                    <select id="cProduct" name="product">
                      <option value="">— Select / 请选择 —</option>
                      <option>Sabah Cave Nest / 沙巴天然洞燕</option>
                      <option>Dry-Picked Bird's Nest / 干挑燕窝</option>
                      <option>Semi Dry-Picked Bird's Nest / 半干挑燕窝</option>
                      <option>Wet-Picked Bird's Nest / 湿挑燕窝</option>
                      <option>Sarawak White Cave Nest / 砂拉越天然白洞燕</option>
                      <option>Golden Cave Nest Pieces / 金丝洞燕片</option>
                      <option>Cave Nest Pieces / 洞燕片</option>
                      <option>Mixed / 混合</option>
                    </select>
                  </div>
                </div>

                <div className="ct-form__row">
                  <div className="field">
                    <label htmlFor="cQty"><T en="Quantity Needed" zh="所需数量" /></label>
                    <select id="cQty" name="qty">
                      <option value="">— Select / 请选择 —</option>
                      <option>Trial Order (1–5 kg)</option>
                      <option>5–20 kg</option>
                      <option>20–50 kg</option>
                      <option>50–100 kg</option>
                      <option>100 kg+</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="cMonthly"><T en="Monthly Demand" zh="月需求量" /></label>
                    <select id="cMonthly" name="monthly">
                      <option value="">— Select / 请选择 —</option>
                      <option>1 – 5 kg / month</option>
                      <option>5 – 20 kg / month</option>
                      <option>20 – 50 kg / month</option>
                      <option>50 – 100 kg / month</option>
                      <option>100 kg+ / month</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="cMessage"><T en="Message" zh="留言" /></label>
                  <textarea id="cMessage" name="message" rows={4} placeholder="Tell us about your requirements…" required />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn--gold btn--full"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <T en="Send Enquiry" zh="发送询盘" />
                </motion.button>

                {status && (
                  <motion.p className="ct-form__success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                    ✓ {status}
                  </motion.p>
                )}

              </form>
            </div>
          </FadeIn>

        </div>
      </div>
      {/* WeChat QR Modal */}
      <AnimatePresence>
        {wechatOpen && (
          <motion.div
            className="wc-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setWechatOpen(false)}
          >
            <motion.div
              className="wc-modal"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="wc-modal__close"
                onClick={() => setWechatOpen(false)}
                aria-label="Close"
              >✕</button>

              <div className="wc-modal__icon">
                <WeChatIcon size={32} />
              </div>
              <h3 className="wc-modal__title">微信咨询</h3>
              <p className="wc-modal__desc">请使用微信扫描二维码添加好友</p>
              <div className="wc-modal__qr">
                <img src="/we chat qr.jpeg" alt="WeChat QR Code" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
