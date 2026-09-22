window.M1_LiCss = {
    render: function(container) {
        container.innerHTML = `
            <div class="mod-header-block">
                <div class="mod-title-text">M1: LiCss - ช่วยแนะนำการปรับขนาดยา Lithium</div>
                <button id="m1-btn-clear" class="btn-clear">Clear ค่าทั้งหมด</button>
            </div>

            <div class="m1-main-layout">
                <!-- ฝั่งซ้าย: Input1 Panel (ขนาดกะทัดรัด ~250px พร้อม Stepper) -->
                <div class="m1-input-panel">
                    <!-- BW -->
                    <div class="form-group">
                        <label for="m1-bw">BW (น้ำหนัก)</label>
                        <div class="input-row">
                            <div class="stepper-container">
                                <button type="button" class="btn-step btn-minus" data-target="m1-bw" data-step="1">-</button>
                                <input type="number" id="m1-bw" class="stepper-input" step="0.01" placeholder="0">
                                <button type="button" class="btn-step btn-plus" data-target="m1-bw" data-step="1">+</button>
                            </div>
                            <span class="unit-label">kg</span>
                        </div>
                    </div>

                    <!-- Ht -->
                    <div class="form-group">
                        <label for="m1-ht">Ht (ส่วนสูง)</label>
                        <div class="input-row">
                            <div class="stepper-container">
                                <button type="button" class="btn-step btn-minus" data-target="m1-ht" data-step="1">-</button>
                                <input type="number" id="m1-ht" class="stepper-input" step="0.01" placeholder="0">
                                <button type="button" class="btn-step btn-plus" data-target="m1-ht" data-step="1">+</button>
                            </div>
                            <span class="unit-label">cm</span>
                        </div>
                    </div>

                    <!-- Age -->
                    <div class="form-group">
                        <label for="m1-age">Age (อายุ)</label>
                        <div class="input-row">
                            <div class="stepper-container">
                                <button type="button" class="btn-step btn-minus" data-target="m1-age" data-step="1">-</button>
                                <input type="number" id="m1-age" class="stepper-input" step="1" placeholder="0">
                                <button type="button" class="btn-step btn-plus" data-target="m1-age" data-step="1">+</button>
                            </div>
                            <span class="unit-label">ปี</span>
                        </div>
                    </div>

                    <!-- Scr -->
                    <div class="form-group">
                        <label for="m1-scr">Scr</label>
                        <div class="input-row">
                            <div class="stepper-container">
                                <button type="button" class="btn-step btn-minus" data-target="m1-scr" data-step="0.1">-</button>
                                <input type="number" id="m1-scr" class="stepper-input" step="0.1" placeholder="0">
                                <button type="button" class="btn-step btn-plus" data-target="m1-scr" data-step="0.1">+</button>
                            </div>
                            <span class="unit-label">mg/dL</span>
                        </div>
                    </div>

                    <!-- ขนาดยา (Cap/day) -->
                    <div class="form-group">
                        <label for="m1-dose">ขนาดยา (Cap/day)</label>
                        <div class="input-row">
                            <div class="stepper-container">
                                <button type="button" class="btn-step btn-minus" data-target="m1-dose" data-step="1">-</button>
                                <input type="number" id="m1-dose" class="stepper-input" step="1" placeholder="0">
                                <button type="button" class="btn-step btn-plus" data-target="m1-dose" data-step="1">+</button>
                            </div>
                            <span class="unit-label">เม็ด</span>
                        </div>
                    </div>
                </div>

                <!-- ฝั่งขวา: Combined Panel (Output1 + Input2/Output2) -->
                <div class="m1-right-panel">
                    <!-- Output1 Panel -->
                    <div class="m1-output-panel">
                        <!-- ฝั่งชาย -->
                        <div class="gender-box gender-male">
                            <div class="gender-title">เพศชาย</div>
                            <div class="sub-cols">
                                <div class="sub-col" id="col-m-ibw">
                                    <div class="calc-row"><span>IBW:</span><span id="m-ibw">-</span></div>
                                    <div class="calc-row"><span>CrCl IBW:</span><span id="m-crcl-ibw">-</span></div>
                                    <div class="calc-row"><span>ทำนาย Css:</span><span id="m-css-ibw">-</span></div>
                                </div>
                                <div class="sub-col" id="col-m-real">
                                    <div class="calc-row"><span>real BW:</span><span id="m-realbw">-</span></div>
                                    <div class="calc-row"><span>CrCl real BW:</span><span id="m-crcl-real">-</span></div>
                                    <div class="calc-row"><span>ทำนาย Css:</span><span id="m-css-real">-</span></div>
                                </div>
                            </div>
                        </div>

                        <!-- ฝั่งหญิง -->
                        <div class="gender-box gender-female">
                            <div class="gender-title">เพศหญิง</div>
                            <div class="sub-cols">
                                <div class="sub-col" id="col-f-ibw">
                                    <div class="calc-row"><span>IBW:</span><span id="f-ibw">-</span></div>
                                    <div class="calc-row"><span>CrCl IBW:</span><span id="f-crcl-ibw">-</span></div>
                                    <div class="calc-row"><span>ทำนาย Css:</span><span id="f-css-ibw">-</span></div>
                                </div>
                                <div class="sub-col" id="col-f-real">
                                    <div class="calc-row"><span>real BW:</span><span id="f-realbw">-</span></div>
                                    <div class="calc-row"><span>CrCl real BW:</span><span id="f-crcl-real">-</span></div>
                                    <div class="calc-row"><span>ทำนาย Css:</span><span id="f-css-real">-</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lower Block: Input2 & Output2 Integrated -->
                    <div class="m1-bottom-layout">
                        <div class="rec-input-panel">
                            <div class="rec-title">recommend dose (steady state 7 วัน)</div>
                            <div class="form-group">
                                <label for="m1-rec-dose">ขนาดยาที่ได้รับ</label>
                                <div class="input-row">
                                    <div class="stepper-container">
                                        <button type="button" class="btn-step btn-minus" data-target="m1-rec-dose" data-step="1">-</button>
                                        <input type="number" id="m1-rec-dose" class="stepper-input" step="1" placeholder="0">
                                        <button type="button" class="btn-step btn-plus" data-target="m1-rec-dose" data-step="1">+</button>
                                    </div>
                                    <span class="unit-label">เม็ด</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="m1-rec-css">ระดับยาที่ ss</label>
                                <div class="input-row">
                                    <div class="stepper-container">
                                        <button type="button" class="btn-step btn-minus" data-target="m1-rec-css" data-step="0.1">-</button>
                                        <input type="number" id="m1-rec-css" class="stepper-input" step="0.01" placeholder="0">
                                        <button type="button" class="btn-step btn-plus" data-target="m1-rec-css" data-step="0.1">+</button>
                                    </div>
                                    <span class="unit-label">mEq/L</span>
                                </div>
                            </div>
                        </div>

                        <div class="rec-output-panel">
                            <div class="rec-title">ผลลัพธ์แนะนำขนาดยา</div>
                            <div class="calc-row"><span>minimum dose:</span><strong id="res-min-dose">-</strong></div>
                            <div class="calc-row"><span>max dose (Acute phase):</span><strong id="res-max-acute">-</strong></div>
                            <div class="calc-row"><span>max dose (Maintenance phase):</span><strong id="res-max-maint">-</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.bindEvents();
    },

    bindEvents: function() {
        const inputIds = ['m1-bw', 'm1-ht', 'm1-age', 'm1-scr', 'm1-dose', 'm1-rec-dose', 'm1-rec-css'];

        // Event listener เมื่อพิมพ์หรือเปลี่ยนค่าใน input
        inputIds.forEach(id => {
            const el = document.getElementById(id);

            el.addEventListener('input', () => this.calculate());

            // เมื่อเสียโฟกัส (blur) -> จัดการ format ทศนิยมตามโจทย์
            el.addEventListener('blur', () => {
                if (el.value === '' || isNaN(parseFloat(el.value))) return;
                const val = parseFloat(el.value);

                if (id === 'm1-scr') {
                    // Scr บังคับทศนิยม 2 ตำแหน่งเสมอ
                    el.value = val.toFixed(2);
                } else if (id === 'm1-bw' || id === 'm1-ht' || id === 'm1-rec-css') {
                    // ถ้านับแล้วเป็นจำนวนเต็ม ไม่ต้องมี .00 ถ้ามีเศษให้ตัดทศนิยมไม่เกิน 2 ตำแหน่ง
                    el.value = Number.isInteger(val) ? val.toString() : parseFloat(val.toFixed(2)).toString();
                }
            });
        });

        // Event Listener สำหรับปุ่ม Stepper (-) และ (+)
        document.querySelectorAll('.btn-step').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetId = btn.getAttribute('data-target');
                const step = parseFloat(btn.getAttribute('data-step')) || 1;
                const inputEl = document.getElementById(targetId);
                let currentVal = parseFloat(inputEl.value) || 0;

                if (btn.classList.contains('btn-minus')) {
                    currentVal = Math.max(0, currentVal - step);
                } else if (btn.classList.contains('btn-plus')) {
                    currentVal = currentVal + step;
                }

                // Format ตามกฎแต่ละช่อง
                if (targetId === 'm1-scr') {
                    inputEl.value = currentVal.toFixed(2);
                } else if (targetId === 'm1-age' || targetId === 'm1-dose' || targetId === 'm1-rec-dose') {
                    inputEl.value = Math.round(currentVal).toString();
                } else {
                    // BW, Ht, Rec-Css
                    inputEl.value = Number.isInteger(currentVal) ? currentVal.toString() : parseFloat(currentVal.toFixed(2)).toString();
                }

                this.calculate();
            });
        });

        // ปุ่ม Clear ค่าทั้งหมด
        document.getElementById('m1-btn-clear').addEventListener('click', () => {
            inputIds.forEach(id => {
                document.getElementById(id).value = '';
            });
            this.calculate();
        });
    },

    calculate: function() {
        const bw = parseFloat(document.getElementById('m1-bw').value);
        const ht = parseFloat(document.getElementById('m1-ht').value);
        const age = parseFloat(document.getElementById('m1-age').value);
        const scr = parseFloat(document.getElementById('m1-scr').value);
        const dose = parseFloat(document.getElementById('m1-dose').value);

        // คำนวณฝั่งทำนายระดับยา (Output 1)
        if (bw > 0 && ht > 0 && age > 0 && scr > 0 && dose > 0) {
            // Male
            const m_ibw = 50 + 2.3 * ((ht / 2.54) - 60);
            const m_crcl_ibw = ((140 - age) * m_ibw) / (72 * scr);
            const m_css_ibw = (dose * 8.12) / ((0.235 * m_crcl_ibw * 24 * 60) / 1000);

            const m_crcl_real = ((140 - age) * bw) / (72 * scr);
            const m_css_real = (dose * 8.12) / ((0.235 * m_crcl_real * 24 * 60) / 1000);

            document.getElementById('m-ibw').innerText = m_ibw.toFixed(3);
            document.getElementById('m-crcl-ibw').innerText = m_crcl_ibw.toFixed(3);
            document.getElementById('m-css-ibw').innerText = m_css_ibw.toFixed(3);

            document.getElementById('m-realbw').innerText = bw.toFixed(3);
            document.getElementById('m-crcl-real').innerText = m_crcl_real.toFixed(3);
            document.getElementById('m-css-real').innerText = m_css_real.toFixed(3);

            // Highlight Male
            document.getElementById('col-m-ibw').classList.toggle('highlight', m_ibw < bw);
            document.getElementById('col-m-real').classList.toggle('highlight', bw <= m_ibw);

            // Female
            const f_ibw = 45.5 + 2.3 * ((ht / 2.54) - 60);
            const f_crcl_ibw = ((140 - age) * f_ibw * 0.85) / (72 * scr);
            const f_css_ibw = (dose * 8.12) / ((0.235 * f_crcl_ibw * 24 * 60) / 1000);

            const f_crcl_real = ((140 - age) * bw * 0.85) / (72 * scr);
            const f_css_real = (dose * 8.12) / ((0.235 * f_crcl_real * 24 * 60) / 1000);

            document.getElementById('f-ibw').innerText = f_ibw.toFixed(3);
            document.getElementById('f-crcl-ibw').innerText = f_crcl_ibw.toFixed(3);
            document.getElementById('f-css-ibw').innerText = f_css_ibw.toFixed(3);

            document.getElementById('f-realbw').innerText = bw.toFixed(3);
            document.getElementById('f-crcl-real').innerText = f_crcl_real.toFixed(3);
            document.getElementById('f-css-real').innerText = f_css_real.toFixed(3);

            // Highlight Female
            document.getElementById('col-f-ibw').classList.toggle('highlight', f_ibw < bw);
            document.getElementById('col-f-real').classList.toggle('highlight', bw <= f_ibw);

        } else {
            // Reset Output 1
            ['m-ibw', 'm-crcl-ibw', 'm-css-ibw', 'm-realbw', 'm-crcl-real', 'm-css-real',
             'f-ibw', 'f-crcl-ibw', 'f-css-ibw', 'f-realbw', 'f-crcl-real', 'f-css-real'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.innerText = '-';
            });
            ['col-m-ibw', 'col-m-real', 'col-f-ibw', 'col-f-real'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.remove('highlight');
            });
        }

        // คำนวณฝั่ง Recommend Dose (Output 2)
        const recDose = parseFloat(document.getElementById('m1-rec-dose').value);
        const recCss = parseFloat(document.getElementById('m1-rec-css').value);

        if (recDose > 0 && recCss > 0) {
            const minDose = (0.6 * recDose) / recCss;
            const maxAcute = (1.2 * recDose) / recCss;
            const maxMaint = (1.0 * recDose) / recCss;

            document.getElementById('res-min-dose').innerText = minDose.toFixed(2) + ' เม็ด';
            document.getElementById('res-max-acute').innerText = maxAcute.toFixed(2) + ' เม็ด';
            document.getElementById('res-max-maint').innerText = maxMaint.toFixed(2) + ' เม็ด';
        } else {
            document.getElementById('res-min-dose').innerText = '-';
            document.getElementById('res-max-acute').innerText = '-';
            document.getElementById('res-max-maint').innerText = '-';
        }
    }
};
