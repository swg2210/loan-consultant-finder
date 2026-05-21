// ─────────────────────────────────────────────────
//  config.js — 매물 상세 페이지 런타임 설정
//
//  ⚠️ NCP_KEY_ID 는 NAVER Cloud Maps Web Dynamic Map 의
//      "Client ID" 입니다. 이 값은 클라이언트(브라우저)에
//      노출되도록 설계된 키이며, 보안은 NCP 콘솔의
//      "Web 서비스 URL(Referer 화이트리스트)" 등록으로
//      이뤄집니다. 따라서 이 파일을 레포에 커밋해도
//      NCP 정책상 안전합니다.
//
//  ※ Client SECRET 은 절대 이 파일에 넣지 말 것.
// ─────────────────────────────────────────────────
window.APP_CONFIG = {
  ncpKeyId: '4kt9b4tmkd',
  property: {
    lat: 37.3595704,
    lng: 127.105399,
    address: '경기도 성남시 분당구 내정로 55',
  },
};
