import ReactMarkdown from "react-markdown";
import type { TableItem } from "../../types/types";

export const TableRenderer = ({ table }: { table: TableItem }) => {
    return (
        <div
            className={`overflow-x-auto ${table.styles?.join(" ") || ""} rounded-box border border-base-content/5 bg-base-100`}
        >
            <table className={"table"}>
                {table.header && (
                    <thead className="bg-primary">
                        <tr>
                            {table.header.cells.map((cell) => (
                                <th key={cell.id}>
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
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
