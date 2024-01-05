import Tag from './Tag'

function Header({ selectedTags, selectedTagsLength, handleClear, removeTag }) {
    return (
        <header className="relative flex flex-col items-center ">
            <div className="w-full h-40 bg-des-dark-cyan">
                <img
                    src="/images/bg-header-mobile.svg"
                    alt="header image"
                    className="md:hidden h-full w-full"
                />
                <img
                    src="/images/bg-header-desktop.svg"
                    alt="header image"
                    className="max-md:hidden h-full w-full"
                />
            </div>
            {selectedTagsLength > 0 && (
                <div className=" px-6 sm:px-10 md:px-14 w-full flex justify-center">
                    <div className="transition-all w-full duration-300 bg-white flex rounded-md p-5 sm:px-8 lg:px-12 shadow-md relative -top-10 max-w-[1110px] ">
                        <div className="flex flex-wrap gap-4">
                            {selectedTags.map((tag) => (
                                <Tag
                                    key={tag}
                                    title={tag}
                                    onClick={removeTag}
                                    button={true}
                                />
                            ))}
                        </div>
                        <button
                            onClick={handleClear}
                            className="font-medium text-dark-cyan pl-4 hover:underline hover:text-des-dark-cyan ml-auto"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
