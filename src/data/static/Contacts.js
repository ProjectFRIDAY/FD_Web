import mailIcon from '../../../public/assets/images/icons/gmail.png';
import kakaoIcon from '../../../public/assets/images/icons/kakao.png';
import instagramIcon from '../../../public/assets/images/icons/instagram.png';

const contracts = [
  {
    title: '메일',
    icon: mailIcon,
    href: 'mailto:fridayproj2@gmail.com',
    linkName: 'fridayproj2@gmail.com',
    color: '#01baae',
  },
  {
    title: '카카오톡',
    icon: kakaoIcon,
    href: 'https://open.kakao.com/o/sytyCGxe',
    linkName: '@fridayproj',
    color: '#f9e000',
  },
  {
    title: '인스타그램',
    icon: instagramIcon,
    href: 'https://www.instagram.com/fridayproj_/',
    linkName: '@fridayproj_',
    color:
      'radial-gradient(circle farthest-corner at 32% 106%,#ffe17d 0%,#ffcd69 10%,#fa9137 28%,#eb4141 42%,transparent 82%) , linear-gradient(135deg,#234bd7 12%,#c33cbe 58%)',
  },
];

export default contracts;