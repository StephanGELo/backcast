
// Refactor 
var VideoListView = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.$('.video-list').append(this.collection.map(function(video){
      return new VideoListEntryView({model: video}).render().el;
     })
    );
  },

  renderVideo: function(video) {
    this.$('.video-list').append(
      new VideoListEntryView({
        model: video
      }).render().el
    );
  },


  template: templateURL('src/templates/videoList.html') 
 
});

//With pair partner
// var VideoListView = Backbone.View.extend({
  
//   el: '.list',

//   initialize: function() {
//     this.render();
//     // var videoListEntry = new VideoListEntryView();
//     // this.collection.on('change', function() {
//     //   console.log('hayden');
//     // });
//   },

//   render: function() {
//     this.$el.children().detach();
//     this.$el.html(this.template());
//     // var videoListEntry = new VideoListEntryView();
//     // this.$el.html(this.otherTemplate);
//     return this;
//   },
//   otherTemplate: templateURL('src/templates/videoListEntry.html'),
//   template: templateURL('src/templates/videoList.html')
//   //src/templates/videoListEntry.html

// });

