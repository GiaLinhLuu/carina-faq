import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
    return (
        <section className="w-full h-fit flex flex-col items-center justify-center max-w-4xl sticky top-0 z-10 pb-4">
            <div className="flex flex-col items-center text-center md:mb-1 lg:mb-2 lg:leading-tight pt-4 pb-2 font-bold text-2xl md:text-3xl lg:text-4xl">
                <p className="block w-full">
                    <span>Hello it's </span>
                    <span className="text-primary-content">Carina</span>
                </p>
                <p className="block w-full">
                    <span>from </span>
                    <span className=" text-primary-content">
                        Accounting Team!
                    </span>
                </p>
            </div>

            <div className="text-center md:text-lg lg:text-xl italic bg-primary rounded-full px-4">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        "You're looking great today!",
                        1000,
                        "How can I help you today?",
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
