// LIST B — Top 추천 hero + 나머지 압축 리스트
// "이 매물에 가장 잘 맞는 1명"을 큰 카드로, 나머지는 한 줄씩

function ListB({ context, onOpenDetail }) {
  const list = CONSULTANTS.slice().sort((a, b) => b.matchScore - a.matchScore);
  const top = list[0];
  const rest = list.slice(1);

  return (
    <div style={{
      minHeight: '100%', background: '#fff',
      fontFamily: "'Pretendard', -apple-system, sans-serif", color: '#1F2937',
      paddingBottom: 32,
    }}>
      <TopBar />

      {/* 매물 hero */}
      <div style={{ padding: '4px 0 24px' }}>
        <PropertyHero context={context} size="lg" />
      </div>

      {/* 제목 */}
      <div style={{ padding: '0 20px 14px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#3182F6', letterSpacing: 0.3, textTransform: 'uppercase', marginBottom: 6 }}>
          이 매물에 가장 잘 맞는
        </div>
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.6px', color: '#1F2937', lineHeight: 1.15 }}>
          {top.name}
        </div>
      </div>

      {/* TOP hero */}
      <div style={{ padding: '0 20px' }}>
        <TopCardB consultant={top} onClick={() => onOpenDetail(top)} />
      </div>

      {/* Divider */}
      <div style={{ padding: '28px 20px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#1F2937' }}>
          다른 후보 {rest.length}명
        </div>
        <span style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600 }}>적합도순</span>
      </div>

      {/* 나머지 압축 리스트 */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {rest.map(c => (
          <RestRowB key={c.id} consultant={c} onClick={() => onOpenDetail(c)} />
        ))}
      </div>
    </div>
  );
}

function TopCardB({ consultant: c, onClick }) {
  return (
    <div style={{
      borderRadius: 16,
      border: '1px solid #E5E7EB',
      padding: 18,
      background: '#fff',
    }}>
      {/* 프로필 */}
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 16 }}>
        <Avatar consultant={c} size={56} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.3px' }}>{c.name}</span>
            <BankBadge bankCode={c.bank} size="sm" />
          </div>
          <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 500, marginTop: 2 }}>
            {c.org}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: '#3182F6', letterSpacing: '-0.5px', fontFeatureSettings: '"tnum"' }}>
            {c.matchScore}
          </div>
          <div style={{ fontSize: 10, color: '#6B7280', fontWeight: 600, marginTop: -2 }}>적합도</div>
        </div>
      </div>

      {/* 매칭 이유 */}
      <div style={{
        padding: '12px 14px',
        background: '#EBF2FF',
        borderRadius: 10,
        fontSize: 13, color: '#1B4FA0', fontWeight: 600, lineHeight: 1.5,
        marginBottom: 14,
      }}>
        {c.matchReason}
      </div>

      {/* 메타 */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 16 }}>
        <MiniStat label="평점" value={c.rating.toFixed(1)} />
        <MiniStat label="경력" value={`${c.career}년`} />
        <MiniStat label="응답" value={`${c.respondMins}분`} />
      </div>

      {/* CTA */}
      <button onClick={onClick} style={{
        width: '100%', padding: '14px 0', borderRadius: 12,
        background: '#3182F6', color: '#fff',
        border: 'none', fontSize: 14.5, fontWeight: 700,
        cursor: 'pointer', fontFamily: 'inherit',
      }}>프로필 보기</button>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div style={{
      flex: 1, textAlign: 'center',
      borderLeft: 'none',
    }}>
      <div style={{ fontSize: 16, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.3px', fontFeatureSettings: '"tnum"' }}>{value}</div>
      <div style={{ fontSize: 11, color: '#6B7280', fontWeight: 600, marginTop: 1 }}>{label}</div>
    </div>
  );
}

function RestRowB({ consultant: c, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', gap: 12, alignItems: 'center',
      width: '100%', padding: '14px 20px',
      borderTop: '1px solid #F3F4F6',
      background: 'transparent', border: 'none', cursor: 'pointer',
      textAlign: 'left', fontFamily: 'inherit',
    }}>
      <Avatar consultant={c} size={40} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
          <span style={{ fontSize: 14.5, fontWeight: 700, color: '#1F2937' }}>{c.name}</span>
          <BankBadge bankCode={c.bank} size="sm" />
          {c.bankMatch && (
            <span style={{
              fontSize: 9.5, fontWeight: 700,
              padding: '1px 4px', borderRadius: 3,
              background: '#EBF2FF', color: '#1B4FA0',
            }}>1순위</span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <MatchDots score={c.matchScore} size={6} />
          <span style={{ fontSize: 11, color: '#6B7280', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {c.matchReason}
          </span>
        </div>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: '#374151', letterSpacing: '-0.2px' }}>{c.matchScore}</div>
        <StarRating rating={c.rating} />
      </div>
    </button>
  );
}

Object.assign(window, { ListB });
