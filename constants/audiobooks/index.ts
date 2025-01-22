import { wamp } from "./wamp";
import { reader1 } from "./reader1";
import { reader2 } from "./reader2";
import { reader3 } from "./reader3";
import { reader4 } from "./reader4";
import { tumilu } from './tumilu';
import { mis } from './mis';
import { sam } from './sam';

export const audiobooks = [...wamp, ...reader1, ...reader2, ...reader3, ...reader4, ...tumilu, ...mis, ...sam]