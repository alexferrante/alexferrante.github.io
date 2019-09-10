import style from './style';

const s = Object.create(style);

s.root = {
  maxWidth: 'calc(100vw - 40px)',
  height: '10000px',
  left: '60vw',
  position: 'relative',
  WebkitTransform: 'translate(-50%, 0)',
  MozTransform: 'translate(-50%, 0)',
  msTransform: 'translate(-50%, 0)',
  OTransform: 'translate(-50%, 0)',
  transform: 'translate(-50%, 0)',
  WebkitTextSizeAdjust: 'none',
  MozTextSizeAdjust: 'none',
  msTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
}

s.main = {
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontWeight: '300',
  fontSize: '16px',
  marginLeft: '5%',
  letterSpacing: '0.025em',
  width: '85%',
  height: '100%',
  float: 'right',
  position: 'relative'
};

s.menu = {
  position: 'fixed',
  right: '400',
  height: '60%',
  maxHeight: '60vw',
  margin: '18vw 0vw 12vw 0vw',
  backgroundColor: '#000',
  float: 'left',
  borderTopRightRadius: '10px',
  borderBottomRightRadius: '10px'
};

s.fullMenu = {
  position: 'fixed',
  right: '400',
  height: '60%',
  maxHeight: '60vw',
  backgroundColor: '#000',
  margin: '18vw 0vw 12vw 0vw',
  float: 'left',
  borderTopRightRadius: '10px',
  borderBottomRightRadius: '10px'
};

s.social = {
  position: 'fixed',
  height: '9%',
  maxHeight: '9vw',
  backgroundColor: '#fff',
  borderTopLeftRadius: '3px',
  borderBottomLeftRadius: '3px',
  margin: '10vw 0vw 12vw 0vw',
};

s.title = {
  fontFamily: 'Heebo, helvetica, sans-serif',
  fontWeight: '400',
  fontSize: '50px',
  marginBottom: '0.5vh',
};

s.breadcrumbs = {
  margin: '3vh 0',
};

export default s;