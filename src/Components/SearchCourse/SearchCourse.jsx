import React from 'react'
import PropTypes from 'prop-types'
import { CiSearch } from "react-icons/ci";

const SearchCourse = ({placeholder}) => {
  return (
    <div className='search_course border border-borderColor px-5 py-2 rounded-full flex items-center gap-2'>
        <CiSearch/>
        <input className='focus:outline-none' type="text" placeholder={placeholder} />
    </div>
  )
}


SearchCourse.propTypes = {
  placeholder: PropTypes.string.isRequired
}

export default SearchCourse
