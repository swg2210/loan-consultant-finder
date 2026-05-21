// 전체 화면 조합 시안 — 매물 카드 + 상담사 리스트

// ─────────────────────────────────────────────────────────────
// 카드형 리스트 (기존)
// ─────────────────────────────────────────────────────────────
function ListScreenCard({ CardComponent = ConsultantCardB }) {
  const list = CONSULTANTS;
  return (
    <div style={{
      background: '#F4F4F6', height: '100%',
      fontFamily: "'Pretendard', -apple-system, sans-serif",
      color: '#1F2937', overflow: 'auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 16px 4px', background: '#fff' }}>
        <button style={{ background: 'transparent', border: 'none', padding: 4, cursor: 'pointer' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#1F2937" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div style={{ padding: '8px 16px 0', background: '#fff' }}>
        <PropertyCardLargeH />
      </div>
      <div style={{ padding: '20px 16px 12px', background: '#fff' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#6B7280', letterSpacing: '-0.1px', marginBottom: 4 }}>
          이 매물 상담 가능한 상담사
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.4px' }}>
          {list.length}명
        </div>
      </div>
      <div style={{ padding: '12px 16px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {list.map(c => <CardComponent key={c.id} consultant={c} />)}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 카페인 스타일 — 흰 배경 + 구분선 행(row) 리스트
// 상단: 세로 매물 큰 카드 / 그 밑 타이틀 / 행 리스트
// ─────────────────────────────────────────────────────────────
function ListScreenRow() {
  const list = CONSULTANTS;
  return (
    <div style={{
      background: '#fff', height: '100%',
      fontFamily: "'Pretendard', -apple-system, sans-serif",
      color: '#1F2937', overflow: 'auto',
    }}>
      {/* 상단 바 */}
      <div style={{
        display: 'flex', alignItems: 'center',
        padding: '10px 16px 6px',
      }}>
        <button style={{ background: 'transparent', border: 'none', padding: 4, cursor: 'pointer' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#1F2937" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* 매물 카드 (세로 큰) */}
      <div style={{ padding: '4px 16px 0' }}>
        <PropertyCardLargeV />
      </div>

      {/* 타이틀 */}
      <div style={{ padding: '24px 20px 8px' }}>
        <div style={{ fontSize: 19, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.3px' }}>
          이 매물 상담 가능한 상담사 <span style={{ color: '#3182F6' }}>{list.length}</span>명
        </div>
      </div>

      {/* 행 리스트 */}
      <div style={{ padding: '0 16px 24px' }}>
        {list.map((c, i) => (
          <div key={c.id} style={{
            borderTop: i === 0 ? 'none' : '1px solid #F3F4F6',
          }}>
            <ConsultantRow consultant={c} />
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { ListScreenCard, ListScreenRow });
