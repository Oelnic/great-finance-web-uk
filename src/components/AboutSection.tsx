
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Award, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const AboutSection = () => {
  const { t } = useTranslation();

  const locations = [
    "London", "Manchester", "Birmingham", "Cardiff", 
    "Edinburgh", "Liverpool", "Leeds", "Bristol"
  ];

  return (
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
  );
};
