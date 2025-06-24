
import { useState } from 'react';

export type Language = 'en' | 'bg';

const translations = {
  en: {
    // Header
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Professional Tax & Accounting Services',
    heroSubtitle: 'Personalized taxation and accounting services for British and Bulgarian clients. Expert guidance for individuals and businesses across the UK.',
    freeConsultation: 'Get Free Consultation',
    viewServices: 'View Services',
    recommendation: '⭐ 98% Recommendation Rate from 41 Reviews',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive accounting and tax services designed to help your business thrive',
    selfEmployed: 'Self-Employed Tax Returns',
    selfEmployedDesc: 'UTR registration, CIS deductions, Self Assessment, and company registration services',
    limitedCompanies: 'Limited Companies',
    limitedCompaniesDesc: 'Comprehensive bookkeeping, VAT returns, payroll management, and year-end accounting',
    generalAccounting: 'General Accounting',
    generalAccountingDesc: 'Affordable accounting services tailored for small and medium businesses',
    selfAssessment: 'Self Assessment',
    selfAssessmentDesc: 'For directors, property income, foreign income, and capital gains taxation',
    
    // About
    whyChoose: 'Why Choose Great Finance?',
    bilingualExpertise: 'Bilingual Expertise',
    bilingualDesc: 'Fluent in English and Bulgarian, serving diverse communities',
    hmrcRegulated: 'HMRC Regulated',
    hmrcDesc: 'Fully compliant with UK regulations and anti-money laundering requirements',
    personalizedService: 'Personalized Service',
    personalizedDesc: 'Tailored solutions for your unique financial needs',
    ukWideCoverage: 'UK-Wide Coverage',
    ukWideDesc: 'Serving clients across major UK cities and remote locations',
    serviceAreas: 'Service Areas',
    remoteServices: '+ Remote services available nationwide',
    
    // Contact
    getInTouch: 'Get In Touch',
    contactSubtitle: 'Ready to take control of your finances? Contact us today.',
    sendMessage: 'Send us a message',
    respondTime: "We'll respond within 24 hours",
    yourName: 'Your Name',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    subject: 'Subject',
    yourMessage: 'Your Message',
    sendMessageBtn: 'Send Message',
    contactInfo: 'Contact Information',
    workingHours: 'Monday to Saturday, 09:00-19:00',
    stayUpdated: 'Stay Updated',
    newsletterDesc: 'Subscribe to our newsletter for tax tips and updates',
    enterEmail: 'Enter your email',
    subscribe: 'Subscribe',
    
    // Footer
    footerDesc: 'Professional tax and accounting services for British and Bulgarian clients. Your trusted partner for all financial matters.',
    compliance: 'Compliance',
    antiMoney: 'Anti-Money Laundering',
    dataProtection: 'Data Protection',
    professionalStandards: 'Professional Standards',
    allRights: 'All rights reserved. | Regulated by HMRC',
    
    // Toast messages
    messageSent: 'Message Sent',
    messageDesc: "Thank you for contacting Great Finance. We'll respond within 24 hours.",
    subscribed: 'Subscribed',
    subscribedDesc: "You've successfully subscribed to our newsletter."
  },
  bg: {
    // Header
    home: 'Начало',
    services: 'Услуги',
    about: 'За нас',
    contact: 'Контакт',
    
    // Hero
    heroTitle: 'Професионални данъчни и счетоводни услуги',
    heroSubtitle: 'Персонализирани данъчни и счетоводни услуги за британски и български клиенти. Експертно ръководство за физически лица и бизнеси в цялата Великобритания.',
    freeConsultation: 'Безплатна консултация',
    viewServices: 'Вижте услугите',
    recommendation: '⭐ 98% препоръчителност от 41 отзива',
    
    // Services
    servicesTitle: 'Нашите услуги',
    servicesSubtitle: 'Цялостни счетоводни и данъчни услуги, създадени да помогнат на вашия бизнес да процъфтява',
    selfEmployed: 'Данъчни декларации за самоосигуряващи се',
    selfEmployedDesc: 'UTR регистрация, CIS приспадания, самооценяване и регистрация на дружества',
    limitedCompanies: 'Дружества с ограничена отговорност',
    limitedCompaniesDesc: 'Цялостно счетоводство, ДДС декларации, заплати и годишно счетоводство',
    generalAccounting: 'Общо счетоводство',
    generalAccountingDesc: 'Достъпни счетоводни услуги за малки и средни предприятия',
    selfAssessment: 'Самооценяване',
    selfAssessmentDesc: 'За директори, доходи от имоти, чуждестранни доходи и капиталови печалби',
    
    // About
    whyChoose: 'Защо да изберете Great Finance?',
    bilingualExpertise: 'Двуезичен експертиз',
    bilingualDesc: 'Свободно владеене на английски и български език',
    hmrcRegulated: 'Регулиран от HMRC',
    hmrcDesc: 'Пълно съответствие с британските регулации и изискванията против изпирането на пари',
    personalizedService: 'Персонализирано обслужване',
    personalizedDesc: 'Персонализирани решения за вашите уникални финансови нужди',
    ukWideCoverage: 'Покритие в цялата Великобритания',
    ukWideDesc: 'Обслужваме клиенти в основните британски градове и отдалечени места',
    serviceAreas: 'Области на обслужване',
    remoteServices: '+ Отдалечени услуги достъпни в цялата страна',
    
    // Contact
    getInTouch: 'Свържете се с нас',
    contactSubtitle: 'Готови сте да поемете контрола над финансите си? Свържете се с нас днес.',
    sendMessage: 'Изпратете ни съобщение',
    respondTime: 'Ще отговорим в рамките на 24 часа',
    yourName: 'Вашето име',
    emailAddress: 'Имейл адрес',
    phoneNumber: 'Телефонен номер',
    subject: 'Тема',
    yourMessage: 'Вашето съобщение',
    sendMessageBtn: 'Изпрати съобщение',
    contactInfo: 'Информация за контакт',
    workingHours: 'Понеделник до събота, 09:00-19:00',
    stayUpdated: 'Бъдете в течение',
    newsletterDesc: 'Абонирайте се за нашия бюлетин за данъчни съвети и актуализации',
    enterEmail: 'Въведете вашия имейл',
    subscribe: 'Абонирай се',
    
    // Footer
    footerDesc: 'Професионални данъчни и счетоводни услуги за британски и български клиенти. Вашият доверен партньор за всички финансови въпроси.',
    compliance: 'Съответствие',
    antiMoney: 'Борба с прането на пари',
    dataProtection: 'Защита на данните',
    professionalStandards: 'Професионални стандарти',
    allRights: 'Всички права запазени. | Регулиран от HMRC',
    
    // Toast messages
    messageSent: 'Съобщението е изпратено',
    messageDesc: 'Благодарим ви, че се свързахте с Great Finance. Ще отговорим в рамките на 24 часа.',
    subscribed: 'Абониран',
    subscribedDesc: 'Успешно се абонирахте за нашия бюлетин.'
  }
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key];
  };
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'bg' : 'en');
  };
  
  return { t, language, toggleLanguage };
};
