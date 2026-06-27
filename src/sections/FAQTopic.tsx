export const FAQTopic = ({ topicTitle }: { topicTitle: string }) => {
    return (
        <section className="bg-base-200 shadow rounded-lg w-full max-w-4xl flex flex-col gap-2 p-4">
            <p className="font-semibold mb-2">{topicTitle}</p>
            {/* Question 1 */}
            <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border"
            >
                <div className="collapse-title font-semibold">
                    How do I create an account?
                </div>
                <div className="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and
                    follow the registration process.
                </div>
            </div>
            {/* Question 2 */}
            <div
                tabIndex={0}
                className="collapse collapse-arrow bg-base-100 border-base-300 border"
            >
                <div className="collapse-title font-semibold">
                    How do I create an account?
                </div>
                <div className="collapse-content text-sm">
                    Click the "Sign Up" button in the top right corner and
                    follow the registration process.
                </div>
            </div>
        </section>
    );
};
