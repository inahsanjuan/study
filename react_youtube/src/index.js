import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from '../components/search_bar';
import VideoList from '../components/video_list';
import VideoDetails from '../components/video_details';

const API_KEY = 'AIzaSyACPl9Y4NZ7kfQOf3TQxZtsGdLzOMI9eUA';

// Create a new component
// functional
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// class-based component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("taylor swift");
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos, //{ videos: videos }
        selectedVideo: videos[0]
      }); 
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500)

    return (
      <div className="container main">
        <div className="row">
          <div className="col-md-8">
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetails video={this.state.selectedVideo} />
          </div>

          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          />
        </div>
      </div>
    );
  }
}

// Put this generated HTML to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
