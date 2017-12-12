var VideoListEntryView = Backbone.View.extend({

  el: '.video-list > div',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')
 
});
