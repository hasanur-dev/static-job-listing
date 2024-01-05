import Job from './Job'

function Jobs({ jobs, selectedTagsLength, handleAddTag, selectedTags }) {
    return (
        <section
            className={`px-6 sm:px-10 md:px-14 flex flex-col gap-12 lg:gap-8 items-center ${
                selectedTagsLength === 0 ? 'mt-16' : 'mt-4'
            }`}
        >
            {jobs.map((job) => {
                const { id, role, level, languages, tools } = job
                const allTags = [role, level, ...languages, ...tools]

                const filter = selectedTags.every((tag) => {
                    if (allTags.includes(tag)) return true
                    return false
                })

                if (filter)
                    return (
                        <Job
                            key={id}
                            job={job}
                            allTags={allTags}
                            handleAddTag={handleAddTag}
                        />
                    )
            })}
        </section>
    )
}

export default Jobs
