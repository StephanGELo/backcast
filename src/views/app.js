var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // this.videos = new Videos();
    this.videos = window.exampleVideoData;
    this.render();
    var videoList = new VideoListView({collection: this.videos});
    var videoPlayer = new VideoPlayerView();
    var search = new SearchView();
    // // this.render.call(VideoListView);
    // // console.log(VideoPlayerView);
    // // console.log(this);
  },

  //pass this.videos [5] to videoList.js : VideoListEntryView.prototype.render
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
