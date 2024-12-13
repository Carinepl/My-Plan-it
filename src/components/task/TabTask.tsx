import { TypeProps } from "../../model/TaskModel";
type onClickType = "ALL" | TypeProps

interface TabTaskProps {
    onClick: (type: onClickType) => void
    value: string
}


export const TabTask: React.FC<TabTaskProps> = ({ onClick, value }) => {

    // TODO: CRIAR PASTA DE CONSTANTES QUE EXPORTAM BUTTONOPTIONS
    const buttonOptions = [
        { type: "ALL", label: "All" },
        { type: TypeProps.EPIC, label: "Epic" },
        { type: TypeProps.TASK, label: "Task" },
        { type: TypeProps.SUB_TASK, label: "Subtask" },
        { type: TypeProps.BUG, label: "Bug" },
    ];

    const buttonStyles = (active: boolean) =>
        `px-4 py-2 rounded transition ${active
            ? "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300"
            : "bg-white text-gray-800 hover:bg-blue-600"
        }`;

    return (
        <div className="flex space-x-4">
            {buttonOptions.map((button )=> (
                <button
                    key={button.type}
                    className={buttonStyles(value === button.type)}
                    onClick={() => onClick(button.type as onClickType)}
                >
                    {button.label}
                </button>
            ))}

        </div>
    );
};


