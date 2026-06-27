import ReactMarkdown from "react-markdown";
import type { ContentItem } from "../../types/types";

export const ContentDisplayer = ({ content }: { content: ContentItem }) => {
    switch (content.tagType) {
        case "p":
            return (
                <p className={content.styles.join(" ")}>
                    <ReactMarkdown>{content.markdown}</ReactMarkdown>
                </p>
            );
        case "a":
            return (
                <a
                    className={content.styles.join(" ")}
                    target="_blank"
                    href={content.href}
                    rel="noopener noreferrer"
                >
                    <ReactMarkdown>{content.markdown}</ReactMarkdown>
                </a>
            );
        default:
            return null;
    }
};
