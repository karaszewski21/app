type ParagraphType = 'text' | 'heading' | 'subheading' | 'quote';

interface Paragraph {
  type: ParagraphType;
  text: string;
}

interface CoverReaderPage {
    type: 'cover';
    title: string;
    subtitle: string;
    image: string;
}
  
interface ContentReaderPage {
    type: 'content';
    paragraphs: Paragraph[];
  }
  
interface EndReaderPage {
    type: 'end';
    title: string;
    subtitle: string;
}

export interface OptionsReader {
    backgroundUrl: string,
    textColor: string,
    tileColor: string,
    text: {
      title: string;
      subTitle: string;
      textColor: string;
      backgroundColor: string;
    },
    image: {
      title: string;
      subTitle: string;
      textColor: string;
      backgroundColor: string;
    },
    english: {
      title: string;
      subTitle: string;
      textColor: string;
      backgroundColor: string;
    }
}

export type ReaderPage = CoverReaderPage | ContentReaderPage | EndReaderPage;