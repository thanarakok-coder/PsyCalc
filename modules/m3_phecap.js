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

        /* Layout แบ่งฝั่งซ้าย 25% ฝั่งขวา 75% */
        .m3-main-layout {
          display: grid;
          grid-template-columns: 280px 1fr; /* 25% โดยประมาณสำหรับหน้าจอเดสก์ท็อป */
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

        /* Stacked Form Group (Label คนละบรรทัดกับ Input) */
        .field-group-stacked {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
        }
        .field-group-stacked label {
          font-size: 1.05rem; /* ตัวหนังสือใหญ่เน้นอ่านง่าย */
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
          border-radius: 24px;
          padding: 2px 6px;
          height: 44px;
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
        }
        .btn-step:hover {
          background: #dbeafe;
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

        /* ปุ่ม Show All / Hide All */
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

        .module-brand-title {
          margin-top: 20px;
          text-align: center;
          font-size: 1.25rem;
          font-weight: 800;
          color: #1e3a8a;
          letter-spacing: 0.5px;
        }

        /* Accordion Component ฝั่งขวา */
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
          max-height: 1000px;
          transition: max-height 0.3s ease-in-out;
          padding: 16px;
          border-top: 1px solid #e2e8f0;
        }
      </style>

      <div class="m3-wrapper">
        <div class="m3-header-title">M3: PheCap - Phenytoin Capsule Dosing Adjustment</div>

        <div class="m3-main-layout">
          
          <!-- ฝั่งซ้าย: Inputs หลัก (25%) -->
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
                  <button type="button" class="btn-step" onclick="window.M3_PheCap.stepInput('m3-bw', -1, 0, 300, 2)">-</button>
                  <input type="number" id="m3-bw" step="0.01" placeholder="0" onkeydown="window.M3_PheCap.handleEnter(event, 'm3-ht')">
                  <button type="button" class="btn-step" onclick="window.M3_PheCap.stepInput('m3-bw', 1, 0, 300, 2)">+</button>
                </div>
                <span class="unit-text">kg</span>
              </div>
            </div>

            <!-- ส่วนสูง (Ht) -->
            <div class="field-group-stacked">
              <label for="m3-ht">ส่วนสูง</label>
              <div class="stepper-container-inline">
                <div class="stepper-box">
                  <button type="button" class="btn-step" onclick="window.M3_PheCap.stepInput('m3-ht', -1, 0, 250, 2)">-</button>
                  <input type="number" id="m3-ht" step="0.01" placeholder="0">
                  <button type="button" class="btn-step" onclick="window.M3_PheCap.stepInput('m3-ht', 1, 0, 250, 2)">+</button>
                </div>
                <span class="unit-text">cm</span>
              </div>
            </div>

            <!-- ปุ่ม Show All / Hide All -->
            <div class="action-toggle-btns">
              <button type="button" class="btn-action-outline" onclick="window.M3_PheCap.toggleAllAccordions(true)">Show all</button>
              <button type="button" class="btn-action-outline" onclick="window.M3_PheCap.toggleAllAccordions(false)">Hide all</button>
            </div>

            <div class="module-brand-title">
              Phenytoin Capsule
            </div>
          </div>

          <!-- ฝั่งขวา: 5 Scenario Accordions (75%) -->
          <div class="accordion-list" id="m3-accordion-container">

            <!-- Scenario 1 -->
            <div class="accordion-item" id="m3-scen-1">
              <div class="accordion-header" onclick="window.M3_PheCap.toggleAccordion('m3-scen-1')">
                <span class="accordion-icon">▼</span>
                <span>กรณีไม่ได้รับ VPA , Alb. ปกติ , ไม่เคยเจาะวัดระดับยา</span>
              </div>
              <div class="accordion-content">
                <p style="color: #64748b;">(เตรียมใส่ฟอร์มและสูตรคำนวณของ Scenario 1)</p>
              </div>
            </div>

            <!-- Scenario 2 -->
            <div class="accordion-item" id="m3-scen-2">
              <div class="accordion-header" onclick="window.M3_PheCap.toggleAccordion('m3-scen-2')">
                <span class="accordion-icon">▼</span>
                <span>กรณีเคยเจาะระดับยา 1 ครั้ง (Steady State อย่างน้อย 7 วัน)</span>
              </div>
              <div class="accordion-content">
                <p style="color: #64748b;">(เตรียมใส่ฟอร์มและสูตรคำนวณของ Scenario 2)</p>
              </div>
            </div>

            <!-- Scenario 3 -->
            <div class="accordion-item" id="m3-scen-3">
              <div class="accordion-header" onclick="window.M3_PheCap.toggleAccordion('m3-scen-3')">
                <span class="accordion-icon">▼</span>
                <span>กรณีผล Alb. ต่ำกว่าปกติ</span>
              </div>
              <div class="accordion-content">
                <p style="color: #64748b;">(เตรียมใส่ฟอร์มและสูตรคำนวณของ Scenario 3)</p>
              </div>
            </div>

            <!-- Scenario 4 -->
            <div class="accordion-item" id="m3-scen-4">
              <div class="accordion-header" onclick="window.M3_PheCap.toggleAccordion('m3-scen-4')">
                <span class="accordion-icon">▼</span>
                <span>กรณีได้รับ VPA ร่วมด้วย</span>
              </div>
              <div class="accordion-content">
                <p style="color: #64748b;">(เตรียมใส่ฟอร์มและสูตรคำนวณของ Scenario 4)</p>
              </div>
            </div>

            <!-- Scenario 5 -->
            <div class="accordion-item" id="m3-scen-5">
              <div class="accordion-header" onclick="window.M3_PheCap.toggleAccordion('m3-scen-5')">
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

    // Clear ฝั่งซ้าย
    document.getElementById('m3-btn-clear-left')?.addEventListener('click', function() {
      ['m3-bw', 'm3-ht'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
    });
  },

  // ควบคุมการเปิด-ปิด Accordion รายอัน
  toggleAccordion: function(id) {
    const item = document.getElementById(id);
    if (item) {
      item.classList.toggle('active');
    }
  },

  // ควบคุม Show All / Hide All
  toggleAllAccordions: function(show) {
    const items = document.querySelectorAll('#m3-accordion-container .accordion-item');
    items.forEach(item => {
      if (show) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  },

  // กด Enter ย้าย Focus
  handleEnter: function(e, nextId) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextEl = document.getElementById(nextId);
      if (nextEl) nextEl.focus();
    }
  },

  // Stepper Controller
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
  }
};
