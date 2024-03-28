 export function activeVoice (language, voices){

    if (language === 'English'){
      const availableVoices = voices?.filter(({lang})=> lang === 'en-US')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }

    if (language === 'French'){
      const availableVoices = voices?.filter(({lang})=> lang === 'fr-FR')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }

    if (language === 'Spanish'){
      const availableVoices = voices?.filter(({lang})=> lang === 'es-ES')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }

    if (language === 'German'){
      const availableVoices = voices?.filter(({lang})=> lang === 'de-DE')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }

    if (language === 'Portuguese'){
      const availableVoices = voices?.filter(({lang})=> lang === 'pt-BR')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }

    if (language === 'Korean'){
      const availableVoices = voices?.filter(({lang})=> lang === 'ko-KR')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }

    if (language === 'Japanese'){
      const availableVoices = voices?.filter(({lang})=> lang === 'ja-JP')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }

    if (language === 'Chinese'){
      const availableVoices = voices?.filter(({lang})=> lang === 'zh-CN')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }




    //  new
    if (language === 'Afrikaans'){
      const availableVoices = voices?.filter(({lang})=> lang === 'af-ZA')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }

    if (language === 'Albanian'){
      const availableVoices = voices?.filter(({lang})=> lang === 'sq-AL')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
   
    if (language === 'Amharic'){
      const availableVoices = voices?.filter(({lang})=> lang === 'am-ET')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }

    if (language === 'Igbo'){
      const availableVoices = voices?.filter(({lang})=> lang === 'ig')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Hausa'){
      const availableVoices = voices?.filter(({lang})=> lang === 'ha-Latn-NG')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Yoruba'){
      const availableVoices = voices?.filter(({lang})=> lang === 'yo-NG')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Basque'){
      const availableVoices = voices?.filter(({lang})=> lang === 'eu-ES')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Bengali'){
      const availableVoices = voices?.filter(({lang})=> lang === 'bn-BD')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Galician'){
      const availableVoices = voices?.filter(({lang})=> lang === 'gl-ES')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Hindi'){
      const availableVoices = voices?.filter(({lang})=> lang === 'hi-IN')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Høgnorsk'){
      const availableVoices = voices?.filter(({lang})=> lang === 'nn-NO')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Inuktitut'){
      const availableVoices = voices?.filter(({lang})=> lang === 'iu')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Irish'){
      const availableVoices = voices?.filter(({lang})=> lang === 'ga-IE')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Kurdish'){
      const availableVoices = voices?.filter(({lang})=> lang === 'ku-TR')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Malay'){
      const availableVoices = voices?.filter(({lang})=> lang === 'ms-MY')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Malagasy'){
      const availableVoices = voices?.filter(({lang})=> lang === 'mg-MG')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Migmaq'){
      const availableVoices = voices?.filter(({lang})=> lang === 'mic')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Somali'){
      const availableVoices = voices?.filter(({lang})=> lang === 'so-SO')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }

    if (language === 'Scottish Gaelic'){
      const availableVoices = voices?.filter(({lang})=> lang === 'gd-GB')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }

       if (language === 'Swahili'){
      const availableVoices = voices?.filter(({lang})=> lang === 'sw-KE')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }

    if (language === 'Sami'){
      const availableVoices = voices?.filter(({lang})=> lang === 'se-NO')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
       if (language === 'Tigrinya'){
      const availableVoices = voices?.filter(({lang})=> lang === 'ti-ER')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }
   
   if (language === 'Zulu'){
      const availableVoices = voices?.filter(({lang})=> lang === 'zu-ZA')
      const active = availableVoices?.find(({name})=> name.includes('Google')) ||
      availableVoices?.find(({name})=> name.includes('Luciana')) || 
      availableVoices?.[0]

      return active
    }








  }