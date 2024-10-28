import React from 'react'

const CourseModules = () => {
  return (
    <div id='course_modules'>
        <div className="collapse collapse-arrow bg-base-200 mb-3 shadow-md">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3 shadow-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 mb-3 shadow-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
    </div>
  )
}

export default CourseModules
