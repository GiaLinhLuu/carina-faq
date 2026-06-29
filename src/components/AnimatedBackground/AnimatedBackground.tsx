export const AnimatedBackground = () => {
    return (
        <div className="relative h-full w-full overflow-hidden bg-base-200">
            {/* 🌈 1. Base animated gradient */}
            <div className="absolute inset-0 bg-gradient-anim opacity-60" />

            {/* 🫧 2. Floating blobs */}
            <div className="absolute -top-32 -left-32 h-96 w-96 animate-blob rounded-full bg-primary opacity-20 blur-3xl" />
            <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] animate-blob animation-delay-2000 rounded-full bg-secondary opacity-20 blur-3xl" />
            <div className="absolute bottom-[-10rem] left-1/8 h-[30rem] w-[30rem] animate-blob animation-delay-4000 rounded-full bg-accent opacity-10 blur-3xl" />

            {/* 🌫️ 3. Noise overlay (optional but recommended) */}
            <div className="absolute inset-0 bg-noise opacity-[0.04]" />
        </div>
    );
};
