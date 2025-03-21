function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Lưu trạng thái vào Local Storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// Kiểm tra nếu Dark Mode đã được bật trước đó
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}
