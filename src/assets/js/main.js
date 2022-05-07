
	function responsivefy(svg) {
		// get container + svg aspect ratio
		var container = d3.select(svg.node().parentNode),
			width = parseInt(svg.style("width")),
			height = parseInt(svg.style("height")),
			aspect = width / height;
	
		// add viewBox and preserveAspectRatio properties,
		// and call resize so that svg resizes on inital page load
		svg.attr("viewBox", "0 0 " + width + " " + height)
			.attr("perserveAspectRatio", "xMinYMid")
			.call(resize);
	
		// to register multiple listeners for same event type, 
		// you need to add namespace, i.e., 'click.foo'
		// necessary if you call invoke this function for multiple svgs
		// api docs: https://github.com/mbostock/d3/wiki/Selections#on
		d3.select(window).on("resize." + container.attr("id"), resize);
	
		// get width of container and resize svg to fit it
		function resize() {
			var targetWidth = parseInt(container.style("width"));
			svg.attr("width", targetWidth);
			svg.attr("height", Math.round(targetWidth / aspect));
		}
	}

function myfunc(div,value){
	var width = 350 
		height = 150;
	
	// append the svg object to the body of the page
	var svg = d3.select(div)
	  .append("svg")
		.attr("width", width)
		.attr("height", height)
		.call(responsivefy)
	  .append("g")
	  .attr("transform",
          "translate(" + 50 + "," + 1+ ")");;
//Read the data
	d3.csv('./data/counts_summary.csv', function(data) {
		console.log(data)
		var filter_data = data.filter(function(d) { 
			if( d["type"] == value){ 
				return d;
			} 
		})

	  // Add X axis
	  var x = d3.scaleLinear()
		.domain([0, 20])
		.range([ 0, width ]);
	 
	
	  // Add a scale for bubble size
	  var z = d3.scaleLinear()
		.domain([0, 300])
		.range([10, 40]);


	  // Add dots
	  var circles = svg.append('g')
					.selectAll("dot")
					.data(filter_data)
					.enter()
					.append("circle")
					.attr('class', 'count_bubble')
		 			.attr("cx", function (d) { return x(d.day); } )
		 			.attr("cy", 50)
		  			.attr("r", function (d) { return z(d.amount); } )
		  			.style("fill", "#69b3a2")
		  			.style("opacity", "0.7");

	 // append text if needed
	//   var text_amount = svg.append("g")
	// 					.selectAll("dot")
	// 					.data(filter_data)
	// 					.enter()
	// 					.append("text")
	// 					.attr("dx", function (d) { return x(d.day); } )
	// 	 				.attr("dy", 50)
	// 					.text(function(d){return d.amount})
	
	})
}

window.myfunc("#bubble-veg",'veg')
