// 샘플 데이터 — 매물 + 모집인 + 매물 적합도(핵심)
// "이 매물을 처리할 수 있는 사람이 누구인가"가 본질
(function () {
  const BANKS = {
    shinhan:  { name: '신한',     short: '신한',   color: '#0046FF' },
    kb:       { name: 'KB국민',   short: 'KB',     color: '#FFBC00' },
    woori:    { name: '우리',     short: '우리',   color: '#0067AC' },
    hana:     { name: '하나',     short: '하나',   color: '#008C95' },
    nh:       { name: 'NH농협',   short: 'NH',     color: '#00A651' },
    kakao:    { name: '카카오뱅크', short: '카뱅',  color: '#FFE812' },
    toss:     { name: '토스뱅크', short: '토스',   color: '#0064FF' },
  };

  const SPECS = {
    apt: '주택담보',
    jeonse: '아파트전세',
    swap: '갈아타기',
    biz: '사업자대출',
    credit: '신용대출',
    youth: '청년·신혼',
  };

  // ─── 매물 (anchor) ────────────────────────────────
  // 모든 화면이 이 매물을 중심으로 회전한다
  const PROPERTY = {
    address: '서울 강남구 테헤란로 152',
    complexName: '미캘란쉐르빌',
    dong: '역삼동',
    unit: '101동 1502호',
    type: '아파트',
    size: '전용 84㎡ / 4룸',
    price: 155000,           // 만원 = 15.5억
    priceLabel: '15억 5,000',
    ltvLimit: 108500,        // 70% LTV
    ltvLimitLabel: '10억 8,500',
    recommendedBank: 'shinhan',  // 대출비교 1순위
  };

  // ─── 모집인 ─────────────────────────────────────
  // 매물(미캘란쉐르빌, 15.5억) 기준 매칭 정보가 핵심.
  // - complexHandled: 최근 6개월 이 단지 처리 건수
  // - priceRangeHandled: 13~17억대 처리 건수
  // - bankMatch: 1순위 은행과 일치 여부
  // - matchScore: 적합도 종합 점수 (0~100)
  const CONSULTANTS = [
    {
      id: 'kim-seoyoon',
      surname: '김', name: '김서윤',
      bank: 'shinhan',
      org: '신한부동산금융 강남센터',
      regNo: '2024-서울-04812',
      avatarTone: '#FDE2D7',
      rating: 4.9, reviewCount: 127,
      career: 12,
      consultCount: 2340,
      avgRate: 3.42,
      respondMins: 4,
      specs: ['apt', 'swap', 'jeonse'],
      bio: '주담대 12년, 갈아타기 전문. 매물 계약 일정에 맞춰 빠르게 진행합니다. 무리한 권유 없이 조건만 정확히 안내해요.',
      online: true,
      replyToday: true,
      // 매물 적합도
      complexHandled: 7,
      priceRangeHandled: 24,
      bankMatch: true,
      matchScore: 96,
      matchReason: '이 단지 7건 처리 · 신한 1순위 매칭',
    },
    {
      id: 'choi-yeonsu',
      surname: '최', name: '최연수',
      bank: 'hana',
      org: '하나금융 강남파이낸스센터',
      regNo: '2022-서울-02945',
      avatarTone: '#FFF1C7',
      rating: 4.9, reviewCount: 312,
      career: 15,
      consultCount: 3580,
      avgRate: 3.38,
      respondMins: 3,
      specs: ['apt', 'swap', 'biz'],
      bio: '15년 경력. 갈아타기·중도상환 시뮬레이션 강점. 첫 통화 5분 안에 가능 한도 안내해요.',
      online: true,
      replyToday: true,
      complexHandled: 4,
      priceRangeHandled: 31,
      bankMatch: false,
      matchScore: 89,
      matchReason: '15억대 31건 · 갈아타기 시뮬 강점',
    },
    {
      id: 'park-junhyuk',
      surname: '박', name: '박준혁',
      bank: 'kb',
      org: 'KB부동산신탁 강남지점',
      regNo: '2024-서울-01234',
      avatarTone: '#DCE9FE',
      rating: 4.8, reviewCount: 214,
      career: 9,
      consultCount: 1820,
      avgRate: 3.51,
      respondMins: 7,
      specs: ['apt', 'biz'],
      bio: 'KB 전속 9년. 사업자대출·주담대 동시 검토 가능. 서류는 카톡으로 받습니다.',
      online: true,
      replyToday: true,
      complexHandled: 2,
      priceRangeHandled: 18,
      bankMatch: false,
      matchScore: 78,
      matchReason: '15억대 18건 · 사업자 동시 검토',
    },
    {
      id: 'jung-haeun',
      surname: '정', name: '정하은',
      bank: 'shinhan',
      org: '신한은행 삼성동지점 전속',
      regNo: '2024-서울-05210',
      avatarTone: '#FDE2D7',
      rating: 4.6, reviewCount: 56,
      career: 5,
      consultCount: 612,
      avgRate: 3.61,
      respondMins: 18,
      specs: ['apt', 'youth'],
      bio: '신한 전속. 첫 주담대·청년대출 친절히 안내합니다.',
      online: false,
      replyToday: false,
      complexHandled: 1,
      priceRangeHandled: 6,
      bankMatch: true,
      matchScore: 71,
      matchReason: '신한 1순위 매칭 · 경력 5년',
    },
    {
      id: 'han-doyoung',
      surname: '한', name: '한도영',
      bank: 'nh',
      org: 'NH농협 강남업무센터',
      regNo: '2021-서울-00318',
      avatarTone: '#E7F0DE',
      rating: 4.8, reviewCount: 178,
      career: 11,
      consultCount: 2014,
      avgRate: 3.49,
      respondMins: 9,
      specs: ['apt', 'jeonse'],
      bio: '실수요 주담대·전세 전문. 무리한 권유 X.',
      online: true,
      replyToday: true,
      complexHandled: 0,
      priceRangeHandled: 14,
      bankMatch: false,
      matchScore: 64,
      matchReason: '15억대 14건 · 실수요 전문',
    },
    {
      id: 'lee-jungmin',
      surname: '이', name: '이정민',
      bank: 'woori',
      org: '우리금융지주 역삼사무소',
      regNo: '2023-서울-08172',
      avatarTone: '#E7F0DE',
      rating: 4.7, reviewCount: 89,
      career: 7,
      consultCount: 1102,
      avgRate: 3.58,
      respondMins: 12,
      specs: ['jeonse', 'youth'],
      bio: '전세·청년 대출 전문. 평일 야간 상담 가능합니다.',
      online: false,
      replyToday: true,
      complexHandled: 0,
      priceRangeHandled: 3,
      bankMatch: false,
      matchScore: 42,
      matchReason: '전세 전문 — 매매와는 거리 있음',
    },
  ];

  // 후기
  const REVIEWS = {
    'kim-seoyoon': [
      { rating: 5, date: '2026.05.04', body: '계약 3일 전에 갑자기 갈아타기 결심했는데 일정 다 맞춰주셨어요. 무리한 권유 없어서 좋았습니다.', tag: '갈아타기' },
      { rating: 5, date: '2026.04.18', body: '여러 은행 비교 견적도 같이 봐주시고 결국 신한 조건이 제일 나았어요. 0.18%p 더 낮춤.', tag: '주담대 신규' },
    ],
    'choi-yeonsu': [
      { rating: 5, date: '2026.05.13', body: '첫 통화 5분 만에 한도랑 금리 알려주신다고 했는데 진짜 그렇게 됐어요. 베테랑 느낌.', tag: '갈아타기' },
      { rating: 5, date: '2026.05.02', body: '중도상환수수료 계산해서 갈아타기 손익까지 같이 봐줘요. 다른 분들과 깊이가 다름.', tag: '갈아타기' },
    ],
    'park-junhyuk': [
      { rating: 5, date: '2026.05.11', body: '사업자대출 + 주담대 동시에 봐주실 분 찾기 어려운데 도움 많이 됐어요.', tag: '사업자 · 주담대' },
    ],
  };

  // 진입 컨텍스트
  const ENTRY_CONTEXTS = {
    none: null,
    loancompare: {
      from: 'loancompare',
      label: '대출비교',
      detail: '견적 1순위 신한',
      bankFilter: 'shinhan',
    },
    realestate: {
      from: 'realestate',
      label: '부동산',
      detail: '미캘란쉐르빌',
      bankFilter: null,
    },
  };

  Object.assign(window, {
    BANKS, SPECS, PROPERTY, CONSULTANTS, REVIEWS, ENTRY_CONTEXTS,
  });
})();
