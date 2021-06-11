async function getData() {
    const dataResponse = await fetch('../data/sankey/data.json');
    const data = await dataResponse.json();
    return data;
}

getData().then(data => {

    let chartData = [];
    for (let i = 0; i < data.length; i++) {
        let entityData = [];
        entityData.push(data[i].firstProvince)
        entityData.push(data[i].secondProvince)
        entityData.push(data[i].value)
        chartData.push(entityData);
    }

    $(function() {
        $('#container').highcharts({

            title: {
                text: 'Highcharts Sankey Diagram'
            },
            accessibility: {
                point: {
                    valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
                }
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
                            },
                            {
                                text: 'Descargar CSV',
                                onclick() { this.downloadCSV(); }
                            },
                            {
                                text: 'Descargar XLSX',
                                onclick() { this.downloadXLSX(); }
                            }

                        ]
                    }
                },
                xlsx: {
                    workbook: {
                        fileProperties: {
                            Author: "grupofaro",
                            Company: "grupofaro",
                            CreatedDate: new Date(Date.now())
                        }
                    }
                }
            },
            series: [{
                keys: ['from', 'to', 'weight'],
                data: chartData,
                type: 'sankey',
                name: 'Sankey demo series'
            }]

        })
    })
})