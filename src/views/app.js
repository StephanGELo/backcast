
//Refactor
var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();

    //this.listenTo(this.videos, 'sync', this.selectFirst);
    //this.videos.search('javascript tutorial');
    this.render();
      },


  // selectFirst: function() {
  //   if (this.videos.length > 0) {
  //     this.videos.at(0).select();
  //   }
  // },
  
  render: function() {
    this.$el.html(this.template());

    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    new VideoListView({
      
      collection: this.videos,
      el: this.$('.list')
    }).render();

    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();
        return this;
  },

  template: templateURL('src/templates/app.html')

});





//With pair partner
// var AppView = Backbone.View.extend({

//   el: '#app',

//   initialize: function() {
//     // this.videos = new Videos();
//     this.videos = window.exampleVideoData;
//     this.render();
//     var videoList = new VideoListView({collection: this.videos});
//     var videoPlayer = new VideoPlayerView();
//     var search = new SearchView();
//     // // this.render.call(VideoListView);
//     // // console.log(VideoPlayerView);
//     // // console.log(this);
//   },

//   //pass this.videos [5] to videoList.js : VideoListEntryView.prototype.render
//   render: function() {
//     this.$el.html(this.template());
//     return this;
//   },

//   template: templateURL('src/templates/app.html')

// });
