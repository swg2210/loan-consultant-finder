// DETAIL B — 매물-기반 신뢰 hero
// "이 단지 7건 처리" 같은 매물 특화 숫자를 가장 크게
// 평범한 경력/누적상담보다 이 매물에 직결되는 데이터가 anchor

function DetailB({ consultant: c, context, onBack }) {
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

      <div style={{ padding: '0 0 20px' }}>
        <PropertyHero context={context} size="sm" />
      </div>

      {/* 이름 + 은행 */}
      <div style={{ padding: '0 20px 4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <Avatar consultant={c} size={40} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.3px' }}>{c.name}</span>
              <BankBadge bankCode={c.bank} size="sm" />
            </div>
            <div style={{ fontSize: 11.5, color: '#6B7280', fontWeight: 500, marginTop: 1 }}>
              {c.org}
            </div>
          </div>
        </div>
      </div>

      {/* HERO — 이 단지 처리 건수 */}
      <div style={{ padding: '12px 20px 0' }}>
        <div style={{
          padding: '20px 20px',
          background: 'linear-gradient(135deg, #EBF2FF 0%, #DCE9FE 100%)',
          borderRadius: 16,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#1B4FA0', letterSpacing: 0.3, textTransform: 'uppercase', marginBottom: 8 }}>
            {PROPERTY.complexName} 처리 경험
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontSize: 56, fontWeight: 800, color: '#1B4FA0', letterSpacing: '-1.5px', lineHeight: 1, fontFeatureSettings: '"tnum"' }}>
              {c.complexHandled}
            </span>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#1B4FA0' }}>건</span>
          </div>
          <div style={{ fontSize: 13, color: '#1B4FA0', fontWeight: 600, marginTop: 8, opacity: 0.85 }}>
            최근 6개월 이 단지 대출 {c.complexHandled}건 처리
          </div>
        </div>
      </div>

      {/* 매물 적합도 부연 stats 2개 */}
      <div style={{ padding: '12px 20px 0', display: 'flex', gap: 8 }}>
        <SubStat label={`${PROPERTY.priceLabel}억대`} value={`${c.priceRangeHandled}건`} sub="가격대 처리" />
        <SubStat
          label="신한 1순위"
          value={c.bankMatch ? '일치' : '다름'}
          sub={c.bankMatch ? '동일 은행 전속' : `${BANKS[c.bank].name} 전속`}
          highlight={c.bankMatch}
        />
      </div>

      {/* 기본 지표 */}
      <div style={{ padding: '20px 20px 0' }}>
        <SectionLabel>기본 지표</SectionLabel>
        <div style={{
          padding: '14px 16px',
          background: '#FAFAFA',
          borderRadius: 12,
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          <KV k="경력" v={`${c.career}년`} />
          <KV k="누적 상담" v={c.consultCount.toLocaleString() + '건'} />
          <KV k="평균 체결 금리" v={c.avgRate.toFixed(2) + '%'} sub="최근 6개월 기준" />
          <KV k="평균 응답" v={`${c.respondMins}분 이내`} />
          <KV k="평점" v={`${c.rating.toFixed(1)} / 5.0`} sub={`후기 ${c.reviewCount}개`} />
        </div>
      </div>

      {/* 소개 */}
      <div style={{ padding: '24px 20px 0' }}>
        <SectionLabel>소개</SectionLabel>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: '#374151', fontWeight: 500, textWrap: 'pretty' }}>
          {c.bio}
        </p>
      </div>

      {/* 후기 */}
      <div style={{ padding: '24px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
          <SectionLabel inline>이 단지·가격대 후기</SectionLabel>
          <span style={{ fontSize: 12, color: '#3182F6', fontWeight: 700 }}>전체 {c.reviewCount}개 →</span>
        </div>
        <ReviewCard review={reviews[0]} />
      </div>

      <BottomCTA primary="전화 상담" secondary="문자로 묻기" />
    </div>
  );
}

function SubStat({ label, value, sub, highlight }) {
  return (
    <div style={{
      flex: 1,
      padding: '14px 14px',
      background: highlight ? '#FEF3C7' : '#FAFAFA',
      borderRadius: 12,
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: highlight ? '#92400E' : '#6B7280', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 800, color: highlight ? '#92400E' : '#1F2937', letterSpacing: '-0.4px', fontFeatureSettings: '"tnum"' }}>{value}</div>
      <div style={{ fontSize: 11, color: highlight ? '#92400E' : '#9CA3AF', fontWeight: 600, marginTop: 1, opacity: 0.85 }}>{sub}</div>
    </div>
  );
}

function KV({ k, v, sub }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 13 }}>
      <span style={{ color: '#6B7280', fontWeight: 500 }}>{k}</span>
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        {sub && <span style={{ fontSize: 10.5, color: '#9CA3AF', fontWeight: 500 }}>{sub}</span>}
        <span style={{ color: '#1F2937', fontWeight: 700, fontFeatureSettings: '"tnum"' }}>{v}</span>
      </span>
    </div>
  );
}

Object.assign(window, { DetailB, SubStat, KV });
