// DETAIL A — 미니멀 스크롤
// 큰 이름 + 매물 적합도 한 줄 + 핵심 지표 + 후기 + 하단 CTA
// 카페인의 큰 디스플레이 + 4단계 도트 패턴

function DetailA({ consultant: c, context, onBack }) {
  const reviews = REVIEWS[c.id] || [
    { rating: 5, date: '2026.04.21', body: '응답 빠르고 친절하셨어요. 무리한 권유 없습니다.', tag: c.specs[0] ? SPECS[c.specs[0]] : '주담대' },
  ];

  return (
    <div style={{
      minHeight: '100%', background: '#fff',
      fontFamily: "'Pretendard', -apple-system, sans-serif", color: '#1F2937',
      paddingBottom: 96,
    }}>
      <TopBar onBack={onBack} />

      {/* 매물 hero (작게) */}
      <div style={{ padding: '0 0 24px' }}>
        <PropertyHero context={context} size="sm" />
      </div>

      {/* 큰 이름 디스플레이 */}
      <div style={{ padding: '0 20px 4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <BankBadge bankCode={c.bank} size="md" />
          <span style={{ fontSize: 12, fontWeight: 700, color: '#6B7280' }}>{BANKS[c.bank].name} 전속</span>
          {c.bankMatch && (
            <span style={{
              fontSize: 10, fontWeight: 700,
              padding: '2px 6px', borderRadius: 4,
              background: '#EBF2FF', color: '#1B4FA0',
            }}>1순위 매칭</span>
          )}
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.7px', color: '#1F2937', lineHeight: 1.15 }}>
          {c.name}
        </div>
        <div style={{ fontSize: 13, color: '#374151', fontWeight: 600, marginTop: 6 }}>
          {c.org}
        </div>
        <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 500, marginTop: 2, fontFeatureSettings: '"tnum"' }}>
          등록 {c.regNo}
        </div>
      </div>

      {/* 적합도 한 줄 */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          padding: '14px 16px',
          background: '#FAFAFA',
          borderRadius: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <MatchDots score={c.matchScore} />
            <span style={{ fontSize: 13, fontWeight: 800, color: '#1F2937' }}>{matchLabel(c.matchScore)}</span>
          </div>
          <div style={{ fontSize: 13, color: '#374151', fontWeight: 500, lineHeight: 1.5 }}>
            {c.matchReason}
          </div>
        </div>
      </div>

      {/* 핵심 지표 3종 */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ display: 'flex' }}>
          {[
            { v: c.career, suf: '년', label: '경력' },
            { v: c.consultCount.toLocaleString(), suf: '건', label: '누적 상담' },
            { v: c.avgRate.toFixed(2), suf: '%', label: '평균 금리' },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: 1, textAlign: 'center',
              borderLeft: i === 0 ? 'none' : '1px solid #F3F4F6',
              padding: '4px 0',
            }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#1F2937', letterSpacing: '-0.5px', fontFeatureSettings: '"tnum"' }}>
                {stat.v}<span style={{ fontSize: 13, fontWeight: 700, marginLeft: 1 }}>{stat.suf}</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#6B7280', marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 소개 */}
      <div style={{ padding: '28px 20px 0' }}>
        <SectionLabel>소개</SectionLabel>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: '#374151', fontWeight: 500, margin: 0, textWrap: 'pretty' }}>
          {c.bio}
        </p>
      </div>

      {/* 후기 */}
      <div style={{ padding: '28px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
          <SectionLabel inline>최근 후기</SectionLabel>
          <span style={{ fontSize: 12, color: '#3182F6', fontWeight: 700 }}>전체 {c.reviewCount}개 →</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {reviews.slice(0, 2).map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* 하단 고정 CTA */}
      <BottomCTA primary="전화 상담" secondary="문자로 묻기" />
    </div>
  );
}

function SectionLabel({ children, inline }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 700, color: '#6B7280',
      letterSpacing: 0.3, textTransform: 'uppercase',
      marginBottom: inline ? 0 : 10,
    }}>{children}</div>
  );
}

function ReviewCard({ review: r }) {
  return (
    <div style={{
      padding: '14px 16px',
      background: '#fff',
      border: '1px solid #E5E7EB',
      borderRadius: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <StarRating rating={r.rating} />
        <span style={{ color: '#D1D5DB' }}>·</span>
        <span style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 500 }}>{r.date}</span>
        {r.tag && (
          <span style={{
            marginLeft: 'auto',
            fontSize: 10.5, fontWeight: 700,
            padding: '2px 6px', borderRadius: 5,
            background: '#F3F4F6', color: '#4B5563',
          }}>{r.tag}</span>
        )}
      </div>
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: '#374151', fontWeight: 500, textWrap: 'pretty' }}>
        {r.body}
      </p>
    </div>
  );
}

function BottomCTA({ primary, secondary }) {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      padding: '12px 20px',
      background: '#fff',
      borderTop: '1px solid #F3F4F6',
      display: 'flex', gap: 8,
    }}>
      <button style={{
        flex: 1, height: 50, borderRadius: 12,
        background: '#F3F4F6', color: '#1F2937',
        border: 'none', cursor: 'pointer', fontFamily: 'inherit',
        fontSize: 14, fontWeight: 700,
      }}>{secondary}</button>
      <button style={{
        flex: 1.5, height: 50, borderRadius: 12,
        background: '#3182F6', color: '#fff',
        border: 'none', cursor: 'pointer', fontFamily: 'inherit',
        fontSize: 14.5, fontWeight: 700,
      }}>{primary}</button>
    </div>
  );
}

Object.assign(window, { DetailA, SectionLabel, ReviewCard, BottomCTA });
