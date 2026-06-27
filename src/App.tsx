import { FAQTopic } from "./sections/FAQTopic";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import data from "./data/data.json";

function App() {
    return (
        <div className="h-screen w-full overflow-hidden p-4">
            <div className="mx-auto flex h-full max-w-4xl min-h-0 flex-col">
                <Navbar />
                <Hero />

                <div className="mt-2 flex-1 overflow-y-auto pr-1">
                    <div className="flex flex-col gap-4 pb-4">
                        {data.map((item) => (
                            <FAQTopic
                                key={item.id}
                                topicTitle={item.topicTitle}
                                questions={item.questions}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
