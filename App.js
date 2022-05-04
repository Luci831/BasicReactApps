import { CourseDetails } from './Components/CourseDetails';
import { BlogDetails } from './Components/BlogDetails';
import { BookDetails } from './Components/BookDetails';

function App() {
  return (
     
          <div>
              <div>
                  <div className="st2">
                      <h1>Book Details</h1>
                  <BookDetails />
                  
              </div>
              <hr />
              <div className="s2">
                  <h1>BlogDetails</h1>
                  <BlogDetails />
              </div>
              <hr />
              <div className="s2">
                  <h1>CourseDetails</h1>
                  <CourseDetails />
              </div>
              <hr />
          </div>
          </div>
  );
}

export default App;
