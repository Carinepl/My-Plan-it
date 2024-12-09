import { TypeProps } from "../../model/TaskModel";
type onClickType = "ALL" | TypeProps

interface TabTaskProps {
    onClick: (type: onClickType) => void
    value: string
}


export const TabTask: React.FC<TabTaskProps> = ({ onClick, value }) => {

    const buttonOptions = [
        { type: "ALL", label: "All" },
        { type: TypeProps.EPIC, label: "Epic" },
        { type: TypeProps.TASK, label: "Task" },
        { type: TypeProps.SUB_TASK, label: "Subtask" },
        { type: TypeProps.BUG, label: "Bug" },
    ];

    const buttonStyles = (active: boolean) =>
        `px-4 py-2 rounded transition ${active
            ? "bg-purple-600 text-white shadow-md"
            : "bg-white text-gray-800 hover:bg-purple-100"
        }`;

    return (
        <div className="flex space-x-4">
            {buttonOptions.map((button, i) => (
                <button
                    key={`k${i}`}
                    className={buttonStyles(value === button.type)}
                    onClick={() => onClick(button.type as onClickType)}
                >
                    {button.label}
                </button>
            ))}
        </div>
    );
};