import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video; //{video}
  // const onVideoSelect = props.onVideoSelect; //{onVideoSelect}
  const thumbnail = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={thumbnail} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.channelTitle}</div>
          {video.snippet.description}
        </div>
      </div>

    </li>
  );
};

export default VideoListItem;