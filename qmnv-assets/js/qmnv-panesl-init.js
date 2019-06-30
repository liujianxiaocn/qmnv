if( $('#pie_chart_1').length > 0 ){
    $('#pie_chart_1').easyPieChart({
        barColor : '#88c241',
        lineWidth: 3,
        animate: 1000,
        size:	50,
        lineCap: 'square',
        scaleColor: '#f5f5f6',
        trackColor: '#f5f5f6',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
}
if( $('#pie_chart_2').length > 0 ){
    $('#pie_chart_2').easyPieChart({
        barColor : '#88c241',
        lineWidth: 3,
        animate: 1000,
        size:	50,
        lineCap: 'square',
        scaleColor: '#f5f5f6',
        trackColor: '#f5f5f6',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
}

$('.toggle1').toggles({
	drag: true, // allow dragging the toggle between positions
	click: true, // allow clicking on the toggle
	text: {
	on: '', // text for the ON position
	off: '' // and off
	},
	on: true, // is the toggle ON on init
	animate: 250, // animation time (ms)
	easing: 'swing', // animation transition easing function
	checkbox: null, // the checkbox to toggle (for use in forms)
	clicker: null, // element that can be clicked on to toggle. removes binding from the toggle itself (use nesting)
	
	type: 'compact' // if this is set to 'select' then the select style toggle will be used
});
