// LIST A — 미니멀 카드 리스트
// 매물 hero (작게) + 적합도순 정렬 + 미니멀 카드
// 한 화면 한 메시지: "이 매물을 가장 잘 도와줄 사람"

function ListA({ context, onOpenDetail }) {
  const list = CONSULTANTS.slice().sort((a, b) => b.matchScore - a.matchScore);

  return (
    <div style={{
      minHeight: '100%', background: '#fff',
      fontFamily: "'Pretendard', -apple-system, sans-serif", color: '#1F2937',
      paddingBottom: 32,
    }}>
      <TopBar />

      {/* 매물 hero */}
      <div style={{ padding: '4px 0 20px' }}>
        <PropertyHero context={context} size="lg" />
      </div>

      {/* 큰 타이틀 */}
      <div style={{ padding: '0 20px 6px' }}>
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.6px', color: '#1F2937', lineHeight: 1.15 }}>
          이 매물 상담 가능한
        </div>
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.6px', color: '#3182F6', lineHeight: 1.15 }}>
          {list.length}명
        </div>
      </div>

      {/* 정렬 행 */}
      <div style={{
        padding: '16px 20px 8px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 12, color: '#6B7280', fontWeight: 600,
      }}>
        <span>매물 적합도순</span>
        <button style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          fontSize: 12, fontWeight: 600, color: '#374151',
          display: 'flex', alignItems: 'center', gap: 3, padding: 0,
          fontFamily: 'inherit',
        }}>
          적합도순
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="#374151" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* 카드 리스트 */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {list.map((c, i) => (
          <CardA key={c.id} consultant={c} onClick={() => onOpenDetail(c)} top={i === 0} />
        ))}
      </div>
    </div>
  );
}

function CardA({ consultant: c, onClick, top }) {
  return (
    <button onClick={onClick} style={{
      display: 'block', width: '100%', textAlign: 'left',
      background: 'transparent', border: 'none',
      padding: '16px 20px',
      borderTop: '1px solid #F3F4F6',
      cursor: 'pointer', fontFamily: 'inherit',
    }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Avatar consultant={c} size={44} />
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* 이름 + 은행 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.2px' }}>{c.name}</span>
            <BankBadge bankCode={c.bank} size="sm" />
            {c.bankMatch && (
              <span style={{
                fontSize: 10, fontWeight: 700,
                padding: '2px 5px', borderRadius: 4,
                background: '#EBF2FF', color: '#1B4FA0',
                marginLeft: 2,
              }}>1순위 매칭</span>
            )}
            {top && (
              <span style={{
                fontSize: 10, fontWeight: 700,
                padding: '2px 5px', borderRadius: 4,
                background: '#1F2937', color: '#fff',
                marginLeft: 'auto',
              }}>TOP</span>
            )}
          </div>
          {/* 적합도 도트 + 라벨 + 별점 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
            <MatchDots score={c.matchScore} />
            <span style={{ fontSize: 12, color: '#374151', fontWeight: 700 }}>{matchLabel(c.matchScore)}</span>
            <span style={{ color: '#D1D5DB' }}>·</span>
            <StarRating rating={c.rating} reviewCount={c.reviewCount} />
          </div>
          {/* 매칭 이유 */}
          <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 500, lineHeight: 1.4 }}>
            {c.matchReason}
          </div>
        </div>
      </div>
    </button>
  );
}

Object.assign(window, { ListA });
