var VideoListView = Backbone.View.extend({
  
  el: '.list',

  initialize: function() {
    this.render();
    // var videoListEntry = new VideoListEntryView();
    // this.collection.on('change', function() {
    //   console.log('hayden');
    // });
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // var videoListEntry = new VideoListEntryView();
    // this.$el.html(this.otherTemplate);
    return this;
  },
  otherTemplate: templateURL('src/templates/videoListEntry.html'),
  template: templateURL('src/templates/videoList.html')
  //src/templates/videoListEntry.html

});
