document.addEventListener('DOMContentLoaded', function() {
    const courseElements = document.querySelectorAll('.course');

    courseElements.forEach(function(courseElement) {
        courseElement.addEventListener('click', function() {
            const courseName = courseElement.querySelector('h3').textContent;
            let courseDetails = {};

            switch (courseName) {
                case 'Python':
                    courseDetails = {
                        image: 'Course_details_Images/hqdefault.jpg',
                        teacher: 'Shraddha Khapra',
                        description: 'Learn Python programming language.',
                        playlist: 'https://youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&si=aYEBu_rSULuz8rfX'
                    };
                    break;
                case 'C-Programming':
                    courseDetails = {
                        image: 'Course_details_Images/cprogramming.jpg',
                        teacher: 'Jenny Lecture CS IT',
                        description: 'Programming in C',
                        playlist: 'https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&si=48JzgRG_SrX-VEMe'
                    };
                    break;
                case 'Java Programming':
                    courseDetails = {
                         image: 'Course_details_Images/java programming.jpg',
                         teacher: 'Telusko',
                         description: 'Java Tutorials for Beginners',
                         playlist: 'https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&si=pfCi1CK4jbTxrhDL'
                    };
                    break;
                case 'JavaScript Programming':
                    courseDetails = {
                        image: 'Course_details_Images/javascript.jpg',
                        teacher: 'Code with Harry',
                        description: 'This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 and its concepts to an advanced level. ',
                        playlist: 'https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&si=48JzgRG_SrX-VEMe'
                    };
                    break;
                case 'HTML & CSS':
                        courseDetails = {
                            image: 'Course_details_Images/htmlandcss.jpg',
                            teacher: 'Harshisht Vashisth',
                            description: 'This is complete HTML and CSS course in Hindi. In this course you will learn everything about modern HTML and CSS and you will be able to build beautiful website without any help of framework. ',
                            playlist: 'https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&si=48JzgRG_SrX-VEMe'
                        };
                    break;
                case 'HTML & CSS':
                        courseDetails = {
                            image: 'Course_details_Images/htmlandcss.jpg',
                            teacher: 'Harshisht Vashisth',
                            description: 'This is complete HTML and CSS course in Hindi. In this course you will learn everything about modern HTML and CSS and you will be able to build beautiful website without any help of framework. ',
                            playlist: 'https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&si=48JzgRG_SrX-VEMe'
                        };
                break;
                case 'UI/UX':
                    courseDetails = {
                        image: 'Course_details_Images/hq720.webp',
                        teacher: 'freecodecamp',
                        description: 'Learn the process of UI / UX design.  In this tutorial you will learn how a professional designer builds a full website design from scratch following the process of user experience and user interface. The video covers wireframing, prototyping, and designing in Figma.',
                        playlist: 'https://youtu.be/c9Wg6Cb_YlU?si=mTN4xeMBrGddXn9A'
                    };
                break;
                case 'JQuery':
                    courseDetails = {
                        image: 'Course_details_Images/jquery.jpg',
                        teacher: 'Net Ninja',
                        description: 'Go from zero to ninja in jQuery in this complete beginners jQuery tutorial playlist. First we will take a look at how to load jQuery into our documents, then dive straight in to all of the great features it offers us as JavaScript developers to make our life much more simple!',
                        playlist: 'https://youtube.com/playlist?list=PL4cUxeGkcC9hNUJ0j6ccnOAcJIPoTRpO4&si=Zj51TfQGA90_ofbF'
                    };
                 break;
                 case 'C++':
                    courseDetails = {
                        image: 'Course_details_Images/c++.jpg',
                        teacher: 'Aman Dhattarwal(Apna College)',
                        description: 'C++ Programming full tutorial',
                        playlist: 'https://youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ&si=tRU2gd4ChX0Jqk_Q'
                    };
                 break;
                 case 'MySql':
                    courseDetails = {
                        image: 'Course_details_Images/mysql.jpg',
                        teacher: 'WsCubeTech',
                        description: 'Mysql full tutorial',
                        playlist: 'https://youtube.com/playlist?list=PLjVLYmrlmjGeyCPgdHL2vWmEGKxcpsC0E&si=1MB1DJUYm9U901hZ'
                    };
                 break;

                default:
                    console.error('Course details not found for:', courseName);
                    break;
            }

            localStorage.setItem('courseName', courseName);
            localStorage.setItem('courseDetails', JSON.stringify(courseDetails));
            window.location.href = 'course-details.html';
        });
    });
});
