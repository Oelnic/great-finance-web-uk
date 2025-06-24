
import { TrendingUp, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();

  return (
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
  );
};
