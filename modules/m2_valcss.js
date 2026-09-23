window.M2_ValCss = {
  render: function(container) {
    container.innerHTML = `
      <style>
        .m2-wrapper {
          padding: 12px;
          max-width: 1280px;
          margin: 0 auto;
          font-family: system-ui, -apple-system, sans-serif;
          color: #0f172a;
        }
        .m2-header-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 1px solid #cbd5e1;
        }

        /* Grid แบ่ง ซ้าย-ขวา */
        .m2-main-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: stretch;
        }
        @media (max-width: 900px) {
          .m2-main-layout {
            grid-template-columns: 1fr;
          }
        }

        /* Card Frame */
        .m2-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* การ์ดฝั่งซ้ายเน้นสีฟ้าอ่อน */
        .input-card-highlight {
          background: #f8fafc;
          border: 1.5px solid #93c5fd;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.06);
        }

        .card-head-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 14px;
          padding-bottom: 6px;
          border-bottom: 2px solid #3b82f6;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

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

        /* Form Group Inline */
        .input-fields-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .field-group-inline {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .field-group-inline label {
          width: 120px;
          flex-shrink: 0;
          font-size: 0.92rem;
          font-weight: 700;
          color: #1e293b;
          white-space: nowrap;
          line-height: 1.25;
        }
        .stepper-container-inline {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
        }

        /* Stepper Box */
        .stepper-box {
          display: flex;
          align-items: center;
          flex: 1;
          background: #eff6ff;
          border: 1.5px solid #60a5fa;
          border-radius: 24px;
          padding: 2px 6px;
          height: 42px;
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
          font-size: 1.2rem;
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
          min-width: 65px;
          text-align: left;
        }

        /* ส่วนแสดงผลทำนายระดับยา */
        .predict-section {
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px dashed #cbd5e1;
        }
        .predict-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
          text-align: center;
        }
        .predict-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .predict-card {
          background: #ffffff;
          border: 1px solid #bae6fd;
          border-radius: 8px;
          padding: 10px;
          text-align: center;
        }
        .predict-card-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0369a1;
          margin-bottom: 6px;
        }
        .predict-card-val {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f172a;
        }
        .predict-card-unit {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 500;
        }

        /* ผลการคำนวณฝั่งขวา */
        .rec-out-list {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          background: #f8fafc;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          margin-top: 16px;
          gap: 8px;
        }
        .rec-out-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px dashed #e2e8f0;
        }
        .rec-out-item:last-child {
          border-bottom: none;
        }
        
        /* เพิ่มขนาดฟอนต์ขึ้น ~15% ปรับเป็นสีดำเข้ม ตัวหนาเด่น */
        .rec-out-label {
          color: #0f172a;
          font-weight: 700;
          font-size: 1.02rem;
          line-height: 1.3;
        }
        /* เพิ่มขนาดฟอนต์ในวงเล็บขึ้น ~15% คงสีเทาและการขึ้นบรรทัดใหม่ */
        .rec-out-label small {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
          display: block;
        }

        .rec-out-val-container {
          text-align: right;
          white-space: nowrap;
        }
        .rec-out-num {
          font-weight: 800;
          font-size: 1.3rem;
          color: #0f172a;
        }
        .rec-out-unit {
          font-weight: 500;
          font-size: 0.9rem;
          color: #64748b;
          margin-left: 2px;
        }
      </style>

      <div class="m2-wrapper">
        <div class="m2-header-title">M2: ValCss - ช่วยแนะนำการปรับขนาดยา Valproate</div>

        <div class="m2-main-layout">
          
          <!-- LEFT CARD: ข้อมูลผู้ป่วย & ทำนายระดับยา -->
          <div class="m2-card input-card-highlight">
            <div>
              <div class="card-head-title">
                <span>ข้อมูลผู้ป่วย</span>
                <button type="button" id="m2-btn-clear-left" class="btn-clear-mini">Clear</button>
              </div>

              <div class="input-fields-container">
                <!-- BW (น้ำหนัก) -->
                <div class="field-group-inline">
                  <label for="m2-bw">BW (น้ำหนัก)</label>
                  <div class="stepper-container-inline">
                    <div class="stepper-box">
                      <button type="button" class="btn-step" onclick="window.M2_ValCss.stepInput('m2-bw', -1, 0, 300, 2)">-</button>
                      <input type="number" id="m2-bw" step="0.01" placeholder="0" oninput="window.M2_ValCss.calculate()">
                      <button type="button" class="btn-step" onclick="window.M2_ValCss.stepInput('m2-bw', 1, 0, 300, 2)">+</button>
                    </div>
                    <span class="unit-text">kg</span>
                  </div>
                </div>

                <!-- Ht (ส่วนสูง) -->
                <div class="field-group-inline">
                  <label for="m2-ht">Ht (ส่วนสูง)</label>
                  <div class="stepper-container-inline">
                    <div class="stepper-box">
                      <button type="button" class="btn-step" onclick="window.M2_ValCss.stepInput('m2-ht', -1, 0, 250, 2)">-</button>
                      <input type="number" id="m2-ht" step="0.01" placeholder="0" oninput="window.M2_ValCss.calculate()">
                      <button type="button" class="btn-step" onclick="window.M2_ValCss.stepInput('m2-ht', 1, 0, 250, 2)">+</button>
                    </div>
                    <span class="unit-text">cm</span>
                  </div>
                </div>

                <!-- ขนาดยา/วัน -->
                <div class="field-group-inline">
                  <label for="m2-dose">ขนาดยา/วัน</label>
                  <div class="stepper-container-inline">
                    <div class="stepper-box">
                      <button type="button" class="btn-step" onclick="window.M2_ValCss.stepInput('m2-dose', -100, 0, 10000, 2)">-</button>
                      <input type="number" id="m2-dose" step="0.01" placeholder="0" oninput="window.M2_ValCss.calculate()">
                      <button type="button" class="btn-step" onclick="window.M2_ValCss.stepInput('m2-dose', 100, 0, 10000, 2)">+</button>
                    </div>
                    <span class="unit-text">mg/day</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- ทำนายระดับยา -->
            <div class="predict-section">
              <div class="predict-title">ทำนายระดับยา</div>
              <div class="predict-grid">
                <div class="predict-card">
                  <div class="predict-card-label">ผู้ใหญ่</div>
                  <div class="predict-card-val" id="m2-pred-adult">-</div>
                  <div class="predict-card-unit">mEq/L</div>
                </div>
                <div class="predict-card">
                  <div class="predict-card-label">เด็ก</div>
                  <div class="predict-card-val" id="m2-pred-child">-</div>
                  <div class="predict-card-unit">mEq/L</div>
                </div>
              </div>
            </div>

          </div>

          <!-- RIGHT CARD: Recommended Dose -->
          <div class="m2-card">
            <div>
              <div class="card-head-title" style="border-bottom-color: #10b981;">
                <span>Recommended dose <br><small style="font-size:0.85rem; font-weight:normal; color:#475569;">(Steady State อย่างน้อย 3 วัน)</small></span>
                <button type="button" id="m2-btn-clear-right" class="btn-clear-mini">Clear</button>
              </div>

              <!-- ระดับยาที่ SS -->
              <div class="field-group-inline" style="margin-top: 10px;">
                <label for="m2-ss-level" style="width: 110px;">ระดับยาที่ SS</label>
                <div class="stepper-container-inline">
                  <div class="stepper-box">
                    <button type="button" class="btn-step" onclick="window.M2_ValCss.stepInput('m2-ss-level', -0.1, 0, 1000, 3)">-</button>
                    <input type="number" id="m2-ss-level" step="0.001" placeholder="0" oninput="window.M2_ValCss.calculate()">
                    <button type="button" class="btn-step" onclick="window.M2_ValCss.stepInput('m2-ss-level', 0.1, 0, 1000, 3)">+</button>
                  </div>
                  <span class="unit-text">mEq/L</span>
                </div>
              </div>

              <!-- Output Box ผลลัพธ์ -->
              <div class="rec-out-list">
                <div class="rec-out-item">
                  <span class="rec-out-label">Minimum dose</span>
                  <div class="rec-out-val-container">
                    <span class="rec-out-num" id="m2-rec-min">-</span>
                    <span class="rec-out-unit">mg</span>
                  </div>
                </div>

                <div class="rec-out-item">
                  <span class="rec-out-label">Max dose <small>(Acute Mania)</small></span>
                  <div class="rec-out-val-container">
                    <span class="rec-out-num" id="m2-rec-max-acute">-</span>
                    <span class="rec-out-unit">mg</span>
                  </div>
                </div>

                <div class="rec-out-item">
                  <span class="rec-out-label">Max dose <small>(Maintenance phase)</small></span>
                  <div class="rec-out-val-container">
                    <span class="rec-out-num" id="m2-rec-max-maint">-</span>
                    <span class="rec-out-unit">mg</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    `;

    // Clear ฝั่งซ้าย
    document.getElementById('m2-btn-clear-left')?.addEventListener('click', function() {
      ['m2-bw', 'm2-ht', 'm2-dose'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      window.M2_ValCss.calculate();
    });

    // Clear ฝั่งขวา
    document.getElementById('m2-btn-clear-right')?.addEventListener('click', function() {
      const el = document.getElementById('m2-ss-level');
      if (el) el.value = '';
      window.M2_ValCss.calculate();
    });
  },

  // Helper สำหรับใส่ comma หลักพัน
  formatNumber: function(num, decimals = 2) {
    if (isNaN(num) || num === null || num === undefined) return '-';
    return Number(num).toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
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
    const bw = parseFloat(document.getElementById('m2-bw')?.value) || 0;
    const ht = parseFloat(document.getElementById('m2-ht')?.value) || 0;
    const dose = parseFloat(document.getElementById('m2-dose')?.value) || 0;
    const ssLevel = parseFloat(document.getElementById('m2-ss-level')?.value) || 0;

    // 1. ทำนายระดับยาผู้ใหญ่ = (1000 * dose) / (8 * 24 * bw)
    if (bw > 0 && dose > 0) {
      const predAdult = (1000 * dose) / (8 * 24 * bw);
      this.setText('m2-pred-adult', this.formatNumber(predAdult, 2));
    } else {
      this.setText('m2-pred-adult', '-');
    }

    // 2. ทำนายระดับยาเด็ก = (1000 * dose) / (13 * 24 * bw)
    if (bw > 0 && dose > 0) {
      const predChild = (1000 * dose) / (13 * 24 * bw);
      this.setText('m2-pred-child', this.formatNumber(predChild, 2));
    } else {
      this.setText('m2-pred-child', '-');
    }

    // 3. Minimum dose = (50 * dose) / ssLevel
    if (ssLevel > 0 && dose > 0) {
      const minDose = (50 * dose) / ssLevel;
      this.setText('m2-rec-min', this.formatNumber(minDose, 2));
    } else {
      this.setText('m2-rec-min', '-');
    }

    // 4. Max dose (Acute Mania) = (125 * dose) / ssLevel
    if (ssLevel > 0 && dose > 0) {
      const maxAcute = (125 * dose) / ssLevel;
      this.setText('m2-rec-max-acute', this.formatNumber(maxAcute, 2));
    } else {
      this.setText('m2-rec-max-acute', '-');
    }

    // 5. Max dose (Maintenance phase) = (100 * dose) / ssLevel
    if (ssLevel > 0 && dose > 0) {
      const maxMaint = (100 * dose) / ssLevel;
      this.setText('m2-rec-max-maint', this.formatNumber(maxMaint, 2));
    } else {
      this.setText('m2-rec-max-maint', '-');
    }
  },

  setText: function(id, txt) {
    const el = document.getElementById(id);
    if (el) el.innerText = txt;
  }
};
