import { useEffect, useState } from 'react'
import Header from './components/Header'
import Jobs from './components/Jobs'
import Main from './components/Main'
import data from '../data/data'

export default function App() {
    const [selectedTags, setSelectedTags] = useState([])
    const [jobs, setJobs] = useState(data)
    const selectedTagsLength = selectedTags.length
    const handleAddTag = function (tag) {
        if (!selectedTags.includes(tag))
            setSelectedTags((prevTags) => [...prevTags, tag])
    }
    const handleClear = function () {
        setSelectedTags([])
    }
    const removeTag = function (tag) {
        console.log(tag)
        setSelectedTags((prevTags) => {
            return prevTags.filter((t) => t !== tag)
        })
    }
    // useEffect(() => {
    //     setJobs((oldJobs) => {
    //         const newJobs = oldJobs.filter((job) => {

    //         })
    //     })
    // }, [])
    return (
        <Main>
            <Header
                selectedTags={selectedTags}
                selectedTagsLength={selectedTagsLength}
                handleClear={handleClear}
                removeTag={removeTag}
            />
            <Jobs
                jobs={jobs}
                selectedTagsLength={selectedTagsLength}
                handleAddTag={handleAddTag}
                selectedTags={selectedTags}
            />
        </Main>
    )
}
