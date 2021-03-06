async function getData() {
    const [categoriesResponse, dataResponse] = await Promise.all([
        fetch('../../../data/bar/primera_vuelta/categories.json'),
        fetch('../../../data/bar/primera_vuelta/data.json')
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
                type: 'column',
                style: {
                    fontFamily: 'century gothic'
                }
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Elecciones presidenciales 2021 (1era vuelta)',
                style: {
                    fontWeight: 'bold'
                }
            },
            subtitle: {
                text: 'Porcentaje del gasto estimado en Twitter e Instagram en relación al limite oficial del gasto electoral por partido político',
                style: {
                    fontWeight: 'bold'
                }
            },
            xAxis: {
                categories: chartCategories,
                labels: {
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Límite del gasto electoral (%)',
                    style: {
                        fontWeight: 'bold'
                    }
                },
                labels: {
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 80,
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
            series: data,
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            enabled: false
                        },
                        title: {
                            text: null
                        },
                        xAxis: {
                            labels: {
                                enabled: false
                            }
                        },
                    }
                }]
            }
        })
    })
}).catch(error => {
    console.log(error);
});