// (function ($) {
//   var updatingChart = $(".updating-chart").peity("line");

//   setInterval(function () {
//     var random = Math.round(Math.random() * 10);
//     var values = updatingChart.text().split(",");
//     values.shift();
//     values.push(random);

//     updatingChart.text(values.join(",")).change();
//   }, 1000);

//   $(".line").peity("line");

//   $(".bar").peity("bar");

//   $(".donut").peity("donut");

//   $(".data-attributes span").peity("donut");

//   $("span.pie").peity("pie");

//   $(".bar-colours-1").peity("bar", {
//     fill: [CubaAdminConfig.primary, CubaAdminConfig.secondary, "#65c15c"],
//     width: "100",
//     height: "82",
//   });

//   $(".bar-colours-2").peity("bar", {
//     fill: function (value) {
//       return value > 0 ? CubaAdminConfig.primary : CubaAdminConfig.secondary;
//     },
//     width: "100",
//     height: "82",
//   });

//   $(".bar-colours-3").peity("bar", {
//     fill: function (_, i, all) {
//       var g = parseInt((i / all.length) * 145);
//       return "rgb(145, " + g + ", 252)";
//     },
//     width: "100",
//     height: "82",
//   });

//   $(".pie-colours-1").peity("pie", {
//     fill: [
//       CubaAdminConfig.primary,
//       CubaAdminConfig.secondary,
//       "#65c15c",
//       "#ffb829",
//     ],
//     width: "100",
//     height: "82",
//   });
// })(jQuery);

(function ($) {
  $(document).ready(function () {
    var updatingChart = $(".updating-chart").peity("line");

    setInterval(function () {
      var random = Math.round(Math.random() * 10);
      var values = updatingChart.text().split(",");
      values.shift();
      values.push(random);

      updatingChart.text(values.join(",")).change();
    }, 1000);

    // Standard Peity charts
    $(".line").peity("line");
    $(".bar").peity("bar");
    $(".donut").peity("donut");
    $(".data-attributes span").peity("donut");
    $("span.pie").peity("pie");

    // Bar charts with colors (Replace CubaAdminConfig if not using Cuba Admin)
    $(".bar-colours-1").peity("bar", {
      fill: ["#4d89f9", "#f39c12", "#65c15c"], // Example colors
      width: "100",
      height: "82",
    });

    $(".bar-colours-2").peity("bar", {
      fill: function (value) {
        return value > 0 ? "#4d89f9" : "#f39c12";
      },
      width: "100",
      height: "82",
    });

    $(".bar-colours-3").peity("bar", {
      fill: function (_, i, all) {
        var g = parseInt((i / all.length) * 145);
        return "rgb(145, " + g + ", 252)";
      },
      width: "100",
      height: "82",
    });

    $(".pie-colours-1").peity("pie", {
      fill: ["#4d89f9", "#f39c12", "#65c15c", "#ffb829"],
      width: "100",
      height: "82",
    });
  });
})(jQuery);
