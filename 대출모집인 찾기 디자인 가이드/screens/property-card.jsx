// 매물 카드 컴포넌트 — 큰 카드 (가로/세로) + 작은 카드 (sticky용)
// 4요소: 아파트명 · 동/호수 · 시세 · 이미지
// "다른 매물 둘러보기" 액션 노출

// ─────────────────────────────────────────────────────────────
// 썸네일 (placeholder)
// ─────────────────────────────────────────────────────────────
function PropertyThumb({ size = 80, radius = 10 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: radius,
      background: 'repeating-linear-gradient(135deg, #F3F4F6 0 8px, #E5E7EB 8px 16px)',
      flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      <svg width={size * 0.34} height={size * 0.34} viewBox="0 0 24 24" fill="none">
        <path d="M3 21V10l9-7 9 7v11M9 21V13h6v8" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 큰 카드 — 가로 (썸네일 좌 + 정보 우)
// ─────────────────────────────────────────────────────────────
function PropertyCardLargeH() {
  return (
    <div style={{
      display: 'flex', gap: 14, alignItems: 'center',
      padding: 16,
      background: '#fff',
      border: '1px solid #E5E7EB',
      borderRadius: 14,
    }}>
      <PropertyThumb size={72} radius={10} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 17, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.3px',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{PROPERTY.complexName}</div>
        <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 500, marginTop: 2 }}>
          {PROPERTY.unit}
        </div>
        <div style={{ fontSize: 14, color: '#1F2937', fontWeight: 700, marginTop: 6, fontFeatureSettings: '"tnum"', whiteSpace: 'nowrap' }}>
          {PROPERTY.priceLabel}<span style={{ fontSize: 12, fontWeight: 600, marginLeft: 1, color: '#6B7280' }}>만원</span>
        </div>
      </div>
      <button style={{
        flexShrink: 0,
        background: 'transparent', border: 'none', cursor: 'pointer',
        padding: '6px 0',
        fontSize: 12, color: '#3182F6', fontWeight: 700, fontFamily: 'inherit',
        alignSelf: 'flex-start',
      }}>다른 매물 둘러보기 ›</button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 큰 카드 — 세로 (풀폭 이미지 위 + 정보 아래)
// ─────────────────────────────────────────────────────────────
function PropertyCardLargeV() {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #E5E7EB',
      borderRadius: 14,
      overflow: 'hidden',
    }}>
      {/* 풀폭 썸네일 */}
      <div style={{
        height: 140,
        background: 'repeating-linear-gradient(135deg, #F3F4F6 0 12px, #E5E7EB 12px 24px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width={48} height={48} viewBox="0 0 24 24" fill="none">
          <path d="M3 21V10l9-7 9 7v11M9 21V13h6v8" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div style={{ padding: 16, display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 18, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.3px',
          }}>{PROPERTY.complexName}</div>
          <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 500, marginTop: 2 }}>
            {PROPERTY.unit}
          </div>
          <div style={{ fontSize: 15, color: '#1F2937', fontWeight: 700, marginTop: 8, fontFeatureSettings: '"tnum"' }}>
            {PROPERTY.priceLabel}<span style={{ fontSize: 13, fontWeight: 600, marginLeft: 1, color: '#6B7280' }}>만원</span>
          </div>
        </div>
        <button style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          padding: '4px 0',
          fontSize: 12, color: '#3182F6', fontWeight: 700, fontFamily: 'inherit',
          flexShrink: 0,
        }}>다른 매물 둘러보기 ›</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 작은 카드 — sticky/요약용 (썸네일 작게 + 한 줄)
// ─────────────────────────────────────────────────────────────
function PropertyCardSmall() {
  return (
    <div style={{
      display: 'flex', gap: 10, alignItems: 'center',
      padding: '10px 12px',
      background: '#FAFAFA',
      borderRadius: 12,
    }}>
      <PropertyThumb size={40} radius={8} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 6,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          <span style={{ fontSize: 14, fontWeight: 800, color: '#1F2937' }}>{PROPERTY.complexName}</span>
          <span style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 500 }}>{PROPERTY.unit}</span>
        </div>
        <div style={{ fontSize: 12, color: '#374151', fontWeight: 700, marginTop: 1, fontFeatureSettings: '"tnum"' }}>
          {PROPERTY.priceLabel}<span style={{ fontWeight: 600, color: '#6B7280', marginLeft: 1 }}>만원</span>
        </div>
      </div>
      <button style={{
        flexShrink: 0,
        background: 'transparent', border: 'none', cursor: 'pointer',
        padding: 4,
        fontSize: 11.5, color: '#3182F6', fontWeight: 700, fontFamily: 'inherit',
      }}>다른 매물 ›</button>
    </div>
  );
}

Object.assign(window, {
  PropertyThumb,
  PropertyCardLargeH,
  PropertyCardLargeV,
  PropertyCardSmall,
});
