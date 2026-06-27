import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
    return (
        <section className="w-full h-1/5 flex flex-col items-center justify-center max-w-4xl sticky top-0 z-10 pb-4">
            <div className="flex items-center mb-1md:mb-2 lg:mb-3 p-4 font-bold text-4xl md:text-5xl lg:text-6xl">
                <p>
                    Hello it's{" "}
                    <span className="bg-primary rounded-lg px-2 text-primary-content">
                        Carina!
                    </span>
                </p>
            </div>

            <div className="text-center text-lg md:text-xl lg:text-2xl italic">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        "How can I help you today?",
                        1000,
                        "You're looking great today!",
                        1000,
                        "Take a look at the FAQs below!",
                        1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                />
            </div>
        </section>
    );
};
