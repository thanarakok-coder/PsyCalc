document.addEventListener('DOMContentLoaded', () => {
    const btnHome = document.getElementById('btn-home');
    const moduleMenu = document.getElementById('module-menu');
    const moduleContent = document.getElementById('module-content');

    // โหลด Module ตามการเลือก
    window.loadModule = function(modId) {
        moduleMenu.style.display = 'none';
        moduleContent.style.display = 'block';

        if (modId === 'm1') {
            if (window.M1_LiCss) {
                window.M1_LiCss.render(moduleContent);
            } else {
                // Dynamically Load JS Module
                const script = document.createElement('script');
                script.src = 'modules/m1_liCss.js';
                script.onload = () => window.M1_LiCss.render(moduleContent);
                document.head.appendChild(script);
            }
        }
    };

    // ปุ่ม Home กลับหน้าหลัก
    btnHome.addEventListener('click', () => {
        moduleContent.innerHTML = '';
        moduleContent.style.display = 'none';
        moduleMenu.style.display = 'block';
    });

    // Binding Click ในหน้าเลือก Module
    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('click', () => {
            const mod = card.getAttribute('data-module');
            if (mod === 'm1') loadModule('m1');
        });
    });

    // Utility: ฟังชั่นช่วยรองรับการกด Enter เพื่อข้ามไป input ถัดไป
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
            e.preventDefault();
            const formInputs = Array.from(document.querySelectorAll('input:not([disabled])'));
            const currentIndex = formInputs.indexOf(e.target);
            if (currentIndex >= 0 && currentIndex < formInputs.length - 1) {
                formInputs[currentIndex + 1].focus();
                formInputs[currentIndex + 1].select();
            }
        }
    });
});
