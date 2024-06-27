import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header>
      <h1 className='header'>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  );
};
Header.defaultProps = {
  title: 'Task Tracker',
};

Header.prototypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };
export default Header;
