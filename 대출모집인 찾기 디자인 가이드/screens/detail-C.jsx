// DETAIL C — 시뮬레이션 hero
// "당신의 매물 + 이 상담사 = 예상 견적" 시뮬레이션이 가장 큰 메시지
// 매물(15.5억) ↔ 모집인 평균금리(3.42%) 결합 → 예상 한도/이자/금리

function DetailC({ consultant: c, context, onBack }) {
  // 시뮬레이션
  const ltv = 0.70;
  const limitEok = (PROPERTY.price * ltv) / 10000;  // 억 단위
  const monthlyInterest = (PROPERTY.price * ltv * (c.avgRate / 100) / 12); // 만원/월 이자만
  // 시장 평균 비교
  const marketAvg = 3.49;
  const rateDelta = c.avgRate - marketAvg;
  const monthlySaved = (PROPERTY.price * ltv * (-rateDelta / 100) / 12);

  const reviews = REVIEWS[c.id] || [
    { rating: 5, date: '2026.04.21', body: '응답 빠르고 친절하셨어요.', tag: '주담대' },
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

      {/* 이름 */}
      <div style={{ padding: '0 20px 4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar consultant={c} size={40} />
          <div style={{ flex: 1, minWidth: 0 }}>
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

      {/* 시뮬레이션 HERO */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, color: '#9CA3AF', letterSpacing: 0.3, textTransform: 'uppercase', marginBottom: 8 }}>
          이 상담사로 진행 시 예상
        </div>

        <div style={{
          padding: 18,
          background: '#1F2937',
          borderRadius: 16,
          color: '#fff',
        }}>
          {/* 한도 */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>
              예상 한도 (LTV 70%)
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-1px', fontFeatureSettings: '"tnum"' }}>
                {limitEok.toFixed(2)}
              </span>
              <span style={{ fontSize: 18, fontWeight: 800 }}>억</span>
            </div>
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '0 0 16px' }} />

          {/* 금리 + 이자 — 좌우 */}
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>
                예상 금리
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.5px', fontFeatureSettings: '"tnum"' }}>
                  {c.avgRate.toFixed(2)}
                </span>
                <span style={{ fontSize: 14, fontWeight: 700 }}>%</span>
              </div>
              <div style={{ fontSize: 10.5, color: '#87B4FB', fontWeight: 700, marginTop: 4 }}>
                시장 평균 대비 {rateDelta > 0 ? '+' : ''}{rateDelta.toFixed(2)}%p
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>
                월 이자 (참고)
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.5px', fontFeatureSettings: '"tnum"' }}>
                  {Math.round(monthlyInterest).toLocaleString()}
                </span>
                <span style={{ fontSize: 14, fontWeight: 700 }}>만원</span>
              </div>
              {monthlySaved > 0 && (
                <div style={{ fontSize: 10.5, color: '#87B4FB', fontWeight: 700, marginTop: 4 }}>
                  월 {Math.round(monthlySaved).toLocaleString()}만원 절감
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 산출 기준 */}
        <div style={{ fontSize: 10.5, color: '#9CA3AF', fontWeight: 500, lineHeight: 1.5, marginTop: 10, padding: '0 4px' }}>
          ※ 매매가 {PROPERTY.priceLabel}만원 · LTV 70% · 이 상담사 최근 6개월 평균 체결 금리 적용 · 신용·소득에 따라 달라질 수 있어요.
        </div>
      </div>

      {/* 적합도 한 줄 */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          padding: '12px 14px',
          background: '#FAFAFA',
          borderRadius: 12,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <MatchDots score={c.matchScore} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: '#1F2937', marginBottom: 1 }}>{matchLabel(c.matchScore)}</div>
            <div style={{ fontSize: 11, color: '#6B7280', fontWeight: 500 }}>{c.matchReason}</div>
          </div>
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
          <SectionLabel inline>후기</SectionLabel>
          <span style={{ fontSize: 12, color: '#3182F6', fontWeight: 700 }}>전체 {c.reviewCount}개 →</span>
        </div>
        <ReviewCard review={reviews[0]} />
      </div>

      <BottomCTA primary="이 견적으로 상담 시작" secondary="문자로 묻기" />
    </div>
  );
}

Object.assign(window, { DetailC });
