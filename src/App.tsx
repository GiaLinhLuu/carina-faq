import { FAQTopic } from "./sections/FAQTopic";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";

function App() {
    return (
        <div className="h-screen w-full overflow-hidden p-4">
            <div className="mx-auto flex h-full max-w-4xl min-h-0 flex-col">
                <Navbar />
                <Hero />

                <div className="mt-2 flex-1 overflow-y-auto pr-1">
                    <div className="flex flex-col gap-4 pb-4">
                        <FAQTopic />
                        <FAQTopic />
                        <FAQTopic />
                        <FAQTopic />
                        <FAQTopic />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
