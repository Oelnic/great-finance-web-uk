
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Briefcase, FileText, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const ServicesSection = () => {
  const { t } = useTranslation();

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

  return (
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
  );
};
