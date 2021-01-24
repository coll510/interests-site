
var items = [
  {
    type: "text",
    title: "Guatemala",
    description: "<b>Taught English and studied Spanish.",
    position: {
      left: 175,
      top: 190
    } 
 },

  {
    type: "picture",
    path: "static/images/rio.jpg",
    caption: "Danced in Rio Carnival with 2 Samba Schools",
    position: {
      left: 282,
      top: 270
    }
  },

  {
    type: "text",
    title: "China",
    description: "<b>Taught English in China.",
    position: {
      left: 640,
      top: 175
    }
 },

 {
    type: "text",
    title: "Hackbright Academy",
    description: "Studied at an Engineering School for Women.",
    position: {
      left: 102,
      top: 140
    }

}];

var options = {
  allowHtml: true
};

$(document).ready(function() {
  $("#my-interactive-image").interactiveImage(items, options);
});