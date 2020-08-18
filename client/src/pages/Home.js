import React from 'react';
// new -- import the apollo hooks
import { useQuery } from '@apollo/react-hooks';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';
import FriendList from '../components/FriendList';

// add JSON web token (JWT)
import Auth from '../utils/auth';
// import queries
import { QUERY_THOUGHTS, QUERY_ME_BASIC} from '../utils/queries';

// placeholders - imported APIs
  // import SearchMovies from './SearchMovies';
  // import searchFood from './searchFood';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || []; 
  const loggedIn = Auth.loggedIn();

  return (
    <main>
          
    <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
      <h2>Search for a Movie</h2>
      {/* <SearchMovies movies={movies} title="Search here:" /> */}
      {/* <SearchMovies  title="Search here:" /> */}
    </div>

    <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
      <h2>Search for Takeout</h2>
      {/* <searchFood foods={foods} title="Search here:" /> */}
      {/* <searchFood  title="Search here:" /> */}
   </div>

      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <ThoughtForm />
          </div>
        )}      
          <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
              {loading ? (
                <div>Loading...</div>
             ) : (
                <ThoughtList thoughts={thoughts} title="Chat here:" />
              )}
          </div>

       

              {loggedIn && userData ? (

                
                <div className="col-12 col-lg-3 mb-3">
                  <FriendList
                    username={userData.me.username}
                    friendCount={userData.me.friendCount}
                    friends={userData.me.friends}
                    />
            </div>
          ) : null}

              
    </div>
  </main>
  );
};


export default Home;
