async function getData() {
    const [provincesResponse, dataResponse] = await Promise.all([
        fetch('../data/map/provincias.json'),
        fetch('../data/map/data.json')
    ]);
    const provincias = await provincesResponse.json();
    const data = await dataResponse.json();
    return [provincias, data];
}

getData().then(([provincias, data]) => {

    let chartData = [];
    for (let i = 0; i < data.length; i++) {
        let entityData = [];
        entityData.push(data[i].id)
        entityData.push(data[i].value)
        chartData.push(entityData);
    }
    $(function() {
        $('#container').highcharts('Map', {
            chart: {
                map: provincias
            },

            title: {
                text: 'Ecuador'
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'top'
                }
            },

            colorAxis: {
                tickPixelInterval: 50
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                headerFormat: '<span style="font-size:10px">Data</span><br/>',
                pointFormat: `<span style="color:{point.color}">●</span> {point.properties.dpa_despro}: <b>{point.value}</b><br/>`,

            },
            series: [{
                data: chartData,
                keys: ['objectid', 'value'],
                joinBy: 'objectid',
                name: 'Data',
                states: {
                    hover: {
                        color: '#a4edba'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.properties.dpa_despro}'
                }
            }]
        })
    })

})