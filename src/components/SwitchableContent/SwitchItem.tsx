import type { SwitchableContent } from "../../types/types";
import { ContentDisplayer } from "../ContentDisplayer/ContentDisplayer";

export const SwitchItem = ({
    data,
    isVisible,
}: {
    data: SwitchableContent;
    isVisible: boolean;
}) => {
    return (
        isVisible && (
            <>
                {data.content?.map((contentItem) => (
                    <ContentDisplayer
                        key={contentItem.id}
                        content={contentItem}
                    />
                ))}
            </>
        )
    );
};
