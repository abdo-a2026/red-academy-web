// ===== Courses Data =====
const courses = [
    {
        id: 1,
        title: "كورس الثالث متوسط",
        stage: "المرحلة المتوسطة",
        description: "منهج كامل للصف الثالث المتوسط مع شرح مفصل وتمارين عملية",
        fullDescription: "كورس شامل يغطي منهج الثالث متوسط بالكامل، يتضمن شرح مبسط لجميع الدروس مع تطبيقات عملية وامتحانات تجريبية دورية. نهدف إلى تأسيس الطالب بشكل قوي وإعداده للمراحل القادمة.",
        icon: "fas fa-book-open",
        duration: "8 أشهر",
        students: "120+ طالب",
        links: {
            lectures: "https://youtube.com/@username/playlists",
            materials: "https://wa.me/9647700000000?text=أريد شراء ملازم الثالث متوسط",
            exams: "https://youtube.com/@username/exams",
            booking: "#booking"
        }
    },
    {
        id: 2,
        title: "كورس الرابع علمي",
        stage: "المرحلة الإعدادية",
        description: "برنامج متكامل للصف الرابع العلمي يركز على بناء أساس قوي",
        fullDescription: "برنامج تعليمي متطور للصف الرابع العلمي، يشمل الرياضيات والفيزياء بشكل تفصيلي. يتميز الكورس بأسلوب تدريس حديث يربط المفاهيم النظرية بالتطبيقات العملية، مع متابعة مستمرة لتقدم الطالب.",
        icon: "fas fa-flask",
        duration: "9 أشهر",
        students: "95+ طالب",
        links: {
            lectures: "https://youtube.com/@username/playlists",
            materials: "https://wa.me/9647700000000?text=أريد شراء ملازم الرابع علمي",
            exams: "https://youtube.com/@username/exams",
            booking: "#booking"
        }
    },
    {
        id: 3,
        title: "كورس الخامس علمي",
        stage: "المرحلة الإعدادية",
        description: "تحضير شامل للصف الخامس العلمي مع التركيز على المفاهيم المتقدمة",
        fullDescription: "كورس متخصص للصف الخامس العلمي يركز على المواضيع المتقدمة في الرياضيات والفيزياء. يتضمن حل مسائل معقدة، تطبيقات عملية، واستراتيجيات للتفوق في الامتحانات. نوفر ملازم شاملة ومتابعة دقيقة.",
        icon: "fas fa-atom",
        duration: "9 أشهر",
        students: "110+ طالب",
        links: {
            lectures: "https://youtube.com/@username/playlists",
            materials: "https://wa.me/9647700000000?text=أريد شراء ملازم الخامس علمي",
            exams: "https://youtube.com/@username/exams",
            booking: "#booking"
        }
    },
    {
        id: 4,
        title: "كورس السادس إعدادي",
        stage: "المرحلة الإعدادية",
        description: "برنامج تحضيري مكثف للسادس الإعدادي لضمان التفوق والنجاح",
        fullDescription: "برنامج تحضيري مكثف ومتخصص لطلاب السادس الإعدادي، يهدف لتحقيق أعلى الدرجات في الامتحانات الوزارية. يشمل مراجعة شاملة لجميع المواضيع، حل نماذج امتحانات سابقة، ونصائح استراتيجية للتفوق في الامتحان النهائي.",
        icon: "fas fa-graduation-cap",
        duration: "10 أشهر",
        students: "85+ طالب",
        links: {
            lectures: "https://youtube.com/@username/playlists",
            materials: "https://wa.me/9647700000000?text=أريد شراء ملازم السادس إعدادي",
            exams: "https://youtube.com/@username/exams",
            booking: "#booking"
        }
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = courses;
}