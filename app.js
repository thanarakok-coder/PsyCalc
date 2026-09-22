document.addEventListener('DOMContentLoaded', () => {
    const btnHome = document.getElementById('btn-home');
    const moduleMenu = document.getElementById('module-menu');
    const moduleContent = document.getElementById('module-content');

    // ฟังก์ชันสลับ Module
    window.loadModule = function(modId) {
        moduleMenu.style.display = 'none';
        moduleContent.style.display = 'block';

        if (modId === 'm1' && window.M1_LiCss) {
            window.M1_LiCss.render(moduleContent);
        } else if (modId === 'm2' && window.M2_ValCss) {
            window.M2_ValCss.render(moduleContent);
        } else if (modId === 'm3' && window.M3_PheCap) {
            window.M3_PheCap.render(moduleContent);
        } else if (modId === 'm4' && window.M4_PheTab) {
            window.M4_PheTab.render(moduleContent);
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
            loadModule(mod);
        });
    });

    // Event Listener กลางสำหรับกด Enter ข้ามช่อง
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
