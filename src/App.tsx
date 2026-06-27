import { useMemo, useState } from "react";
import data from "./data/data.json";
import { FAQTopic } from "./sections/FAQTopic";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import type { IFAQTopic } from "./types/types";
import { filterFAQ } from "./utils/utils";
import { AnimatedBackground } from "./components/AnimatedBackground/AnimatedBackground";

function App() {
    const faqData = data as IFAQTopic[];
    const [keyword, setKeyword] = useState("");
    const filteredData = useMemo(() => {
        return filterFAQ(faqData, keyword);
    }, [faqData, keyword]);

    return (
        <div className="relative h-screen w-full overflow-hidden p-4">
            {/* 🌈 BACKGROUND LAYER */}
            <div className="absolute inset-0 -z-10">
                <AnimatedBackground />
            </div>

            {/* 📦 MAIN UI */}
            <div className="relative mx-auto flex h-full max-w-4xl min-h-0 flex-col">
                <Navbar onSearch={setKeyword} />
                <Hero />

                <div className="mt-2 flex-1 overflow-y-auto pr-1">
                    <div className="flex flex-col gap-4 pb-4">
                        {filteredData.map((item) => (
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
