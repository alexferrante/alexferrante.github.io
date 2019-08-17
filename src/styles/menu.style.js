import style from './style';

const s = Object.create(style);

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
};

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
};

s.toggler = {
  content: '',
  position: 'absolute',
  top: '',
  left: '',
  cursor: 'pointer',
  zIndex: '9'
}

export default s;