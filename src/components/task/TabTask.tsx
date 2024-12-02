interface TabTaskProps {
    onClick: (type: onClickType) => void
    value: string
}

export const TabTask: React.FC<TabTaskProps> = ({ onClick, value }) => {
    return (
        <div className="flex space-x-4">
            <button className={`px-4 py-2 rounded ${value === "ALL" ? "bg-blue-600 text-white" : "bg-white"}`}
                onClick={() => onClick("ALL")}
            >
                All
            </button>

            <button className={`px-4 py-2 rounded ${value === TypeProps.EPIC ? "bg-blue-600 text-white" : "bg-white"}`}
                onClick={() => onClick(TypeProps.EPIC)}
            >
                Epic
            </button>
            <button className={`px-4 py-2 rounded ${value === TypeProps.TASK ? "bg-blue-600 text-white" : "bg-white"}`}
                onClick={() => onClick(TypeProps.TASK)}
            >
                Task
            </button>
            <button className={`px-4 py-2 rounded ${value === TypeProps.SUB_TASK ? "bg-blue-600 text-white" : "bg-white"}`}
                onClick={() => onClick(TypeProps.SUB_TASK)}
            >
                Subtask
            </button>
            <button className={`px-4 py-2 rounded ${value === TypeProps.BUG ? "bg-blue-600 text-white" : "bg-white"}`}
                onClick={() => onClick(TypeProps.BUG)}
            >
                Bug
            </button>
        </div>
    )
}