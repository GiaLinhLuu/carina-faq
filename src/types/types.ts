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
}

export type ContentItem = ParagraphItem | AnchorItem | TableItem;
