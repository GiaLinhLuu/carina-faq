import { ContentDisplayer } from "../components/ContentDisplayer/ContentDisplayer";

interface FAQTopicProps {
    topicTitle: string;
    questions: { id: string; question: string; content: any[] }[];
}

export const FAQTopic = ({ topicTitle, questions }: FAQTopicProps) => {
    return (
        <section className="bg-base-200 shadow rounded-lg w-full max-w-4xl flex flex-col gap-2 p-4">
            <p className="font-bold mb-2">{topicTitle}</p>

            {questions.map((q) => (
                <div
                    tabIndex={0}
                    className="collapse collapse-arrow bg-base-100 border-base-300 border"
                >
                    <div className="collapse-title font-bold">{q.question}</div>
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
