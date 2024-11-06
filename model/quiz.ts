 interface QuizQuestion {
    id: number;
    startTime: string;
    endTime: string;
    answerStartTime: string;
    answerEndTime: string;
    text: string;
  }
  
interface QuizOptions {
    textColor: string;
    backgroundColor: string;
    progressBackgroundColor: string;
  }
  
export interface VoiceQuiz {
    id: string;
    title: string;
    audioUrl: string;
    audioUrlResponse: string;
    options: QuizOptions;
    total: string;
    manifest: QuizQuestion[];
}