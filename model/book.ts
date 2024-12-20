export interface OptionsBook {
    backgroundUrl: string
    backgroundColor: string
    textColor: string
    bgColorButton: string
    tileColor: string,
}

export interface LangImage {
  imageUrl: string
  vocabulary: [
    {
      word: string,
      translation: string,
      audioUrl: string,
      position: { top: number, left: number }
    }
  ]     
}

