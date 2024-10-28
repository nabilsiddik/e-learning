export const allCourseData = [
    {
        id: 1,
        title: "Web Development Masterclass",
        short_desc: "Learn HTML, CSS, JavaScript, and more to become a web developer.",
        rating: 4.7,
        regular_price: 1500,
        discounted_price: 750,
        promo_code: "WEBDEV50",
        thumbnail_url: "https://cdn.10minuteschool.com/images/thumbnails/BCS_Preli_Recorded_Course_Thumbnail.jpg?w=272&h=152",
        intro_video_url: "https://www.youtube.com/embed/AmI7PHx_iRY?si=9vM9Q26gFf8Kq-H6",
        category: "Web Development",
        instructor: {
            instructor_profile_url: "https://www.example.com/instructors/john-doe",
            name: "John Doe",
            education: "BSc in Computer Science, MIT"
        },
        course_modules: {
            enrolled: 1200,
            watch_time: 40,
            total_video: 100,
            video_lectures: 105,
            total_quize: 15,
            total_notes: 80
        },
        modules: [
            {
                id: 1,
                module_title: 'Title 1',
                videos: [
                    {
                        video_id: 1,
                        video_title: 'Video Title 1',
                        video_url: 'https://www.youtube.com/embed/e9rUmy3Q-Sc?si=RQLuey69_4L7TOke'
                    },
                    {
                        video_id: 2,
                        video_title: 'Video Title 2',
                        video_url: 'https://www.youtube.com/embed/e9rUmy3Q-Sc?si=RQLuey69_4L7TOke'
                    },
                ]
            },
            {
                id: 2,
                module_title: 'Title 2',
                videos: [
                    {
                        video_id: 1,
                        video_title: 'Video Title 1',
                        video_url: 'https://www.youtube.com/embed/NWnBxQjssvQ?si=InmCdUKGHB9IyYRe'
                    },
                    {
                        video_id: 2,
                        video_title: 'Video Title 2',
                        video_url: 'https://www.youtube.com/embed/AmI7PHx_iRY?si=9vM9Q26gFf8Kq-H6'
                    },
                    {
                        video_id: 3,
                        video_title: 'Video Title 3',
                        video_url: 'https://www.youtube.com/embed/AmI7PHx_iRY?si=9vM9Q26gFf8Kq-H6'
                    },
                ]
            },
        ],
        content_preview: [
            {
                title: "Introduction to HTML",
                video_url: "https://www.example.com/html_intro"
            }
        ]
    },
    
];
