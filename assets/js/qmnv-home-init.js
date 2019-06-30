$("#sparkline8").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
    type: 'line',
    width: '255',
    height: '60',
    lineColor: '#00c292',
    fillColor: 'rgba(0, 194, 146, 0.2)',
    maxSpotColor: '#00c292',
    highlightLineColor: 'rgba(0, 0, 0, 0.2)',
    highlightSpotColor: '#00c292'
});

//蜘蛛图
var ctx6 = document.getElementById("chart6").getContext("2d");
var data6 = {
    labels: ["文化", "执行力", "团队", "战略", "人才", "领导力", "创新"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(19,218,254,0.8)",
            strokeColor: "rgba(19,218,254,1)",
            pointColor: "rgba(19,218,254,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(19,218,254,1)",
            data: [65, 30, 90, 45, 56, 20, 40]
        }
    ]
};

var myRadarChart = new Chart(ctx6).Radar(data6, {
    scaleShowLine : true,
    angleShowLineOut : true,
    scaleShowLabels : false,
    scaleBeginAtZero : true,
    angleLineColor : "rgba(0,0,0,.1)",
    angleLineWidth : 1,
    pointLabelFontFamily : "'Arial'",
    pointLabelFontStyle : "normal",
    pointLabelFontSize : 10,
    pointLabelFontColor : "#666",
    pointDot : true,
    pointDotRadius : 3,
    tooltipCornerRadius: 1,
    pointDotStrokeWidth : 1,
    pointHitDetectionRadius : 20,
    datasetStroke : true,
    datasetStrokeWidth : 1,
    datasetFill : true,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
    responsive: true,
    options: {
        scale: {
            gridLines:{
                color:"#fff"
            }
        }
    }
});