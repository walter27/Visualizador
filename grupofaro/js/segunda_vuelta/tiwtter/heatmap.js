async function getData() {
    const [categoriesResponse, dataResponse] = await Promise.all([
        fetch('../../../data/heatmap/segunda_vuelta/twitter/categories.json'),
        fetch('../../../data/heatmap/segunda_vuelta/twitter/data.json')
    ]);
    const categories = await categoriesResponse.json();
    const data = await dataResponse.json();
    return [categories, data];
}

function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

getData().then(([categories, data]) => {

    $(function() {
        $('#container').highcharts({
            chart: {
                type: 'heatmap',
                margin: [100, 100, 100, 100],
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
                text: 'Calendario semanal del número estimado de post pautados de todos los partidos políticos en Twitter',
                style: {
                    fontWeight: 'bold'
                }
            },

            xAxis: {
                categories: categories[0].x_categories,
                title: {
                    text: 'Fecha',
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
                categories: categories[1].y_categories,
                title: {
                    text: 'Día de la semana',
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

            accessibility: {
                point: {
                    descriptionFormatter: function(point) {
                        var ix = point.index + 1,
                            xName = getPointCategoryName(point, 'x'),
                            yName = getPointCategoryName(point, 'y'),
                            val = point.value;
                        return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
                    }
                }
            },

            colorAxis: {
                min: 0,
                minColor: "#ffeda0",
                maxColor: "#bd0026",
            },

            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 80,
                symbolHeight: 300
            },

            tooltip: {
                formatter: function() {
                    return '<b>' + getPointCategoryName(this.point, 'x') + '</b> <br><b>' +
                        this.point.value + '</b> posts el <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
                }
            },

            series: [{
                name: 'Posts semanales en twitter, segunda vuelta"',
                borderWidth: 1,
                data: data[0].data,
                dataLabels: {
                    enabled: true,
                    color: '#000000'
                }
            }],
            exporting: {
                chartOptions: {
                    legend: {
                        align: 'right',
                        layout: 'vertical',
                        marginTop: 10,
                        verticalAlign: 'top',
                        y: 80,
                        symbolHeight: 200
                    }
                },
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
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        yAxis: {
                            labels: {
                                formatter: function() {
                                    return this.value.charAt(0);
                                }
                            }
                        },
                        title: {
                            text: null
                        },
                        legend: {
                            y: 82,
                            symbolHeight: 300
                        },
                    }
                }]
            }
        })
    })
}).catch(error => {
    console.log(error);
});