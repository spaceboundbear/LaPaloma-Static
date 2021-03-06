import SenderoLogo from '../assets/logo/Logo-SenderoCrossing.png';
import LocSendero from '../assets/maps/loc-sendero.jpg';
import PlatSendero from '../assets/plat/sendero.jpg';
import recordedPlat from '../assets/recordedPlats/sendero-recorded-plat.jpg';
import restriction from '../assets/restrictions/sendero-restrictions.pdf';

const SenderoData = [
  {
    id: 1,
    logo: SenderoLogo,
    map: LocSendero,
    plat: PlatSendero,
    lotHeader: 'HURRY, ONLY A FEW LOTS LEFT!',
    info: 'The newly developed Sendero Crossing subdivision combines the beauty of the Texas countryside with the ease of accessibility. Don’t miss the opportunity to buy your future homesite before prices increase.',
    infoTwo:
      'If you’re ready to trade the hustle & bustle of city life for wide open Texas skies, the stars at night are big and bright in Sendero Crossing!',
    tracts: '10-16 ACRE TRACTS AVAILABLE',
    buildTime: 'No Deadline on Build Time!',
    link: 'https://goo.gl/maps/cdYZ3NjiPmSVbnjo7',
    recorded: recordedPlat,
    restrictions: restriction,
  },
];

export default SenderoData;
