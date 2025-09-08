function updateTime() {
    const options = { timeZone: 'Asia/Kolkata', weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const now = new Date().toLocaleString('en-IN', options);
    document.getElementById('dateTime').innerHTML = now;
}
setInterval(updateTime, 1000);

function enableDarkMode() {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");
        }

        function enableLightMode() {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }

        function checkTheme() {
            var theme = localStorage.getItem("theme");
            if (theme === "dark") {
                enableDarkMode();
            } else {
                enableLightMode();
            }
        }

        checkTheme();