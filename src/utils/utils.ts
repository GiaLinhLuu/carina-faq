import type { IFAQTopic } from "../types/types";

const getKeywords = (input: string): string[] => {
    return input
        .toLowerCase()
        .trim()
        .split(/\s+/) // split by any whitespace
        .filter(Boolean);
};

const matchesAll = (text: string, keywords: string[]) => {
    const lowerText = text.toLowerCase();

    return keywords.every((keyword) => lowerText.includes(keyword));
};

export const filterFAQ = (data: IFAQTopic[], keyword: string): IFAQTopic[] => {
    const keywords = getKeywords(keyword);

    if (keywords.length === 0) return data;

    return data
        .map((topic) => {
            const filteredQuestions = topic.questions.filter((q) =>
                matchesAll(q.question, keywords),
            );

            return {
                ...topic,
                questions: filteredQuestions,
            };
        })
        .filter((topic) => topic.questions.length > 0);
};
