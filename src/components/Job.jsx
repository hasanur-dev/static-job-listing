import Tag from './Tag'

function Job({ job, handleAddTag, allTags }) {
    const {
        company,
        logo,
        new: isNew,
        featured,
        position,
        postedAt,
        contract,
        location,
    } = job

    return (
        <div
            className={`max-w-[1110px] w-full relative bg-white flex flex-col gap-2 p-7 sm:px-10 lg:px-12 lg:py-8 rounded-md shadow-md flex-wrap md:flex-row md:items-center cursor-pointer hover:shadow-xl transition-all duration-300 group ${
                featured ? 'border-l-[5px] border-des-dark-cyan' : ''
            }`}
        >
            <div className="sm:flex items-center gap-6">
                <div className="max-sm:absolute max-sm:top-0 max-sm:-translate-y-1/2 block">
                    <img
                        src={logo}
                        alt={`logo of ${company}`}
                        className="h-12 sm:h-16 lg:20"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center flex-wrap">
                        <h4 className="text-des-dark-cyan font-bold text-sm lg:text-base">
                            {company}
                        </h4>
                        {isNew && (
                            <span className="bg-des-dark-cyan font-medium text-light-graying-cyan-tb px-2 py-[2px] rounded-full text-sm ml-2">
                                NEW!
                            </span>
                        )}
                        {featured && (
                            <span className="bg-very-dark-cyan text-light-graying-cyan-tb text-sm font-medium px-2 py-[2px] rounded-full">
                                FEATURED
                            </span>
                        )}
                    </div>
                    <h2 className="text-very-dark-cyan font-bold lg:text-lg group-hover:text-des-dark-cyan transition-colors duration-300">
                        {position}
                    </h2>
                    <div className="flex items-center gap-3">
                        <p className="text-dark-cyan text-sm font-medium">
                            {postedAt}
                        </p>
                        <div className="h-[3px] w-[3px] bg-dark-cyan rounded-full"></div>
                        <p className="text-dark-cyan text-sm font-medium">
                            {contract}
                        </p>
                        <div className="h-[3px] w-[3px] bg-dark-cyan rounded-full"></div>
                        <p className="text-dark-cyan text-sm font-medium">
                            {location}
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-[2px] w-full bg-dark-cyan/30 my-2 lg:hidden"></div>
            <div className="flex gap-3 flex-wrap lg:ml-auto">
                {allTags.map((lang) => (
                    <Tag
                        key={lang}
                        title={lang}
                        button={false}
                        hover={true}
                        onClick={handleAddTag}
                    />
                ))}
            </div>
        </div>
    )
}

export default Job
