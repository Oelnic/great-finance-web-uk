
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const ContactSection = () => {
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

  return (
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
                  <span className="font-semibold text-slate-800 leading-relaxed">
                    Notcutt House, 36 Southwark Bridge Road,<br />London SE1 9EU
                  </span>
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
  );
};
