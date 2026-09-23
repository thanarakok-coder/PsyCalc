window.M1_LiCss = {
  render: function(container) {
    container.innerHTML = `
      <style>
        .m1-wrapper {
          padding: 12px;
          max-width: 1280px;
          margin: 0 auto;
          font-family: system-ui, -apple-system, sans-serif;
          color: #0f172a;
        }
        .m1-header-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 1px solid #cbd5e1;
        }

        /* Grid หลัก: ซ้าย (Input) - ขวา (Results) */
        .m1-main-layout {
          display: grid;
          grid-template-columns: 420px 1fr; /* ขยายความกว้างฝั่งซ้ายเล็กน้อยเพื่อรองรับ Inline Label */
          gap: 16px;
          align-items: stretch;
        }
        @media (max-width: 960px) {
          .m1-main-layout {
            grid-template-columns: 1fr;
          }
        }

        /* Card Frame */
        .m1-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
        }

        /* การ์ดฝั่งซ้าย (ข้อมูลผู้ป่วย) แต่งสีพื้นหลังเบาๆ ให้เด่นขึ้น */
        .input-card-highlight {
          background: #f8fafc;
          border: 1.5px solid #93c5fd;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.06);
          justify-content: space-between; /* กระจายระยะห่างให้เต็มแนวสูง */
        }

        .card-head-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 2px solid #3b82f6;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        /* ปุ่ม Clear Style */
        .btn-clear-mini {
          background: #fee2e2;
          color: #dc2626;
          border: 1px solid #fca5a5;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn-clear-mini:hover {
          background: #fca5a5;
          color: #991b1b;
        }

        /* Form Group แบบ Inline บรรทัดเดียว */
        .field-group-inline {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        .field-group-inline label {
          width: 120px; /* ความกว้างคงที่ของหัวข้อฝั่งซ้าย */
          flex-shrink: 0;
          font-size: 0.92rem;
          font-weight: 700;
          color: #1e293b;
          white-space: nowrap;
        }
        .stepper-container-inline {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
        }

        /* ขยายกว้างเต็มพื้นที่ + แต่งโทนสีฟ้าเน้นกล่อง Input */
        .stepper-box {
          display: flex;
          align-items: center;
          flex: 1;
          background: #eff6ff;
          border: 1.5px solid #60a5fa;
          border-radius: 24px;
          padding: 2px 6px;
          height: 42px; /* เพิ่มความสูงกล่อง */
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.03);
          transition: all 0.2s ease;
        }
        .stepper-box:focus-within {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        .btn-step {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #93c5fd;
          background: #ffffff;
          color: #1d4ed8;
          font-weight: bold;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .btn-step:hover {
          background: #dbeafe;
          color: #1e40af;
        }

        .stepper-box input {
          width: 100%;
          border: none;
          background: transparent;
          text-align: center;
          font-weight: 800;
          font-size: 1.2rem; /* ขยายขนาดฟอนต์ตัวเลข */
          color: #0f172a;
          outline: none;
        }
        .stepper-box input::-webkit-outer-spin-button,
        .stepper-box input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .stepper-box input {
          -moz-appearance: textfield;
        }
        .unit-text {
          font-size: 0.9rem;
          font-weight: 700;
          color: #475569;
          min-width: 46px;
          text-align: left;
        }

        /* ฝั่งขวา Stack */
        .right-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Card ผลการคำนวณ ชาย / หญิง */
        .gender-output-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 640px) {
          .gender-output-grid {
            grid-template-columns: 1fr;
          }
        }
        .gender-card {
          border-radius: 8px;
          padding: 12px;
          font-size: 0.85rem;
        }
        .male-card {
          background-color: #f0f9ff;
          border: 1px solid #bae6fd;
        }
        .female-card {
          background-color: #fdf2f8;
          border: 1px solid #fbcfe8;
        }
        .gender-card-title {
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 8px;
        }
        .male-card .gender-card-title { color: #0369a1; }
        .female-card .gender-card-title { color: #be185d; }

        .calc-pair-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          margin-bottom: 6px;
        }
        .calc-data-cell {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255,255,255,0.75);
          padding: 5px 8px;
          border-radius: 4px;
          border: 1px solid transparent;
        }

        /* Highlight สีเขียวเมื่อตรงตามเงื่อนไขน้ำหนักที่น้อยกว่า */
        .highlight-green {
          background-color: #dcfce7 !important;
          border-color: #86efac !important;
          font-weight: 700 !important;
          color: #15803d !important;
        }

        /* Recommended Dose Split Panel */
        .rec-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: stretch;
        }
        @media (max-width: 768px) {
          .rec-split-grid {
            grid-template-columns: 1fr;
          }
        }
        
        /* กล่องฝั่งขวา Recommended Dose ขยายเต็มพื้นที่ */
        .rec-out-list {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          background: #f8fafc;
          padding: 14px 18px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          height: 100%;
          box-sizing: border-box;
        }
        .rec-out-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.95rem; /* ขยายขนาดฟอนต์ */
          padding: 6px 0;
          border-bottom: 1px dashed #e2e8f0;
        }
        .rec-out-item:last-child {
          border-bottom: none;
        }
        .rec-out-label {
          color: #475569;
          font-weight: 600;
        }
        .rec-out-val {
          font-weight: 800;
          font-size: 1.05rem; /* ตัวเลขผลลัพธ์ใหญ่ชัดเจน */
          color: #0f172a;
        }
      </style>

      <div class="m1-wrapper">
        <div class="m1-header-title">M1: LiCss - ช่วยแนะนำการปรับขนาดยา Lithium</div>

        <div class="m1-main-layout">
          
          <!-- LEFT COLUMN: ข้อมูลผู้ป่วย (Inline Row & Full Height) -->
          <div class="m1-card input-card-highlight">
            <div>
              <div class="card-head-title">
                <span>ข้อมูลผู้ป่วย</span>
                <button type="button" id="m1-btn-clear-left" class="btn-clear-mini">Clear</button>
              </div>

              <!-- 1. BW -->
              <div class="field-group-inline">
                <label for="m1-bw">BW (น้ำหนัก)</label>
                <div class="stepper-container-inline">
                  <div class="stepper-box">
                    <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-bw', -1, 0, 300, 1)">-</button>
                    <input type="number" id="m1-bw" placeholder="0" oninput="window.M1_LiCss.calculate()">
                    <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-bw', 1, 0, 300, 1)">+</button>
                  </div>
                  <span class="unit-text">kg</span>
                </div>
              </div>

              <!-- 2. Ht -->
              <div class="field-group-inline">
                <label for="m1-ht">Ht (ส่วนสูง)</label>
                <div class="stepper-container-inline">
                  <div class="stepper-box">
                    <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-ht', -1, 0, 250, 1)">-</button>
                    <input type="number" id="m1-ht" placeholder="0" oninput="window.M1_LiCss.calculate()">
                    <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-ht', 1, 0, 250, 1)">+</button>
                  </div>
                  <span class="unit-text">cm.</span>
                </div>
              </div>

              <!-- 3. Age -->
              <div class="field-group-inline">
                <label for="m1-age">Age (อายุ)</label>
                <div class="stepper-container-inline">
                  <div class="stepper-box">
                    <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-age', -1, 0, 120, 0)">-</button>
                    <input type="number" id="m1-age" placeholder="0" oninput="window.M1_LiCss.calculate()">
                    <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-age', 1, 0, 120, 0)">+</button>
                  </div>
                  <span class="unit-text">ปี</span>
                </div>
              </div>

              <!-- 4. Scr -->
              <div class="field-group-inline">
                <label for="m1-scr">Scr.</label>
                <div class="stepper-container-inline">
                  <div class="stepper-box">
                    <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-scr', -0.1, 0, 20, 2)">-</button>
                    <input type="number" id="m1-scr" step="0.1" placeholder="0.00" oninput="window.M1_LiCss.calculate()">
                    <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-scr', 0.1, 0, 20, 2)">+</button>
                  </div>
                  <span class="unit-text">mg/dL</span>
                </div>
              </div>
            </div>

            <!-- 5. ขนาดยาที่ได้รับ -->
            <div style="padding-top: 10px; border-top: 1px dashed #cbd5e1; margin-top: 6px;">
              <div class="field-group-inline" style="margin-bottom: 0;">
                <label for="m1-dose">ขนาดยาที่ได้รับ <br><small style="font-weight:normal; color:#64748b;">(Cap/day)</small></label>
                <div class="stepper-container-inline">
                  <div class="stepper-box">
                    <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-dose', -1, 0, 50, 0)">-</button>
                    <input type="number" id="m1-dose" placeholder="0" oninput="window.M1_LiCss.calculate()">
                    <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-dose', 1, 0, 50, 0)">+</button>
                  </div>
                  <span class="unit-text">เม็ด</span>
                </div>
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN: Output Top + Output Bottom -->
          <div class="right-stack">
            
            <!-- TOP RIGHT: เพศชาย & เพศหญิง -->
            <div class="gender-output-grid">
              
              <!-- Male Block -->
              <div class="gender-card male-card">
                <div class="gender-card-title">เพศชาย</div>
                <div class="calc-pair-row">
                  <div class="calc-data-cell" id="m-ibw-box"><span>IBW</span><span id="m-ibw">-</span></div>
                  <div class="calc-data-cell" id="m-realbw-box"><span>real BW</span><span id="m-realbw">-</span></div>
                </div>
                <div class="calc-pair-row">
                  <div class="calc-data-cell"><span>CrCl IBW</span><span id="m-crcl-ibw">-</span></div>
                  <div class="calc-data-cell"><span>CrCl real BW</span><span id="m-crcl-realbw">-</span></div>
                </div>
                <div class="calc-pair-row">
                  <div class="calc-data-cell" id="m-css-ibw-box"><span>ทำนาย Css</span><span id="m-css-ibw">-</span></div>
                  <div class="calc-data-cell" id="m-css-realbw-box"><span>ทำนาย Css</span><span id="m-css-realbw">-</span></div>
                </div>
              </div>

              <!-- Female Block -->
              <div class="gender-card female-card">
                <div class="gender-card-title">เพศหญิง</div>
                <div class="calc-pair-row">
                  <div class="calc-data-cell" id="f-ibw-box"><span>IBW</span><span id="f-ibw">-</span></div>
                  <div class="calc-data-cell" id="f-realbw-box"><span>real BW</span><span id="f-realbw">-</span></div>
                </div>
                <div class="calc-pair-row">
                  <div class="calc-data-cell"><span>CrCl IBW</span><span id="f-crcl-ibw">-</span></div>
                  <div class="calc-data-cell"><span>CrCl real BW</span><span id="f-crcl-realbw">-</span></div>
                </div>
                <div class="calc-pair-row">
                  <div class="calc-data-cell" id="f-css-ibw-box"><span>ทำนาย Css</span><span id="f-css-ibw">-</span></div>
                  <div class="calc-data-cell" id="f-css-realbw-box"><span>ทำนาย Css</span><span id="f-css-realbw">-</span></div>
                </div>
              </div>

            </div>

            <!-- BOTTOM RIGHT: Recommended dose (@ Steady State 7 วัน) -->
            <div class="m1-card">
              <div class="card-head-title" style="border-bottom-color: #10b981;">
                <span>Recommended dose (@ Steady State 7 วัน)</span>
                <!-- ปุ่ม Clear สำหรับฝั่ง Steady State -->
                <button type="button" id="m1-btn-clear-steady" class="btn-clear-mini">Clear</button>
              </div>

              <div class="rec-split-grid">
                <!-- ฝั่งซ้าย: Inputs สำหรับ Rec Dose (ปรับ Inline ด้วย) -->
                <div style="display: flex; flex-direction: column; justify-content: center; gap: 8px;">
                  <div class="field-group-inline">
                    <label for="m1-rec-dose" style="width: 130px;">ขนาดยาที่ได้รับ <br><small style="font-weight:normal; color:#64748b;">(Cap/day)</small></label>
                    <div class="stepper-container-inline">
                      <div class="stepper-box">
                        <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-rec-dose', -1, 0, 50, 0)">-</button>
                        <input type="number" id="m1-rec-dose" placeholder="0" oninput="window.M1_LiCss.syncDoseAndCalc(this.value)">
                        <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-rec-dose', 1, 0, 50, 0)">+</button>
                      </div>
                      <span class="unit-text">เม็ด</span>
                    </div>
                  </div>

                  <div class="field-group-inline">
                    <label for="m1-target-css" style="width: 130px;">ระดับยา Css</label>
                    <div class="stepper-container-inline">
                      <div class="stepper-box">
                        <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-target-css', -0.1, 0, 5, 3)">-</button>
                        <input type="number" id="m1-target-css" step="0.001" placeholder="0.000" oninput="window.M1_LiCss.calculate()">
                        <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-target-css', 0.1, 0, 5, 3)">+</button>
                      </div>
                      <span class="unit-text">mEq/L</span>
                    </div>
                  </div>
                </div>

                <!-- ฝั่งขวา: Outputs แสดงผล (ขยายใหญ่เต็มพื้นที่) -->
                <div class="rec-out-list">
                  <div class="rec-out-item">
                    <span class="rec-out-label">minimum dose</span>
                    <span class="rec-out-val" id="rec-min">- เม็ด/วัน</span>
                  </div>
                  <div class="rec-out-item">
                    <span class="rec-out-label">Max dose (Acute phase)</span>
                    <span class="rec-out-val" id="rec-max-acute">- เม็ด/วัน</span>
                  </div>
                  <div class="rec-out-item">
                    <span class="rec-out-label">Max dose (Maintenance phase)</span>
                    <span class="rec-out-val" id="rec-max-maint">- เม็ด/วัน</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    `;

    // Clear ฝั่งข้อมูลผู้ป่วย
    document.getElementById('m1-btn-clear-left')?.addEventListener('click', function() {
      ['m1-bw', 'm1-ht', 'm1-age', 'm1-scr', 'm1-dose'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      window.M1_LiCss.calculate();
    });

    // Clear ฝั่ง Steady State 2 ช่อง
    document.getElementById('m1-btn-clear-steady')?.addEventListener('click', function() {
      ['m1-rec-dose', 'm1-target-css'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      window.M1_LiCss.calculate();
    });
  },

  stepInput: function(id, delta, minVal, maxVal, decimals) {
    const el = document.getElementById(id);
    if (!el) return;
    let curr = parseFloat(el.value) || 0;
    let nextVal = curr + delta;
    if (nextVal < minVal) nextVal = minVal;
    if (nextVal > maxVal) nextVal = maxVal;
    
    if (decimals === 0) {
      el.value = Math.round(nextVal);
    } else {
      el.value = parseFloat(nextVal.toFixed(decimals));
    }

    if (id === 'm1-dose') {
      const recDose = document.getElementById('m1-rec-dose');
      if (recDose) recDose.value = el.value;
    } else if (id === 'm1-rec-dose') {
      const mainDose = document.getElementById('m1-dose');
      if (mainDose) mainDose.value = el.value;
    }

    this.calculate();
  },

  syncDoseAndCalc: function(val) {
    const mainDose = document.getElementById('m1-dose');
    if (mainDose) mainDose.value = val;
    this.calculate();
  },

  calculate: function() {
    const bw = parseFloat(document.getElementById('m1-bw')?.value) || 0;
    const ht = parseFloat(document.getElementById('m1-ht')?.value) || 0;
    const age = parseFloat(document.getElementById('m1-age')?.value) || 0;
    const scr = parseFloat(document.getElementById('m1-scr')?.value) || 0;
    const dose = parseFloat(document.getElementById('m1-dose')?.value) || 0;
    const targetCss = parseFloat(document.getElementById('m1-target-css')?.value) || 0;

    const calcCss = (doseVal, crclVal) => {
      if (doseVal <= 0 || crclVal <= 0) return 0;
      return (doseVal * 1 * 1 * 8.12) / ((0.235 * crclVal * 24 * 60) / 1000);
    };

    // Male Logic
    let ibwM = 0;
    if (ht > 0) {
      ibwM = 50 + 2.3 * ((ht / 2.54) - 60);
      ibwM = Math.max(0, ibwM);
    }

    let crclIbwM = 0, crclRealM = 0;
    if (age > 0 && scr > 0) {
      if (ibwM > 0) crclIbwM = ((140 - age) * ibwM) / (72 * scr);
      if (bw > 0) crclRealM = ((140 - age) * bw) / (72 * scr);
    }

    let cssIbwM = calcCss(dose, crclIbwM);
    let cssRealM = calcCss(dose, crclRealM);

    // Female Logic
    let ibwF = 0;
    if (ht > 0) {
      ibwF = 45.5 + 2.3 * ((ht / 2.54) - 60);
      ibwF = Math.max(0, ibwF);
    }

    let crclIbwF = 0, crclRealF = 0;
    if (age > 0 && scr > 0) {
      if (ibwF > 0) crclIbwF = ((140 - age) * ibwF * 0.85) / (72 * scr);
      if (bw > 0) crclRealF = ((140 - age) * bw * 0.85) / (72 * scr);
    }

    let cssIbwF = calcCss(dose, crclIbwF);
    let cssRealF = calcCss(dose, crclRealF);

    // Render Results
    this.setText('m-ibw', ibwM > 0 ? ibwM.toFixed(3) : '-');
    this.setText('m-realbw', bw > 0 ? bw.toFixed(3) : '-');
    this.setText('m-crcl-ibw', crclIbwM > 0 ? crclIbwM.toFixed(3) : '-');
    this.setText('m-crcl-realbw', crclRealM > 0 ? crclRealM.toFixed(3) : '-');
    this.setText('m-css-ibw', cssIbwM > 0 ? cssIbwM.toFixed(3) : '-');
    this.setText('m-css-realbw', cssRealM > 0 ? cssRealM.toFixed(3) : '-');

    this.setText('f-ibw', ibwF > 0 ? ibwF.toFixed(3) : '-');
    this.setText('f-realbw', bw > 0 ? bw.toFixed(3) : '-');
    this.setText('f-crcl-ibw', crclIbwF > 0 ? crclIbwF.toFixed(3) : '-');
    this.setText('f-crcl-realbw', crclRealF > 0 ? crclRealF.toFixed(3) : '-');
    this.setText('f-css-ibw', cssIbwF > 0 ? cssIbwF.toFixed(3) : '-');
    this.setText('f-css-realbw', cssRealF > 0 ? cssRealF.toFixed(3) : '-');

    // Highlight
    this.highlightLower('m-ibw-box', 'm-realbw-box', 'm-css-ibw-box', 'm-css-realbw-box', ibwM, bw);
    this.highlightLower('f-ibw-box', 'f-realbw-box', 'f-css-ibw-box', 'f-css-realbw-box', ibwF, bw);

    // Recommended Dose Calculations
    if (dose > 0 && targetCss > 0) {
      let minDose = (0.6 * dose) / targetCss;
      let maxAcute = (1.2 * dose) / targetCss;
      let maxMaint = (1.0 * dose) / targetCss;

      this.setText('rec-min', minDose.toFixed(3) + ' เม็ด/วัน');
      this.setText('rec-max-acute', maxAcute.toFixed(3) + ' เม็ด/วัน');
      this.setText('rec-max-maint', maxMaint.toFixed(3) + ' เม็ด/วัน');
    } else {
      this.setText('rec-min', '- เม็ด/วัน');
      this.setText('rec-max-acute', '- เม็ด/วัน');
      this.setText('rec-max-maint', '- เม็ด/วัน');
    }
  },

  setText: function(id, txt) {
    const el = document.getElementById(id);
    if (el) el.innerText = txt;
  },

  highlightLower: function(wBox1, wBox2, cssBox1, cssBox2, w1, w2) {
    const elW1 = document.getElementById(wBox1);
    const elW2 = document.getElementById(wBox2);
    const elC1 = document.getElementById(cssBox1);
    const elC2 = document.getElementById(cssBox2);

    if (!elW1 || !elW2 || !elC1 || !elC2) return;

    elW1.classList.remove('highlight-green');
    elW2.classList.remove('highlight-green');
    elC1.classList.remove('highlight-green');
    elC2.classList.remove('highlight-green');

    if (w1 > 0 && w2 > 0) {
      if (w1 <= w2) {
        elW1.classList.add('highlight-green');
        elC1.classList.add('highlight-green');
      } else {
        elW2.classList.add('highlight-green');
        elC2.classList.add('highlight-green');
      }
    }
  }
};
