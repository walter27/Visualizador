async function getData() {
    const [categoriesResponse, dataResponse] = await Promise.all([
        fetch('../../../data/barchart/segunda_vuelta/tiwtter/categories.json'),
        fetch('../../../data/barchart/segunda_vuelta/tiwtter/data.json')
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
                type: 'bar',
                style: {
                    fontFamily: 'century gothic'
                }
            },
            title: {
                text: 'Elecciones presidenciales 2021 (2da vuelta)',
                style: {
                    fontWeight: 'bold'
                }
            },
            subtitle: {
                text: 'Gasto electoral estimado po organización política en Twitter',
                style: {
                    fontWeight: 'bold'
                }
            },
            xAxis: {
                categories: chartCategories,
                title: {
                    text: 'Partido político',
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
            yAxis: {
                min: 0,
                title: {
                    text: 'Gasto estimado ($)',
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function() {
                    return '<b>' + this.point.category + '</b> <br><b>' +
                        this.point.series.name + ' ' + new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0
                        }).format(this.point.y) + '</b>';
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
                name: '',
                colorByPoint: true,
                data: data
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        xAxis: {
                            labels: {
                                enabled: false
                            }
                        },
                        title: {
                            text: null
                        }
                    }
                }]
            }
        })
    })
}).catch(error => {
    console.log(error);
});