export interface Language {
    code: string;
    flag: string;
    name: string;
    languageCode: string;
  }

  
  
  export const getBrowserLanguage = (languages: Language[]): Language => {
    if (typeof navigator !== 'undefined' && navigator.language) {
      const browserLang = navigator.language;
      return (
        languages.find((lang) => lang.languageCode === browserLang) || 
        languages[0] // Default language
      );
    }
    return languages[0];
  };
  