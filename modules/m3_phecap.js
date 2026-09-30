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
          box-sizing: border-box;
        }
        .m3-wrapper * {
          box-sizing: border-box;
        }

        .m3-header-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 1px solid #cbd5e1;
        }

        /* Layout หลัก */
        .m3-main-layout {
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          gap: 14px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .m3-main-layout {
            grid-template-columns: 1fr;
          }
        }

        /* Card Frame */
        .m3-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 14px;
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
          margin-bottom: 12px;
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
          padding: 3px 8px;
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

        .field-group-stacked {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }
        .field-group-stacked label {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
        }

        .stepper-container-inline {
          display: flex;
          align-items: center;
          gap: 6px;
          width: 100%;
        }

        .stepper-box {
          display: flex;
          align-items: center;
          flex: 1;
          background: #eff6ff;
          border: 1.5px solid #60a5fa;
          border-radius: 24px;
          padding: 2px 6px;
          height: 42px;
          min-width: 0;
        }
        .stepper-box:focus-within {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        .btn-step {
          width: 30px;
          height: 30px;
          min-width: 30px;
          min-height: 30px;
          border-radius: 50%;
          border: 1px solid #93c5fd;
          background: #ffffff;
          color: #1d4ed8;
          font-weight: bold;
          font-size: 1.1rem;
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
          min-width: 0;
          border: none;
          background: transparent;
          text-align: center;
          font-weight: 800;
          font-size: 1.15rem;
          color: #0f172a;
          outline: none;
        }
        .stepper-box input::-webkit-outer-spin-button,
        .stepper-box input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .unit-text {
          font-size: 0.88rem;
          font-weight: 700;
          color: #475569;
          white-space: nowrap;
        }
        .unit-spacer {
          width: 50px;
          flex-shrink: 0;
        }

        .action-toggle-btns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          margin-top: 8px;
          padding-top: 10px;
          border-top: 1px dashed #cbd5e1;
        }
        .btn-action-outline {
          background: #ffffff;
          border: 1.5px solid #0284c7;
          color: #0369a1;
          padding: 6px 0;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          transition: all 0.15s ease;
        }
        .btn-action-outline:hover {
          background: #e0f2fe;
        }

        .module-brand-title {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          line-height: 1.2;
        }
        .brand-sub {
          font-size: 0.88rem;
          font-weight: 600;
          color: #1e293b;
        }
        .brand-main {
          font-size: 1.35rem;
          font-weight: 800;
          color: #1e3a8a;
        }

        /* Accordion Component Base */
        .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 0;
        }
        .accordion-item {
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          overflow: hidden;
          background: #ffffff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .accordion-header {
          padding: 10px 14px;
          font-size: 0.98rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          user-select: none;
        }
        .accordion-header-title {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .accordion-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid currentColor;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }
        .accordion-item.active .accordion-icon {
          transform: rotate(180deg);
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
          background: #ffffff;
          padding: 0 12px;
        }
        .accordion-item.active .accordion-content {
          max-height: 1400px;
          transition: max-height 0.3s ease-in-out;
          padding: 12px;
          border-top: 1px solid #e2e8f0;
        }

        /* --- Theme สีเฉพาะสำหรับแต่ละ Scenario --- */
        /* Scenario 1: Emerald Theme */
        #m3-scen-1 { border-color: #a7f3d0; }
        #m3-scen-1 .accordion-header { background: #ecfdf5; color: #065f46; }
        #m3-scen-1.active { border-color: #10b981; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12); }
        #m3-scen-1.active .accordion-header { background: #d1fae5; color: #047857; }

        /* Scenario 2: Purple Theme */
        #m3-scen-2 { border-color: #ddd6fe; }
        #m3-scen-2 .accordion-header { background: #f5f3ff; color: #5b21b6; }
        #m3-scen-2.active { border-color: #8b5cf6; box-shadow: 0 2px 8px rgba(139, 92, 246, 0.12); }
        #m3-scen-2.active .accordion-header { background: #ede9fe; color: #6d28d9; }

        /* Scenario 3: Amber Theme */
        #m3-scen-3 { border-color: #fde68a; }
        #m3-scen-3 .accordion-header { background: #fffbeb; color: #92400e; }
        #m3-scen-3.active { border-color: #f59e0b; box-shadow: 0 2px 8px rgba(245, 158, 11, 0.12); }
        #m3-scen-3.active .accordion-header { background: #fef3c7; color: #b45309; }

        /* Scenario 4: Teal Theme */
        #m3-scen-4 { border-color: #99f6e4; }
        #m3-scen-4 .accordion-header { background: #f0fdf4; color: #115e59; }
        #m3-scen-4.active { border-color: #14b8a6; box-shadow: 0 2px 8px rgba(20, 184, 166, 0.12); }
        #m3-scen-4.active .accordion-header { background: #ccfbf1; color: #0f766e; }

        /* Scenario 5: Indigo Theme */
        #m3-scen-5 { border-color: #c7d2fe; }
        #m3-scen-5 .accordion-header { background: #eef2ff; color: #3730a3; }
        #m3-scen-5.active { border-color: #6366f1; box-shadow: 0 2px 8px rgba(99, 102, 241, 0.12); }
        #m3-scen-5.active .accordion-header { background: #e0e7ff; color: #4338ca; }


        /* --- STYLES SCENARIO 1 --- */
        .scen1-grid-layout {
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr);
          gap: 10px;
          align-items: stretch;
        }
        @media (max-width: 820px) {
          .scen1-grid-layout {
            grid-template-columns: 1fr;
          }
        }

        .dose-input-card {
          background: #f1f5f9;
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          padding: 10px 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;
        }
        .dose-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
        }

        .gender-split-container {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 2px minmax(0, 1fr);
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          overflow: hidden;
          min-width: 0;
        }
        @media (max-width: 680px) {
          .gender-split-container {
            grid-template-columns: 1fr;
          }
          .gender-divider-line {
            display: none;
          }
        }

        .gender-divider-line {
          background-color: #cbd5e1;
          width: 2px;
        }

        .gender-box-male {
          background-color: #f0f9ff;
          padding: 8px;
          min-width: 0;
        }
        .gender-box-female {
          background-color: #fdf2f8;
          padding: 8px;
          min-width: 0;
        }

        .gender-title-male {
          text-align: center;
          font-size: 0.95rem;
          font-weight: 800;
          color: #0369a1;
          padding-bottom: 4px;
          margin-bottom: 6px;
          border-bottom: 1.5px solid #bae6fd;
        }
        .gender-title-female {
          text-align: center;
          font-size: 0.95rem;
          font-weight: 800;
          color: #be185d;
          padding-bottom: 4px;
          margin-bottom: 6px;
          border-bottom: 1.5px solid #fbcfe8;
        }

        .sub-bw-split {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1fr);
          gap: 4px;
        }
        .dashed-vertical-line {
          border-left: 1px dashed #cbd5e1;
        }

        .bw-col {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 6px 4px;
          border-radius: 6px;
          transition: all 0.2s ease;
          border: 1.5px solid transparent;
          min-width: 0;
        }

        .bw-col.highlight-lower {
          background-color: #f0fdf4;
          border-color: #22c55e;
          box-shadow: 0 2px 6px rgba(34, 197, 94, 0.12);
        }

        .bw-col-title {
          font-weight: 700;
          font-size: 0.88rem;
          color: #334155;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .bw-val-sub {
          font-size: 0.82rem;
          font-weight: 800;
          color: #0284c7;
        }

        .calc-row-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.83rem;
          font-weight: 600;
          color: #1e293b;
          background: rgba(255, 255, 255, 0.9);
          padding: 4px 6px;
          border-radius: 4px;
          border: 1px dashed #cbd5e1;
          gap: 2px;
          min-width: 0;
        }
        .calc-row-item span:first-child {
          white-space: nowrap;
        }
        .calc-val-placeholder {
          font-weight: 800;
          color: #2563eb;
          text-align: right;
          word-break: break-all;
        }

        /* --- STYLES SCENARIO 2, 3 & 4 COMMON LAYOUT --- */
        .scen-two-col-layout {
          display: grid;
          grid-template-columns: minmax(280px, 1fr) 2px minmax(240px, 1fr);
          gap: 16px;
          align-items: start;
          padding: 6px 0;
        }
        @media (max-width: 680px) {
          .scen-two-col-layout {
            grid-template-columns: 1fr;
          }
          .scen-layout-divider {
            display: none;
          }
        }

        .scen-layout-divider {
          background-color: #cbd5e1;
          align-self: stretch;
        }

        .scen-input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .scen-field-row {
          display: grid;
          grid-template-columns: 120px 1fr;
          align-items: center;
          gap: 8px;
        }

        .scen-label {
          font-size: 0.92rem;
          font-weight: 700;
          color: #1e293b;
        }

        .scen-result-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }

        .scen-result-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          border: 1.5px solid #3b82f6;
          border-radius: 6px;
          padding: 8px 12px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .scen-result-label {
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
        }

        .scen-result-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: #2563eb;
        }

        /* Notice / Warning area below Acc3 result */
        .scen3-notice-box {
          font-size: 0.82rem;
          font-weight: 700;
          color: #b45309;
          background: #fef3c7;
          border: 1.5px dashed #f59e0b;
          border-radius: 6px;
          padding: 8px 10px;
          display: none;
          align-items: center;
          line-height: 1.35;
        }

        /* Footnote Acc 3 */
        .scen3-footnote-box {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.4;
          padding-top: 4px;
          border-top: 1px solid #e2e8f0;
        }

        /* --- STYLES SCENARIO 5 SPECIFIC LAYOUT --- */
        .scen5-layout {
          display: grid;
          grid-template-columns: 290px 2px minmax(0, 1fr);
          gap: 14px;
          align-items: start;
          padding: 6px 0;
        }
        @media (max-width: 900px) {
          .scen5-layout {
            grid-template-columns: 1fr;
          }
          .scen5-divider {
            display: none;
          }
        }

        .scen5-divider {
          background-color: #cbd5e1;
          align-self: stretch;
        }

        .scen5-input-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .scen5-field-row {
          display: grid;
          grid-template-columns: 120px 1fr;
          align-items: center;
          gap: 6px;
        }

        .scen5-vmax-card {
          background: #eff6ff;
          border: 1.5px solid #3b82f6;
          border-radius: 8px;
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2px;
        }

        .scen5-note-box {
          font-size: 0.82rem;
          font-weight: 600;
          color: #d97706;
          background: #fffbe3;
          border: 1px solid #fde047;
          border-radius: 6px;
          padding: 8px 10px;
          line-height: 1.4;
          margin-top: 2px;
        }

        .scen5-display-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Table Structure สำหรับ Scenario 5 */
        .scen5-table-container {
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          overflow: hidden;
          background: #ffffff;
        }

        .scen5-table-grid {
          display: grid;
          grid-template-columns: 150px 2px 1fr 1px 1fr 1px 1fr;
          align-items: center;
        }

        .scen5-head-cell {
          padding: 8px;
          font-weight: 800;
          font-size: 0.88rem;
          color: #1e293b;
          text-align: center;
          background: #f1f5f9;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* สีคอลัมน์ ชาย (ฟ้าอ่อน) / หญิง (ชมพูอ่อน) */
        .scen5-head-male {
          background: #e0f2fe !important;
          color: #0369a1 !important;
        }
        .scen5-head-female {
          background: #fce7f3 !important;
          color: #be185d !important;
        }

        .scen5-ibw-header-span {
          grid-column: span 3;
          background: #e2e8f0;
          border-bottom: 1px solid #cbd5e1;
          padding: 4px 0;
          font-weight: 800;
          font-size: 0.85rem;
          color: #1e293b;
          text-align: center;
        }

        .scen5-row-label {
          padding: 10px 12px;
          font-size: 0.9rem;
          font-weight: 700;
          color: #334155;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-align: left;
          white-space: nowrap;
        }

        .scen5-cell-box {
          padding: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .scen5-val-box {
          width: 100%;
          min-height: 38px;
          background: #f8fafc;
          border: 1.5px dashed #94a3b8;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.05rem;
          color: #2563eb;
          padding: 2px 6px;
          text-align: center;
          transition: all 0.2s ease;
        }

        /* Highlight สีคอลัมน์ ชาย / หญิง */
        .scen5-val-box-male {
          background-color: #f0f9ff;
          border-color: #bae6fd;
        }
        .scen5-val-box-female {
          background-color: #fdf2f8;
          border-color: #fbcfe8;
        }

        .scen5-val-box.highlight-cell {
          background-color: #f0fdf4 !important;
          border: 1.5px solid #22c55e !important;
          color: #15803d !important;
          box-shadow: 0 2px 6px rgba(34, 197, 94, 0.15);
        }

        .scen5-v-line {
          background-color: #cbd5e1;
          align-self: stretch;
          width: 100%;
        }

        .scen5-v-line-dashed {
          background-color: #e2e8f0;
          align-self: stretch;
          width: 100%;
        }

        .scen5-h-line {
          grid-column: span 7;
          height: 1px;
          background-color: #e2e8f0;
        }

        .scen5-dose-recommend-card {
          background: #f0fdf4;
          border: 1.5px solid #22c55e;
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .scen5-dose-label {
          font-size: 0.95rem;
          font-weight: 800;
          color: #15803d;
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
        }

        .scen5-hold-days-tag {
          color: #2563eb;
          font-weight: 800;
        }

        .scen5-dose-val-box {
          min-width: 130px;
          height: 42px;
          background: #ffffff;
          border: 2px solid #16a34a;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          font-weight: 800;
          color: #15803d;
          padding: 0 12px;
          white-space: nowrap;
          flex-shrink: 0;
        }
      </style>

      <div class="m3-wrapper">
        <div class="m3-header-title">M3: PheCap - Phenytoin Capsule Dosing Adjustment</div>

        <div class="m3-main-layout">
          
          <!-- ฝั่งซ้าย: Inputs หลัก (260px) -->
          <div class="m3-card input-card-highlight">
            <div class="card-head-title">
              <span>ข้อมูลผู้ป่วย</span>
              <button type="button" id="m3-btn-clear-left" class="btn-clear-mini" title="Clear BW & Ht">Clear</button>
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

            <!-- Title -->
            <div class="module-brand-title">
              <span class="brand-sub">Phenytoin</span>
              <span class="brand-main">Capsule</span>
            </div>
          </div>

          <!-- ฝั่งขวา: Accordions -->
          <div class="accordion-list" id="m3-accordion-container">

            <!-- Scenario 1 -->
            <div class="accordion-item" id="m3-scen-1">
              <div class="accordion-header">
                <div class="accordion-header-title">
                  <span class="accordion-icon">▼</span>
                  <span>กรณีไม่ได้รับ VPA , Alb. ปกติ , ไม่เคยเจาะวัดระดับยา</span>
                </div>
                <button type="button" class="btn-clear-mini" id="btn-clear-s1" onclick="event.stopPropagation()">Clear</button>
              </div>
              <div class="accordion-content">
                
                <div class="scen1-grid-layout">
                  <!-- ซีกซ้าย: ขนาดยา/วัน -->
                  <div class="dose-input-card">
                    <span class="dose-title">ขนาดยา/วัน</span>
                    <div class="stepper-container-inline">
                      <div class="stepper-box">
                        <button type="button" class="btn-step" id="m3-dose-dec">-</button>
                        <input type="text" id="m3-dose" placeholder="0">
                        <button type="button" class="btn-step" id="m3-dose-inc">+</button>
                      </div>
                    </div>
                    <span class="unit-text">mg/day</span>
                  </div>

                  <!-- ซีกขวา: แยกเพศชาย / หญิง -->
                  <div class="gender-split-container">
                    
                    <!-- ฝั่งเพศชาย -->
                    <div class="gender-box-male">
                      <div class="gender-title-male">เพศชาย</div>
                      <div class="sub-bw-split">
                        
                        <!-- Male: real BW -->
                        <div class="bw-col" id="col-m-real">
                          <div class="bw-col-title">
                            <span>real BW</span>
                            <span class="bw-val-sub" id="val-m-real-bw">-</span>
                          </div>
                          <div class="calc-row-item">
                            <span>Vmax:</span>
                            <span class="calc-val-placeholder" id="m1-m-real-vmax">-</span>
                          </div>
                          <div class="calc-row-item">
                            <span>Cทำนาย:</span>
                            <span class="calc-val-placeholder" id="m1-m-real-cpred">-</span>
                          </div>
                        </div>

                        <div class="dashed-vertical-line"></div>

                        <!-- Male: IBW -->
                        <div class="bw-col" id="col-m-ibw">
                          <div class="bw-col-title">
                            <span>IBW</span>
                            <span class="bw-val-sub" id="val-m-ibw-bw">-</span>
                          </div>
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

                    <div class="gender-divider-line"></div>

                    <!-- ฝั่งเพศหญิง -->
                    <div class="gender-box-female">
                      <div class="gender-title-female">เพศหญิง</div>
                      <div class="sub-bw-split">
                        
                        <!-- Female: real BW -->
                        <div class="bw-col" id="col-f-real">
                          <div class="bw-col-title">
                            <span>real BW</span>
                            <span class="bw-val-sub" id="val-f-real-bw">-</span>
                          </div>
                          <div class="calc-row-item">
                            <span>Vmax:</span>
                            <span class="calc-val-placeholder" id="m1-f-real-vmax">-</span>
                          </div>
                          <div class="calc-row-item">
                            <span>Cทำนาย:</span>
                            <span class="calc-val-placeholder" id="m1-f-real-cpred">-</span>
                          </div>
                        </div>

                        <div class="dashed-vertical-line"></div>

                        <!-- Female: IBW -->
                        <div class="bw-col" id="col-f-ibw">
                          <div class="bw-col-title">
                            <span>IBW</span>
                            <span class="bw-val-sub" id="val-f-ibw-bw">-</span>
                          </div>
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
                <div class="accordion-header-title">
                  <span class="accordion-icon">▼</span>
                  <span>กรณีเคยเจาะระดับยา 1 ครั้ง (Steady State อย่างน้อย 7 วัน)</span>
                </div>
                <button type="button" class="btn-clear-mini" id="btn-clear-s2" onclick="event.stopPropagation()">Clear</button>
              </div>
              <div class="accordion-content">
                
                <div class="scen-two-col-layout">
                  <!-- ฝั่งซ้าย: Input -->
                  <div class="scen-input-group">
                    
                    <!-- ขนาดยา/วัน -->
                    <div class="scen-field-row">
                      <span class="scen-label">ขนาดยา/วัน</span>
                      <div class="stepper-container-inline">
                        <div class="stepper-box">
                          <button type="button" class="btn-step" id="m3-s2-dose-dec">-</button>
                          <input type="text" id="m3-s2-dose" placeholder="0">
                          <button type="button" class="btn-step" id="m3-s2-dose-inc">+</button>
                        </div>
                        <span class="unit-text">mg/day</span>
                      </div>
                    </div>

                    <!-- ระดับยาที่ SS -->
                    <div class="scen-field-row">
                      <span class="scen-label">ระดับยาที่ SS</span>
                      <div class="stepper-container-inline">
                        <div class="stepper-box">
                          <button type="button" class="btn-step" id="m3-s2-css-dec">-</button>
                          <input type="text" id="m3-s2-css" placeholder="0">
                          <button type="button" class="btn-step" id="m3-s2-css-inc">+</button>
                        </div>
                        <div class="unit-spacer"></div>
                      </div>
                    </div>

                    <!-- Dose ที่จะทำนาย -->
                    <div class="scen-field-row">
                      <span class="scen-label">Dose ที่จะทำนาย</span>
                      <div class="stepper-container-inline">
                        <div class="stepper-box">
                          <button type="button" class="btn-step" id="m3-s2-pdose-dec">-</button>
                          <input type="text" id="m3-s2-pdose" placeholder="0">
                          <button type="button" class="btn-step" id="m3-s2-pdose-inc">+</button>
                        </div>
                        <span class="unit-text">mg/day</span>
                      </div>
                    </div>

                  </div>

                  <div class="scen-layout-divider"></div>

                  <!-- ฝั่งขวา: Display ผลลัพธ์ -->
                  <div class="scen-result-group">
                    <div class="scen-result-card">
                      <span class="scen-result-label">Vmax =</span>
                      <span class="scen-result-val" id="m3-s2-vmax">-</span>
                    </div>

                    <div class="scen-result-card">
                      <span class="scen-result-label">Cทำนาย =</span>
                      <span class="scen-result-val" id="m3-s2-cpred">-</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Scenario 3 -->
            <div class="accordion-item" id="m3-scen-3">
              <div class="accordion-header">
                <div class="accordion-header-title">
                  <span class="accordion-icon">▼</span>
                  <span>กรณีผล Alb. ต่ำกว่าปกติ</span>
                </div>
                <button type="button" class="btn-clear-mini" id="btn-clear-s3" onclick="event.stopPropagation()">Clear</button>
              </div>
              <div class="accordion-content">
                
                <div class="scen-two-col-layout">
                  <!-- ฝั่งซ้าย: Inputs (3 ตัว) -->
                  <div class="scen-input-group">
                    
                    <!-- ระดับยาที่ SS -->
                    <div class="scen-field-row">
                      <span class="scen-label">ระดับยาที่ SS</span>
                      <div class="stepper-container-inline">
                        <div class="stepper-box">
                          <button type="button" class="btn-step" id="m3-s3-css-dec">-</button>
                          <input type="text" id="m3-s3-css" placeholder="0">
                          <button type="button" class="btn-step" id="m3-s3-css-inc">+</button>
                        </div>
                        <div class="unit-spacer"></div>
                      </div>
                    </div>

                    <!-- ระดับ Alb. -->
                    <div class="scen-field-row">
                      <span class="scen-label">ระดับ Alb.</span>
                      <div class="stepper-container-inline">
                        <div class="stepper-box">
                          <button type="button" class="btn-step" id="m3-s3-alb-dec">-</button>
                          <input type="text" id="m3-s3-alb" placeholder="0">
                          <button type="button" class="btn-step" id="m3-s3-alb-inc">+</button>
                        </div>
                        <div class="unit-spacer"></div>
                      </div>
                    </div>

                    <!-- CrCl (ml/min) -->
                    <div class="scen-field-row">
                      <span class="scen-label">CrCl</span>
                      <div class="stepper-container-inline">
                        <div class="stepper-box">
                          <button type="button" class="btn-step" id="m3-s3-crcl-dec">-</button>
                          <input type="text" id="m3-s3-crcl" placeholder="0">
                          <button type="button" class="btn-step" id="m3-s3-crcl-inc">+</button>
                        </div>
                        <span class="unit-text">ml/min</span>
                      </div>
                    </div>

                  </div>

                  <div class="scen-layout-divider"></div>

                  <!-- ฝั่งขวา: Display ผลลัพธ์ + พื้นที่ข้อความเตือน + Footnote -->
                  <div class="scen-result-group">
                    <div class="scen-result-card">
                      <span class="scen-result-label">Cทำนาย =</span>
                      <span class="scen-result-val" id="m3-s3-cpred">-</span>
                    </div>

                    <!-- ข้อความเตือน (แสดงเฉพาะ CrCl < 10) -->
                    <div class="scen3-notice-box" id="m3-s3-notice">
                      ⚠ เคสนี้ ESRD (CrCl&lt;10) ปรับสูตรการคำนวณแล้ว
                    </div>

                    <!-- Footnote เฉพาะของ Acc.3 -->
                    <div class="scen3-footnote-box">
                      (1) คำนวณ C correct ด้วยสูตรปกติ (หาร 0.9) ก่อน<br>
                      (2) ถ้าเป็น ESRD ให้นำผลลัพธ์จากข้อ 1 มาหารด้วย 0.44 อีกที
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Scenario 4: กรณีได้รับ VPA ร่วมด้วย -->
            <div class="accordion-item" id="m3-scen-4">
              <div class="accordion-header">
                <div class="accordion-header-title">
                  <span class="accordion-icon">▼</span>
                  <span>กรณีได้รับ VPA ร่วมด้วย</span>
                </div>
                <button type="button" class="btn-clear-mini" id="btn-clear-s4" onclick="event.stopPropagation()">Clear</button>
              </div>
              <div class="accordion-content">
                
                <div class="scen-two-col-layout">
                  <!-- ฝั่งซ้าย: Inputs (2 ตัว) -->
                  <div class="scen-input-group">
                    
                    <!-- ระดับยาที่ SS -->
                    <div class="scen-field-row">
                      <span class="scen-label">ระดับยาที่ SS</span>
                      <div class="stepper-container-inline">
                        <div class="stepper-box">
                          <button type="button" class="btn-step" id="m3-s4-css-dec">-</button>
                          <input type="text" id="m3-s4-css" placeholder="0">
                          <button type="button" class="btn-step" id="m3-s4-css-inc">+</button>
                        </div>
                        <div class="unit-spacer"></div>
                      </div>
                    </div>

                    <!-- ระดับยา VPA -->
                    <div class="scen-field-row">
                      <span class="scen-label">ระดับยา VPA</span>
                      <div class="stepper-container-inline">
                        <div class="stepper-box">
                          <button type="button" class="btn-step" id="m3-s4-vpa-dec">-</button>
                          <input type="text" id="m3-s4-vpa" placeholder="0">
                          <button type="button" class="btn-step" id="m3-s4-vpa-inc">+</button>
                        </div>
                        <div class="unit-spacer"></div>
                      </div>
                    </div>

                  </div>

                  <div class="scen-layout-divider"></div>

                  <!-- ฝั่งขวา: Display ผลลัพธ์ -->
                  <div class="scen-result-group">
                    <div class="scen-result-card">
                      <span class="scen-result-label">Cทำนาย =</span>
                      <span class="scen-result-val" id="m3-s4-cpred">-</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Scenario 5: กรณีระดับยาเกิน TH range -->
            <div class="accordion-item" id="m3-scen-5">
              <div class="accordion-header">
                <div class="accordion-header-title">
                  <span class="accordion-icon">▼</span>
                  <span>กรณีระดับยาเกิน TH range</span>
                </div>
                <button type="button" class="btn-clear-mini" id="btn-clear-s5" onclick="event.stopPropagation()">Clear</button>
              </div>
              <div class="accordion-content">
                
                <div class="scen5-layout">
                  <!-- ฝั่งซ้าย: Inputs (3 ช่อง) + Vmax Display + Note -->
                  <div class="scen5-input-col">
                    
                    <!-- 1. ขนาดยา/วัน -->
                    <div class="scen5-field-row">
                      <span class="scen-label">ขนาดยา/วัน</span>
                      <div class="stepper-container-inline">
                        <div class="stepper-box">
                          <button type="button" class="btn-step" id="m3-s5-dose-dec">-</button>
                          <input type="text" id="m3-s5-dose" placeholder="0">
                          <button type="button" class="btn-step" id="m3-s5-dose-inc">+</button>
                        </div>
                      </div>
                    </div>

                    <!-- 2. C ที่วัดได้ (C1) -->
                    <div class="scen5-field-row">
                      <span class="scen-label">C ที่วัดได้ (C1)</span>
                      <div class="stepper-container-inline">
                        <div class="stepper-box">
                          <button type="button" class="btn-step" id="m3-s5-c1-dec">-</button>
                          <input type="text" id="m3-s5-c1" placeholder="0">
                          <button type="button" class="btn-step" id="m3-s5-c1-inc">+</button>
                        </div>
                      </div>
                    </div>

                    <!-- Vmax Display Block (แสดงทศนิยม 3 ตำแหน่ง) -->
                    <div class="scen5-vmax-card">
                      <span class="scen-result-label">V<sub>max</sub> =</span>
                      <span class="scen-result-val" id="m3-s5-vmax">-</span>
                    </div>

                    <!-- 3. C ที่ต้องการ (C2) -->
                    <div class="scen5-field-row">
                      <span class="scen-label">C ที่ต้องการ (C2)</span>
                      <div class="stepper-container-inline">
                        <div class="stepper-box">
                          <button type="button" class="btn-step" id="m3-s5-c2-dec">-</button>
                          <input type="text" id="m3-s5-c2" placeholder="0">
                          <button type="button" class="btn-step" id="m3-s5-c2-inc">+</button>
                        </div>
                      </div>
                    </div>

                    <!-- Note ปรับการขึ้นบรรทัดใหม่ และลบ Note: ออก -->
                    <div class="scen5-note-box">
                      Criteria: BW &gt;=60 เข้าเกณฑ์ Obesity<br>
                      ใช้ IBW ในการทำนาย
                    </div>

                  </div>

                  <div class="scen5-divider"></div>

                  <!-- ฝั่งขวา: Display Table & Dose Recommendation -->
                  <div class="scen5-display-col">
                    
                    <div class="scen5-table-container">
                      <div class="scen5-table-grid">
                        
                        <!-- Header Row 1: IBW Span -->
                        <div class="scen5-head-cell"></div>
                        <div class="scen5-v-line"></div>
                        <div class="scen5-head-cell"></div>
                        <div class="scen5-v-line"></div>
                        <div class="scen5-ibw-header-span">IBW</div>

                        <!-- Header Row 2: Sub-headers (ปรับสีคอลัมน์ ชาย/หญิง) -->
                        <div class="scen5-head-cell"></div>
                        <div class="scen5-v-line"></div>
                        <div class="scen5-head-cell">real BW</div>
                        <div class="scen5-v-line"></div>
                        <div class="scen5-head-cell scen5-head-male">ชาย</div>
                        <div class="scen5-v-line-dashed"></div>
                        <div class="scen5-head-cell scen5-head-female">หญิง</div>

                        <!-- Horizontal Divider -->
                        <div class="scen5-h-line"></div>

                        <!-- Row 1: BW -->
                        <div class="scen5-row-label">BW</div>
                        <div class="scen5-v-line"></div>
                        <div class="scen5-cell-box">
                          <div class="scen5-val-box" id="m3-s5-bw-real">-</div>
                        </div>
                        <div class="scen5-v-line"></div>
                        <div class="scen5-cell-box">
                          <div class="scen5-val-box scen5-val-box-male" id="m3-s5-bw-ibw-m">-</div>
                        </div>
                        <div class="scen5-v-line-dashed"></div>
                        <div class="scen5-cell-box">
                          <div class="scen5-val-box scen5-val-box-female" id="m3-s5-bw-ibw-f">-</div>
                        </div>

                        <!-- Horizontal Divider -->
                        <div class="scen5-h-line"></div>

                        <!-- Row 2: Vd -->
                        <div class="scen5-row-label">Vd</div>
                        <div class="scen5-v-line"></div>
                        <div class="scen5-cell-box">
                          <div class="scen5-val-box" id="m3-s5-vd-real">-</div>
                        </div>
                        <div class="scen5-v-line"></div>
                        <div class="scen5-cell-box">
                          <div class="scen5-val-box scen5-val-box-male" id="m3-s5-vd-ibw-m">-</div>
                        </div>
                        <div class="scen5-v-line-dashed"></div>
                        <div class="scen5-cell-box">
                          <div class="scen5-val-box scen5-val-box-female" id="m3-s5-vd-ibw-f">-</div>
                        </div>

                        <!-- Horizontal Divider -->
                        <div class="scen5-h-line"></div>

                        <!-- Row 3: จำนวนวันที่ต้องหยุดยา -->
                        <div class="scen5-row-label">จำนวนวันที่ต้องหยุดยา</div>
                        <div class="scen5-v-line"></div>
                        <div class="scen5-cell-box">
                          <div class="scen5-val-box" id="m3-s5-offday-real">-</div>
                        </div>
                        <div class="scen5-v-line"></div>
                        <div class="scen5-cell-box">
                          <div class="scen5-val-box scen5-val-box-male" id="m3-s5-offday-ibw-m">-</div>
                        </div>
                        <div class="scen5-v-line-dashed"></div>
                        <div class="scen5-cell-box">
                          <div class="scen5-val-box scen5-val-box-female" id="m3-s5-offday-ibw-f">-</div>
                        </div>

                      </div>
                    </div>

                    <!-- Dose ที่ควรได้รับหลัง hold ยา -->
                    <div class="scen5-dose-recommend-card">
                      <span class="scen5-dose-label">
                        <span>Dose ที่ควรได้รับหลัง hold ยา</span>
                        <span class="scen5-hold-days-tag" id="m3-s5-hold-days-tag"></span>
                      </span>
                      <div class="scen5-dose-val-box" id="m3-s5-rec-dose">-</div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    `;

    this.bindEvents();
  },

  bindEvents: function() {
    // 1. Clear ปุ่มฝั่งซ้าย (เคลียร์เฉพาะ BW & Ht ในกรอบตัวเอง)
    const btnClearLeft = document.getElementById('m3-btn-clear-left');
    if (btnClearLeft) {
      btnClearLeft.addEventListener('click', () => {
        ['m3-bw', 'm3-ht'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });
        this.calculateScenario1();
        this.calculateScenario5();
      });
    }

    // 2. Clear ปุ่มประจำ Scenario 1 - 5
    document.getElementById('btn-clear-s1')?.addEventListener('click', () => {
      const el = document.getElementById('m3-dose');
      if (el) el.value = '';
      this.calculateScenario1();
    });

    document.getElementById('btn-clear-s2')?.addEventListener('click', () => {
      ['m3-s2-dose', 'm3-s2-css', 'm3-s2-pdose'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      this.calculateScenario2();
    });

    document.getElementById('btn-clear-s3')?.addEventListener('click', () => {
      ['m3-s3-css', 'm3-s3-alb', 'm3-s3-crcl'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      this.calculateScenario3();
    });

    document.getElementById('btn-clear-s4')?.addEventListener('click', () => {
      ['m3-s4-css', 'm3-s4-vpa'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      this.calculateScenario4();
    });

    document.getElementById('btn-clear-s5')?.addEventListener('click', () => {
      ['m3-s5-dose', 'm3-s5-c1', 'm3-s5-c2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      this.calculateScenario5();
    });

    // Input Listeners Acc 1
    ['m3-bw', 'm3-ht', 'm3-dose'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => {
        this.calculateScenario1();
        this.calculateScenario5();
      });
    });

    // Steppers BW / Ht
    document.getElementById('m3-bw-dec')?.addEventListener('click', () => this.stepInput('m3-bw', -1, 0, 300, 3, () => { this.calculateScenario1(); this.calculateScenario5(); }));
    document.getElementById('m3-bw-inc')?.addEventListener('click', () => this.stepInput('m3-bw', 1, 0, 300, 3, () => { this.calculateScenario1(); this.calculateScenario5(); }));

    document.getElementById('m3-ht-dec')?.addEventListener('click', () => this.stepInput('m3-ht', -1, 0, 250, 2, () => { this.calculateScenario1(); this.calculateScenario5(); }));
    document.getElementById('m3-ht-inc')?.addEventListener('click', () => this.stepInput('m3-ht', 1, 0, 250, 2, () => { this.calculateScenario1(); this.calculateScenario5(); }));

    // Stepper Dose Acc 1 (+- 100)
    document.getElementById('m3-dose-dec')?.addEventListener('click', () => this.stepDoseInput('m3-dose', -100));
    document.getElementById('m3-dose-inc')?.addEventListener('click', () => this.stepDoseInput('m3-dose', 100));

    // Blur formatters Acc 1
    this.formatInputOnBlur('m3-bw', 3, () => { this.calculateScenario1(); this.calculateScenario5(); });
    this.formatInputOnBlur('m3-ht', 2, () => { this.calculateScenario1(); this.calculateScenario5(); });
    this.formatDoseOnBlur('m3-dose');

    // --- ACCORDION 2 EVENTS ---
    ['m3-s2-dose', 'm3-s2-css', 'm3-s2-pdose'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculateScenario2());
    });

    document.getElementById('m3-s2-dose-dec')?.addEventListener('click', () => this.stepDoseInput('m3-s2-dose', -100, () => this.calculateScenario2()));
    document.getElementById('m3-s2-dose-inc')?.addEventListener('click', () => this.stepDoseInput('m3-s2-dose', 100, () => this.calculateScenario2()));

    document.getElementById('m3-s2-css-dec')?.addEventListener('click', () => this.stepFloatInput('m3-s2-css', -0.1, 0, 100, 3, () => this.calculateScenario2()));
    document.getElementById('m3-s2-css-inc')?.addEventListener('click', () => this.stepFloatInput('m3-s2-css', 0.1, 0, 100, 3, () => this.calculateScenario2()));

    document.getElementById('m3-s2-pdose-dec')?.addEventListener('click', () => this.stepDoseInput('m3-s2-pdose', -100, () => this.calculateScenario2()));
    document.getElementById('m3-s2-pdose-inc')?.addEventListener('click', () => this.stepDoseInput('m3-s2-pdose', 100, () => this.calculateScenario2()));

    this.formatDoseOnBlur('m3-s2-dose', () => this.calculateScenario2());
    this.formatFloatOnBlur('m3-s2-css', 3, () => this.calculateScenario2());
    this.formatDoseOnBlur('m3-s2-pdose', () => this.calculateScenario2());

    // --- ACCORDION 3 EVENTS ---
    ['m3-s3-css', 'm3-s3-alb', 'm3-s3-crcl'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculateScenario3());
    });

    document.getElementById('m3-s3-css-dec')?.addEventListener('click', () => this.stepFloatInput('m3-s3-css', -0.1, 0, 100, 3, () => this.calculateScenario3()));
    document.getElementById('m3-s3-css-inc')?.addEventListener('click', () => this.stepFloatInput('m3-s3-css', 0.1, 0, 100, 3, () => this.calculateScenario3()));

    document.getElementById('m3-s3-alb-dec')?.addEventListener('click', () => this.stepFloatInput('m3-s3-alb', -0.1, 0, 10, 2, () => this.calculateScenario3()));
    document.getElementById('m3-s3-alb-inc')?.addEventListener('click', () => this.stepFloatInput('m3-s3-alb', 0.1, 0, 10, 2, () => this.calculateScenario3()));

    document.getElementById('m3-s3-crcl-dec')?.addEventListener('click', () => this.stepFloatInput('m3-s3-crcl', -1, 0, 300, 2, () => this.calculateScenario3()));
    document.getElementById('m3-s3-crcl-inc')?.addEventListener('click', () => this.stepFloatInput('m3-s3-crcl', 1, 0, 300, 2, () => this.calculateScenario3()));

    this.formatFloatOnBlur('m3-s3-css', 3, () => this.calculateScenario3());
    this.formatFloatOnBlur('m3-s3-alb', 2, () => this.calculateScenario3());
    this.formatFloatOnBlur('m3-s3-crcl', 2, () => this.calculateScenario3());

    // --- ACCORDION 4 EVENTS ---
    ['m3-s4-css', 'm3-s4-vpa'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculateScenario4());
    });

    document.getElementById('m3-s4-css-dec')?.addEventListener('click', () => this.stepFloatInput('m3-s4-css', -0.1, 0, 100, 3, () => this.calculateScenario4()));
    document.getElementById('m3-s4-css-inc')?.addEventListener('click', () => this.stepFloatInput('m3-s4-css', 0.1, 0, 100, 3, () => this.calculateScenario4()));

    document.getElementById('m3-s4-vpa-dec')?.addEventListener('click', () => this.stepFloatInput('m3-s4-vpa', -0.1, 0, 300, 3, () => this.calculateScenario4()));
    document.getElementById('m3-s4-vpa-inc')?.addEventListener('click', () => this.stepFloatInput('m3-s4-vpa', 0.1, 0, 300, 3, () => this.calculateScenario4()));

    this.formatFloatOnBlur('m3-s4-css', 3, () => this.calculateScenario4());
    this.formatFloatOnBlur('m3-s4-vpa', 3, () => this.calculateScenario4());

    // --- ACCORDION 5 EVENTS ---
    ['m3-s5-dose', 'm3-s5-c1', 'm3-s5-c2'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => this.calculateScenario5());
    });

    document.getElementById('m3-s5-dose-dec')?.addEventListener('click', () => this.stepDoseInput('m3-s5-dose', -100, () => this.calculateScenario5()));
    document.getElementById('m3-s5-dose-inc')?.addEventListener('click', () => this.stepDoseInput('m3-s5-dose', 100, () => this.calculateScenario5()));

    document.getElementById('m3-s5-c1-dec')?.addEventListener('click', () => this.stepFloatInput('m3-s5-c1', -0.1, 0, 200, 3, () => this.calculateScenario5()));
    document.getElementById('m3-s5-c1-inc')?.addEventListener('click', () => this.stepFloatInput('m3-s5-c1', 0.1, 0, 200, 3, () => this.calculateScenario5()));

    document.getElementById('m3-s5-c2-dec')?.addEventListener('click', () => this.stepFloatInput('m3-s5-c2', -0.1, 0, 200, 3, () => this.calculateScenario5()));
    document.getElementById('m3-s5-c2-inc')?.addEventListener('click', () => this.stepFloatInput('m3-s5-c2', 0.1, 0, 200, 3, () => this.calculateScenario5()));

    this.formatDoseOnBlur('m3-s5-dose', () => this.calculateScenario5());
    this.formatFloatOnBlur('m3-s5-c1', 3, () => this.calculateScenario5());
    this.formatFloatOnBlur('m3-s5-c2', 3, () => this.calculateScenario5());

    // Show/Hide All Accordions
    document.getElementById('m3-btn-show-all')?.addEventListener('click', () => this.toggleAllAccordions(true));
    document.getElementById('m3-btn-hide-all')?.addEventListener('click', () => this.toggleAllAccordions(false));

    // Accordions Toggle Event Listener
    const accHeaders = document.querySelectorAll('#m3-accordion-container .accordion-header');
    accHeaders.forEach(header => {
      header.addEventListener('click', (e) => {
        // หากคลิกที่ปุ่ม Clear ไม่ต้องพับสลับ Accordion
        if (e.target.classList.contains('btn-clear-mini')) return;
        const item = header.closest('.accordion-item');
        if (item) item.classList.toggle('active');
      });
    });
  },

  calculateScenario1: function() {
    let bw = parseFloat(document.getElementById('m3-bw')?.value) || 0;
    let ht = parseFloat(document.getElementById('m3-ht')?.value) || 0;
    let dose = this.parseFormattedNumber(document.getElementById('m3-dose')?.value);

    ['col-m-real', 'col-m-ibw', 'col-f-real', 'col-f-ibw'].forEach(id => {
      document.getElementById(id)?.classList.remove('highlight-lower');
    });

    let ibwMale = 0;
    let ibwFemale = 0;

    if (ht > 0) {
      ibwMale = 50 + 2.3 * ((ht / 2.54) - 60);
      ibwFemale = 45.5 + 2.3 * ((ht / 2.54) - 60);
      if (ibwMale < 0) ibwMale = 0;
      if (ibwFemale < 0) ibwFemale = 0;
    }

    this.setText('val-m-real-bw', bw > 0 ? `${bw} kg` : '-');
    this.setText('val-m-ibw-bw', ibwMale > 0 ? `${ibwMale.toFixed(2)} kg` : '-');
    this.setText('val-f-real-bw', bw > 0 ? `${bw} kg` : '-');
    this.setText('val-f-ibw-bw', ibwFemale > 0 ? `${ibwFemale.toFixed(2)} kg` : '-');

    this.computeAndDisplay('m1-m-real', bw, dose);
    this.computeAndDisplay('m1-m-ibw', ibwMale, dose);
    this.computeAndDisplay('m1-f-real', bw, dose);
    this.computeAndDisplay('m1-f-ibw', ibwFemale, dose);

    if (bw > 0 && ht > 0) {
      if (bw < ibwMale) {
        document.getElementById('col-m-real')?.classList.add('highlight-lower');
      } else if (ibwMale < bw) {
        document.getElementById('col-m-ibw')?.classList.add('highlight-lower');
      }

      if (bw < ibwFemale) {
        document.getElementById('col-f-real')?.classList.add('highlight-lower');
      } else if (ibwFemale < bw) {
        document.getElementById('col-f-ibw')?.classList.add('highlight-lower');
      }
    }
  },

  calculateScenario2: function() {
    let dose = this.parseFormattedNumber(document.getElementById('m3-s2-dose')?.value);
    let css = parseFloat(document.getElementById('m3-s2-css')?.value) || 0;
    let pdose = this.parseFormattedNumber(document.getElementById('m3-s2-pdose')?.value);

    if (dose > 0 && css > 0) {
      let vmax = ((0.92 * 1 * dose) * (4 + css)) / css;
      this.setText('m3-s2-vmax', this.formatNumberWithComma(vmax, 3));

      if (pdose > 0) {
        let denom = vmax - (0.92 * 1 * pdose);
        if (denom <= 0) {
          this.setText('m3-s2-cpred', 'Infinity');
        } else {
          let cpred = (4 * (0.92 * 1 * pdose)) / denom;
          this.setText('m3-s2-cpred', cpred.toFixed(3));
        }
      } else {
        this.setText('m3-s2-cpred', '-');
      }
    } else {
      this.setText('m3-s2-vmax', '-');
      this.setText('m3-s2-cpred', '-');
    }
  },

  calculateScenario3: function() {
    let css = parseFloat(document.getElementById('m3-s3-css')?.value) || 0;
    let alb = parseFloat(document.getElementById('m3-s3-alb')?.value) || 0;
    let crclInput = document.getElementById('m3-s3-crcl')?.value;
    let crcl = parseFloat(crclInput) || 0;
    let hasCrCl = crclInput !== '' && !isNaN(crcl);

    const noticeBox = document.getElementById('m3-s3-notice');

    if (hasCrCl && crcl < 10) {
      if (noticeBox) noticeBox.style.display = 'flex';
    } else {
      if (noticeBox) noticeBox.style.display = 'none';
    }

    if (css > 0 && alb > 0) {
      let denom = (0.9 * (alb / 4.4)) + 0.1;
      if (denom <= 0) {
        this.setText('m3-s3-cpred', 'Infinity');
        return;
      }

      let cpred = css / denom;

      if (hasCrCl && crcl < 10) {
        cpred = cpred / 0.44;
      }

      this.setText('m3-s3-cpred', cpred.toFixed(3));
    } else {
      this.setText('m3-s3-cpred', '-');
    }
  },

  calculateScenario4: function() {
    let css = parseFloat(document.getElementById('m3-s4-css')?.value) || 0;
    let vpa = parseFloat(document.getElementById('m3-s4-vpa')?.value) || 0;

    if (css > 0 && vpa > 0) {
      let cpred = ((0.095 + (0.001 * vpa)) * css) / 0.1;
      this.setText('m3-s4-cpred', cpred.toFixed(3));
    } else {
      this.setText('m3-s4-cpred', '-');
    }
  },

  calculateScenario5: function() {
    let dose = this.parseFormattedNumber(document.getElementById('m3-s5-dose')?.value);
    let c1 = parseFloat(document.getElementById('m3-s5-c1')?.value) || 0;
    let c2 = parseFloat(document.getElementById('m3-s5-c2')?.value) || 0;

    let realBW = parseFloat(document.getElementById('m3-bw')?.value) || 0;
    let ht = parseFloat(document.getElementById('m3-ht')?.value) || 0;

    // Reset Highlights
    ['m3-s5-bw-real', 'm3-s5-bw-ibw-m', 'm3-s5-bw-ibw-f', 'm3-s5-vd-real', 'm3-s5-vd-ibw-m', 'm3-s5-vd-ibw-f', 'm3-s5-offday-real', 'm3-s5-offday-ibw-m', 'm3-s5-offday-ibw-f'].forEach(id => {
      document.getElementById(id)?.classList.remove('highlight-cell');
    });

    // 1. Vmax Calculation
    let vmax = 0;
    if (dose > 0 && c1 > 0) {
      vmax = ((0.92 * 1 * dose) * (4 + c1)) / c1;
      this.setText('m3-s5-vmax', this.formatNumberWithComma(vmax, 3));
    } else {
      this.setText('m3-s5-vmax', '-');
    }

    // 2. IBW (ชาย / หญิง)
    let ibwMale = 0;
    let ibwFemale = 0;
    if (ht > 0) {
      ibwMale = 50 + 2.3 * ((ht / 2.54) - 60);
      ibwFemale = 45.5 + 2.3 * ((ht / 2.54) - 60);
      if (ibwMale < 0) ibwMale = 0;
      if (ibwFemale < 0) ibwFemale = 0;
    }

    this.setText('m3-s5-bw-real', realBW > 0 ? realBW.toFixed(3) : '-');
    this.setText('m3-s5-bw-ibw-m', ibwMale > 0 ? ibwMale.toFixed(3) : '-');
    this.setText('m3-s5-bw-ibw-f', ibwFemale > 0 ? ibwFemale.toFixed(3) : '-');

    // 3. Vd
    let vdReal = realBW > 0 ? 0.65 * realBW : 0;
    let vdIbwM = (ibwMale > 0 && realBW > 0) ? 0.65 * (ibwMale + 1.33 * (realBW - ibwMale)) : 0;
    let vdIbwF = (ibwFemale > 0 && realBW > 0) ? 0.65 * (ibwFemale + 1.33 * (realBW - ibwFemale)) : 0;

    this.setText('m3-s5-vd-real', vdReal > 0 ? vdReal.toFixed(3) : '-');
    this.setText('m3-s5-vd-ibw-m', vdIbwM > 0 ? vdIbwM.toFixed(3) : '-');
    this.setText('m3-s5-vd-ibw-f', vdIbwF > 0 ? vdIbwF.toFixed(3) : '-');

    // 4. จำนวนวันที่ต้องหยุดยา
    let holdReal = 0;
    let holdIbwM = 0;
    let holdIbwF = 0;

    if (vmax > 0 && c1 > 0 && c2 > 0 && c1 > c2) {
      let numFactor = (4 * Math.log(c1 / c2)) + (c1 - c2);

      holdReal = vdReal > 0 ? numFactor / (vmax / vdReal) : 0;
      holdIbwM = vdIbwM > 0 ? numFactor / (vmax / vdIbwM) : 0;
      holdIbwF = vdIbwF > 0 ? numFactor / (vmax / vdIbwF) : 0;

      this.setText('m3-s5-offday-real', holdReal > 0 ? holdReal.toFixed(3) : '-');
      this.setText('m3-s5-offday-ibw-m', holdIbwM > 0 ? holdIbwM.toFixed(3) : '-');
      this.setText('m3-s5-offday-ibw-f', holdIbwF > 0 ? holdIbwF.toFixed(3) : '-');
    } else {
      this.setText('m3-s5-offday-real', '-');
      this.setText('m3-s5-offday-ibw-m', '-');
      this.setText('m3-s5-offday-ibw-f', '-');
    }

    // 5. Dose ที่ควรได้รับหลัง hold ยา
    let targetDaysValue = 0;
    if (realBW > 0) {
      if (realBW < 60) {
        targetDaysValue = holdReal;
      } else {
        targetDaysValue = holdIbwM;
      }
    }

    let roundedDays = Math.round(targetDaysValue);

    if (targetDaysValue > 0) {
      this.setText('m3-s5-hold-days-tag', `[${roundedDays}] วัน`);
    } else {
      this.setText('m3-s5-hold-days-tag', '');
    }

    if (vmax > 0 && c2 > 0) {
      let recDose = (vmax * c2) / ((4 + c2) * 0.92);
      this.setText('m3-s5-rec-dose', this.formatNumberWithComma(recDose, 2) + ' mg');
    } else {
      this.setText('m3-s5-rec-dose', '- mg');
    }

    // 6. Highlight Logic
    if (realBW > 0) {
      if (realBW < 60) {
        document.getElementById('m3-s5-bw-real')?.classList.add('highlight-cell');
        document.getElementById('m3-s5-vd-real')?.classList.add('highlight-cell');
        document.getElementById('m3-s5-offday-real')?.classList.add('highlight-cell');
      } else {
        document.getElementById('m3-s5-bw-ibw-m')?.classList.add('highlight-cell');
        document.getElementById('m3-s5-bw-ibw-f')?.classList.add('highlight-cell');
        document.getElementById('m3-s5-vd-ibw-m')?.classList.add('highlight-cell');
        document.getElementById('m3-s5-vd-ibw-f')?.classList.add('highlight-cell');
        document.getElementById('m3-s5-offday-ibw-m')?.classList.add('highlight-cell');
        document.getElementById('m3-s5-offday-ibw-f')?.classList.add('highlight-cell');
      }
    }
  },

  computeAndDisplay: function(prefix, weight, dose) {
    const elVmax = document.getElementById(`${prefix}-vmax`);
    const elCpred = document.getElementById(`${prefix}-cpred`);

    if (weight <= 0) {
      if (elVmax) elVmax.innerText = '-';
      if (elCpred) elCpred.innerText = '-';
      return;
    }

    let vmax = weight * 7;
    if (elVmax) elVmax.innerText = this.formatNumberWithComma(vmax, 3);

    if (dose > 0) {
      let denom = vmax - (0.92 * 1 * dose);
      if (denom <= 0) {
        if (elCpred) elCpred.innerText = 'Infinity';
      } else {
        let cpred = (4 * 0.92 * 1 * dose) / denom;
        if (elCpred) elCpred.innerText = cpred.toFixed(3);
      }
    } else {
      if (elCpred) elCpred.innerText = '-';
    }
  },

  setText: function(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  },

  parseFormattedNumber: function(str) {
    if (!str) return 0;
    let clean = str.toString().replace(/,/g, '');
    return parseFloat(clean) || 0;
  },

  formatNumberWithComma: function(num, maxDecimals = 2) {
    if (isNaN(num) || num === 0) return '';
    let factor = Math.pow(10, maxDecimals);
    let rounded = Math.round(num * factor) / factor;
    
    let parts = rounded.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  },

  formatInputOnBlur: function(id, maxDecimals, callback) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      if (el.value === '') return;
      let val = parseFloat(el.value);
      if (isNaN(val)) {
        el.value = '';
      } else {
        let factor = Math.pow(10, maxDecimals);
        el.value = Math.round(val * factor) / factor;
      }
      if (callback) callback();
      else this.calculateScenario1();
    });
  },

  formatFloatOnBlur: function(id, maxDecimals, callback) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      if (el.value === '') return;
      let val = parseFloat(el.value);
      if (isNaN(val) || val === 0) {
        el.value = '';
      } else {
        el.value = val.toFixed(maxDecimals);
      }
      if (callback) callback();
    });
  },

  formatDoseOnBlur: function(id, callback) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      let num = this.parseFormattedNumber(el.value);
      if (num === 0) {
        el.value = '';
      } else {
        el.value = this.formatNumberWithComma(num, 2);
      }
      if (callback) callback();
      else this.calculateScenario1();
    });
  },

  stepInput: function(id, delta, minVal, maxVal, maxDecimals, callback) {
    const el = document.getElementById(id);
    if (!el) return;
    let curr = parseFloat(el.value) || 0;
    let nextVal = curr + delta;
    if (nextVal < minVal) nextVal = minVal;
    if (nextVal > maxVal) nextVal = maxVal;

    let factor = Math.pow(10, maxDecimals);
    el.value = Math.round(nextVal * factor) / factor;
    if (callback) callback();
    else this.calculateScenario1();
  },

  stepFloatInput: function(id, delta, minVal, maxVal, maxDecimals, callback) {
    const el = document.getElementById(id);
    if (!el) return;
    let curr = parseFloat(el.value) || 0;
    let nextVal = curr + delta;
    if (nextVal < minVal) nextVal = minVal;
    if (nextVal > maxVal) nextVal = maxVal;

    el.value = nextVal.toFixed(maxDecimals);
    if (callback) callback();
  },

  stepDoseInput: function(id, delta, callback) {
    const el = document.getElementById(id);
    if (!el) return;
    let curr = this.parseFormattedNumber(el.value);
    let nextVal = curr + delta;
    if (nextVal < 0) nextVal = 0;

    el.value = this.formatNumberWithComma(nextVal, 2);
    if (callback) callback();
    else this.calculateScenario1();
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
