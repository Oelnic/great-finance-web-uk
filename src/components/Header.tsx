
import { Phone, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageToggle } from "@/components/LanguageToggle";

export const Header = () => {
  const { t } = useTranslation();

  return (
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
  );
};
