$(document).ready(function() {
  $(".realColumns").on("click", function() {
    $("#all").css({
      "grid-template-columns" : "repeat(" + this.id.length + ", 1fr)"
      })
  })
})

$(document).ready(function() {
  $(".realRows").on("click", function() {
    $("#all").css({
      "grid-auto-rows" : this.id.length*100
      })
  })
})

$(document).ready(function() {
  $(".rowz").on("click", function() {
    $("#all").css({
      "grid-row-gap" : "20px"
      })
  })
})

$(document).ready(function() {
  $(".columnz").on("click", function() {
    $("#all").css({
      "grid-column-gap" : "20px"
      })
  })
})

$(document).ready(function() {
  $(".reset").on("click", function() {
    $("#all").css({
      "grid-template-columns" : "repeat(3, 1fr)",
      "grid-auto-rows" : "100px",
      "grid-row-gap" : "0px",
      "grid-column-gap" : "0px"
      })
  })
})
