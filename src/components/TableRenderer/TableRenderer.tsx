import ReactMarkdown from "react-markdown";
import type { TableItem } from "../../types/types";
import { ContentDisplayer } from "../ContentDisplayer/ContentDisplayer";

export const TableRenderer = ({ table }: { table: TableItem }) => {
    /** Data is guaranteed to to be 2 columns */
    return (
        <div
            className={`overflow-x-auto ${table.styles?.join(" ") || ""} rounded-box border border-base-content/5 bg-base-100`}
        >
            <table className={"table w-full"}>
                {table.header && (
                    <thead className="bg-primary">
                        <tr>
                            {table.header.cells.map((cell, index) => (
                                <th
                                    key={cell.id}
                                    className={
                                        index === 0 ? "w-[60%]" : "w-[40%]"
                                    }
                                >
                                    <ReactMarkdown
                                        components={{
                                            p: ({ children }) => (
                                                <p className="pre-line">
                                                    {children}
                                                </p>
                                            ),
                                        }}
                                    >
                                        {cell.markdown}
                                    </ReactMarkdown>
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {table.rows.map((row) => (
                        <tr key={row.id}>
                            {row.cells.map((cell) => (
                                <td key={cell.id}>
                                    {cell.children?.length > 0 ? (
                                        cell.children.map((child) => (
                                            <ContentDisplayer
                                                key={child.id}
                                                content={child}
                                            />
                                        ))
                                    ) : (
                                        <ReactMarkdown
                                            components={{
                                                p: ({ children }) => (
                                                    <p className="pre-line">
                                                        {children}
                                                    </p>
                                                ),
                                            }}
                                        >
                                            {cell.markdown}
                                        </ReactMarkdown>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
