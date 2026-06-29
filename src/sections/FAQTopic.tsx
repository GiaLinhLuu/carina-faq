import { ContentDisplayer } from "../components/ContentDisplayer/ContentDisplayer";
import type { ContentItem } from "../types/types";

interface FAQTopicProps {
    topicTitle: string;
    questions: { id: string; question: string; content: ContentItem[] }[];
}

export const FAQTopic = ({ topicTitle, questions }: FAQTopicProps) => {
    return (
        <section className="bg-base-100 shadow rounded-lg w-full max-w-4xl flex flex-col gap-2 p-4">
            <p className="font-bold mb-2 text-primary-content">{topicTitle}</p>

            {questions.map((q) => (
                <div
                    key={q.id}
                    className="collapse collapse-arrow bg-base-100 border border-base-300"
                >
                    <input type="checkbox" />
                    <div className="collapse-title font-semibold">
                        {q.question}
                    </div>
                    <div className="collapse-content">
                        {q.content?.map((contentItem) => (
                            <ContentDisplayer
                                key={contentItem.id}
                                content={contentItem}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};
