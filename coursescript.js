function showContent(course) {
    const content = document.getElementById('content');
    
    if (course === 'course1') {
        content.innerHTML = `
            <div class="course-container">
                <h2 class="course-title">Course 1: Introduction to Entrepreneurship</h2>
                <div class="course-details">
                    <p class="course-description">
                        This course provides a comprehensive introduction to entrepreneurship, covering the key concepts, strategies, and skills needed to start and grow a successful business.
                        Ideal for aspiring entrepreneurs and business owners.
                    </p>
                    <ul class="course-topics">
                        <li>Identifying Opportunities</li>
                        <li>Business Planning</li>
                        <li>Funding and Investment</li>
                        <li>Marketing and Sales Strategies</li>
                    </ul>
                </div>
                <div class="course-video">
                    <video controls class="video-player">
                        <source src="path/to/entrepreneurship1-video.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>`;
    } else if (course === 'course2') {
        content.innerHTML = `
            <div class="course-container">
                <h2 class="course-title">Course 2: Scaling Your Startup</h2>
                <div class="course-details">
                    <p class="course-description">
                        This course focuses on the strategies and challenges involved in scaling a startup. Learn how to manage growth, build a scalable business model, and navigate the complexities of expansion.
                    </p>
                    <ul class="course-topics">
                        <li>Scaling Operations</li>
                        <li>Building a Team</li>
                        <li>Market Expansion</li>
                        <li>Managing Finances</li>
                    </ul>
                </div>
                <div class="course-video">
                    <video controls class="video-player">
                        <source src="path/to/entrepreneurship2-video.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>`;
    } else if (course === 'course3') {
        content.innerHTML = `
            <div class="course-container">
                <h2 class="course-title">Course 3: Leadership in Entrepreneurship</h2>
                <div class="course-details">
                    <p class="course-description">
                        This course explores the essential leadership skills required for entrepreneurs. Understand how to lead a startup effectively, foster innovation, and create a strong organizational culture.
                    </p>
                    <ul class="course-topics">
                        <li>Leadership Styles</li>
                        <li>Team Building</li>
                        <li>Innovation Management</li>
                        <li>Vision and Strategy</li>
                    </ul>
                </div>
                <div class="course-video">
                    <video controls class="video-player">
                        <source src="path/to/entrepreneurship3-video.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>`;
    }
}
