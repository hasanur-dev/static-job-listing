function Tag({ title, button, onClick, hover }) {
    return (
        <div
            className={`bg-light-graying-cyan-tb rounded-l-md ${
                !button ? 'rounded-r-md' : ''
            } flex`}
        >
            <p
                onClick={() => {
                    if (!button && onClick) onClick(title)
                }}
                className={`font-medium rounded-r-md p-1 px-3 text-des-dark-cyan rounded-l-md transition-colors ${
                    hover
                        ? 'hover:bg-des-dark-cyan hover:text-light-graying-cyan-bg '
                        : ''
                }`}
            >
                {title}
            </p>
            {button && (
                <button
                    onClick={() => {
                        if (button && onClick) onClick(title)
                    }}
                    className="bg-des-dark-cyan px-1 text-white transition-all hover:bg-very-dark-cyan rounded-r-md"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            )}
        </div>
    )
}

export default Tag
