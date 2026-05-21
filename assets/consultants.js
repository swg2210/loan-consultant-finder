// ─────────────────────────────────────────────────
//  consultants.js — 상담사 더미 데이터 (20명) + 후기
//  index.html, consultants.html, index-pc.html 에서 공유
//  이미지: assets/consultants/{id}.png (없으면 surname fallback)
// ─────────────────────────────────────────────────

// 대출 중개 건수 — 누적 상담의 35~55% 사이 결정적 값
window.brokerCountOf = function (c) {
  const seed = (c.id || '').split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const ratio = 0.35 + (seed % 21) / 100;
  return Math.round(c.consultCount * ratio);
};

window.CONSULTANTS_DATA = [
  // ── 기존 6명 (이미지 있음) ──
  { id:'kim-seoyoon', surname:'김', name:'김서윤', bank:'shinhan',
    org:'신한은행 대출모집법인', regNo:'2024-서울-04812', avatarTone:'#FDE2D7',
    rating:4.9, reviewCount:127, career:12, consultCount:2340, avgRate:3.42,
    respondMins:4, specs:['apt','swap','jeonse'],
    bio:'주담대 12년 경력, 갈아타기와 한도 협의가 강점입니다. 매물 계약 일정에 맞춰 빠르게 진행하고, 무리한 권유 없이 조건만 정확히 안내해드려요. 서류는 카톡으로 받아 비대면으로 처리 가능합니다.' },
  { id:'choi-yeonsu', surname:'최', name:'최연수', bank:'hana',
    org:'하나은행 대출모집법인', regNo:'2022-서울-02945', avatarTone:'#FFF1C7',
    rating:4.9, reviewCount:312, career:15, consultCount:3580, avgRate:3.38,
    respondMins:3, specs:['apt','swap','biz'],
    bio:'15년 경력의 베테랑 상담사로, 갈아타기·중도상환 시뮬레이션이 강점입니다. 첫 통화 5분 안에 가능 한도를 안내해드리고, 손익 계산까지 표로 정리해 보내드려요. 사업자담보대출 동시 검토도 가능합니다.' },
  { id:'park-junhyuk', surname:'박', name:'박준혁', bank:'kb',
    org:'KB국민은행 대출모집법인', regNo:'2024-서울-01234', avatarTone:'#CCEFD7',
    rating:4.8, reviewCount:214, career:9, consultCount:1820, avgRate:3.51,
    respondMins:7, specs:['apt','biz'],
    bio:'KB 전속 9년차로, 사업자담보대출과 주담대 동시 검토가 가능합니다. 자영업자·법인 고객 비중이 높아 복잡한 케이스도 익숙해요. 서류는 카톡으로 받고, 진행 상황은 단계별로 공유드립니다.' },
  { id:'jung-haeun', surname:'정', name:'정하은', bank:'shinhan',
    org:'신한은행 대출모집법인', regNo:'2024-서울-05210', avatarTone:'#FDE2D7',
    rating:4.6, reviewCount:56, career:5, consultCount:612, avgRate:3.61,
    respondMins:18, specs:['apt','youth'],
    bio:'신한 전속 5년차로, 첫 주담대와 청년 대출 안내가 주특기입니다. 처음 대출 받으시는 분들 눈높이에 맞춰 차근차근 설명해드려요. 서류 체크리스트를 미리 보내드려 준비 시간을 줄여드립니다.' },
  { id:'han-doyoung', surname:'한', name:'한도영', bank:'nh',
    org:'NH농협 대출모집법인', regNo:'2021-서울-00318', avatarTone:'#E7F0DE',
    rating:4.8, reviewCount:178, career:11, consultCount:2014, avgRate:3.49,
    respondMins:9, specs:['apt','jeonse'],
    bio:'실수요 주담대와 전세대출 11년 전문입니다. 무리한 영업 없이 고객 상황에 맞는 상품만 안내드리는 것이 원칙이에요. 한도가 빠듯한 케이스도 여러 은행 교차 검토로 가능성을 찾아드립니다.' },
  { id:'lee-jungmin', surname:'이', name:'이정민', bank:'woori',
    org:'우리은행 대출모집법인', regNo:'2023-서울-08172', avatarTone:'#E7F0DE',
    rating:4.7, reviewCount:89, career:7, consultCount:1102, avgRate:3.58,
    respondMins:12, specs:['jeonse','youth'],
    bio:'전세·청년 대출 7년 경력으로, 평일 야간 상담도 가능합니다. 청년 버팀목·중기청 등 정책 상품 안내에 강점이 있어요. 임대차 계약서 검토부터 실행까지 한 번에 진행해드립니다.' },

  // ── 신규 14명 (이미지 추후 추가 — assets/consultants/{id}.png) ──
  { id:'song-mina', surname:'송', name:'송미나', bank:'hana',
    org:'하나은행 대출모집법인', regNo:'2023-서울-06721', avatarTone:'#FFF1C7',
    rating:4.9, reviewCount:241, career:14, consultCount:2780, avgRate:3.41,
    respondMins:5, specs:['apt','swap','biz'],
    bio:'WM센터 14년 경력으로, 고액 주담대와 사업자담보대출 동시 설계가 가능합니다. 정확한 한도 산출과 금리 협의가 강점이에요. 복합 자산 보유 고객의 종합 컨설팅도 진행해드립니다.' },
  { id:'kang-jihoon', surname:'강', name:'강지훈', bank:'kakao',
    org:'카카오뱅크 대출모집법인', regNo:'2025-서울-09031', avatarTone:'#FFF5C2',
    rating:4.7, reviewCount:198, career:6, consultCount:1450, avgRate:3.65,
    respondMins:6, specs:['apt','swap','credit'],
    bio:'비대면 상담 100%로, 카톡 한 번이면 한도 안내가 가능합니다. 갈아타기 시뮬레이션도 빠르게 표로 정리해드려요. 직장인·프리랜서 신용 점수 활용 케이스에 익숙합니다.' },
  { id:'yoon-seoa', surname:'윤', name:'윤서아', bank:'shinhan',
    org:'신한은행 대출모집법인', regNo:'2022-서울-03402', avatarTone:'#FDE2D7',
    rating:4.8, reviewCount:165, career:10, consultCount:1920, avgRate:3.47,
    respondMins:8, specs:['apt','jeonse','swap'],
    bio:'PB센터 10년 경력으로, 고가 아파트 주담대와 전세를 동시 검토합니다. 한도 협의에 강점이 있어 까다로운 매물도 풀어드려요. 갈아타기 시 기존 대출 정리 전략까지 함께 설계해드립니다.' },
  { id:'oh-taejin', surname:'오', name:'오태진', bank:'kb',
    org:'KB국민은행 대출모집법인', regNo:'2020-서울-00715', avatarTone:'#CCEFD7',
    rating:4.7, reviewCount:142, career:13, consultCount:2210, avgRate:3.53,
    respondMins:11, specs:['apt','jeonse'],
    bio:'KB 13년차 베테랑으로, 실수요 위주의 안내가 원칙입니다. 무리한 영업 없이 고객의 자금 계획에 맞춰 권유드려요. 전세에서 매매로 전환하는 케이스 컨설팅도 자주 진행합니다.' },
  { id:'kim-hyunwoo', surname:'김', name:'김현우', bank:'woori',
    org:'우리은행 대출모집법인', regNo:'2023-서울-07815', avatarTone:'#E7F0DE',
    rating:4.6, reviewCount:103, career:8, consultCount:1340, avgRate:3.59,
    respondMins:15, specs:['biz','credit'],
    bio:'사업자담보대출과 신용대출 전문 8년차입니다. 개인사업자·법인 동시 진행이 가능하고, 매출 자료 정리부터 함께 도와드려요. 자영업자 고객 비중이 높아 업종별 특수 케이스에도 익숙합니다.' },
  { id:'lee-soeun', surname:'이', name:'이소은', bank:'nh',
    org:'NH농협 대출모집법인', regNo:'2024-서울-04102', avatarTone:'#E7F0DE',
    rating:4.7, reviewCount:88, career:6, consultCount:920, avgRate:3.62,
    respondMins:10, specs:['apt','youth'],
    bio:'청년·생애최초 디딤돌 대출 안내가 주특기입니다. 서류 체크리스트를 미리 보내드려 준비 시간을 줄여드려요. 첫 대출이 어려운 분들도 단계별로 안내해 끝까지 함께합니다.' },
  { id:'park-eunji', surname:'박', name:'박은지', bank:'kakao',
    org:'카카오뱅크 대출모집법인', regNo:'2025-서울-09822', avatarTone:'#FFF5C2',
    rating:4.8, reviewCount:215, career:7, consultCount:1680, avgRate:3.55,
    respondMins:4, specs:['apt','swap'],
    bio:'비대면 갈아타기 전문 7년차로, 평균 응답이 4분입니다. 야간 카톡도 가능해 직장인 고객 비중이 높아요. 중도상환 손익을 정확히 계산해 갈아타기 타이밍까지 컨설팅해드립니다.' },
  { id:'choi-donghyun', surname:'최', name:'최동현', bank:'shinhan',
    org:'신한은행 대출모집법인', regNo:'2021-서울-01998', avatarTone:'#FDE2D7',
    rating:4.6, reviewCount:74, career:9, consultCount:1180, avgRate:3.57,
    respondMins:13, specs:['apt','biz'],
    bio:'주담대와 사업자담보대출 9년차로, 약속 시간을 정확히 지키는 것으로 정평이 나 있습니다. 진행 단계마다 카톡으로 공유드려 답답함이 없어요. 신용도가 다소 부족한 케이스도 대안 상품으로 풀어드립니다.' },
  { id:'jang-yuri', surname:'장', name:'장유리', bank:'hana',
    org:'하나은행 대출모집법인', regNo:'2022-서울-04508', avatarTone:'#FFF1C7',
    rating:4.5, reviewCount:62, career:5, consultCount:740, avgRate:3.64,
    respondMins:16, specs:['jeonse','youth'],
    bio:'전세·청년 대출 5년차로, 첫 대출이신 분도 차근차근 안내해드립니다. 임대차 계약 단계부터 함께 검토해 실수를 줄여드려요. 청년 정책 상품에 강점이 있어 한도를 최대치로 끌어올려드립니다.' },
  { id:'shin-jaehyung', surname:'신', name:'신재형', bank:'kb',
    org:'KB국민은행 대출모집법인', regNo:'2023-서울-06204', avatarTone:'#CCEFD7',
    rating:4.7, reviewCount:131, career:11, consultCount:1850, avgRate:3.50,
    respondMins:9, specs:['apt','swap','biz'],
    bio:'청담·압구정 매물 다수 경험한 11년차입니다. 갈아타기 손익 분석 자료를 표로 제공해드려요. 고가 매물 사업자담보대출 케이스도 익숙해 자산가 고객 비중이 높습니다.' },
  { id:'kim-doyeon', surname:'김', name:'김도연', bank:'woori',
    org:'우리은행 대출모집법인', regNo:'2024-서울-07330', avatarTone:'#E7F0DE',
    rating:4.5, reviewCount:48, career:4, consultCount:520, avgRate:3.68,
    respondMins:20, specs:['apt','youth','credit'],
    bio:'주담대·청년·신용 대출 안내 4년차입니다. 첫 상담은 무료 시뮬레이션으로 진행해드려요. 신혼부부·생애최초 대상 정책 상품 안내에 강점이 있습니다.' },
  { id:'lim-sungho', surname:'임', name:'임성호', bank:'nh',
    org:'NH농협 대출모집법인', regNo:'2021-서울-02901', avatarTone:'#E7F0DE',
    rating:4.6, reviewCount:96, career:10, consultCount:1410, avgRate:3.56,
    respondMins:14, specs:['apt','jeonse','biz'],
    bio:'농협 10년차로, 한도가 빡빡한 케이스도 한 번 더 검토해드립니다. 사업자담보대출·전세·주담대 폭넓은 영역을 다뤄요. 농지·상가 등 비주거 담보 케이스 경험도 풍부합니다.' },
  { id:'noh-haeun', surname:'노', name:'노하은', bank:'kakao',
    org:'카카오뱅크 대출모집법인', regNo:'2025-서울-10112', avatarTone:'#FFF5C2',
    rating:4.4, reviewCount:38, career:3, consultCount:380, avgRate:3.71,
    respondMins:8, specs:['credit','youth'],
    bio:'신용·청년 대출 전문 3년차로, 카톡 안내가 빠릅니다. 사회초년생 한도 산출에 강점이 있어요. 첫 신용대출이 어려우신 분께 단계별로 친절히 설명드립니다.' },
  { id:'baek-junseo', surname:'백', name:'백준서', bank:'shinhan',
    org:'신한은행 대출모집법인', regNo:'2023-서울-05601', avatarTone:'#FDE2D7',
    rating:4.7, reviewCount:117, career:8, consultCount:1290, avgRate:3.52,
    respondMins:7, specs:['apt','swap'],
    bio:'주담대와 갈아타기 8년차로, 깔끔한 서류 진행으로 정평이 나 있습니다. 모든 단계를 체크리스트로 관리해 누락이 없어요. 갈아타기 시 우대금리 항목을 빠짐없이 적용해 최저 금리를 끌어내드립니다.' },
];

