const courses = [
    {
        id:2182203.01,
        course:'Probability and Statistics for Engineers Section 1 (For ICE)',
        png: require('../assets/2182204.png')
    },
    {
        id:2182204,
        course:'Signal and Linear Systems',
        png: require('../assets/2143221.png')
    },
    {
        id:2184202,
        course:'Technology and Engineering Management',
        png: require('../assets/2184202.png')
    },
    {
        id:2190250,
        course:'Computer and Architecture and Organization',
        png: require('../assets/2190250.png')
    },
    {
        id:2190221,
        course:'Fundamental Data Structure and Algorithm',
        png: require('../assets/2190221.png')
    }
]
const courses1 = [
    {
        id:2182203.01,
        course:'Probability and Statistics for Engineers Section 2 (For ICE)',
        png: require('../assets/2182204.png')
    },
    {
        id:2182204,
        course:'Signal and Linear Systems lol',
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
    },
    {
        id:2143101,
        title:'2143101 - Introduction to ICE',
    }
]