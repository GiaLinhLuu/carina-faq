import ReactMarkdown from "react-markdown";
import type { ContentItem } from "../../types/types";
import { TableRenderer } from "../TableRenderer/TableRenderer";
import { SwitchableContent } from "../SwitchableContent/SwitchableContent";

export const ContentDisplayer = ({ content }: { content: ContentItem }) => {
    switch (content.tagType) {
        case "p":
            return (
                <div className={content.styles.join(" ")}>
                    <ReactMarkdown>{content.markdown}</ReactMarkdown>
                </div>
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
        case "table":
            return <TableRenderer table={content} />;
        case "select":
            return <SwitchableContent data={content} />;
        default:
            return null;
    }
};
