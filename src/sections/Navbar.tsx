import { ThemeController } from "./ThemeController";

type NavbarProps = {
    onSearch: (value: string) => void;
};

export const Navbar = ({ onSearch }: NavbarProps) => {
    return (
        <div className="navbar bg-base-100 shadow rounded-lg mb-4">
            <div className="flex-1">
                <input
                    type="text"
                    placeholder="Search a keyword..."
                    className="input input-bordered w-36 md:w-64 lg:w-96"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
            <ThemeController />
        </div>
    );
};
