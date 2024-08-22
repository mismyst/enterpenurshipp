// Scroll-based animation for elements
// Scroll-based animation for elements
document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".image-content");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      if (scrollTop + window.innerHeight > elementTop + 100) {
          element.classList.add("visible");
      }
  });
});


function showContent(course) {
  const content = document.getElementById('content');
  
  if (course === 'course1') {
      content.innerHTML = `
          <div class="course-container">
              <h2 class="course-title">Course 1: Introduction to Entrepreneurship</h2>
              <div class="course-content">
                  <div class="course-image">
                      <img src="./assets/baim-hanif-pYWuOMhtc6k-unsplash.jpg" alt="Introduction to Entrepreneurship">
                  </div>
                  <div class="course-details">
                      <p class="course-description">
                          This course provides a comprehensive introduction to entrepreneurship. 
                          It is designed for aspiring entrepreneurs who want to understand the basics of starting and running a business.
                      </p>
                      <h3 class="course-overview-title">Course Overview:</h3>
                      <ul class="course-overview">
                          <li>Understanding the entrepreneurial mindset</li>
                          <li>Identifying business opportunities</li>
                          <li>Basics of business planning and strategy</li>
                          <li>Introduction to funding options and financial planning</li>
                          <li>Marketing, sales, and customer acquisition strategies</li>
                      </ul>
                  </div>
              </div>
              <div class="course-key-takeaways">
                  <h3>Key Takeaways:</h3>
                  <p>
                      By the end of this course, you will have a solid foundation in the principles of entrepreneurship, 
                      including how to create a business plan, identify market opportunities, and understand the financial aspects of running a business.
                  </p>
              </div>
          </div>`;
  } else if (course === 'course2') {
      content.innerHTML = `
          <div class="course-container">
              <h2 class="course-title">Course 2: Advanced Entrepreneurship Strategies</h2>
              <div class="course-content">
                  <div class="course-image">
                      <img src="./assets/baim-hanif-pYWuOMhtc6k-unsplash.jpg" alt="Advanced Entrepreneurship Strategies">
                  </div>
                  <div class="course-details">
                      <p class="course-description">
                          This course is designed for entrepreneurs who already have a basic understanding of business fundamentals 
                          and are looking to take their ventures to the next level.
                      </p>
                      <h3 class="course-overview-title">Course Overview:</h3>
                      <ul class="course-overview">
                          <li>Scaling your business: Strategies and challenges</li>
                          <li>Advanced marketing techniques</li>
                          <li>Leadership and team management</li>
                          <li>Growth hacking and innovation</li>
                          <li>Global expansion and market entry strategies</li>
                      </ul>
                  </div>
              </div>
              <div class="course-key-takeaways">
                  <h3>Key Takeaways:</h3>
                  <p>
                      After completing this course, you will be equipped with advanced strategies to grow your business, 
                      effectively manage teams, and innovate in competitive markets.
                  </p>
              </div>
          </div>`;
  } else if (course === 'course3') {
      content.innerHTML = `
          <div class="course-container">
              <h2 class="course-title">Course 3: Social Entrepreneurship</h2>
              <div class="course-content">
                  <div class="course-image">
                      <img src="./assets/baim-hanif-pYWuOMhtc6k-unsplash.jpg" alt="Social Entrepreneurship">
                  </div>
                  <div class="course-details">
                      <p class="course-description">
                          Focused on social impact, this course is ideal for entrepreneurs who aim to create businesses that address social, 
                          environmental, or cultural issues while remaining profitable.
                      </p>
                      <h3 class="course-overview-title">Course Overview:</h3>
                      <ul class="course-overview">
                          <li>Understanding social entrepreneurship</li>
                          <li>Building a business model with social impact</li>
                          <li>Funding and scaling social enterprises</li>
                          <li>Measuring social impact</li>
                          <li>Case studies of successful social enterprises</li>
                      </ul>
                  </div>
              </div>
              <div class="course-key-takeaways">
                  <h3>Key Takeaways:</h3>
                  <p>
                      This course will enable you to create and manage a business that not only generates profit but also addresses 
                      critical social issues, making a positive impact on society.
                  </p>
              </div>
          </div>`;
  }
}
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function startCarousel() {
    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

window.onload = startCarousel;
