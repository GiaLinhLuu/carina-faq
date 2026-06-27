import { ThemeController } from "./ThemeController";

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-36 md:w-64 lg:w-96"
                />
            </div>
            <ThemeController />
        </div>
    );
};
