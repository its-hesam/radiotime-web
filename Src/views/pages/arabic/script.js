function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
class CardProfile extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      index: 0,
      currentTime: '',
      musicList: [
        { 
         name: 'Radio Rotana', 
         author: 'Radio Station',
         img: 'data:image/jpeg;base64,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', 
         audio: 'http://curiosity.shoutca.st:6035/;', 
         duration: '🔴Live' 
        },
      {
         name: 'Radio Arabic Mix', 
         author: 'Radio Station', 
         img: 'data:image/jpeg;base64,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', 
         audio: ' http://s2.voscast.com:11376/;', 
         duration: '🔴Live' 
         },
      { 
        name: 'Radio Delux', 
        author: 'Radio Station', 
        img: 'data:image/jpeg;base64,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', 
        audio: 'http://stream.laut.fm/balkan-orient-deluxe', 
        duration: '🔴Live' 
      },
        
        ],
      pause: false });_defineProperty(this, "changeCurrentTime",

    e => {
      const duration = this.playerRef.duration;

      const playheadWidth = this.timelineRef.offsetWidth;
      const offsetWidht = this.timelineRef.offsetLeft;
      const userClickWidht = e.clientX - offsetWidht;

      const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

      this.playheadRef.style.width = userClickWidhtInPercent + "%";
      this.playerRef.currentTime = duration * userClickWidhtInPercent / 100;
    });_defineProperty(this, "hoverTimeLine",

    e => {
      const duration = this.playerRef.duration;

      const playheadWidth = this.timelineRef.offsetWidth;

      const offsetWidht = this.timelineRef.offsetLeft;
      const userClickWidht = e.clientX - offsetWidht;
      const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

      if (userClickWidhtInPercent <= 100) {
        this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
      }

      const time = duration * userClickWidhtInPercent / 100;

      if (time >= 0 && time <= duration) {
        this.hoverPlayheadRef.dataset.content = this.formatTime(time);
      }
    });_defineProperty(this, "resetTimeLine",

    () => {
      this.hoverPlayheadRef.style.width = 0;
    });_defineProperty(this, "timeUpdate",

    () => {
      const duration = this.playerRef.duration;
      const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
      const playPercent = 100 * (this.playerRef.currentTime / duration);
      this.playheadRef.style.width = playPercent + "%";
      const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));
      this.setState({
        currentTime });

    });_defineProperty(this, "formatTime",

    currentTime => {
      const minutes = Math.floor(currentTime / 60);
      let seconds = Math.floor(currentTime % 60);

      seconds = seconds >= 10 ? seconds : "0" + seconds % 60;

      const formatTime = minutes + ":" + seconds;

      return formatTime;
    });_defineProperty(this, "updatePlayer",

    () => {
      const { musicList, index } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      this.playerRef.load();
    });_defineProperty(this, "nextSong",

    () => {
      const { musicList, index, pause } = this.state;

      this.setState({
        index: (index + 1) % musicList.length });

      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });_defineProperty(this, "prevSong",

    () => {
      const { musicList, index, pause } = this.state;

      this.setState({
        index: (index + musicList.length - 1) % musicList.length });

      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });_defineProperty(this, "playOrPause",


    () => {
      const { musicList, index, pause } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      if (!this.state.pause) {
        this.playerRef.play();
      } else {
        this.playerRef.pause();
      }
      this.setState({
        pause: !pause });

    });_defineProperty(this, "clickAudio",

    key => {
      const { pause } = this.state;

      this.setState({
        index: key });


      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });}componentDidMount() {this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);this.playerRef.addEventListener("ended", this.nextSong, false);this.timelineRef.addEventListener("click", this.changeCurrentTime, false);this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);}componentWillUnmount() {this.playerRef.removeEventListener("timeupdate", this.timeUpdate);this.playerRef.removeEventListener("ended", this.nextSong);this.timelineRef.removeEventListener("click", this.changeCurrentTime);this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);}


  render() {
    const { musicList, index, currentTime, pause } = this.state;
    const currentSong = musicList[index];
    return /*#__PURE__*/(
      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("div", { className: "current-song" }, /*#__PURE__*/
      React.createElement("audio", { ref: ref => this.playerRef = ref }, /*#__PURE__*/
      React.createElement("source", { src: currentSong.audio, type: "audio/ogg" }), "Your browser does not support the audio element."), /*#__PURE__*/


      React.createElement("div", { className: "img-wrap" }, /*#__PURE__*/
      React.createElement("img", { src: currentSong.img })), /*#__PURE__*/

      React.createElement("span", { className: "song-name" }, currentSong.name), /*#__PURE__*/
      React.createElement("span", { className: "song-autor" }, currentSong.author), /*#__PURE__*/

      React.createElement("div", { className: "time" }, /*#__PURE__*/
      React.createElement("div", { className: "current-time" }, currentTime), /*#__PURE__*/
      React.createElement("div", { className: "end-time" }, currentSong.duration)), /*#__PURE__*/


      React.createElement("div", { ref: ref => this.timelineRef = ref, id: "timeline" }, /*#__PURE__*/
      React.createElement("div", { ref: ref => this.playheadRef = ref, id: "playhead" }), /*#__PURE__*/
      React.createElement("div", { ref: ref => this.hoverPlayheadRef = ref, class: "hover-playhead", "data-content": "0:00" })), /*#__PURE__*/


      React.createElement("div", { className: "controls" }, /*#__PURE__*/
      React.createElement("button", { onClick: this.prevSong, className: "prev prev-next current-btn" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-backward" })), /*#__PURE__*/

      React.createElement("button", { onClick: this.playOrPause, className: "play current-btn" },

      !pause ? /*#__PURE__*/React.createElement("i", { className: "fas fa-play" }) : /*#__PURE__*/
      React.createElement("i", { class: "fas fa-pause" })), /*#__PURE__*/


      React.createElement("button", { onClick: this.nextSong, className: "next prev-next current-btn" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-forward" })))), /*#__PURE__*/



      React.createElement("div", { className: "play-list" },
      musicList.map((music, key = 0) => /*#__PURE__*/
      React.createElement("div", { key: key,
        onClick: () => this.clickAudio(key),
        className: "track " + (
        index === key && !pause ? 'current-audio' : '') + (
        index === key && pause ? 'play-now' : '') }, /*#__PURE__*/

      React.createElement("img", { className: "track-img", src: music.img }), /*#__PURE__*/
      React.createElement("div", { className: "track-discr" }, /*#__PURE__*/
      React.createElement("span", { className: "track-name" }, music.name), /*#__PURE__*/
      React.createElement("span", { className: "track-author" }, music.author)), /*#__PURE__*/

      React.createElement("span", { className: "track-duration" },
      index === key ?
      currentTime :
      music.duration))))));







  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(CardProfile, null),
document.getElementById('root'));