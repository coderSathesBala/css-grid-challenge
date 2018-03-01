$(document).ready(function() {
  $(".realColumns").on("click", function() {
    $("#all").css({
      "display" : "grid",
      "grid-template-columns" : "repeat(" + this.id.length + ", 1fr)"
      })
  })
})

$(document).ready(function() {
  $(".realRows").on("click", function() {
    $("#all").css({
      "display" : "grid",
      "grid-auto-rows" : this.id.length*25
      })
  })
})
