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
                    verticalAlign: 'bottom'
                }
            },

            colorAxis: {
                tickPixelInterval: 100
            },

            exporting: {

                buttons: {
                    contextButton: {
                        enabled: true,
                        menuItems: [{
                                text: 'Descargar PNG',
                                onclick() { this.exportChart({ type: 'image/png' }); }
                            },
                            {
                                text: 'Descargar JPEG',
                                onclick() { this.exportChart({ type: 'image/jpeg' }); }
                            },
                            {
                                text: 'Descargar PDF',
                                onclick() { this.exportChart({ type: 'application/pdf' }); }
                            }
                        ]
                    }
                },
            },

            series: [{
                data: chartData,
                keys: ['objectid', 'value'],
                joinBy: 'objectid',
                name: 'Ecuador',
                states: {
                    hover: {
                        color: '#a4edba'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.properties.name}'
                }
            }]
        })
    })

})