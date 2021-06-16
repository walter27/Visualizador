async function getData() {
    const [categoriesResponse, dataResponse] = await Promise.all([
        fetch('../../../data/stacked/segunda_vuelta/instagram/categories.json'),
        fetch('../../../data/stacked/segunda_vuelta/instagram/data.json')
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
                type: 'area'
            },
            title: {
                text: 'Elecciones presidenciales 2021 (2da vuelta)'
            },
            subtitle: {
                text: 'Evolución temporal del gasto estimado por partido político en Instagram'
            },
            xAxis: {
                categories: chartCategories,
                tickmarkPlacement: 'on',
                title: {
                    text: 'Fecha'
                },
            },
            yAxis: {
                title: {
                    text: 'Gasto estimado ($)'
                }
            },
            tooltip: {
                split: true,
                pointFormat: '{series.name} Gastos estimados ${point.y}'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
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
})