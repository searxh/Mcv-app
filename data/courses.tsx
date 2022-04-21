const courses = [
    {
        id:2182203.01,
        course:'Probability and Statistics for Engineers Section 1 (For ICE)',
        year:'2021/2',
        png: require('../assets/2182204.png'),
        announcements:[
            {
                id:1,
                announcement:'Midterm Grades',
                content:"Dear students,\nHere are the scores for midterm exam and tentative midterm Grades. (your final grades may be different from midterm grades)",
                link:'/site/all/modules/courseville/files/ckfinder/userfiles/672628251/files/midtermGrade-ICE64s2_625c666f4b4be.pdf',
                year:'2021/2',
                course:'Probability and Statistics for Engineers Section 1 (For ICE)',
                courseid:'2182203.01',
                date:'18 Apr 2022',
                timestamp:'2:11:50',
                daysago:'3 days ago',
                png: require('../assets/2182204.png'),
            },
        ],
        materials:[
            {
                id:1,
                material:'Lecture note 2/2',
                year:'2021/2',
                course:'Probability and Statistics for Engineers Section 1 (For ICE)',
                courseid:'2182203.01',
                date:'13 Mar 2022',
                daysago:'39 days ago',
                png: require('../assets/2182204.png'),
            }
        ]
    },
    {
        id:2182204,
        course:'Signal and Linear Systems',
        year:'2021/2',
        png: require('../assets/2143221.png'),
        announcements:[
            {
                id:1,
                announcement:'Midterm Exam scores and Grades',
                content:"Here are midterm grades\n F < 40% \nYour final scores maybe different.",
                link:'/sites/all/modules/courseville/files/ckfinder/userfiles/672628521/files/SLS65_midtermGrades_626126c53f643.pdf',
                year:'2021/2',
                course:'Signal and Linear Systems',
                courseid:'2182204',
                date:'21 Apr 2022',
                timestamp:'16:41:42',
                daysago:'0 days ago',
                png: require('../assets/2143221.png'),
            },
        ],
        materials:[
            {
                id:1,
                material:'Lecture note 2/2',
                year:'2021/2',
                course:'Signal and',
                courseid:'2190221',
                date:'21 Apr 2022',
                daysago:'0 days ago',
                png: require('../assets/2190221.png'),
            }
        ]
    },
    {
        id:2184202,
        course:'Technology and Engineering Management',
        year:'2021/2',
        png: require('../assets/2184202.png')
    },
    {
        id:2190250,
        course:'Computer Architecture and Organization',
        year:'2021/2',
        png: require('../assets/2190250.png')
    },
    {
        id:2190221,
        course:'Fundamental Data Structure and Algorithm',
        year:'2021/2',
        png: require('../assets/2190221.png')
    }
]
const courses1 = [
    {
        id:2182203.02,
        course:'Probability and Statistics for Engineers Section 2 (For AERO)',
        year:'2021/1',
        png: require('../assets/2182204.png')
    },
    {
        id:2182204,
        course:'Signal and Linear Systems lol',
        year:'2021/1',
        png: require('../assets/2143221.png')
    }
]

export const semesters = [
    {id:1,name:'2021/2',courses:courses},
    {id:2,name:'2021/1',courses:courses1},
    {id:3,name:'2020/2',courses:courses},
    {id:4,name:'2020/1',courses:courses1},
]

export const allcourses = courses.concat(courses1)

export const searchcourses:any = [
    {
        id:2182203,
        title:'2182203 - Probability and Statistics for Engineers',
        png: require('../assets/2182204.png')
    },
    {
        id:2182204,
        title:'2182204 - Signal and Linear Systems',
        png: require('../assets/2143221.png')
    },
    {
        id:2184202,
        title:'2184202 - Technology and Engineering Management',
        png: require('../assets/2184202.png')
    },
    {
        id:2190250,
        title:'2190250 - Computer Architecture and Organization',
        png: require('../assets/2190250.png')
    },
    {
        id:2190261,
        title:'2190261 - Fundamental Data Structure and Algorithm Lab',
        png: require('../assets/2190221.png')
    },
    {
        id:2190221,
        title:'2190221 - Fundamental Data Structure and Algorithm',
        png: require('../assets/2190221.png')
    },
    {
        id:2143101,
        title:'2143101 - Introduction to ICE',
        png: require('../assets/2190221.png')
    }
]