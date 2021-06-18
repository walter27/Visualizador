async function getData() {
    const [categoriesResponse, dataResponse] = await Promise.all([
        fetch('../../../data/bar/segunda_vuelta/categories.json'),
        fetch('../../../data/bar/segunda_vuelta/data.json')
    ]);
    const categories = await categoriesResponse.json();
    const data = await dataResponse.json();
    return [categories, data];
}


getData().then(([categories, data]) => {

    let chartCategories = [];
    for (let i = 0; i < categories.length; i++) {
        chartCategories.push(categories[i].name);
    }
    $(function() {
        $('#container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Elecciones presidenciales 2021 (2da vuelta)'
            },
            subtitle: {
                text: 'Porcentaje del gasto estimado en Twitter e Instagram en relación al limite offical del gasto electoral por partido político'
            },
            xAxis: {
                categories: chartCategories
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Límite del gasto electoral (%)'
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y} %'
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
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
            series: data
        })
    })
}).catch(error => {
    console.log(error);
});