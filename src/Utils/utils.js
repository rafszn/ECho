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

  }