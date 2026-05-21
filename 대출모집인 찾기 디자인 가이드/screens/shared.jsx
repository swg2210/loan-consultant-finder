// 공통 컴포넌트 — 미니멀, 매물 중심 IA
// 카페인 시안의 큰 디스플레이 + 4단계 도트 + 여백 + 한 화면 한 메시지 원칙

// ─────────────────────────────────────────────────────────────
// 미니멀 사파리 URL 바 (브라우저 컨텍스트만 살짝 암시)
// ─────────────────────────────────────────────────────────────
function BrowserChrome({ url, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
      <div style={{
        flexShrink: 0,
        padding: '6px 14px 8px',
        background: '#F4F4F6',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          background: 'rgba(118,118,128,0.16)',
          borderRadius: 8,
          padding: '5px 10px',
          fontSize: 11.5,
          color: '#4B5563',
          fontWeight: 500,
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M6 10V8a6 6 0 0112 0v2" stroke="#6B7280" strokeWidth="2.4" strokeLinecap="round" />
            <rect x="4" y="10" width="16" height="11" rx="2" stroke="#6B7280" strokeWidth="2.4" />
          </svg>
          <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {url}
          </span>
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'auto', position: 'relative', background: '#fff' }}>
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 상단 바 — 뒤로가기 + 미니멀
// ─────────────────────────────────────────────────────────────
function TopBar({ onBack, right }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 16px 8px',
    }}>
      <button onClick={onBack} style={{ background: 'transparent', border: 'none', padding: 4, cursor: 'pointer' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="#1F2937" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {right || <div style={{ width: 22 }} />}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 매물 HERO — 모든 화면의 anchor
// ─────────────────────────────────────────────────────────────
function PropertyHero({ context, size = 'lg' }) {
  return (
    <div style={{
      display: 'flex', gap: 12,
      padding: size === 'lg' ? '0 20px' : '0 20px',
      alignItems: 'center',
    }}>
      <PropertyThumb size={size === 'lg' ? 72 : 52} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 10.5, fontWeight: 700, color: '#3182F6',
          letterSpacing: 0.3, textTransform: 'uppercase',
          marginBottom: 2,
        }}>
          {context?.from === 'loancompare' ? '대출비교 1순위 신한' :
           context?.from === 'realestate'  ? '부동산에서 조회' :
                                             '내가 검색한 매물'}
        </div>
        <div style={{
          fontSize: size === 'lg' ? 18 : 15,
          fontWeight: 800, color: '#1F2937', letterSpacing: '-0.3px',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{PROPERTY.complexName}</div>
        <div style={{
          fontSize: 12, color: '#6B7280', fontWeight: 500, marginTop: 1,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {PROPERTY.unit} · 매매가 {PROPERTY.priceLabel}만원
        </div>
      </div>
    </div>
  );
}

// 매물 썸네일 (placeholder — subtly-striped)
function PropertyThumb({ size = 72 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 10,
      background: 'repeating-linear-gradient(135deg, #F3F4F6 0 8px, #E5E7EB 8px 16px)',
      flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      <svg width={size * 0.35} height={size * 0.35} viewBox="0 0 24 24" fill="none">
        <path d="M3 21V10l9-7 9 7v11M9 21V13h6v8" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 4단계 매칭 도트 (카페인 핵심 패턴) — 매물 적합도 시각화
// score 0~100 → 4단계
// ─────────────────────────────────────────────────────────────
function MatchDots({ score, size = 7 }) {
  // 4단계: 0~50, 50~70, 70~85, 85~100
  let level = 1;
  if (score >= 85) level = 4;
  else if (score >= 70) level = 3;
  else if (score >= 50) level = 2;
  const colors = ['#DCE9FE', '#87B4FB', '#3182F6', '#1B4FA0'];
  return (
    <span style={{ display: 'inline-flex', gap: 3, alignItems: 'center' }}>
      {[0, 1, 2, 3].map(i => (
        <span key={i} style={{
          width: size, height: size, borderRadius: '50%',
          background: i < level ? colors[level - 1] : '#E5E7EB',
          boxShadow: i < level ? '0 0 0 1px rgba(0,0,0,0.04)' : undefined,
        }} />
      ))}
    </span>
  );
}

// 매칭 라벨 — 4단계 텍스트
function matchLabel(score) {
  if (score >= 85) return '아주 잘 맞음';
  if (score >= 70) return '잘 맞음';
  if (score >= 50) return '보통';
  return '낮음';
}

// ─────────────────────────────────────────────────────────────
// 은행 뱃지
// ─────────────────────────────────────────────────────────────
function BankBadge({ bankCode, size = 'sm' }) {
  const b = BANKS[bankCode];
  if (!b) return null;
  const px = size === 'lg' ? 28 : size === 'md' ? 22 : 18;
  const fontSize = size === 'lg' ? 11 : size === 'md' ? 10 : 9.5;
  const lightBg = ['kb', 'kakao'].includes(bankCode);
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: px, height: px, borderRadius: '50%',
      background: b.color, color: lightBg ? '#1F2937' : '#fff',
      fontSize, fontWeight: 800, letterSpacing: '-0.2px',
      flexShrink: 0,
      boxShadow: '0 0 0 1px rgba(0,0,0,0.06)',
    }}>{b.short.slice(0, 2)}</span>
  );
}

// ─────────────────────────────────────────────────────────────
// 별점 (단순)
// ─────────────────────────────────────────────────────────────
function StarRating({ rating, reviewCount, size = 'sm' }) {
  const fs = size === 'lg' ? 13 : 12;
  const star = size === 'lg' ? 14 : 12;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: fs, color: '#1F2937', fontWeight: 700 }}>
      <svg width={star} height={star} viewBox="0 0 24 24" fill="#F59E0B">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span>{rating.toFixed(1)}</span>
      {reviewCount != null && (
        <span style={{ color: '#9CA3AF', fontWeight: 500 }}>({reviewCount})</span>
      )}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// 아바타 (placeholder — 이니셜)
// ─────────────────────────────────────────────────────────────
function Avatar({ consultant, size = 48 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: consultant.avatarTone,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.4, fontWeight: 700, color: '#1F2937',
      flexShrink: 0,
    }}>{consultant.surname}</div>
  );
}

// ─────────────────────────────────────────────────────────────
// 전문 분야 칩
// ─────────────────────────────────────────────────────────────
function SpecChips({ specs, size = 'sm' }) {
  const fs = size === 'lg' ? 12 : 11;
  return (
    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
      {specs.map(s => (
        <span key={s} style={{
          fontSize: fs, fontWeight: 600,
          padding: '4px 9px', borderRadius: 8,
          background: '#F3F4F6', color: '#4B5563',
        }}>{SPECS[s]}</span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 액션 아이콘 (저장용)
// ─────────────────────────────────────────────────────────────
const ACTION_ICONS = {
  call: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sms: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// 글로벌 keyframes
(function injectKf() {
  if (document.getElementById('kf-style-shared')) return;
  const s = document.createElement('style');
  s.id = 'kf-style-shared';
  s.textContent = `
    @keyframes kf-fade-in {
      0% { opacity: 0; transform: translateY(4px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, {
  BrowserChrome, TopBar,
  PropertyHero, PropertyThumb,
  MatchDots, matchLabel,
  BankBadge, StarRating, Avatar, SpecChips,
  ACTION_ICONS,
});
