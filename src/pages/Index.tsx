
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageToggle } from "@/components/LanguageToggle";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User, 
  Briefcase, 
  FileText, 
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Shield,
  Award,
  Users,
  TrendingUp
} from "lucide-react";

const Index = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('messageSent'),
      description: t('messageDesc'),
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('subscribed'),
      description: t('subscribedDesc'),
    });
    setNewsletterEmail("");
  };

  const services = [
    {
      title: t('selfEmployed'),
      description: t('selfEmployedDesc'),
      icon: <User className="h-8 w-8 text-blue-600" />
    },
    {
      title: t('limitedCompanies'),
      description: t('limitedCompaniesDesc'),
      icon: <Briefcase className="h-8 w-8 text-blue-600" />
    },
    {
      title: t('generalAccounting'),
      description: t('generalAccountingDesc'),
      icon: <FileText className="h-8 w-8 text-blue-600" />
    },
    {
      title: t('selfAssessment'),
      description: t('selfAssessmentDesc'),
      icon: <Globe className="h-8 w-8 text-blue-600" />
    }
  ];

  const locations = [
    "London", "Manchester", "Birmingham", "Cardiff", 
    "Edinburgh", "Liverpool", "Leeds", "Bristol"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                <TrendingUp className="h-6 w-6 mr-2" />
                <h1 className="text-2xl font-bold">Great Finance</h1>
              </div>
              <span className="ml-3 text-sm text-slate-600 italic font-medium bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">"Be Great"</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium border-b-2 border-transparent hover:border-blue-600">{t('home')}</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium border-b-2 border-transparent hover:border-blue-600">{t('services')}</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium border-b-2 border-transparent hover:border-blue-600">{t('about')}</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium border-b-2 border-transparent hover:border-blue-600">{t('contact')}</a>
            </nav>
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <div className="flex items-center space-x-2 bg-slate-100 px-3 py-2 rounded-lg">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-slate-800">+44 7551 722375</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <Shield className="h-5 w-5 text-green-400 mr-2" />
            <span className="text-white/90 text-sm font-medium">HMRC Regulated • Professional Standards</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('heroTitle')}
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <Award className="h-5 w-5 mr-2" />
              {t('freeConsultation')}
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm bg-white/10 transition-all duration-300">
              {t('viewServices')}
            </Button>
          </div>
          <div className="flex justify-center">
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 text-base shadow-lg">
              {t('recommendation')}
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-slate-900 mb-6">{t('servicesTitle')}</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('servicesSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">{t('whyChoose')}</h3>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="text-white h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">{t('bilingualExpertise')}</h4>
                    <p className="text-slate-600 leading-relaxed">{t('bilingualDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="text-white h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">{t('hmrcRegulated')}</h4>
                    <p className="text-slate-600 leading-relaxed">{t('hmrcDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="text-white h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">{t('personalizedService')}</h4>
                    <p className="text-slate-600 leading-relaxed">{t('personalizedDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Globe className="text-white h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">{t('ukWideCoverage')}</h4>
                    <p className="text-slate-600 leading-relaxed">{t('ukWideDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">{t('serviceAreas')}</h4>
              <div className="grid grid-cols-2 gap-3">
                {locations.map((location, index) => (
                  <Badge key={index} className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 hover:from-blue-200 hover:to-blue-300 text-center py-3 border-0 font-medium">
                    {location}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-6 text-center font-medium bg-gradient-to-r from-green-100 to-green-200 p-3 rounded-lg">
                {t('remoteServices')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-slate-900 mb-6">{t('getInTouch')}</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600">{t('contactSubtitle')}</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-slate-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl">{t('sendMessage')}</CardTitle>
                <CardDescription className="text-blue-100">{t('respondTime')}</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      placeholder={t('yourName')}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="border-2 border-slate-200 focus:border-blue-500 h-12"
                    />
                    <Input
                      type="email"
                      placeholder={t('emailAddress')}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="border-2 border-slate-200 focus:border-blue-500 h-12"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      type="tel"
                      placeholder={t('phoneNumber')}
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-2 border-slate-200 focus:border-blue-500 h-12"
                    />
                    <Input
                      placeholder={t('subject')}
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                      className="border-2 border-slate-200 focus:border-blue-500 h-12"
                    />
                  </div>
                  <Textarea
                    placeholder={t('yourMessage')}
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="border-2 border-slate-200 focus:border-blue-500"
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-12 text-lg font-semibold shadow-lg">
                    {t('sendMessageBtn')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-slate-50">
                <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">{t('contactInfo')}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center group">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="font-semibold text-slate-800">+44 7551 722375</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="p-3 bg-green-100 rounded-lg mr-4 group-hover:bg-green-200 transition-colors">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="font-semibold text-slate-800">info@greatfinance.co.uk</span>
                  </div>
                  <div className="flex items-start group">
                    <div className="p-3 bg-purple-100 rounded-lg mr-4 mt-1 group-hover:bg-purple-200 transition-colors">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-semibold text-slate-800 leading-relaxed">Notcutt House, 36 Southwark Bridge Road,<br />London SE1 9EU</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="p-3 bg-orange-100 rounded-lg mr-4 group-hover:bg-orange-200 transition-colors">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <span className="font-semibold text-slate-800">{t('workingHours')}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">{t('stayUpdated')}</CardTitle>
                  <CardDescription className="text-slate-600">{t('newsletterDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                    <Input
                      type="email"
                      placeholder={t('enterEmail')}
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="border-2 border-slate-200 focus:border-green-500"
                    />
                    <Button type="submit" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8">
                      {t('subscribe')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <div className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <TrendingUp className="h-6 w-6 mr-2" />
                  <h4 className="text-2xl font-bold">Great Finance</h4>
                </div>
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                {t('footerDesc')}
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 p-2 bg-slate-800 rounded-lg hover:bg-slate-700">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-xl">{t('services')}</h5>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-white transition-colors cursor-pointer">{t('selfEmployed')}</li>
                <li className="hover:text-white transition-colors cursor-pointer">{t('limitedCompanies')}</li>
                <li className="hover:text-white transition-colors cursor-pointer">{t('generalAccounting')}</li>
                <li className="hover:text-white transition-colors cursor-pointer">{t('selfAssessment')}</li>
                <li className="hover:text-white transition-colors cursor-pointer">Bookkeeping</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-xl">{t('compliance')}</h5>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-white transition-colors cursor-pointer">{t('hmrcRegulated')}</li>
                <li className="hover:text-white transition-colors cursor-pointer">{t('antiMoney')}</li>
                <li className="hover:text-white transition-colors cursor-pointer">{t('dataProtection')}</li>
                <li className="hover:text-white transition-colors cursor-pointer">{t('professionalStandards')}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Great Finance. {t('allRights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
