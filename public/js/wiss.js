
$(document).ready(function(){
    $(".emad").each(function() {
	$(this).text($(this).attr("data-s3"));
    });
    $(".emad").click(function(){
        var emad = $(this).attr("data-s1");
        emad += $(this).attr("data-s2");
        emad += $(this).attr("data-s4");
        emad += $(this).attr("data-s5");
        emad += $(this).attr("data-s6");
	emad = emad.replace("ZZ%%ZZ", "@");
	window.location.href="mailto:" + emad;
    });
}); 

$(document).ready(function(){
// http://blog.thomsonreuters.com/index.php/mobile-patent-suits-graphic-of-the-day/


// Use elliptical arc path segments to doubly-encode directionality.
var  tick = function() {
  path.attr("d", linkArc);
  circle.attr("transform", transform);
  text.attr("transform", transform);
}

var  linkArc = function(d) {
  var dx = d.target.x - d.source.x,
      dy = d.target.y - d.source.y,
      dr = Math.sqrt(dx * dx + dy * dy);
  return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
}

var transform = function(d) {
  return "translate(" + d.x + "," + d.y + ")";
}

var links = [
  {source: "A", target: "B", type: "l1"},
  {source: "B", target: "C", type: "l1"},
  {source: "C", target: "D", type: "l1"},
  {source: "D", target: "E", type: "l1"},
  {source: "E", target: "A", type: "l1"},
  {source: "F", target: "A", type: "l2"},
  {source: "G", target: "F", type: "l2"},
  {source: "H", target: "G", type: "l2"},
  {source: "I", target: "H", type: "l2"},
  {source: "H", target: "D", type: "l2"},
  
];

var nodes = {};

// Compute the distinct nodes from the links.
links.forEach(function(link) {
  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
});

var width = 560,
    height = 130;

var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(60)
    .charge(-300)
    .on("tick", tick)
    .start();

var svg = d3.select("#svgTarget").append("svg")
    .attr("width", width)
    .attr("height", height);

// Per-type markers, as they don't inherit styles.
svg.append("defs").selectAll("marker")
    .data(["l1", "l2"])
  .enter().append("marker")
    .attr("id", function(d) { return d; })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
  .append("path")
    .attr("d", "M0,-5L10,0L0,5");

var path = svg.append("g").selectAll("path")
    .data(force.links())
  .enter().append("path")
    .attr("class", function(d) { return "link " + d.type; })
    .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

var circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
  .enter().append("circle")
    .attr("r", 6)
    .call(force.drag);

var text = svg.append("g").selectAll("text")
    .data(force.nodes())
  .enter().append("text")
    .attr("x", 8)
    .attr("y", ".31em")
    .text(function(d) { return d.name; });

});
