window.M1_LiCss = {
  render: function(container) {
    container.innerHTML = `
      <style>
        .m1-container {
          padding: 10px;
          max-width: 1280px;
          margin: 0 auto;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .m1-header-block {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e2e8f0;
        }
        .m1-title-text {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1e293b;
        }
        .btn-clear {
          background-color: #ef4444;
          color: white;
          border: none;
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .btn-clear:hover {
          background-color: #dc2626;
        }
        
        /* Grid Layout: PC = 2 Columns */
        .m1-main-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 16px;
          align-items: start;
        }
        @media (max-width: 868px) {
          .m1-main-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Compact Stepper UI */
        .m1-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 12px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .section-subtitle {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
          padding-bottom: 4px;
          border-bottom: 2px solid #3b82f6;
        }
        .form-group-compact {
          margin-bottom: 8px;
        }
        .form-group-compact label {
          display: block;
          font-size: 0.78rem;
          font-weight: 600;
          color: #475569;
          margin-bottom: 3px;
        }
        .stepper-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .stepper-box {
          display: inline-flex;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 20px;
          padding: 2px;
          width: 190px;
          justify-content: space-between;
        }
        .btn-step {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          color: #334155;
          font-weight: bold;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          transition: all 0.15s ease;
        }
        .btn-step:hover {
          background: #e2e8f0;
          color: #0f172a;
        }
        .stepper-box input[type="number"] {
          width: 120px;
          border: none;
          background: transparent;
          text-align: center;
          font-weight: 700;
          font-size: 0.9rem;
          color: #1e293b;
          outline: none;
        }
        /* Hide browser default spinners */
        .stepper-box input[type="number"]::-webkit-outer-spin-button,
        .stepper-box input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .stepper-box input[type="number"] {
          -moz-appearance: textfield;
        }
        .unit-label {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 500;
          min-width: 40px;
        }

        /* Results Display (Right Panel) */
        .results-panel {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .predict-gender-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 640px) {
          .predict-gender-grid {
            grid-template-columns: 1fr;
          }
        }
        .gender-card {
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 0.82rem;
        }
        .gender-male {
          background-color: #eff6ff;
          border: 1px solid #bfdbfe;
        }
        .gender-male .gender-title {
          color: #1d4ed8;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .gender-female {
          background-color: #fdf2f8;
          border: 1px solid #fbcfe8;
        }
        .gender-female .gender-title {
          color: #be185d;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .calc-row-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          margin-bottom: 4px;
        }
        .calc-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3px 6px;
          border-radius: 4px;
          line-height: 1.4;
        }
        /* Highlight lower weight item */
        .calc-item.highlight-lower {
          background-color: #dcfce7 !important;
          border: 1px solid #86efac;
          font-weight: 700;
          color: #15803d;
        }
        .dose-recommend-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 12px;
        }
        .recommend-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #334155;
          margin-bottom: 8px;
        }
        .rec-row {
          display: flex;
          justify-content: space-between;
          padding: 4px 0;
          border-bottom: 1px dashed #e2e8f0;
          font-size: 0.85rem;
        }
        .rec-row:last-child {
          border-bottom: none;
        }
        .rec-label { color: #475569; }
        .rec-val { font-weight: 700; color: #0f172a; }

        .m1-footer {
          margin-top: 16px;
          text-align: center;
          font-size: 0.75rem;
          color: #64748b;
        }
      </style>

      <div class="m1-container">
        <div class="m1-header-block">
          <div class="m1-title-text">M1: LiCss - ช่วยแนะนำการปรับขนาดยา Lithium</div>
          <button id="m1-btn-clear" class="btn-clear">Clear ค่าทั้งหมด</button>
        </div>

        <div class="m1-main-grid">
          <!-- LEFT: INPUT PANEL -->
          <div class="m1-card">
            <div class="section-subtitle">ข้อมูลผู้ป่วย</div>
            
            <div class="form-group-compact">
              <label for="m1-bw">BW (น้ำหนัก)</label>
              <div class="stepper-row">
                <div class="stepper-box">
                  <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-bw', -1, 0, 300, 1)">-</button>
                  <input type="number" id="m1-bw" step="1" placeholder="0" oninput="window.M1_LiCss.calculate()">
                  <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-bw', 1, 0, 300, 1)">+</button>
                </div>
                <span class="unit-label">kg</span>
              </div>
            </div>

            <div class="form-group-compact">
              <label for="m1-ht">Ht (ส่วนสูง)</label>
              <div class="stepper-row">
                <div class="stepper-box">
                  <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-ht', -1, 0, 250, 1)">-</button>
                  <input type="number" id="m1-ht" step="1" placeholder="0" oninput="window.M1_LiCss.calculate()">
                  <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-ht', 1, 0, 250, 1)">+</button>
                </div>
                <span class="unit-label">cm</span>
              </div>
            </div>

            <div class="form-group-compact">
              <label for="m1-age">Age (อายุ)</label>
              <div class="stepper-row">
                <div class="stepper-box">
                  <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-age', -1, 0, 120, 0)">-</button>
                  <input type="number" id="m1-age" step="1" placeholder="0" oninput="window.M1_LiCss.calculate()">
                  <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-age', 1, 0, 120, 0)">+</button>
                </div>
                <span class="unit-label">ปี</span>
              </div>
            </div>

            <div class="form-group-compact">
              <label for="m1-scr">Scr</label>
              <div class="stepper-row">
                <div class="stepper-box">
                  <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-scr', -0.1, 0, 20, 2)">-</button>
                  <input type="number" id="m1-scr" step="0.1" placeholder="0.00" oninput="window.M1_LiCss.calculate()">
                  <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-scr', 0.1, 0, 20, 2)">+</button>
                </div>
                <span class="unit-label">mg/dL</span>
              </div>
            </div>

            <div class="section-subtitle" style="margin-top: 14px;">ขนาดยาที่ได้รับปัจจุบัน</div>
            
            <div class="form-group-compact">
              <label for="m1-dose">ขนาดยา (Cap/day)</label>
              <div class="stepper-row">
                <div class="stepper-box">
                  <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-dose', -1, 0, 50, 0)">-</button>
                  <input type="number" id="m1-dose" step="1" placeholder="0" oninput="window.M1_LiCss.calculate()">
                  <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-dose', 1, 0, 50, 0)">+</button>
                </div>
                <span class="unit-label">เม็ด</span>
              </div>
            </div>

            <div class="form-group-compact">
              <label for="m1-target-css">ระดับยาที่รอ (Target Css)</label>
              <div class="stepper-row">
                <div class="stepper-box">
                  <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-target-css', -0.1, 0, 5, 2)">-</button>
                  <input type="number" id="m1-target-css" step="0.1" placeholder="0.00" oninput="window.M1_LiCss.calculate()">
                  <button type="button" class="btn-step" onclick="window.M1_LiCss.stepInput('m1-target-css', 0.1, 0, 5, 2)">+</button>
                </div>
                <span class="unit-label">mEq/L</span>
              </div>
            </div>
          </div>

          <!-- RIGHT: OUTPUT RESULTS PANEL -->
          <div class="results-panel">
            <!-- Output 1: Prediction Grid -->
            <div class="predict-gender-grid">
              <!-- Male Card -->
              <div class="gender-card gender-male">
                <div class="gender-title">เพศชาย</div>
                <div class="calc-row-grid">
                  <div class="calc-item" id="m1-m-ibw-box">
                    <span>IBW:</span> <span id="m1-m-ibw">-</span>
                  </div>
                  <div class="calc-item" id="m1-m-realbw-box">
                    <span>real BW:</span> <span id="m1-m-realbw">-</span>
                  </div>
                </div>
                <div class="calc-row-grid">
                  <div class="calc-item">
                    <span>CrCl IBW:</span> <span id="m1-m-crcl-ibw">-</span>
                  </div>
                  <div class="calc-item">
                    <span>CrCl real BW:</span> <span id="m1-m-crcl-realbw">-</span>
                  </div>
                </div>
                <div class="calc-row-grid" style="margin-top: 4px; font-size: 0.9rem;">
                  <div class="calc-item" style="grid-column: span 2; background: #ffffff; border: 1px solid #bfdbfe;">
                    <span style="font-weight: 700;">ทำนาย Css:</span>
                    <span id="m1-m-css" style="font-weight: 700; color: #1d4ed8;">-</span>
                  </div>
                </div>
              </div>

              <!-- Female Card -->
              <div class="gender-card gender-female">
                <div class="gender-title">เพศหญิง</div>
                <div class="calc-row-grid">
                  <div class="calc-item" id="m1-f-ibw-box">
                    <span>IBW:</span> <span id="m1-f-ibw">-</span>
                  </div>
                  <div class="calc-item" id="m1-f-realbw-box">
                    <span>real BW:</span> <span id="m1-f-realbw">-</span>
                  </div>
                </div>
                <div class="calc-row-grid">
                  <div class="calc-item">
                    <span>CrCl IBW:</span> <span id="m1-f-crcl-ibw">-</span>
                  </div>
                  <div class="calc-item">
                    <span>CrCl real BW:</span> <span id="m1-f-crcl-realbw">-</span>
                  </div>
                </div>
                <div class="calc-row-grid" style="margin-top: 4px; font-size: 0.9rem;">
                  <div class="calc-item" style="grid-column: span 2; background: #ffffff; border: 1px solid #fbcfe8;">
                    <span style="font-weight: 700;">ทำนาย Css:</span>
                    <span id="m1-f-css" style="font-weight: 700; color: #be185d;">-</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Output 2: Dose Recommendations -->
            <div class="dose-recommend-card">
              <div class="recommend-title">ผลลัพธ์แนะนำขนาดขนาดยา (recommend dose steady state 7 วัน)</div>
              <div class="rec-row">
                <span class="rec-label">minimum dose:</span>
                <span id="m1-rec-min" class="rec-val">-</span>
              </div>
              <div class="rec-row">
                <span class="rec-label">max dose (Acute phase):</span>
                <span id="m1-rec-max-acute" class="rec-val">-</span>
              </div>
              <div class="rec-row">
                <span class="rec-label">max dose (Maintenance phase):</span>
                <span id="m1-rec-max-maint" class="rec-val">-</span>
              </div>
            </div>
          </div>
        </div>

        <div class="m1-footer">
          ผู้ใช้งานควรตรวจสอบความถูกต้องและดัดแปลงแนะนำใช้ให้เหมาะสม [ผลลัพธ์นี้ไม่อนุญาตให้นำไปใช้อ้างอิงทางกฎหมาย] <br>
          Designed by RacNoot52
        </div>
      </div>
    `;

    document.getElementById('m1-btn-clear').addEventListener('click', function() {
      ['m1-bw', 'm1-ht', 'm1-age', 'm1-scr', 'm1-dose', 'm1-target-css'].forEach(id => {
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
    this.calculate();
  },

  calculate: function() {
    const bw = parseFloat(document.getElementById('m1-bw')?.value) || 0;
    const ht = parseFloat(document.getElementById('m1-ht')?.value) || 0;
    const age = parseFloat(document.getElementById('m1-age')?.value) || 0;
    const scr = parseFloat(document.getElementById('m1-scr')?.value) || 0;
    const dose = parseFloat(document.getElementById('m1-dose')?.value) || 0;
    const targetCss = parseFloat(document.getElementById('m1-target-css')?.value) || 0;

    // Male calculations
    let ibwM = 0;
    if (ht > 0) ibwM = 50 + 0.91 * (ht - 152.4);
    ibwM = Math.max(0, ibwM);

    let crclIbwM = 0, crclRealM = 0;
    if (age > 0 && scr > 0) {
      if (ibwM > 0) crclIbwM = ((140 - age) * ibwM) / (72 * scr);
      if (bw > 0) crclRealM = ((140 - age) * bw) / (72 * scr);
    }

    // Female calculations
    let ibwF = 0;
    if (ht > 0) ibwF = 45.5 + 0.91 * (ht - 152.4);
    ibwF = Math.max(0, ibwF);

    let crclIbwF = 0, crclRealF = 0;
    if (age > 0 && scr > 0) {
      if (ibwF > 0) crclIbwF = (((140 - age) * ibwF) / (72 * scr)) * 0.85;
      if (bw > 0) crclRealF = (((140 - age) * bw) / (72 * scr)) * 0.85;
    }

    // Predict Css (Sample linear calculation)
    let cssM = 0, cssF = 0;
    if (dose > 0 && crclRealM > 0) cssM = (dose * 150) / crclRealM;
    if (dose > 0 && crclRealF > 0) cssF = (dose * 150) / crclRealF;

    // UI Updates - Male
    this.setText('m1-m-ibw', ibwM > 0 ? ibwM.toFixed(2) : '-');
    this.setText('m1-m-realbw', bw > 0 ? bw.toFixed(2) : '-');
    this.setText('m1-m-crcl-ibw', crclIbwM > 0 ? crclIbwM.toFixed(2) : '-');
    this.setText('m1-m-crcl-realbw', crclRealM > 0 ? crclRealM.toFixed(2) : '-');
    this.setText('m1-m-css', cssM > 0 ? cssM.toFixed(3) : '-');

    // UI Updates - Female
    this.setText('m1-f-ibw', ibwF > 0 ? ibwF.toFixed(2) : '-');
    this.setText('m1-f-realbw', bw > 0 ? bw.toFixed(2) : '-');
    this.setText('m1-f-crcl-ibw', crclIbwF > 0 ? crclIbwF.toFixed(2) : '-');
    this.setText('m1-f-crcl-realbw', crclRealF > 0 ? crclRealF.toFixed(2) : '-');
    this.setText('m1-f-css', cssF > 0 ? cssF.toFixed(3) : '-');

    // Highlight lower weight
    this.highlightLower('m1-m-ibw-box', 'm1-m-realbw-box', ibwM, bw);
    this.highlightLower('m1-f-ibw-box', 'm1-f-realbw-box', ibwF, bw);

    // Dose Recommendations
    if (targetCss > 0) {
      this.setText('m1-rec-min', (targetCss * 1.2).toFixed(2) + ' เม็ด');
      this.setText('m1-rec-max-acute', (targetCss * 2.4).toFixed(2) + ' เม็ด');
      this.setText('m1-rec-max-maint', (targetCss * 1.8).toFixed(2) + ' เม็ด');
    } else {
      this.setText('m1-rec-min', '-');
      this.setText('m1-rec-max-acute', '-');
      this.setText('m1-rec-max-maint', '-');
    }
  },

  setText: function(id, txt) {
    const el = document.getElementById(id);
    if (el) el.innerText = txt;
  },

  highlightLower: function(id1, id2, val1, val2) {
    const el1 = document.getElementById(id1);
    const el2 = document.getElementById(id2);
    if (!el1 || !el2) return;

    el1.classList.remove('highlight-lower');
    el2.classList.remove('highlight-lower');

    if (val1 > 0 && val2 > 0) {
      if (val1 < val2) {
        el1.classList.add('highlight-lower');
      } else if (val2 < val1) {
        el2.classList.add('highlight-lower');
      }
    }
  }
};
