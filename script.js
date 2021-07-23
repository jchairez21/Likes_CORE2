console.log("page loading...");

// var likes = [9, 12, 9];
// var spans = [
//   document.querySelector(".span1"),
//   document.querySelector(".span2"),
//   document.querySelector(".span3"),
// ];

// function like(id) {
//   likes[id]++;
//   spans[id].innerHTML = likes[id] + "like(s)";
// }

var likes = [9, 12, 9];
var spans = [
  document.querySelector(".span1"),
  document.querySelector(".span2"),
  document.querySelector(".span3"),
];

function like(id) {
  likes[id]++;
  spans[id].innerHTML = likes[id] + "like(s)";
}
