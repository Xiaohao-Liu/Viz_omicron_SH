
  $(document).ready(function () {
    $('select').niceSelect();
  });

  let testWindow = document.querySelector('.test-window');
  let resultDiv = document.querySelector('.result');
  let select_native = document.querySelector('#native');
  let select_type = document.querySelector('#type');
  let select_status = document.querySelector('#status');

  let result_veg = document.querySelector('#veg');
  let result_protein = document.querySelector('#protein');
  let result_carbon = document.querySelector('#carbon');
  let result_fruit = document.querySelector('#fruit');
  

function test() {
    let native = select_native.value;
    let type = select_type.value;
    let status = select_status.value;

	if (native === '0' || type === '0' || status === '0') {
		return;
    }

	let filteredData = output.find(item => item['native'] === native && item['type'] === type && item['status'] === status) || {};
    
	result_veg.innerHTML = filteredData['veg_max'];
  console.log(filteredData['veg_max'])
	result_protein.innerHTML = filteredData['protein_max'];
	result_fruit.innerHTML = filteredData['fruit_max'];
	result_carbon.innerHTML = filteredData['carbon_max'];
  

  d3.csv('./data/counts_summary.csv', function(data) {
		console.log(data)
		var filter_data = data.filter(function(d) { 
			if((d['type'] == 'veg' && d['day'] == filteredData['veg_max'])||(d['type'] == 'fruit' && d['day'] == filteredData['fruit_max']))
        { 
				return d;
			}
    })

    d3.selectAll(".count_bubble").style("opacity", .5)
      // expect the one that is hovered
    d3.selectAll("."+filter_data).style("opacity", 1)

	})

}