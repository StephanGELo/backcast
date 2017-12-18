
var Videos = Backbone.Collection.extend({
  url: 'src/data/exampleVideoData.js',
  model: Video,

  parse: function(data) {
    return window.exampleVideoData;
  }
  // exampleVideos: function(data) {
  //   var testVideo = new Videos(data);
  //   testVideo.save();
  //   this.collection.add(testVideo);
  // }
  // window.exampleVideos

});