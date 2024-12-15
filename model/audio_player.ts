import { LangType } from ".";

export interface Version {
    title: string;
    subTitle: string;
    textColor: string;
    backgroundColor: string;
    type: LangType,
    duration: number,
    imageUrl: string,
    audioFile: string,
}

export interface OptionsPlayer {
    backgroundUrl: string,
    textColor: string,
    tileColor: string,
}