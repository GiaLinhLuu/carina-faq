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

export interface TableItem {
    id: string;
    tagType: "table";
    styles: string[];
    header: TableHeader;
    rows: TableRow[];
}

export interface TableHeader {
    id: string;
    tagType: "th";
    cells: TableCell[];
}
export interface TableRow {
    id: string;
    tagType: "tr";
    cells: TableCell[];
}

export interface TableCell {
    id: string;
    tagType: "td";
    markdown: string;
    children: ContentItem[];
}

export interface SwitchableContent {
    id: string;
    tagType: "selection";
    title: string;
    content: ContentItem[];
}

export interface SwitchableItem {
    id: string;
    tagType: "select";
    switchableItems: SwitchableContent[];
}

export type ContentItem =
    | ParagraphItem
    | AnchorItem
    | TableItem
    | SwitchableItem;

export interface IFAQTopic {
    id: string;
    topicTitle: string;
    questions: {
        id: string;
        question: string;
        content: ContentItem[];
    }[];
}
