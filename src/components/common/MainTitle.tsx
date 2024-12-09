export const MainTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <h1 className="text-3xl font-bold text-purple-950">
            {title}
        </h1>
    )
}