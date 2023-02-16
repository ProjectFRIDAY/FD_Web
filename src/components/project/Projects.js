import Icons from '../Icons';

const Projects = {
  플랜다이얼: {
    img: Icons[1].src,
    title: '플랜 다이얼',
    desc: "<b>규칙적인 생활을 할 수 있도록 도와주는 알림 서비스</b>입니다.\n규칙적인 일들을 '다이얼'이라는 이름으로 저장, 관리하여 알려줍니다.\n또한, Plan Dial은 <자취생>, <수험생> 등의 템플릿 기능이 있어 일일이 다이얼을 입력할 필요가 없으며, 규칙적인 생활 습관의 가이드라인을 제공합니다.",
    git: 'https://github.com/ProjectFRIDAY/Plan-Dial-Renewal',
    team: 'FE - 2명, BE - 2명',
    tag: '#개발완료, #Mobile, #Flutter',
    site: 'https://projectfriday.github.io/Plan-Dial-Website/',
    aos: 'https://play.google.com/store/apps/details?id=com.friday.plan_dial_renewal',
    ios: 'https://apps.apple.com/kr/app/plan-dial/id1624636806',
  },
  웹사이트: {
    img: Icons[2].src,
    title: 'FD 홈페이지',
    desc: '<b>현재 방문하신 FRIDAY 공식 웹사이트</b>를 제작했던 프로젝트입니다.\nFRIDAY의 공식 웹사이트이자, FRIDAY의 방향성, 목표를 보여주는 페이지입니다.\n지금까지 FRIDAY에서 진행했던 프로젝트와, 진행하고 있는 프로젝트를 확인하실 수 있습니다.',
    git: 'https://github.com/ProjectFRIDAY/FD_Web',
    site: 'https://fridayproject.co.kr/',
    team: 'FE - 4명, BE - 1명, Design - 1명',
    tag: '#개발완료, #Web, #React',
  },
  comento: {
    img: Icons[0].src,
    title: '코멘토',
    desc: '코딩을 입문하는 사람이나 코딩 도중에 어려움을 겪는 사람들을 위한 서비스로, 1대 1 질문 답변 채팅 서비스입니다. 코멘토라는 서비스명의 의미는 Comento === Coding + Mento 입니다. 질문자는 언어별로 질문을 작성할 수 있고, 답변자는 질문 목록 중 답변하고자 하는 질문을 선택할 수 있습니다. 질문과 답변은 채팅 형태로 이루어지고, 채팅방 내에서 코드 컴파일러 기능을 제공합니다.',
    team: 'FE - 3명, BE - 2명, Design - 1명',
    tag: '#개발중, #Web, #React, #Node.js',
  },
  엄마타이머: {
    img: Icons[3].src,
    title: '엄마 타이머',
    desc: '<b>미리 설정된 공부 시간 목표를 달성하지 못하면 어마어마한 벌칙을 주는 안드로이드 애플리케이션</b>입니다.\n목표를 달성하지 못하면 미리 설정해 놓은 연락처로 공부 시간을 채우지 못했다는 문자를 보내는 것이 주요 기능입니다.\n이 외에도 어제보다 1% 더 공부하기, 공부를 멈추면 명언 보여주기, 공부를 멈추는 버튼이 도망가기 등 다양한 기능이 있습니다.',
    team: 'FE - 2명, BE - 2명',
    tag: '#개발완료, #Mobile, #Android',
    aos: 'https://play.google.com/store/apps/details?id=com.friday.timer',
  },
  약속이: {
    img: Icons[4].src,
    title: '약속이',
    desc: '항상 약속 시간을 정할 때마다 서로가 가능한 시간을 찾기 위해 고생했던 적이 많았습니다.\n따라서 각자가 불가능한 시간대를 입력하면 <b>자동으로 모두가 가능한 약속 시간을 정해주는 서비스</b>를 고안했습니다.\nDjango와 sqlite, HTML, CSS, JS를 이용하여 간단한 웹사이트 형태로 제작하였습니다.',
    git: 'https://github.com/Mango-Juice/Django-Toy',
    team: 'FE - 1명, BE - 1명',
    tag: '#토이프로젝트, #Web, #Django',
  },
  텍스티: {
    img: Icons[5].src,
    title: '텍스티',
    desc: "대학교 교양 수업에서 학습한 '좋은 글의 조건'을 바탕으로 <b>글 첨삭 서비스</b>를 제작하였습니다.\nDjango와 HTML, CSS, JS를 이용하여 웹사이트 형태로 제작하였습니다.",
    git: 'https://github.com/ProjectFRIDAY/Texti',
    team: 'FE - 1명, BE - 1명',
    tag: '#해커톤, #Web, #Django',
  },
  배달N: {
    img: Icons[8].src,
    title: '배달N',
    desc: '배달N은 <b>배달비 공유를 위한 커뮤니티 서비스</b>입니다.\n배달비를 N빵하여 저렴하게 배달 서비스를 받을 수 있도록 도와주는 모바일 애플리케이션입니다.',
    git: 'https://github.com/ProjectFRIDAY/DeliveryN-Front',
    team: 'PM - 1명, FE - 1명, BE - 1명',
    tag: '#개발중, #Mobile, #React-Native, #Spring',
  },
  OOTD: {
    img: Icons[6].src,
    title: 'OOTD',
    desc: "OOTD는 <b>오늘의 착장을 저장하고 공유하는 서비스</b>입니다.\n내 착장을 간단히 올리기만 하면 '옷장' 기능을 통해 체계적으로 저장해주며, 다른 사람들의 착장을 보고 옷차림에 대한 아이디어를 얻을 수 있습니다.",
    git: 'https://github.com/ProjectFRIDAY/OOTD',
    team: 'PM - 2명, FE - 3명, BE - 2명, Design - 1명',
    tag: '#개발중, #Mobile, #React-Native, #Spring-boot',
  },
  레모아: {
    img: Icons[7].src,
    title: '레모아',
    desc: "레모아는 '레퍼런스' + '모아'의 합성어로 <b>대회나 공모전 출품작을 공유하는 서비스</b>입니다.\n서로의 작품을 공유하며 대회/공모전 참여시 참고할 자료가 부족한 문제를 해결해나가는 웹 서비스입니다.",
    git: 'https://github.com/ProjectFRIDAY/Remoa',
    team: 'PM - 2명, FE - 4명, BE - 4명',
    tag: '#개발중, #Web, #React, #Spring',
  },
};

export default Projects;
