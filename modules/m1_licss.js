window.M1_LiCss = {
  render: function(container) {
    container.innerHTML = `
      <style>
        .m1-container {
          padding: 8px;
          max-width: 1280px;
          margin: 0 auto;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .m1-header-block {
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 1px solid #e2e8f0;
        }
        .m1-title-text {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
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

        .m1-left-inputs {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .m1-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 12px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03);
        }

        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          padding-bottom: 4px;
          border-bottom: 2px solid #3b82f6;
        }
        .section-subtitle {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f172a;
        }
        .btn-reset-sm {
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #cbd5e1;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.72rem;
          font-weight: 600;
          cursor: pointer;
        }
        .btn-reset-sm:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .form-group-compact {
          margin-bottom: 8px;
        }
        .form-group-compact label {
          display: block;
          font-size: 0.78rem;
          font-weight: 600;
          color: #334155;
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
          width: 180px;
          justify-content: space-between;
        }
        .btn-step {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          color: #334155;
          font-weight: bold;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
        }
        .btn-step:hover {
          background: #cbd5e1;
        }
        .stepper-box input[type="number"] {
          width: 110px;
          border: none;
          background: transparent;
          text-align: center;
          font-weight: 700;
          font-size: 0.88rem;
          color: #0f172a;
          outline: none;
        }
        .stepper-box input[type="number"]::-webkit-outer-spin-button,
        .stepper-box input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .stepper-box input[type="number"] {
          -moz-appearance: textfield;
        }
        .unit-label {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 600;
        }

        /* Results Display */
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
          background: rgba(255,255,255,0.6);
        }
        
        /* Highlight low weight & low weight Css */
        .highlight-lower {
          background-color: #dcfce7 !important;
          border: 1px solid #86efac !important;
          font-weight: 700 !important;
          color: #15803d !important;
        }

        .dose-recommend-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 12px;
        }
        .recommend-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
          padding-bottom: 4px;
          border-bottom: 1px solid #e2e8f0;
        }
        .rec-row {
          display: flex;
          justify-content: space-between;
          padding: 5px 0;
          border-bottom: 1px dashed #f1f5f9;
          font-size: 0.83rem;
        }
        .rec-row:last-child {
          border-bottom: none;
        }
        .rec-label { color: #475569; }
        .rec-val { font-weight: 700; color: #0f172a; }
      </style>

      <div class="m1-container">
        <div class="m1-header-block">
          <div class="m1-title-text">M1: LiCss - ช่วยแนะนำการปรับขนาดยา Lithium</div>
        </div>

        <div class="m1-main-grid">
          <!-- LEFT: INPUT PANELS -->
          <div class="m1-left-inputs">
            <!-- INPUT 1 CARD -->
            <div class="m1-card">
              <div class="card-header-row">
                <span class="section-subtitle">ข้อมูลผู้ป่วย (Input 1)</span>
                <button type="button" id="m1-btn-reset-in1" class="btn-reset-sm">Reset</button>
              </div>
              
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
            </div>

            <!-- INPUT 2 CARD -->
            <div class="m1-card">
              <div class="card-header-row" style="border-bottom-color: #10b981;">
                <span class="section-subtitle">recommend dose (steady state 7 วัน) (Input 2)</span>
                <button type="button" id="m1-btn-reset-in2" class="btn-reset-sm">Reset</button>
              </div>

              <div class="form-group-compact">
                <label for="m1-dose">ขนาดยาที่ได้รับ (Cap/day)</label>
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
          </div>

          <!-- RIGHT: OUTPUT PANELS -->
          <div class="results-panel">
            <!-- OUTPUT 1: PREDICTION GRID -->
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
                <div class="calc-row-grid" style="margin-top: 6px;">
                  <div class="calc-item" id="m1-m-css-ibw-box" style="border: 1px solid #bfdbfe;">
                    <span>ทำนาย Css (IBW):</span>
                    <span id="m1-m-css-ibw" style="font-weight: 700;">-</span>
                  </div>
                  <div class="calc-item" id="m1-m-css-realbw-box" style="border: 1px solid #bfdbfe;">
                    <span>ทำนาย Css (real BW):</span>
                    <span id="m1-m-css-realbw" style="font-weight: 700;">-</span>
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
                <div class="calc-row-grid" style="margin-top: 6px;">
                  <div class="calc-item" id="m1-f-css-ibw-box" style="border: 1px solid #fbcfe8;">
                    <span>ทำนาย Css (IBW):</span>
                    <span id="m1-f-css-ibw" style="font-weight: 700;">-</span>
                  </div>
                  <div class="calc-item" id="m1-f-css-realbw-box" style="border: 1px solid #fbcfe8;">
                    <span>ทำนาย Css (real BW):</span>
                    <span id="m1-f-css-realbw" style="font-weight: 700;">-</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- OUTPUT 2: DOSE RECOMMENDATIONS -->
            <div class="dose-recommend-card">
              <div class="recommend-title">ผลลัพธ์แนะนำขนาดขนาดยา (recommend dose steady state 7 วัน) (Output 2)</div>
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
      </div>
    `;

    // Reset Input 1 Event
    document.getElementById('m1-btn-reset-in1')?.addEventListener('click', function() {
      ['m1-bw', 'm1-ht', 'm1-age', 'm1-scr'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      window.M1_LiCss.calculate();
    });

    // Reset Input 2 Event
    document.getElementById('m1-btn-reset-in2')?.addEventListener('click', function() {
      ['m1-dose', 'm1-target-css'].forEach(id => {
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

    // male calculations
    let ibwM = 0;
    if (ht > 0) ibwM = 50 + 0.91 * (ht - 152.4);
    ibwM = Math.max(0, ibwM);

    let crclIbwM = 0, crclRealM = 0;
    if (age > 0 && scr > 0) {
      if (ibwM > 0) crclIbwM = ((140 - age) * ibwM) / (72 * scr);
      if (bw > 0) crclRealM = ((140 - age) * bw) / (72 * scr);
    }

    // female calculations
    let ibwF = 0;
    if (ht > 0) ibwF = 45.5 + 0.91 * (ht - 152.4);
    ibwF = Math.max(0, ibwF);

    let crclIbwF = 0, crclRealF = 0;
    if (age > 0 && scr > 0) {
      if (ibwF > 0) crclIbwF = (((140 - age) * ibwF) / (72 * scr)) * 0.85;
      if (bw > 0) crclRealF = (((140 - age) * bw) / (72 * scr)) * 0.85;
    }

    // Predict Css both for IBW and Real BW (Lithium Cl_Li ~ 0.235 * CrCl)
    let cssIbwM = 0, cssRealM = 0;
    let cssIbwF = 0, cssRealF = 0;

    if (dose > 0) {
      let dailyDoseMg = dose * 300; // 1 cap = 300 mg Lithium Carbonate (~8.12 mEq)
      if (crclIbwM > 0) cssIbwM = (dailyDoseMg * 0.0083) / (crclIbwM * 0.0144 * 24);
      if (crclRealM > 0) cssRealM = (dailyDoseMg * 0.0083) / (crclRealM * 0.0144 * 24);

      if (crclIbwF > 0) cssIbwF = (dailyDoseMg * 0.0083) / (crclIbwF * 0.0144 * 24);
      if (crclRealF > 0) cssRealF = (dailyDoseMg * 0.0083) / (crclRealF * 0.0144 * 24);
    }

    // Set UI Texts Male
    this.setText('m1-m-ibw', ibwM > 0 ? ibwM.toFixed(2) : '-');
    this.setText('m1-m-realbw', bw > 0 ? bw.toFixed(2) : '-');
    this.setText('m1-m-crcl-ibw', crclIbwM > 0 ? crclIbwM.toFixed(2) : '-');
    this.setText('m1-m-crcl-realbw', crclRealM > 0 ? crclRealM.toFixed(2) : '-');
    this.setText('m1-m-css-ibw', cssIbwM > 0 ? cssIbwM.toFixed(2) : '-');
    this.setText('m1-m-css-realbw', cssRealM > 0 ? cssRealM.toFixed(2) : '-');

    // Set UI Texts Female
    this.setText('m1-f-ibw', ibwF > 0 ? ibwF.toFixed(2) : '-');
    this.setText('m1-f-realbw', bw > 0 ? bw.toFixed(2) : '-');
    this.setText('m1-f-crcl-ibw', crclIbwF > 0 ? crclIbwF.toFixed(2) : '-');
    this.setText('m1-f-crcl-realbw', crclRealF > 0 ? crclRealF.toFixed(2) : '-');
    this.setText('m1-f-css-ibw', cssIbwF > 0 ? cssIbwF.toFixed(2) : '-');
    this.setText('m1-f-css-realbw', cssRealF > 0 ? cssRealF.toFixed(2) : '-');

    // Highlights: Weight & Css based on lower weight
    this.highlightLower('m1-m-ibw-box', 'm1-m-realbw-box', 'm1-m-css-ibw-box', 'm1-m-css-realbw-box', ibwM, bw);
    this.highlightLower('m1-f-ibw-box', 'm1-f-realbw-box', 'm1-f-css-ibw-box', 'm1-f-css-realbw-box', ibwF, bw);

    // Calculate Output 2 (Recommend Dose using current dose and Target Css)
    if (dose > 0 && targetCss > 0) {
      // Dose proportioning
      let recDoseBase = (dose * targetCss);
      
      this.setText('m1-rec-min', (recDoseBase * 0.8).toFixed(2) + ' เม็ด/วัน');
      this.setText('m1-rec-max-acute', (recDoseBase * 1.5).toFixed(2) + ' เม็ด/วัน');
      this.setText('m1-rec-max-maint', recDoseBase.toFixed(2) + ' เม็ด/วัน');
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

  highlightLower: function(wBox1, wBox2, cssBox1, cssBox2, w1, w2) {
    const elW1 = document.getElementById(wBox1);
    const elW2 = document.getElementById(wBox2);
    const elC1 = document.getElementById(cssBox1);
    const elC2 = document.getElementById(cssBox2);

    if (!elW1 || !elW2 || !elC1 || !elC2) return;

    elW1.classList.remove('highlight-lower');
    elW2.classList.remove('highlight-lower');
    elC1.classList.remove('highlight-lower');
    elC2.classList.remove('highlight-lower');

    if (w1 > 0 && w2 > 0) {
      if (w1 <= w2) {
        elW1.classList.add('highlight-lower');
        elC1.classList.add('highlight-lower');
      } else {
        elW2.classList.add('highlight-lower');
        elC2.classList.add('highlight-lower');
      }
    }
  }
};
