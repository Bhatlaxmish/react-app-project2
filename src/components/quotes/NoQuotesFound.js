import { Link } from 'react-router-dom';

import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No Courses found!</p>
      <Link className='btn' to='/new-quote'>
        Add a Course
      </Link>
    </div>
  );
};

export default NoQuotesFound;
