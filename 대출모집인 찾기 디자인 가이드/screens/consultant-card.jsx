// 상담사 카드 컴포넌트 — 정보 위계 탐색
// 기본 5요소: 사진 · 이름+은행 · 경력 · 별점 · 후기 수
// 추가 변형: 응답 속도 · 전문 분야 · 강점 뱃지

// ─────────────────────────────────────────────────────────────
// 공통 — 아바타 (은행 로고를 우하단 뱃지로 오버레이)
// ─────────────────────────────────────────────────────────────
function CCAvatar({ consultant: c, size = 48, withBank = true }) {
  const badgeSize = Math.round(size * 0.40);
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <div style={{
        width: size, height: size, borderRadius: '50%',
        background: c.avatarTone,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.4, fontWeight: 700, color: '#1F2937',
      }}>{c.surname}</div>
      {withBank && (
        <div style={{
          position: 'absolute', right: -2, bottom: -2,
          width: badgeSize, height: badgeSize, borderRadius: '50%',
          background: '#fff',
          padding: 1.5,
          boxSizing: 'border-box',
        }}>
          <CCBank bankCode={c.bank} size={badgeSize - 3} />
        </div>
      )}
    </div>
  );
}

// 공통 — 은행 뱃지 (작은 동그라미). 실제 로고가 있으면 img, 없으면 텍스트 fallback
const CC_BANK_LOGOS = {
  shinhan: 'assets/banks/shinhan.png',
};

function CCBank({ bankCode, size = 18 }) {
  const b = BANKS[bankCode];
  if (!b) return null;
  const logo = CC_BANK_LOGOS[bankCode];
  if (logo) {
    return (
      <img src={logo} alt={b.name}
        style={{
          width: size, height: size, borderRadius: '50%',
          flexShrink: 0,
          objectFit: 'cover',
        }} />
    );
  }
  const lightBg = ['kb', 'kakao'].includes(bankCode);
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, borderRadius: '50%',
      background: b.color, color: lightBg ? '#1F2937' : '#fff',
      fontSize: size * 0.5, fontWeight: 800, letterSpacing: '-0.2px',
      flexShrink: 0,
      boxShadow: '0 0 0 1px rgba(0,0,0,0.06)',
    }}>{b.short.slice(0, 2)}</span>
  );
}

// 공통 — 별점 한 줄
function CCStar({ rating, reviewCount }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 12, fontWeight: 700, color: '#1F2937' }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span>{rating.toFixed(1)}</span>
      <span style={{ color: '#9CA3AF', fontWeight: 500 }}>({reviewCount})</span>
    </span>
  );
}

// 공통 — 카드 컨테이너
function CCFrame({ children }) {
  return (
    <div style={{
      display: 'flex', gap: 12, alignItems: 'center',
      padding: 14,
      background: '#fff',
      border: '1px solid #E5E7EB',
      borderRadius: 14,
    }}>{children}</div>
  );
}

// ─────────────────────────────────────────────────────────────
// A · 미니멀 (5요소: 사진+이름+은행+경력+별점)
// ─────────────────────────────────────────────────────────────
function ConsultantCardA({ consultant: c }) {
  return (
    <CCFrame>
      <CCAvatar consultant={c} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15.5, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.2px', marginBottom: 2 }}>
          {c.name}
        </div>
        <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 500, marginBottom: 5 }}>
          {c.org} · 경력 {c.career}년
        </div>
        <CCStar rating={c.rating} reviewCount={c.reviewCount} />
      </div>
    </CCFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// B · 응답 시간 추가
// ─────────────────────────────────────────────────────────────
function ConsultantCardB({ consultant: c }) {
  return (
    <CCFrame>
      <CCAvatar consultant={c} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15.5, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.2px', marginBottom: 2 }}>
          {c.name}
        </div>
        <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 500, marginBottom: 5 }}>
          {c.org} · 경력 {c.career}년
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <CCStar rating={c.rating} reviewCount={c.reviewCount} />
          <span style={{ color: '#D1D5DB' }}>·</span>
          <span style={{ fontSize: 12, color: '#374151', fontWeight: 600 }}>평균 {c.respondMins}분 응답</span>
        </div>
      </div>
    </CCFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// C · 응답 + 전문 분야 칩
