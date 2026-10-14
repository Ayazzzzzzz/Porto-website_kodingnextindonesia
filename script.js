/* ==============================================================================
   TEACHER NOTE: 
   This file showcases "Dynamic Data Rendering" using JavaScript Array of Objects.
   Instead of writing 6 duplicated HTML cards manually, we store project data in an 
   array and use loops to generate them automatically. This teaches kids efficiency!
   ============================================================================== */

// Data Array containing all 6 projects with exact asset filenames
const projectsData = [
    {
        title: "GreenGuard",
        year: "2024",
        role: "Project Manager & ML Engineer",
        type: "Bangkit Academy Capstone Project",
        description: "A mobile application developed during Bangkit Academy to help beginner gardeners identify plant diseases and receive practical treatment recommendations by taking a leaf photo. Achieved 93.02% accuracy using TensorFlow CNN.",
        image: "assets/images/greenguard.png",
        link: "https://github.com/GreenGuardTeam/Capstone_GreenGuard/tree/main/Machine%20Learning%20Path"
    },
    {
        title: "Face Inpainting (Thesis)",
        year: "2026",
        role: "Researcher & ML Developer",
        type: "Undergraduate Research (Solo)",
        description: "An AI research project exploring how generative AI can reconstruct missing regions of damaged facial images by integrating StyleGAN3 and Coordinate Attention for high-fidelity facial image restoration.",
        image: "assets/images/face_inpainting.png",
        link: "https://github.com/Ayazzzzzzz"
    },
    {
        title: "Luminacine",
        year: "2025",
        role: "Frontend & Mobile Dev",
        type: "Group Project (Web & Mobile)",
        description: "A cross-platform movie ticket booking application where users can browse movies, select schedules, choose seats, and manage bookings across web (React) and mobile (Flutter) connected to a Node.js backend.",
        image: "assets/images/luminacine.png",
        link: "https://github.com/Ayazzzzzzz/luminacine_frontend"
    },
    {
        title: "AOT Fanbase Hub",
        year: "2025",
        role: "Mobile Developer & UI/UX",
        type: "Solo Project (Mobile)",
        description: "A feature-rich Flutter mobile application designed as a centralized platform for fans to explore character info, merchandise, events, Google Maps integration, and an accelerometer-based 'Titan Detect' feature.",
        image: "assets/images/aot_fanbase.png",
        link: "http://github.com/Ayazzzzzzz/Final-Project_TPM_Ayas"
    },
    {
        title: "Radja Wedang",
        year: "2024",
        role: "UI/UX & Frontend Developer",
        type: "Group Project (B2B2C E-commerce)",
        description: "A B2B2C e-commerce platform for a local souvenir shop in Yogyakarta connecting shop admins, tour guides with referral codes, and customers, built using HTML, CSS, and PHP.",
        image: "assets/images/radja_wedang.png",
        link: "https://github.com/salmahnf/Web-Radja-Wejang-Jogjakarta"
    },
    {
        title: "Suaka Burung Nusantara",
        year: "2025",
        role: "UI/UX Designer & Frontend Dev",
        type: "Solo Project (Certification)",
        description: "A personal web platform concept inspired by a passion for bird conservation in Indonesia, featuring local bird species education, donation programs, and a photo-sharing community gallery.",
        image: "assets/images/suaka_burung.png",
        link: "https://github.com/Ayazzzzzzz/Suaka-Burung-Nusantara-Sertifikasi-JWD-"
    }
];

// Function to render projects dynamically into the HTML DOM
function renderProjects() {
    const container = document.getElementById("project-list");
    
    // Clear container first
    container.innerHTML = "";

    // Loop through each project in the array and create HTML card structure
    projectsData.forEach((project) => {
        const cardHTML = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm rounded-4 overflow-hidden bg-white border-0">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column p-4">
                        <span class="badge bg-success bg-opacity-10 text-success mb-2 align-self-start px-2 py-1">${project.type} (${project.year})</span>
                        <h5 class="card-title fw-bold text-dark">${project.title}</h5>
                        <p class="text-muted small mb-2"><strong>Role:</strong> ${project.role}</p>
                        <p class="card-text text-secondary flex-grow-1" style="font-size: 0.9rem;">${project.description}</p>
                        <a href="${project.link}" target="_blank" class="btn btn-outline-dark btn-sm mt-3 w-100 rounded-pill py-2">
                            <i class="bi bi-github"></i> View Project / Details
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Run the render function when the page finishes loading
document.addEventListener("DOMContentLoaded", renderProjects);

