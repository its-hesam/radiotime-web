function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
class CardProfile extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      index: 1,
      currentTime: '',
      musicList: [
      {
         name: 'Radio Javan', 
         author: 'Radio Station', 
         img: 'data:image/jpeg;base64,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', 
         audio: 'https://rj1.rjstream.com/', 
         duration: '🔴Live' 
         },
      { 
        name: 'Radio Persian', 
        author: 'Radio Station', 
        img: 'data:image/png;base64,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', 
        audio: 'https://stream.zeno.fm/ysxbhuyqpd0uv', 
        duration: '🔴Live' 
      },
      { 
        name: 'Radio Persian Dance', 
        author: 'Radio Station', 
        img: 'https://i.postimg.cc/nrXfTVZD/dance.png',
         audio: 'https://stream.zeno.fm/gnb91pb6af9uv',
         duration: '🔴Live' 
         },
         { 
          name: 'Radio RapFars', 
          author: 'Radio Station', 
          img: 'data:image/png;base64,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', 
          audio: 'https://stream.zeno.fm/8uqe0mfqzhhvv', 
          duration: '🔴Live' 
        },
        { 
          name: 'Radio Romaan', 
          author: 'Radio Station', 
          img: 'data:image/jpeg;base64,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', 
          audio: 'https://stream.zeno.fm/yqdk4q7zetzuv', 
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