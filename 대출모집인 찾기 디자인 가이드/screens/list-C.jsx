// LIST C — 매칭 매트릭스 비교
// 각 모집인의 4축 도트를 한 줄로 노출 → 강점이 다른 후보를 한눈에 비교
// 4축: 단지 경험 · 가격대 경험 · 은행 매칭 · 응답 속도

function ListC({ context, onOpenDetail }) {
  const list = CONSULTANTS.slice().sort((a, b) => b.matchScore - a.matchScore);

  // 각 축의 정규화 함수 (0~100) → MatchDots로 변환
  const axisScore = (c, axis) => {
    if (axis === 'complex')  return Math.min(100, (c.complexHandled / 8) * 100);
    if (axis === 'price')    return Math.min(100, (c.priceRangeHandled / 25) * 100);
    if (axis === 'bank')     return c.bankMatch ? 95 : 30;
    if (axis === 'response') return Math.max(0, 100 - (c.respondMins / 20) * 100);
    return 0;
  };

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
          무엇을 잘하는지
        </div>
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.6px', color: '#1F2937', lineHeight: 1.15 }}>
          비교해서 고르기
        </div>
      </div>

      {/* 4축 범례 */}
      <div style={{
        margin: '18px 20px 8px',
        padding: 12,
        background: '#FAFAFA',
        borderRadius: 10,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 12px',
        fontSize: 11, color: '#6B7280', fontWeight: 600,
      }}>
        <span>· 단지 경험 (이 매물)</span>
        <span>· 가격대 (15억대)</span>
        <span>· 은행 매칭 (신한)</span>
        <span>· 응답 속도</span>
      </div>

      {/* 카드 리스트 */}
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 4 }}>
        {list.map(c => (
          <CardC key={c.id} consultant={c} onClick={() => onOpenDetail(c)} axisScore={axisScore} />
        ))}
      </div>
    </div>
  );
}

function CardC({ consultant: c, onClick, axisScore }) {
  return (
    <button onClick={onClick} style={{
      display: 'block', width: '100%', textAlign: 'left',
      background: 'transparent', border: 'none',
      padding: '16px 20px',
      borderTop: '1px solid #F3F4F6',
      cursor: 'pointer', fontFamily: 'inherit',
    }}>
      {/* 이름 행 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <Avatar consultant={c} size={36} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: 15, fontWeight: 800, color: '#1F2937' }}>{c.name}</span>
            <BankBadge bankCode={c.bank} size="sm" />
            <span style={{ fontSize: 11, color: '#6B7280', fontWeight: 500, marginLeft: 4 }}>· {c.org}</span>
          </div>
        </div>
        <span style={{ fontSize: 13, fontWeight: 800, color: '#374151', letterSpacing: '-0.2px' }}>
          {c.matchScore}
        </span>
      </div>

      {/* 4축 매트릭스 */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: 6,
      }}>
        <AxisCell label="단지" score={axisScore(c, 'complex')} value={`${c.complexHandled}건`} />
        <AxisCell label="가격대" score={axisScore(c, 'price')} value={`${c.priceRangeHandled}건`} />
        <AxisCell label="은행" score={axisScore(c, 'bank')} value={c.bankMatch ? '일치' : '다름'} />
        <AxisCell label="응답" score={axisScore(c, 'response')} value={`${c.respondMins}분`} />
      </div>
    </button>
  );
}

function AxisCell({ label, score, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 600 }}>{label}</div>
      <MatchDots score={score} size={6} />
      <div style={{ fontSize: 11.5, color: '#374151', fontWeight: 700, fontFeatureSettings: '"tnum"' }}>{value}</div>
    </div>
  );
}

Object.assign(window, { ListC });
