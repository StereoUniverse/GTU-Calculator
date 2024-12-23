document.addEventListener('DOMContentLoaded', function() {
    const spiForm = document.getElementById('spi-form');
    const cpiForm = document.getElementById('cpi-form');
    const addCourseBtn = document.getElementById('add-course');
    const coursesDiv = document.getElementById('courses');
    const spiResultDiv = document.getElementById('spi-result');
    const cpiResultDiv = document.getElementById('cpi-result');

    addCourseBtn.addEventListener('click', function() {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';
        courseDiv.innerHTML = `
            <p><label>Credits: <input type="number" class="credits" required></label></p>
                        <p><label>Grade: 
                            <select class="grade" required>
                                <option value="">Select Grade</option>
                                <option value="10">AA</option>
                                <option value="9">AB</option>
                                <option value="8">BB</option>
                                <option value="7">BC</option>
                                <option value="6">CC</option>
                                <option value="5">CD</option>
                                <option value="4">DD</option>
                                <option value="0">FF</option>
                            </select>
                        </label></p> 
        `;
        coursesDiv.appendChild(courseDiv);
    });

    spiForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const credits = document.querySelectorAll('.credits');
        const grades = document.querySelectorAll('.grade');
        let totalCredits = 0;
        let totalGradePoints = 0;

        credits.forEach((credit, index) => {
            if (grades[index].value !== '') {
                totalCredits += parseFloat(credit.value);
                totalGradePoints += parseFloat(credit.value) * parseFloat(grades[index].value);
            }
        });

        const spi = totalGradePoints / totalCredits;
        spiResultDiv.textContent = `Your SPI is: ${spi.toFixed(2)}`;
    });

    cpiForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const totalCredits = parseFloat(document.getElementById('total-credits').value);
        const totalGradePoints = parseFloat(document.getElementById('total-grade-points').value);

        const cpi = totalGradePoints / totalCredits;
        cpiResultDiv.textContent = `Your CPI is: ${cpi.toFixed(2)}`;
    });
});