// ─────────────────────────────────────────────────────────────
function ConsultantCardC({ consultant: c }) {
  const primarySpec = c.specs[0];
  return (
    <CCFrame>
      <CCAvatar consultant={c} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
          <span style={{ fontSize: 15.5, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.2px' }}>{c.name}</span>
          {primarySpec && (
            <span style={{
              fontSize: 10.5, fontWeight: 700,
              padding: '2px 6px', borderRadius: 5,
              background: '#F3F4F6', color: '#4B5563',
              marginLeft: 2,
            }}>{SPECS[primarySpec]}</span>
          )}
        </div>
        <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 500, marginBottom: 5 }}>
          {c.org} · 경력 {c.career}년
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <CCStar rating={c.rating} reviewCount={c.reviewCount} />
          <span style={{ color: '#D1D5DB' }}>·</span>
          <span style={{ fontSize: 12, color: '#374151', fontWeight: 600 }}>평균 {c.respondMins}분 응답</span>
        </div>
      </div>
    </CCFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// D · 강점 뱃지 — 이름 옆 filled 뱃지로 상담사 강점 부각
// "주담대 전문" 같은 핵심 강점을 컬러 채운 뱃지로
// ─────────────────────────────────────────────────────────────
function ConsultantCardD({ consultant: c }) {
  // 강점 도출 — 우선순위: 갈아타기 전문 > 베테랑 > 주담대 전문
  let strength = null;
  if (c.career >= 12) strength = { label: `베테랑 ${c.career}년`, bg: '#1F2937', fg: '#fff' };
  else if (c.specs.includes('swap')) strength = { label: '갈아타기 전문', bg: '#EBF2FF', fg: '#1B4FA0' };
  else if (c.specs.includes('apt')) strength = { label: '주담대 전문', bg: '#EBF2FF', fg: '#1B4FA0' };
  else if (c.specs[0]) strength = { label: `${SPECS[c.specs[0]]} 전문`, bg: '#EBF2FF', fg: '#1B4FA0' };

  return (
    <CCFrame>
      <CCAvatar consultant={c} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span style={{ fontSize: 15.5, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.2px' }}>{c.name}</span>
          {strength && (
            <span style={{
              fontSize: 10.5, fontWeight: 700,
              padding: '3px 7px', borderRadius: 5,
              background: strength.bg, color: strength.fg,
              marginLeft: 'auto',
            }}>{strength.label}</span>
          )}
        </div>
        <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 500, marginBottom: 5 }}>
          {c.org}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <CCStar rating={c.rating} reviewCount={c.reviewCount} />
          <span style={{ color: '#D1D5DB' }}>·</span>
          <span style={{ fontSize: 12, color: '#374151', fontWeight: 600 }}>평균 {c.respondMins}분</span>
        </div>
      </div>
    </CCFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// E · 카페인 리스트 스타일 — 행(row), 카드 X, 구분선만
//    좌: 아바타 + 은행 뱃지 / 우: 이름 + 메타 + 별점·응답 / 끝: >
// ─────────────────────────────────────────────────────────────
function ConsultantRow({ consultant: c }) {
  return (
    <div style={{
      display: 'flex', gap: 14, alignItems: 'center',
      padding: '18px 4px',
      background: '#fff',
    }}>
      <CCAvatar consultant={c} size={52} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.3px', marginBottom: 3 }}>
          {c.name}
        </div>
        <div style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 500, marginBottom: 6 }}>
          {c.org} · 경력 {c.career}년
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <CCStar rating={c.rating} reviewCount={c.reviewCount} />
          <span style={{ color: '#D1D5DB' }}>·</span>
          <span style={{ fontSize: 12, color: '#374151', fontWeight: 600 }}>평균 {c.respondMins}분</span>
        </div>
      </div>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M9 6l6 6-6 6" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

Object.assign(window, {
  CCAvatar, CCBank, CCStar, CCFrame,
  ConsultantCardA, ConsultantCardB, ConsultantCardC, ConsultantCardD,
  ConsultantRow,
});
