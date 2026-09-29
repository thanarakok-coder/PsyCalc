window.M3_PheCap = {
  render: function(container) {
    container.innerHTML = `
      <style>
        .m3-wrapper {
          padding: 12px;
          max-width: 1380px;
          margin: 0 auto;
          font-family: system-ui, -apple-system, sans-serif;
          color: #0f172a;
        }
        .m3-header-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 1px solid #cbd5e1;
        }

        /* Layout หลัก: ฝั่งซ้าย 280px ฝั่งขวา 1fr */
        .m3-main-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 16px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .m3-main-layout {
            grid-template-columns: 1fr;
          }
        }

        /* Card Frame */
        .m3-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }

        .input-card-highlight {
          background: #f8fafc;
          border: 1.5px solid #93c5fd;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.06);
        }

        .card-head-title {
          font-size: 1.05rem;
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
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
        }
        .btn-clear-mini:hover {
          background: #fca5a5;
        }

        /* Stacked Form Group */
        .field-group-stacked {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
        }
        .field-group-stacked label {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
        }

        .stepper-container-inline {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Stepper Box */
        .stepper-box {
          display: flex;
          align-items: center;
          flex: 1;
          background: #eff6ff;
          border: 1.5px solid #60a5fa;
          border-radius: 28px;
          padding: 4px 8px;
          height: 48px;
        }
        .stepper-box:focus-within {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        /* ปุ่ม Stepper วงกลม */
        .btn-step {
          width: 34px;
          height: 34px;
          min-width: 34px;
          min-height: 34px;
          border-radius: 50%;
          border: 1px solid #93c5fd;
          background: #ffffff;
          color: #1d4ed8;
          font-weight: bold;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          padding: 0;
          line-height: 1;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          transition: background 0.15s ease, transform 0.05s ease;
        }
        .btn-step:hover {
          background: #dbeafe;
        }
        .btn-step:active {
          transform: scale(0.95);
        }

        .stepper-box input {
          width: 100%;
          border: none;
          background: transparent;
          text-align: center;
          font-weight: 800;
          font-size: 1.25rem;
          color: #0f172a;
          outline: none;
        }
        .stepper-box input::-webkit-outer-spin-button,
        .stepper-box input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .unit-text {
          font-size: 0.95rem;
          font-weight: 700;
          color: #475569;
          min-width: 25px;
        }

        .action-toggle-btns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 10px;
          padding-top: 12px;
          border-top: 1px dashed #cbd5e1;
        }
        .btn-action-outline {
          background: #ffffff;
          border: 1.5px solid #0284c7;
          color: #0369a1;
          padding: 8px 0;
          border-radius: 6px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          transition: all 0.15s ease;
        }
        .btn-action-outline:hover {
          background: #e0f2fe;
        }

        /* Title 2 บรรทัด */
        .module-brand-title {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          line-height: 1.25;
        }
        .brand-sub {
          font-size: 0.95rem;
          font-weight: 600;
          color: #1e293b;
          letter-spacing: 0.5px;
        }
        .brand-main {
          font-size: 1.45rem;
          font-weight: 800;
          color: #1e3a8a;
          letter-spacing: 0.5px;
        }

        /* Accordion Component */
        .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .accordion-item {
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          overflow: hidden;
          background: #ffffff;
          transition: border-color 0.2s ease;
        }
        .accordion-item.active {
          border-color: #2563eb;
        }

        .accordion-header {
          background: #f8fafc;
          padding: 12px 16px;
          font-size: 1.02rem;
          font-weight: 700;
          color: #1e293b;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          user-select: none;
          transition: background 0.15s ease;
        }
        .accordion-header:hover {
          background: #f1f5f9;
        }
        .accordion-item.active .accordion-header {
          background: #eff6ff;
          color: #1d4ed8;
        }

        .accordion-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1.5px solid #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          transition: transform 0.25s ease, border-color 0.25s ease;
          flex-shrink: 0;
        }
        .accordion-item.active .accordion-icon {
          transform: rotate(180deg);
          border-color: #2563eb;
          background: #2563eb;
          color: #ffffff;
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
          background: #ffffff;
          padding: 0 16px;
        }
        .accordion-item.active .accordion-content {
          max-height: 1200px;
          transition: max-height 0.3s ease-in-out;
          padding: 16px;
          border-top: 1px solid #e2e8f0;
        }

        /* --- STYLES สำหรับ SCENARIO 1 ACCORDION --- */
        .scen1-grid-layout {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 16px;
          align-items: stretch;
        }
        @media (max-width: 950px) {
          .scen1-grid-layout {
            grid-template-columns: 1fr;
          }
        }

        /* ซีกซ้าย: ขนาดยา/วัน */
        .dose-input-card {
          background: #f1f5f9;
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .dose-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
        }

        /* ซีกขวา: แยกเพศชาย - หญิง */
        .gender-split-container {
          display: grid;
          grid-template-columns: 1fr 2px 1fr;
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          overflow: hidden;
        }
        @media (max-width: 700px) {
          .gender-split-container {
            grid-template-columns: 1fr;
          }
          .gender-divider-line {
            display: none;
          }
        }

        .gender-divider-line {
          background-color: #334155; /* เส้นทึบกั้นตรงกลาง */
          width: 2px;
        }

        /* กล่องเพศชาย */
        .gender-box-male {
          background-color: #f0f9ff; /* สีฟ้าอ่อน */
          padding: 12px;
        }
        /* กล่องเพศหญิง */
        .gender-box-female {
          background-color: #fdf2f8; /* สีชมพูอ่อน */
          padding: 12px;
        }

        .gender-title-male {
          text-align: center;
          font-size: 1.05rem;
          font-weight: 800;
          color: #0369a1;
          padding-bottom: 8px;
          margin-bottom: 12px;
          border-bottom: 1.5px solid #bae6fd;
        }
        .gender-title-female {
          text-align: center;
          font-size: 1.05rem;
          font-weight: 800;
          color: #be185d;
          padding-bottom: 8px;
          margin-bottom: 12px;
          border-bottom: 1.5px solid #fbcfe8;
        }

        /* แบ่ง 2 ซีก real BW vs IBW */
        .sub-bw-split {
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          gap: 8px;
        }
        .dashed-vertical-line {
          border-left: 1.5px dashed #94a3b8; /* เส้นประแนวตั้ง */
        }

        .bw-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .bw-col-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: #334155;
          text-align: center;
          margin-bottom: 4px;
        }

        .calc-row-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e293b;
          background: rgba(255, 255, 255, 0.7);
          padding: 6px 8px;
          border-radius: 4px;
          border: 1px dashed #cbd5e1;
        }
        .calc-val-placeholder {
          font-weight: 800;
          color: #2563eb;
        }
      </style>

      <div class="m3-wrapper">
        <div class="m3-header-title">M3: PheCap - Phenytoin Capsule Dosing Adjustment</div>

        <div class="m3-main-layout">
          
          <!-- ฝั่งซ้าย: Inputs หลัก (280px) -->
          <div class="m3-card input-card-highlight">
            <div class="card-head-title">
              <span>ข้อมูลผู้ป่วย</span>
              <button type="button" id="m3-btn-clear-left" class="btn-clear-mini">Clear</button>
            </div>

            <!-- น้ำหนัก (BW) -->
            <div class="field-group-stacked">
              <label for="m3-bw">น้ำหนัก</label>
              <div class="stepper-container-inline">
                <div class="stepper-box">
                  <button type="button" class="btn-step" id="m3-bw-dec">-</button>
                  <input type="number" id="m3-bw" step="any" placeholder="0">
                  <button type="button" class="btn-step" id="m3-bw-inc">+</button>
                </div>
                <span class="unit-text">kg</span>
              </div>
            </div>

            <!-- ส่วนสูง (Ht) -->
            <div class="field-group-stacked">
              <label for="m3-ht">ส่วนสูง</label>
              <div class="stepper-container-inline">
                <div class="stepper-box">
                  <button type="button" class="btn-step" id="m3-ht-dec">-</button>
                  <input type="number" id="m3-ht" step="any" placeholder="0">
                  <button type="button" class="btn-step" id="m3-ht-inc">+</button>
                </div>
                <span class="unit-text">cm</span>
              </div>
            </div>

            <!-- ปุ่ม Show All / Hide All -->
            <div class="action-toggle-btns">
              <button type="button" class="btn-action-outline" id="m3-btn-show-all">Show all</button>
              <button type="button" class="btn-action-outline" id="m3-btn-hide-all">Hide all</button>
            </div>

            <!-- Title 2 บรรทัด -->
            <div class="module-brand-title">
              <span class="brand-sub">Phenytoin</span>
              <span class="brand-main">Capsule</span>
            </div>
          </div>

          <!-- ฝั่งขวา: 5 Scenario Accordions -->
          <div class="accordion-list" id="m3-accordion-container">

            <!-- Scenario 1 (เปิดไว้เป็นค่าเริ่มต้น) -->
            <div class="accordion-item active" id="m3-scen-1">
              <div class="accordion-header">
                <span class="accordion-icon">▼</span>
                <span>กรณีไม่ได้รับ VPA , Alb. ปกติ , ไม่เคยเจาะวัดระดับยา</span>
              </div>
              <div class="accordion-content">
                
                <div class="scen1-grid-layout">
                  <!-- ซีกซ้าย: ขนาดยา/วัน -->
                  <div class="dose-input-card">
                    <span class="dose-title">ขนาดยา/วัน</span>
                    <div class="stepper-container-inline" style="width: 100%;">
                      <div class="stepper-box">
                        <button type="button" class="btn-step" id="m3-dose-dec">-</button>
                        <!-- type="text" เพื่อรองรับ comma คอมม่าหลักพัน -->
                        <input type="text" id="m3-dose" placeholder="0">
                        <button type="button" class="btn-step" id="m3-dose-inc">+</button>
                      </div>
                    </div>
                    <span class="unit-text" style="font-size: 1rem;">mg/day</span>
                  </div>

                  <!-- ซีกขวา: แยกเพศชาย / หญิง -->
                  <div class="gender-split-container">
                    
                    <!-- ฝั่งเพศชาย (สีฟ้าอ่อน) -->
                    <div class="gender-box-male">
                      <div class="gender-title-male">เพศชาย</div>
                      <div class="sub-bw-split">
                        <!-- real BW -->
                        <div class="bw-col">
                          <div class="bw-col-title">real BW</div>
                          <div class="calc-row-item">
                            <span>Vmax:</span>
                            <span class="calc-val-placeholder" id="m1-m-vmax">-</span>
                          </div>
                          <div class="calc-row-item">
                            <span>Cทำนาย:</span>
                            <span class="calc-val-placeholder" id="m1-m-cpred">-</span>
                          </div>
                        </div>

                        <!-- เส้นประแนวตั้ง -->
                        <div class="dashed-vertical-line"></div>

                        <!-- IBW -->
                        <div class="bw-col">
                          <div class="bw-col-title">IBW</div>
                          <div class="calc-row-item">
                            <span>Vmax:</span>
                            <span class="calc-val-placeholder" id="m1-m-ibw-vmax">-</span>
                          </div>
                          <div class="calc-row-item">
                            <span>Cทำนาย:</span>
                            <span class="calc-val-placeholder" id="m1-m-ibw-cpred">-</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- เส้นตรงกั้นทึบ -->
                    <div class="gender-divider-line"></div>

                    <!-- ฝั่งเพศหญิง (สีชมพูอ่อน) -->
                    <div class="gender-box-female">
                      <div class="gender-title-female">เพศหญิง</div>
                      <div class="sub-bw-split">
                        <!-- real BW -->
                        <div class="bw-col">
                          <div class="bw-col-title">real BW</div>
                          <div class="calc-row-item">
                            <span>Vmax:</span>
                            <span class="calc-val-placeholder" id="m1-f-vmax">-</span>
                          </div>
                          <div class="calc-row-item">
                            <span>Cทำนาย:</span>
                            <span class="calc-val-placeholder" id="m1-f-cpred">-</span>
                          </div>
                        </div>

                        <!-- เส้นประแนวตั้ง -->
                        <div class="dashed-vertical-line"></div>

                        <!-- IBW -->
                        <div class="bw-col">
                          <div class="bw-col-title">IBW</div>
                          <div class="calc-row-item">
                            <span>Vmax:</span>
                            <span class="calc-val-placeholder" id="m1-f-ibw-vmax">-</span>
                          </div>
                          <div class="calc-row-item">
                            <span>Cทำนาย:</span>
                            <span class="calc-val-placeholder" id="m1-f-ibw-cpred">-</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <!-- Scenario 2 -->
            <div class="accordion-item" id="m3-scen-2">
              <div class="accordion-header">
                <span class="accordion-icon">▼</span>
                <span>กรณีเคยเจาะระดับยา 1 ครั้ง (Steady State อย่างน้อย 7 วัน)</span>
              </div>
              <div class="accordion-content">
                <p style="color: #64748b;">(เตรียมใส่ฟอร์มและสูตรคำนวณของ Scenario 2)</p>
              </div>
            </div>

            <!-- Scenario 3 -->
            <div class="accordion-item" id="m3-scen-3">
              <div class="accordion-header">
                <span class="accordion-icon">▼</span>
                <span>กรณีผล Alb. ต่ำกว่าปกติ</span>
              </div>
              <div class="accordion-content">
                <p style="color: #64748b;">(เตรียมใส่ฟอร์มและสูตรคำนวณของ Scenario 3)</p>
              </div>
            </div>

            <!-- Scenario 4 -->
            <div class="accordion-item" id="m3-scen-4">
              <div class="accordion-header">
                <span class="accordion-icon">▼</span>
                <span>กรณีได้รับ VPA ร่วมด้วย</span>
              </div>
              <div class="accordion-content">
                <p style="color: #64748b;">(เตรียมใส่ฟอร์มและสูตรคำนวณของ Scenario 4)</p>
              </div>
            </div>

            <!-- Scenario 5 -->
            <div class="accordion-item" id="m3-scen-5">
              <div class="accordion-header">
                <span class="accordion-icon">▼</span>
                <span>กรณีระดับยาเกิน TH range</span>
              </div>
              <div class="accordion-content">
                <p style="color: #64748b;">(เตรียมใส่ฟอร์มและสูตรคำนวณของ Scenario 5)</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    `;

    this.bindEvents();
  },

  bindEvents: function() {
    // Clear ปุ่มฝั่งซ้าย
    const btnClear = document.getElementById('m3-btn-clear-left');
    if (btnClear) {
      btnClear.addEventListener('click', () => {
        ['m3-bw', 'm3-ht', 'm3-dose'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });
      });
    }

    // Stepper buttons (BW / Ht)
    document.getElementById('m3-bw-dec')?.addEventListener('click', () => this.stepInput('m3-bw', -1, 0, 300, 3));
    document.getElementById('m3-bw-inc')?.addEventListener('click', () => this.stepInput('m3-bw', 1, 0, 300, 3));

    document.getElementById('m3-ht-dec')?.addEventListener('click', () => this.stepInput('m3-ht', -1, 0, 250, 2));
    document.getElementById('m3-ht-inc')?.addEventListener('click', () => this.stepInput('m3-ht', 1, 0, 250, 2));

    // Stepper button (Dose - ขนาดยา/วัน เพิ่มลดทีละ 25 หรือ 50)
    document.getElementById('m3-dose-dec')?.addEventListener('click', () => this.stepDoseInput('m3-dose', -25));
    document.getElementById('m3-dose-inc')?.addEventListener('click', () => this.stepDoseInput('m3-dose', 25));

    // Format บน Blur
    this.formatInputOnBlur('m3-bw', 3);
    this.formatInputOnBlur('m3-ht', 2);
    this.formatDoseOnBlur('m3-dose');

    // Show/Hide All Accordions
    document.getElementById('m3-btn-show-all')?.addEventListener('click', () => this.toggleAllAccordions(true));
    document.getElementById('m3-btn-hide-all')?.addEventListener('click', () => this.toggleAllAccordions(false));

    // Accordions Toggle
    const accHeaders = document.querySelectorAll('#m3-accordion-container .accordion-header');
    accHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        if (item) item.classList.toggle('active');
      });
    });
  },

  // Helper แปลง String มี comma เป็นตัวเลข
  parseFormattedNumber: function(str) {
    if (!str) return 0;
    let clean = str.toString().replace(/,/g, '');
    return parseFloat(clean) || 0;
  },

  // Helper ใส่ คอมม่า (,) และตัด .00
  formatNumberWithComma: function(num, maxDecimals = 2) {
    if (isNaN(num) || num === 0) return '';
    let factor = Math.pow(10, maxDecimals);
    let rounded = Math.round(num * factor) / factor;
    
    let parts = rounded.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  },

  // Format Input ทั่วไป
  formatInputOnBlur: function(id, maxDecimals) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      if (el.value === '') return;
      let val = parseFloat(el.value);
      if (isNaN(val)) {
        el.value = '';
        return;
      }
      let factor = Math.pow(10, maxDecimals);
      el.value = Math.round(val * factor) / factor;
    });
  },

  // Format สำหรับช่องขนาดยา (รองรับ Comma + max 2 decimals)
  formatDoseOnBlur: function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      let num = this.parseFormattedNumber(el.value);
      if (num === 0) {
        el.value = '';
      } else {
        el.value = this.formatNumberWithComma(num, 2);
      }
    });
  },

  // Stepper Calculation สำหรับ BW / Ht
  stepInput: function(id, delta, minVal, maxVal, maxDecimals) {
    const el = document.getElementById(id);
    if (!el) return;
    let curr = parseFloat(el.value) || 0;
    let nextVal = curr + delta;
    if (nextVal < minVal) nextVal = minVal;
    if (nextVal > maxVal) nextVal = maxVal;

    let factor = Math.pow(10, maxDecimals);
    el.value = Math.round(nextVal * factor) / factor;
  },

  // Stepper Calculation สำหรับ ขนาดยา (Dose)
  stepDoseInput: function(id, delta) {
    const el = document.getElementById(id);
    if (!el) return;
    let curr = this.parseFormattedNumber(el.value);
    let nextVal = curr + delta;
    if (nextVal < 0) nextVal = 0;

    el.value = this.formatNumberWithComma(nextVal, 2);
  },

  toggleAllAccordions: function(show) {
    const items = document.querySelectorAll('#m3-accordion-container .accordion-item');
    items.forEach(item => {
      if (show) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
};
