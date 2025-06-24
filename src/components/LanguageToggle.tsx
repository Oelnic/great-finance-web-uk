
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useTranslation();
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === 'en' ? 'BG' : 'EN'}</span>
    </Button>
  );
};
