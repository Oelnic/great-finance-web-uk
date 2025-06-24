
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
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
  );
};
