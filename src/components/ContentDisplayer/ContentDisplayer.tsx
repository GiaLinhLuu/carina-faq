import ReactMarkdown from "react-markdown";

export const ContentDisplayer = ({ content }) => {
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
