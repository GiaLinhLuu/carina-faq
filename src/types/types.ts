export interface ParagraphItem {
    id: string;
    tagType: "p";
    styles: string[];
    markdown: string;
}

export interface AnchorItem {
    id: string;
    tagType: "a";
    styles: string[];
    markdown: string;
    href: string;
}

export type ContentItem = ParagraphItem | AnchorItem;
