import style from './style';

const s = Object.create(style);

s.root = {
  fontFamily: 'helvetica, sans-serif',
  fontWeight: '300',
  fontSize: '16px',
  letterSpacing: '0.025em',
  padding: '3vh 0 12vh 0',
  width: '500px',
  maxWidth: 'calc(100vw - 40px)',
  position: 'relative',
  left: '50vw',
  WebkitTransform: 'translate(-50%, 0)',
  MozTransform: 'translate(-50%, 0)',
  msTransform: 'translate(-50%, 0)',
  OTransform: 'translate(-50%, 0)',
  transform: 'translate(-50%, 0)',
  WebkitTextSizeAdjust: 'none',
  MozTextSizeAdjust: 'none',
  msTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
};

s.title = {
  fontSize: '20px',
  marginBottom: '0.5vh',
};

s.repoLink = {
  fontSize: '14px',
};

s.breadcrumbs = {
  margin: '3vh 0',
};

s.creditLine = {
  color: '#A0A0A0',
  fontSize: '14px',
  marginTop: '50px',
};

export default s;