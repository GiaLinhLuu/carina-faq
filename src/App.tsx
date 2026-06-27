import { FAQTopic } from "./sections/FAQTopic";
import { Hero } from "./sections/Hero";

function App() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center gap-4 overflow-y-auto p-4">
            {/* Header section */}
            <Hero />

            {/* FAQ section */}
            <FAQTopic />
            <FAQTopic />
            <FAQTopic />
            <FAQTopic />
            <FAQTopic />
        </div>
    );
}

export default App;
