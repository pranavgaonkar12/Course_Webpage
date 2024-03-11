document.addEventListener('DOMContentLoaded', function() {
    const courseName = localStorage.getItem('courseName');
    const courseDetails = JSON.parse(localStorage.getItem('courseDetails'));

    if (courseName && courseDetails) {
        displayCourseDetails(courseName, courseDetails);
    } else {
        console.error('Course details not found.');
    }
});

function displayCourseDetails(courseName, courseDetails) {
    const courseImage = document.getElementById('course-image');
    const courseTitle = document.getElementById('course-title');
    const courseTeacher = document.getElementById('course-teacher');
    const courseDescription = document.getElementById('course-description');
    const playlistButton = document.getElementById('playlist-button');

    courseImage.src = courseDetails.image;
    courseTitle.textContent = courseName;
    courseTeacher.textContent = `Teacher: ${courseDetails.teacher}`;
    courseDescription.textContent = courseDetails.description;
    playlistButton.href = courseDetails.playlist;
}

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-button');

    backButton.addEventListener('click', function() {
        window.location.href = 'browse-course.html';
    });
});