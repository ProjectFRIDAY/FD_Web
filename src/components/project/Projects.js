import Icons from '../Icons';

const Projects = {
  플랜다이얼: {
    img: Icons[1].src,
    title: '플랜다이얼',
    desc: ' 규칙적인 생활을 도와주는 어플리케이션입니다. Plan Dial은 규칙적인 일들을 다이얼이라는 이름으로 저장하여 관리합니다. 다이얼은 해당 일을 해야 하는 시간에 알림을 주며, 1시간 전에는 앱 상단 및 위젯에 표시됩니다. 또한, Plan Dial은 <자취생>, <수험생> 등의 강력한 템플릿 기능이 있어 일일이 다이얼을 입력할 필요가 없으며, 규칙적인 생활 습관의 가이드라인을 제공합니다.',
    git: 'https://github.com/ProjectFRIDAY/Plan-Dial-Renewal',
    team: 'FE - 2명, BE - 2명',
    tag: '#개발완료, #APP',
    site: 'https://projectfriday.github.io/Plan-Dial-Website/',
    aos: 'https://play.google.com/store/apps/details?id=com.friday.plan_dial_renewal',
    ios: 'https://apps.apple.com/kr/app/plan-dial/id1624636806',
  },
  웹사이트: {
    img: Icons[2].src,
    title: 'FRIDAY 공식 웹사이트',
    desc: '현재 방문하신 FRIDAY 공식 웹사이트를 제작했던 프로젝트입니다. FRIDAY의 공식 홈페이지이자, FRIDAY의 방향성, 목표를 보여주는 페이지이고, 지금까지 FRIDAY에서 진행했던 프로젝트와, 진행하고 있는 프로젝트를 확인하실 수 있습니다.',
    git: 'https://github.com/ProjectFRIDAY/FD_Web',
    team: 'FE - 2명, BE - 2명, Design - 1명',
    tag: '#개발완료, #WEB',
  },
  comento: {
    img: Icons[0].src,
    title: '코멘토',
    desc: '코딩을 입문하는 사람이나 코딩 도중에 어려움을 겪는 사람들을 위한 서비스로, 1대 1 질문 답변 채팅 서비스입니다. 코멘토라는 서비스명의 의미는 Comento === Coding + Mento 입니다. 질문자는 언어별로 질문을 작성할 수 있고, 답변자는 질문 목록 중 답변하고자 하는 질문을 선택할 수 있습니다. 질문과 답변은 채팅 형태로 이루어지고, 채팅방 내에서 코드 컴파일러 기능을 제공합니다.',
    git: 'https://github.com/ProjectFRIDAY/Comento',
    team: 'FE - 4명, BE - 3명, Design - 1명',
    tag: '#개발중, #WEB',
  },
  엄마타이머: {
    img: Icons[3].src,
    title: '엄마타이머',
    desc: '미리 설정된 공부 시간 목표를 달성하지 못하면 어마어마한 벌칙을 주는 안드로이드 애플리케이션, 엄마 타이머 개발에 참여하였습니다. 목표를 달성하지 못하면 미리 설정해 놓은 연락처로 공부 시간을 채우지 못했다는 문자를 보내는 것이 주요 기능입니다. 이 외에도 어제보다 1% 더 공부하기, 공부를 멈추면 명언 보여주기, 공부를 멈추는 버튼이 도망가기 등 다양한 기능이 있습니다.',
    team: 'FE - 2명, BE - 2명',
    tag: '#개발완료, #APP',
    aos: 'https://play.google.com/store/apps/details?id=com.friday.timer',
  },
  약속이: {
    img: Icons[4].src,
    title: '약속이',
    desc: ' 항상 약속 시간을 정할 때마다 서로가 가능한 시간을 찾기 위해 고생했던 적이 많았습니다. 따라서 각자가 불가능한 시간대를 입력하면 자동으로 모두가 가능한 약속 시간을 정해주는 서비스를 고안했습니다. Django와 sqlite, HTML, CSS, JS를 이용하여 간단한 웹사이트 형태로 제작하였습니다.',
    git: 'https://github.com/Mango-Juice/Django-Toy',
    team: 'FE - 1명, BE - 1명',
    tag: '#토이프로젝트, #WEB',
  },
  텍스티: {
    img: Icons[5].src,
    title: '텍스티',
    desc: "대학교 교양 수업에서 학습한 '좋은 글의 조건'을 바탕으로 글 첨삭 서비스를 제작하였습니다. Django와 HTML, CSS, JS를 이용하여 웹사이트 형태로 제작하였습니다.",
    git: 'https://github.com/ProjectFRIDAY/Texti',
    team: 'FE - 1명, BE - 1명',
    tag: '#토이프로젝트, #WEB',
  },
};

export default Projects;