// 모든 상담사에게 사업자담보대출(biz) 전문 분야 부여
window.CONSULTANTS_DATA.forEach(c => {
  if (!c.specs.includes('biz')) c.specs.push('biz');
});

// ─────────────────────────────────────────────────
//  후기 데이터 — 모든 상담사 최소 2개
// ─────────────────────────────────────────────────
window.CONSULTANT_REVIEWS = {
  'kim-seoyoon': [
    { rating:5, date:'2026.05.04', body:'계약 3일 전에 갑자기 갈아타기 결심했는데 일정 다 맞춰주셨어요. 무리한 권유 없어서 좋았습니다.', tag:'갈아타기' },
    { rating:5, date:'2026.04.18', body:'여러 은행 비교 견적도 같이 봐주시고 결국 신한 조건이 제일 나았어요. 0.18%p 더 낮춤.', tag:'주담대 신규' },
    { rating:4, date:'2026.03.27', body:'전세대출이었는데 임대차 계약서 미리 봐주셔서 안심됐어요. 응답도 빨라요.', tag:'전세' },
  ],
  'choi-yeonsu': [
    { rating:5, date:'2026.05.13', body:'첫 통화 5분 만에 한도랑 금리 알려주신다고 했는데 진짜 그렇게 됐어요. 베테랑 느낌.', tag:'갈아타기' },
    { rating:5, date:'2026.05.02', body:'중도상환수수료 계산해서 갈아타기 손익까지 같이 봐줘요. 다른 분들과 깊이가 다름.', tag:'갈아타기' },
    { rating:5, date:'2026.04.10', body:'사업자담보 + 주담대 같이 봐주셨어요. 두 상품 다 알아야 가능한 설계라 만족도가 높았습니다.', tag:'사업자' },
  ],
  'park-junhyuk': [
    { rating:5, date:'2026.05.11', body:'사업자담보대출 + 주담대 동시에 봐주실 분 찾기 어려운데 도움 많이 됐어요.', tag:'사업자 · 주담대' },
    { rating:4, date:'2026.04.22', body:'법인 명의 매입이었는데 진행 단계 카톡으로 계속 알려주셔서 답답함 없었어요.', tag:'법인' },
  ],
  'jung-haeun': [
    { rating:5, date:'2026.05.09', body:'생애최초였는데 처음부터 끝까지 친절히 알려주셨어요. 디딤돌까지 같이 비교해주심.', tag:'생애최초' },
    { rating:4, date:'2026.04.15', body:'서류 체크리스트 먼저 보내주셔서 준비 빨리 됐어요. 신혼부부 우대도 챙겨주셨습니다.', tag:'신혼' },
  ],
  'han-doyoung': [
    { rating:5, date:'2026.05.07', body:'한도가 빡빡했는데 여러 케이스 검토해서 결국 원하던 금액 맞춰주셨어요.', tag:'주담대' },
    { rating:5, date:'2026.04.03', body:'전세에서 매매로 전환하는 케이스였는데 일정도 자금도 정리해서 컨설팅 주셨어요.', tag:'전세→매매' },
  ],
  'lee-jungmin': [
    { rating:5, date:'2026.05.06', body:'야간 상담 가능해서 퇴근 후에 통화했어요. 청년 버팀목 한도 정확히 짚어주심.', tag:'청년' },
    { rating:4, date:'2026.04.19', body:'전세 만기 한 달 전이었는데 빠르게 진행해주셨어요. 임대인 협의 팁도 알려주심.', tag:'전세' },
  ],
  'song-mina': [
    { rating:5, date:'2026.05.12', body:'고액 주담대 + 사업자담보 같이 설계해주셨어요. WM 출신 답게 정확하셨습니다.', tag:'사업자 · 주담대' },
    { rating:5, date:'2026.04.28', body:'한도 협의가 진짜 강점이세요. 다른 곳보다 0.2%p 낮춰주셨음.', tag:'주담대' },
    { rating:4, date:'2026.03.30', body:'갈아타기였는데 손익 정리표가 깔끔해서 결정이 쉬웠어요.', tag:'갈아타기' },
  ],
  'kang-jihoon': [
    { rating:5, date:'2026.05.10', body:'카톡으로만 진행했는데 한도·금리 시뮬 표로 깔끔하게 정리해주셨어요.', tag:'비대면' },
    { rating:4, date:'2026.04.21', body:'프리랜서라 까다로웠는데 신용 점수 활용해서 한도 맞춰주심.', tag:'프리랜서' },
  ],
  'yoon-seoa': [
    { rating:5, date:'2026.05.08', body:'압구정 매물이라 한도 협의가 관건이었는데 잘 풀어주셨어요. PB 경력이 느껴짐.', tag:'주담대' },
    { rating:5, date:'2026.04.17', body:'전세에서 갈아타기까지 한 번에 정리해주셨어요. 기존 대출 정리 전략 좋았습니다.', tag:'갈아타기' },
  ],
  'oh-taejin': [
    { rating:5, date:'2026.05.05', body:'실수요였는데 무리한 권유 없이 자금 계획에 맞춰 안내해주셨어요.', tag:'주담대' },
    { rating:4, date:'2026.04.12', body:'전세에서 매매로 넘어갈 때 자금 흐름 정리해주셔서 도움 많이 됐어요.', tag:'전세→매매' },
  ],
  'kim-hyunwoo': [
    { rating:5, date:'2026.05.14', body:'개인사업자 + 법인 동시에 봐주셨어요. 매출 자료 정리도 같이 도와주심.', tag:'사업자' },
    { rating:4, date:'2026.04.24', body:'업종 특수성 잘 이해하셔서 다른 곳에서 안 됐던 케이스 풀어주셨어요.', tag:'사업자' },
  ],
  'lee-soeun': [
    { rating:5, date:'2026.05.03', body:'디딤돌 대출이었는데 서류 체크리스트 먼저 받아서 준비 빨리 끝났어요.', tag:'생애최초' },
    { rating:4, date:'2026.04.08', body:'청년 정책 상품 안내가 정확하셨어요. 한도도 최대치로 맞춰주심.', tag:'청년' },
  ],
  'park-eunji': [
    { rating:5, date:'2026.05.15', body:'평균 4분 응답 진짜네요. 카톡 보내자마자 답 옴.', tag:'갈아타기' },
    { rating:5, date:'2026.04.29', body:'중도상환 손익까지 계산해서 갈아타기 타이밍 잡아주셨어요.', tag:'갈아타기' },
  ],
  'choi-donghyun': [
    { rating:5, date:'2026.05.01', body:'약속 시간 칼같이 지키세요. 단계별 진행 상황도 카톡으로 공유.', tag:'주담대' },
    { rating:4, date:'2026.04.14', body:'사업자담보였는데 신용도 부족 케이스를 대안 상품으로 풀어주셨어요.', tag:'사업자' },
  ],
  'jang-yuri': [
    { rating:5, date:'2026.04.30', body:'첫 전세대출이었는데 임대차 계약 단계부터 검토해주셨어요. 안심됨.', tag:'전세' },
    { rating:4, date:'2026.04.05', body:'청년 정책 상품 한도 최대치로 끌어올려주셨어요. 친절도 좋음.', tag:'청년' },
  ],
  'shin-jaehyung': [
    { rating:5, date:'2026.05.16', body:'청담 매물이었는데 고가 사업자담보까지 같이 설계해주심. 자산가 케이스 익숙하세요.', tag:'사업자 · 주담대' },
    { rating:5, date:'2026.04.20', body:'갈아타기 손익 분석 표가 깔끔해서 의사결정 쉬웠어요.', tag:'갈아타기' },
  ],
  'kim-doyeon': [
    { rating:4, date:'2026.04.27', body:'무료 시뮬 먼저 받고 진행했어요. 신혼부부 우대 잘 챙겨주심.', tag:'신혼' },
    { rating:5, date:'2026.04.02', body:'생애최초 정책 상품 안내가 정확했어요. 첫 대출도 어렵지 않게 진행.', tag:'생애최초' },
  ],
  'lim-sungho': [
    { rating:5, date:'2026.05.13', body:'한도가 안 나올 줄 알았는데 한 번 더 검토해서 풀어주셨어요.', tag:'주담대' },
    { rating:4, date:'2026.04.16', body:'상가 담보 케이스였는데 비주거 경험 많으셔서 진행이 매끄러웠어요.', tag:'사업자' },
  ],
  'noh-haeun': [
    { rating:5, date:'2026.05.04', body:'첫 신용대출이었는데 단계별로 설명해주셔서 이해가 쉬웠어요.', tag:'신용' },
    { rating:4, date:'2026.04.11', body:'사회초년생 한도 산출 잘 해주셨어요. 카톡 응답도 빠름.', tag:'청년' },
  ],
  'baek-junseo': [
    { rating:5, date:'2026.05.17', body:'갈아타기 우대금리 항목을 빠짐없이 적용해주셔서 최저 금리 받았어요.', tag:'갈아타기' },
    { rating:4, date:'2026.04.23', body:'서류 진행이 정말 깔끔하세요. 체크리스트 관리가 좋음.', tag:'주담대' },
  ],
};
