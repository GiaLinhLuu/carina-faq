import ReactMarkdown from "react-markdown";

interface ContentDisplayerProps {
    content: {
        tagType: string;
        styles: string[];
        markdown: string;
    };
}

export const ContentDisplayer = ({ content }: ContentDisplayerProps) => {
    switch (content.tagType) {
        case "p":
            return (
                <p className={content.styles.join(" ")}>
                    <ReactMarkdown>{content.markdown}</ReactMarkdown>
                </p>
            );
        default:
            return null;
    }
};
