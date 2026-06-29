import topic1Data from "./topic1.json";
import topic2Data from "./topic2.json";
import topic3Data from "./topic3.json";
import topic4Data from "./topic4.json";
import topic5Data from "./topic5.json";
import topic6Data from "./topic6.json";

import type { IFAQTopic } from "../types/types";

const faqDataFromFiles: IFAQTopic[] = [
    topic1Data as IFAQTopic,
    topic2Data as IFAQTopic,
    topic3Data as IFAQTopic,
    topic4Data as IFAQTopic,
    topic5Data as IFAQTopic,
    topic6Data as IFAQTopic,
];

export function getFAQData(): IFAQTopic[] {
    return [...faqDataFromFiles];
}

export default getFAQData;
