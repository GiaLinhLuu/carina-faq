import { useState } from "react";
import type { SwitchableItem } from "../../types/types";
import { SwitchItem } from "./SwitchItem";

export const SwitchableContent = ({ data }: { data: SwitchableItem }) => {
    const [activeItemId, setActiveItemId] = useState<string | null>(null);
    const items = data.switchableItems;

    return (
        <div>
            <select
                onChange={(event) => {
                    setActiveItemId(event.target.value);
                }}
                className="select w-3/4"
                defaultValue={"Select a case"}
            >
                <option disabled={true}>Select a case</option>
                {items.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.title}
                    </option>
                ))}
            </select>

            {activeItemId && <div className="divider"></div>}

            {items.map((item) => (
                <SwitchItem isVisible={item.id === activeItemId} data={item} />
            ))}
        </div>
    );
};
