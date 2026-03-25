/* ═══════════════════════════════════════════════════════════════
   CampusOne ERP — Shared JavaScript
   Used by all feature pages
   ═══════════════════════════════════════════════════════════════ */

// ── NAVIGATION ────────────────────────────────────────────────
const pageNames = {
  dashboard: 'Dashboard',
  notices: 'Notices & Alerts',
  assignments: 'Assignments',
  dispensary: 'Dispensary',
  library: 'Library',
  'tech-help': 'Technical Help',
  faculty: 'Faculty Information',
  fees: 'Fees & Payments',
  mess: 'Mess & Food',
  hostel: 'My Hostel Room',
  attendance: 'Attendance',
  results: 'Semester Results',
  courses: 'Course Registration',
  'calendar-page': 'Academic Calendar'
};

function navigate(id) {
  window.location.href = id + '.html';
}

// ── SIDEBAR TOGGLE ─────────────────────────────────────────────
function toggleSidebar() {
  const s = document.getElementById('sidebar');
  const o = document.getElementById('sbOverlay');
  s.classList.toggle('open');
  o.classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sbOverlay').classList.remove('open');
}

// ── TABS ───────────────────────────────────────────────────────
function setTab(el) {
  el.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ── MODALS ─────────────────────────────────────────────────────
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal-overlay').forEach(m =>
    m.addEventListener('click', function(e) {
      if (e.target === this) this.classList.remove('open');
    })
  );
});

// ── TOAST ──────────────────────────────────────────────────────
function showToast(msg, type = 'info') {
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span class="toast-icon">${icons[type] || '💬'}</span><span class="toast-text">${msg}</span><button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
  document.getElementById('toast-container').prepend(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(20px)';
    t.style.transition = 'all .3s';
    setTimeout(() => t.remove(), 300);
  }, 4000);
}

// ── STUDENT TYPE ───────────────────────────────────────────────
function setStudentType(type) {
  const hSec = document.getElementById('hostelSection');
  const hM1 = document.getElementById('hostelMenu1');
  const hM2 = document.getElementById('hostelMenu2');
  const hFee = document.getElementById('hostelFeeRow');
  const mFee = document.getElementById('messFeeRow');
  const lbl = document.getElementById('studentTypeLabel');
  const hBtn = document.getElementById('hostelBtn');
  const dBtn = document.getElementById('dayBtn');
  if (type === 'hostel') {
    if(hSec) hSec.style.display = '';
    if(hM1) hM1.style.display = '';
    if(hM2) hM2.style.display = '';
    if(hFee) hFee.style.display = '';
    if(mFee) mFee.style.display = '';
    if(lbl){ lbl.textContent = 'Hostel'; lbl.style.background = 'var(--accent)'; }
    if(hBtn) hBtn.classList.add('active');
    if(dBtn) dBtn.classList.remove('active');
    const tf = document.getElementById('totalFee');
    if(tf) tf.textContent = '₹91,500';
    showToast('Switched to Hostel mode 🏠', 'info');
  } else {
    if(hSec) hSec.style.display = 'none';
    if(hM1) hM1.style.display = 'none';
    if(hM2) hM2.style.display = 'none';
    if(hFee) hFee.style.display = 'none';
    if(mFee) mFee.style.display = 'none';
    if(lbl){ lbl.textContent = 'Day'; lbl.style.background = 'var(--accent4)'; }
    if(dBtn) dBtn.classList.add('active');
    if(hBtn) hBtn.classList.remove('active');
    const tf = document.getElementById('totalFee');
    if(tf) tf.textContent = '₹61,500';
    showToast('Switched to Day Scholar mode ☀️', 'info');
  }
}
