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
  letterSpacing: '0.025em',
  width: '80%',
  alignItems: 'flex-end'
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
  height: '80vw',
  backgroundColor: '#000',
  width: '10%',
  padding: '10vw 0vw 10vw 0vw',
  alignSelf: 'text-start',
}

export default s;