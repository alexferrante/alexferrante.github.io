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

s.title = {
  fontFamily: 'Heebo, helvetica, sans-serif',
  fontWeight: '400',
  fontSize: '50px',
  marginBottom: '0.5vh',
};

s.breadcrumbs = {
  margin: '3vh 0',
};

s.menu = {
  position: 'absolute',
  right: '400',
  height: '60%',
  maxHeight: '60vw',
  backgroundColor: '#000',
  width: '10%',
  minWidth: '12vw',
  margin: '18vw 0vw 12vw 0vw',
  float: 'left'
}

s.fullMenu = {
  position: 'absolute',
  right: '400',
  height: '60%',
  maxHeight: '60vw',
  backgroundColor: '#fff',
  width: '50%',
  minWidth: '12vw',
  margin: '18vw 0vw 12vw 0vw',
  float: 'left'
}

export default s;